import React from 'react'
import Image from 'next/future/image';
import Link from 'next/link';
import styles from '../styles/Guitarra.module.css'
const Guitarra = ({guitarra}) => {
  const { descripcion , imagen, url, nombre, precio} = guitarra.attributes;
  return (
    <div className={styles.guitarra}>
      <Image width={600} height={300} src={imagen?.data?.attributes?.formats?.medium.url} alt={`Imagen Guitarra ${nombre}`}/>
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link href={`/guitarras/${url}`}>
          <a className={styles.enlace}>Ver Producto</a>
        </Link>
      </div>
    </div>
  )
}

export default Guitarra
