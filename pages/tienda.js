import Listado from '../components/Listado';
import Layout from '../components/Layout'

const Tienda = ({guitarras}) => {
  return (
    <Layout title={"Tienda Virtual"}>
        <main className='contenedor'>
          <h1 className='heading'>Nuestra Colección de Guitarras</h1>
          <Listado guitarras={guitarras} />
        
        </main>
    </Layout>
  )
}

export async function getServerSideProps(){
  const urlG= `${process.env.API_URL}/guitarras?populate=imagen`;
  const respuesta = await fetch(urlG);
  const guitarras= await respuesta.json();

  return {
    props: {
      guitarras: guitarras.data
    }
  }
}
export default Tienda
