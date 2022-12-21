import Layout from "../../components/Layout";
import Link from 'next/link'
import Image from 'next/image';
import { formatearFecha } from '../../helpers';
import styles from '../../styles/Entrada.module.css'
import Page404 from "../404";
const EntradaBlog = ({entrada}) => {

    if(entrada[0] == null){
        return (<Page404 />)
    }

    const { titulo, contenido, imagen, publishedAt} = entrada[0].attributes;

    return (
        <Layout title={titulo}>
            <main className="contenedor">
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entrada}>
                    <Image width={800} height={600} layout='responsive' src={imagen?.data?.attributes?.formats?.medium.url} alt={`Imagen blog ${titulo}`} />
                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                        <p className={styles.texto}>{contenido}</p>
                        <Link href={`/blog`}>
                            <a className={styles.enlace}>
                                Volver
                            </a>
                        </Link>
                    </div>
                </article>
            </main>
        </Layout>
    )
}

export async function getServerSideProps({query : {url}}){

    const urlBlog= `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
    const respuesta = await fetch(urlBlog);
    const entrada = await respuesta.json();
    return{
        props: {
            entrada: entrada.data
        }
    }
}
export default EntradaBlog
