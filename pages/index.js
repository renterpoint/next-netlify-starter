import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="RENTER POINT" />
    <h2>The Complete Guide to Car Rental in Dubai</h2>
        <p className="description">
          
        </p>
      </main>

      <Footer />
    </div>
  )
}
