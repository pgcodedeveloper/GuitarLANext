import Link from 'next/link'
import Image from 'next/future/image';
import { formatearFecha } from '../helpers';
import styles from '../styles/Entrada.module.css'

const Entrada = ({entrada}) => {

    const { titulo, resumen, imagen, publishedAt, id, url} = entrada;
    return (
        <article className={styles.cards}>
            <Image width={400} height={300} src={imagen?.data?.attributes?.formats?.medium.url} alt={`Imagen blog ${titulo}`} />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{resumen}</p>
                <Link href={`/blog/${url}`}>
                    <a className={styles.enlace}>
                        Leer Entrada
                    </a>
                </Link>
            </div>
        </article>
    )
}

export default Entrada
