import Scrollup from "@/components/scroll/Scrollup";
import ScrollReset from "@/components/scroll/ScrollReset";
import "../public/css/styles.css";
import ClientLayout from "@/components/layout/ClientLayout";

// Metadata (JSX-compatible)
export const metadata = {
  title: "Gridzign",
  description: "Digital Agency",
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="no-touch" suppressHydrationWarning>
      <head>
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        try {
          var theme = localStorage.getItem('theme');
          if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        } catch (e) {}
      })();
    `,
  }}
/>
      </head>
      <body>
       <ScrollReset/>
       <Scrollup/>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
