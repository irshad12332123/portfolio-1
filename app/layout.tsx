import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "My Portfolio",
  description: "Created by Md Irshad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header /> 
        
        <main className="p-4 min-h-screen">
          {children}
        </main>

        <Footer /> 
      </body>
    </html>
  );
}
