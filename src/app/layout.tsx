import type {Metadata} from "next";
import "./globals.css";
import Navbar from "@/app/Navbar";
import React from "react";
import {Analytics} from "@vercel/analytics/next";

export const metadata: Metadata = {
    title: "Bruno Lemus - Software Scientist",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={'antialiased bg-amber-50 text-amber-950 flex flex-row w-screen p-0 m-0'}
        >
        <Navbar/>
        <div className={'flex flex-col'}>
            {children}
        </div>
        <Analytics/>
        </body>
        </html>
    );
}
