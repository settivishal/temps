import "@/styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Time Progress 2.0",
  description: "Visualize your day, week, month, and year progress",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-800">{children}</body>
    </html>
  );
}
