// app/layout.tsx
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

import Script from "next/script";
import React from "react";
import {SpeedInsights} from "@vercel/speed-insights/next";
import {ResizeManager} from "@/components/ResizeManager";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    preload: false,
});

export const metadata: Metadata = {
    title: "Gabriel McWilliams Info",
    description:
        "Portfolio and demo projects showcasing full-stack AI, frontend UX, and embedded systems.",
    icons: {
        icon: [{url: "/assets/favicon.svg", type: "image/svg+xml"}],
        apple: "/assets/favicon.svg",
    },
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        // Keep your attribute; we’ll add our own classes via script
        <html lang="en" data-spotlight-armed="0" suppressHydrationWarning className="no-js">
        <head>
            {/* Preload the splash asset so it paints immediately. Replace the href if needed. */}
            <link
                rel="preload"
                href="/brand/logo_growing.svg"
                as="image"
                type="image/svg+xml"
            />
            <meta name="theme-color" content="#0b0b0c"/>
            <title>Gabriel McWilliams Info</title>
        </head>

        <body className={`${inter.variable} antialiased`}>


        {/* Your app */}
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                {children}
                <ResizeManager/> {/* your global listener remains */}
                <SpeedInsights/>
            </main>
        </div>


        </body>
        </html>
    );
}
