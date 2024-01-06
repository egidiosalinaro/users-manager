import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "User Handler",
  description: "Create, modify, delete users of your app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            {children}
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
