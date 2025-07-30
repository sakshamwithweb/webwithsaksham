import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import { Cursor } from "@/components/Cursor";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});


export const metadata = {
  title: "Saksham | Full Stack Web Developer",
  description: "Welcome to this corner of the internet own by a full stack web developer creating innovative web experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        <Cursor/>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
