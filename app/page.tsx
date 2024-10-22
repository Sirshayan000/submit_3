import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"


export default function HomePage(){
  return(
    <div>
      <Header/>
        <main style={{
          height: '800px',
          width: '100%',
          color: 'rgb(0,0,0)',
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '5rem'
          
          
        }}>
          <h1>HERO SECTION</h1>
          

             </main>
       <Footer/>    
      
    </div>
  )
}