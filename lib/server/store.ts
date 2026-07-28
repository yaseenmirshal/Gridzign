import { promises as fs } from "fs";
import path from "path";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  linkedin?: string;
  twitter?: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  seoTitle?: string;
  seoDescription?: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  summary: string;
  description: string;
  category?: string;
  image?: string;
  link?: string;
  tags?: string[];
  featured?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  icon?: string;
  featured?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  link?: string;
  featured?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface InquiryItem {
  id: string;
  name: string;
  email: string;
  company?: string;
  subject?: string;
  message: string;
  status?: string;
  createdAt: string;
  updatedAt: string;
}

export interface DashboardData {
  team: TeamMember[];
  blogs: BlogPost[];
  caseStudies: CaseStudy[];
  services: ServiceItem[];
  projects: ProjectItem[];
  inquiries: InquiryItem[];
}

const DATA_FILE = path.join(process.cwd(), "data", "dashboard-data.json");

const emptyData: DashboardData = {
  team: [],
  blogs: [],
  caseStudies: [],
  services: [],
  projects: [],
  inquiries: [],
};

async function ensureFile() {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, JSON.stringify(emptyData, null, 2));
  }
}

export async function readDashboardData(): Promise<DashboardData> {
  await ensureFile();
  const raw = await fs.readFile(DATA_FILE, "utf8");
  return JSON.parse(raw) as DashboardData;
}

export async function writeDashboardData(data: DashboardData) {
  await ensureFile();
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}

export async function getDashboardStore() {
  const data = await readDashboardData();
  return data;
}

export async function saveDashboardStore(update: (data: DashboardData) => DashboardData) {
  const current = await readDashboardData();
  const next = update(current);
  await writeDashboardData(next);
  return next;
}
