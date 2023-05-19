import Head from 'next/head'
import Image from 'next/image'
import Header from './header'

export default function Home() {
  return (
<div className="h-screen w-screen text-red-400 bg-blue-200 p-12">
<Head>
  <title>Home - Netflix</title>
  <link rel="icon" href="/favicon.ico"> </link>
</Head>
<Header/>
<main>
</main>
<p>Netflix clone</p>
</div>
  )
}
