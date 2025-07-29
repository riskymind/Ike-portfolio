import Footer from "@/components/Footer";
import React from "react";
import AdminNav from "./admin-nav";

export default function AdminLayout({
    children}: Readonly<{children: React.ReactNode

    }>) {
    return (
        <>
            <AdminNav />
                <main className="min-h-screen pt-24">
                    {children}
                </main>
            <Footer />
        </>
    )
}