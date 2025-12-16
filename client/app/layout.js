import Navbar from "./components/layout/Navbar";
import "./globals.css";

export const metadata = {
  title: "Url Shortner",
  description: "Url Shortner by Shimanto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
