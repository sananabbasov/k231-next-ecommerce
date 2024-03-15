'use client'

import { SessionProvider } from "next-auth/react"
import Layout from "../app/layout"
import '@/app/globals.css'
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component  {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}