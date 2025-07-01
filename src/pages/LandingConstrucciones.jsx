import { AboutUs } from "../components/AboutUs"
import { Footer } from "../components/Footer"
import { Mision } from "../components/Mision"
import { Navbar } from "../components/Navbar"


export const LandingConstrucciones = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="w-full">
          <Navbar />
        </header>
        <main className="flex-1">
          <AboutUs/>
          <Mision/>
        </main>

        <footer><Footer/></footer>
      </div>
    </>
   
  )
}


