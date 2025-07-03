
import { AboutUs } from "../components/AboutUs/AboutUs"
import { Companies } from "../components/Companies"
import { Footer } from "../components/Footer"
import { Mision } from "../components/Mision"
import { Navbar } from "../components/Navbar"
import { Presentation } from "../components/Presentation"
import { Proyects } from "../components/Proyects/Proyects"


export const LandingConstrucciones = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <header className="w-full">
          <Navbar />
        </header>
        <main className="flex-1 pt-20">
          <Presentation/>
          <AboutUs/>
          <Mision/>
          <Proyects/>
          <Companies/>
        </main>

        <footer><Footer/></footer>
      </div>
    </>
   
  )
}


