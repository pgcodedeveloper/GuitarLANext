import {useEffect, useState} from 'react'
import Image from 'next/future/image'
import Layout from '../components/Layout'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.all';
import styles from '../styles/Carrito.module.css'

const Carrito = ({carrito, actualizarCantidad, eliminarProducto}) => {

    const [total, setTotal] = useState(0);

    useEffect(() =>{
        const calculoTotal= carrito.reduce( (total, producto) => total + (producto.cantidad * producto.precio), 0);
        setTotal(calculoTotal);
    },[carrito]);

    const eliminar = id =>{
        Swal.fire({
            icon: 'question',
            title: '¿Desea eliminar este producto del carrito?',
            showConfirmButton: true,
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'No',
            showCancelButton: true,
            timer: 3000
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarProducto(parseInt(id));
            }
        })
    }
    return (
        <Layout title={"Carrito de Compras"}>
            <main className='contenedor'>
                <h1 className='heading'>Carrito</h1>

                <div className={styles.contenido}>
                    <div className={styles.carrito}>
                        <h2>Artículos</h2>
                        
                        {carrito?.length === 0 ? 'Carrito Vacio' : (
                            carrito.map(producto => (
                                <div key={producto.id} className={styles.producto}>
                                    
                                    <div>
                                        <Image width={600} height={300} src={producto.imagen} alt={`Imagen del producto ${producto.nombre}`}/>
                                    </div>

                                    <div>
                                        <p className={styles.nombre}>{producto.nombre}</p>

                                        <div className={styles.cantidad}>
                                            <p>Cantidad: </p>
                                            <select value={producto.cantidad} className={styles.select}
                                                onChange={e => actualizarCantidad({
                                                    id: producto.id,
                                                    cantidad: e.target.value
                                                })}
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                            </select>
                                        </div>
                                        <p className={styles.precio}>$<span>{producto.precio}</span></p>
                                        <p className={styles.subtotal}>SubTotal: $<span>{producto.cantidad * producto.precio}</span></p>
                                    </div>

                                    <button className={styles.eliminar} type={"button"} onClick={() => eliminar(producto.id)}>X</button>
                                </div>
                            ))
                        )}
                    </div>

                    <aside className={styles.resumen}>
                        <h3>Resumen del Pedido</h3>
                        <p>Total a pagar: ${total}</p>
                    </aside>
                </div>
            </main>
        </Layout>
    )
}

export default Carrito
