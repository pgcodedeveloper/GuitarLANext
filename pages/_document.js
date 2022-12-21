
import { Html, Head, NextScript, Main } from 'next/document'

const Document = () => {
  return (
    <Html>
        <Head>
            <meta name='description' content='GuitarLA - Venta de Guitarras y blog de música'/>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"}/>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet" />
            <link rel="icon" href="/img/logo.svg" />
        </Head>

        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}

export default Document
