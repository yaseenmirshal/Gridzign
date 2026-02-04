import "../public/css/styles.css";
import ClientLayout from "@/components/layout/ClientLayout";

// Metadata (JSX-compatible)
export const metadata = {
  title: "Gridzign",
  description: "Digital Agencygit",
};

const setColorSchemeScript = `
(function() {
  try {
    var scheme = localStorage.getItem('color-scheme') || 'light';
    document.documentElement.setAttribute('color-scheme', scheme);
  } catch(e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="no-touch" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: setColorSchemeScript }}
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
