import Layout from '../components/Layout'
import Entrada from '../components/Entrada';
import styles from '../styles/Blog.module.css'

const Blog = ({entradas}) => {
  
  return (
    <Layout title={"Nuestro Blog"}>
        <main className='contenedor'>
          <h2 className='heading'>Nuestro Blog</h2>

          <div className={styles.blog}>
            {entradas.map(entrada =>(
              <Entrada 
                key={entrada.id}
                entrada={entrada.attributes}
              />
            ))}
          </div>
        </main>
    </Layout>
  )
}

export async function getServerSideProps(){

  const url= `${process.env.API_URL}/posts?populate=imagen`
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  return{
    props: {
      entradas: entradas.data
    }
  }
}

export default Blog
