import Layout from "../components/Layout"
import Link from "next/link"
import styles from '../styles/404.module.css'
const Page404 = () => {
  return (
    <Layout title={"Error 404"}>
        <div className={styles.contenido}>
            <h1 className="heading">Página no encontrada</h1>
            <Link href="/">Volver al Inicio</Link>
        </div>
    </Layout>
  )
}

export default Page404
