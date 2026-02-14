"use client";
import Footer from "@/components/main-footer";
import Header from "@/components/main-header";

export default function DashboardPage() {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />

      <main className="w-full p-5">
        <h2>Dashboard</h2>
      </main>

      <Footer />
    </div>
  );
}
