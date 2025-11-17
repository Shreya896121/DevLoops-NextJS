import "./globals.css";
import Header from "./components/header";
import Footer from './components/footer';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
       <Header />
      {children}  
      <Footer/>
      </body>
    </html>
  );
}
