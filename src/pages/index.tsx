import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: 'site-blog',
};
export default function Home() {
  return (
    <div className="min-h-screen min-w-full bg-gray-700">
     <h2  className="text-4xl text-white">Site.Set</h2>
    </div>
  );
}
