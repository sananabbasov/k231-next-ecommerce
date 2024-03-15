"use client"
import Header from "./components/Header";
import { SessionProvider } from "next-auth/react";
import '@/app/globals.css'
export default function Layout({ children }) {
    return (
        <>
            <SessionProvider>
                <Header />
                <main>{children}</main>
                <h1>Footer</h1>
            </SessionProvider>
        </>
    )
}