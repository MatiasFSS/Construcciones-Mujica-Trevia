import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"


export const LandingConstrucciones = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="w-full">
          <Navbar />
        </header>
        <main className="flex-1 px-4 py-8">
          <h1>Construcciones Mujica</h1>
        </main>

        <footer><Footer/></footer>
      </div>
    </>
   
  )
}


