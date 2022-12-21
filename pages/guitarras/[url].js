import { useState } from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Guitarra.module.css'
import Page404 from "../404";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.all';

const Producto = ({producto,agregarCarrito}) => {

    if(producto[0] == null){
        return (<Page404 />)
    }

    const [ cantidad, setCantidad ] = useState(0);
    const { descripcion , imagen, nombre, precio} = producto[0].attributes;


    const handleSubmit = e =>{
        e.preventDefault();

        if(cantidad < 1){
            Swal.fire({
                icon: 'error',
                title: 'Debe seleccionar una cantidad para continuar',
                showConfirmButton: true,
                timer: 3000
            });
            return;
        }

        const guitarraSeleccionada= {
            id: producto[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }

        Swal.fire({
            icon: 'success',
            title: 'El Producto se agrego al carrito',
            showConfirmButton: true,
            timer: 3000
        });
        agregarCarrito(guitarraSeleccionada);
        e.target.reset();
    }
    return (
        <Layout title={`${nombre}`}>
            <h1 className='heading'>Producto Seleccionado</h1>
            <div className={styles.guitarra}>
                <Image layout='responsive' width={180} height={350} src={imagen?.data?.attributes?.formats?.medium.url} alt={`Imagen Guitarra ${nombre}`}/>
                <div className={styles.contenido_text}>
                    <h2 className={styles.nombre}>{nombre}</h2>
                    <p className={styles.precio}>Precio: ${precio}</p>
                    <form onSubmit={handleSubmit} className={styles.formulario}>
                        <label htmlFor='cantidad'>Cantidad:</label>
                        <select id='cantidad' onChange={e => setCantidad(parseInt(e.target.value))}>
                            <option value="0">-- Seleccione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>

                        <input type="submit" value="Agregar"/>
                    </form>
                </div>
            </div>
            <h2 className='heading'>Descripcion</h2>
            <div className={styles.contenido_desc}>
                <p className={styles.descripcion}>{descripcion}</p>
                <Link href={`/tienda`}>
                    <a className={styles.enlace_volver}>Volver a la Tienda</a>
                </Link>
            </div>
            
        </Layout>
    )
}

export async function getServerSideProps({query: {url}}){

    const urlP= `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`;
    const respuesta = await fetch(urlP);
    const producto= await respuesta.json(); 
    return{
        props:{
            producto: producto.data
        }
    }
}
export default Producto
