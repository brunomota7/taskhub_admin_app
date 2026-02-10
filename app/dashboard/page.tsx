"use client";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function DashboardPage() {
    const backgroundColor = useThemeColor({}, "background");

    return (
        <main className="w-full h-full" style={{ backgroundColor }}>
        </main>
    );
}
