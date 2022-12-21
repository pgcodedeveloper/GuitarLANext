import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children, title}) => {
  return (
    <>
        <Head>
            <title>GuitarLA - {title}</title>
        </Head>

        <Header />
        
        {children}

        <Footer/>
    </>
  )
}

export default Layout
