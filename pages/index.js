import Curso from '../components/Curso';
import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Entrada from '../components/Entrada';
import styles from '../styles/Blog.module.css'
import Link from 'next/link';

export default function Home({guitarras,cursos, blogs}) {

  console.log(blogs)
  return (
      <Layout title={"Inicio"}>
        <main className='contenedor'>
          <h1 className='heading'>Artículos Destacados</h1>

          <Listado guitarras={guitarras}/>

          <Link href={'/tienda'}>
            <a className="enlace">
              Ver más
            </a>
          </Link>
        </main>

        <Curso cursos={cursos}/>

        <section  className='contenedor'>
          <h2 className='heading'>Blogs Destacados</h2>
          <div className={styles.blog}>
            {blogs.map(entrada =>(
              <Entrada 
                key={entrada.id}
                entrada={entrada.attributes}
              />
            ))}
          </div>

          <Link href={'/blog'}>
              <a className='enlace'>
                Leer más
              </a>
          </Link>
        </section>
      </Layout>
  )
}


export async function getServerSideProps(){

  const urlGuitarras= `${process.env.API_URL}/guitarras?pagination[limit]=6&populate=imagen`;
  const urlCursos= `${process.env.API_URL}/curso?populate=imagen`;
  const urlBlogs= `${process.env.API_URL}/posts?pagination[limit]=3&populate=imagen`;

  const [resGuitarras, resCursos, resBlogs] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlogs)
  ]);

  const [guitarras,cursos, blogs] = await  Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlogs.json()
  ]);

  return {
    props: {
      guitarras: guitarras.data,
      cursos: cursos.data,
      blogs: blogs.data
    }
  }
}