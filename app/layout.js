import "./globals.css";
import { inter } from "./lib/font";
import Nav from "./components/Nav";

export const metadata = {
  title: "gli't bow",
  description: "Created by me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
