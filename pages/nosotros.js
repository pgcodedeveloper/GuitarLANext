import Layout from '../components/Layout'
import Image from 'next/future/image'
import styles from '../styles/Nosotros.module.css'
const Nosotros = () => {
  return (
    <Layout title={"Nosotros"}>
        <main className='contenedor'>
          <h1 className='heading'>Nosotros</h1>
          <div className={styles.contenido}>
            <Image layout='responsive' width={600} height={450} src="/img/nosotros.jpg" alt='Imagen sobre nosotros' />
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis eros magna, ac consectetur elit congue sed. Quisque sit amet lacus sed tellus condimentum tempus a eget ante. Sed scelerisque erat non mauris varius, sed tincidunt dolor rhoncus. Fusce eget nulla mi. Curabitur fringilla mattis dui at pharetra. Integer lacinia, mi vel hendrerit vulputate, velit magna ultrices neque, ut gravida ipsum felis quis tortor. Etiam eleifend sapien vitae ante pellentesque accumsan. Mauris rutrum purus felis, ut suscipit massa luctus id. Curabitur vehicula sodales diam, et pharetra lorem efficitur quis. Vestibulum mollis, massa sed venenatis vulputate, est nisi mattis nulla, semper euismod arcu lacus et orci. Nullam eget ipsum dapibus, euismod orci in, interdum sapien. Etiam eu est eleifend, tincidunt nulla eu, lacinia massa. Sed id rhoncus mauris. Donec luctus lacinia malesuada.</p>
            </div>
          </div>
        </main>
    </Layout>
  )
}

export default Nosotros
