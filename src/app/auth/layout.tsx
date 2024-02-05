import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn@Home",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
