import Header from "@/components/Header/Header"
import Image from "next/image"
export default function HomePage(){
  return(
    <div>
      <Header/>
        <main style={{
          height: '800px',
          
        }}>
          <Image src="data:image/jpeg;base64,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" alt="puma"/>

        </main>
           
      
    </div>
  )
}