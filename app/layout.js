import "./globals.css";
import { inter } from "./lib/font";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import s from "./layout.module.css";
export const metadata = {
  title: "gli't bow",
  description: "Created by me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav></Nav>
        <div className={s.container}>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
