import "@/styles/globals.css";
import Navbar from "./_components/Navbar";

export const metadata = {
  title: "madebypale",
  description: "This is portfolio of pale",
  keywords: "madebypale, portfolio, pale, nextjs, ahmad, rifal",
  author: "ahmad rifal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
