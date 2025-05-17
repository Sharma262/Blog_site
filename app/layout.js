import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import DarkModeToggle from "@/components/DarkModeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Nitin's Bakery",
  description: "My amazing recipe app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-800 min-h-screen flex flex-col`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {/* Header */}
        <header className="bg-yellow-200 text-slate-900 py-6 shadow-sm border-b border-yellow-300">
          <div className="max-w-4xl mx-auto px-4">
            <Link href="/">
              <h1 className="text-3xl font-bold tracking-tight hover:underline">The Nitin's Bakery</h1>
            </Link>
            <DarkModeToggle />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-yellow-200 text-slate-700 py-4 mt-auto border-t border-yellow-300">
          <div className="text-center text-sm">
            Made with 💛 by Nitin
          </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
