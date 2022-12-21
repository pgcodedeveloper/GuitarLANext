import Link from 'next/link'
import Image from 'next/future/image'
import { useRouter } from 'next/router'
import styles from '../styles/Header.module.css'

const Header = () => {

  const router= useRouter();
  return (
    <header className={styles.header}>
        <div className='contenedor'>
           <div className={styles.barra}>
                <Link href="/">
                    <a>
                      <Image width={400} height={100} src="/img/logo.svg" alt='Imagen Logo'/>
                    </a>
                </Link>
                <nav className={styles.navegacion}>
                    <Link href="/">
                      <a className={router.pathname === "/" ? styles.active : ''}>
                        Inicio
                      </a>
                    </Link>
                    <Link href="/nosotros">
                      <a className={router.pathname === "/nosotros" ? styles.active : ''}>
                        Nosotros
                      </a>
                    </Link>
                    <Link href="/blog">
                      <a className={router.pathname === "/blog" ? styles.active : ''}>
                        Blog
                      </a>
                    </Link>
                    <Link href="/tienda">
                      <a className={router.pathname === "/tienda" ? styles.active : ''}>
                        Tienda
                      </a>
                    </Link>

                    <Link href="/carrito">
                      <a>
                        <Image src={"/img/carrito.png"} alt="Imagen del Carrito" width={30} height={25}/>
                      </a>
                    </Link>
                </nav>
           </div>
        </div>
    </header>
  )
}

export default Header
