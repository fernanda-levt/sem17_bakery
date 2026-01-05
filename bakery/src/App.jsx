import Header from "./components/Header"
import Hero from "./components/Hero"
import Story from "./components/Story"
import SubBanners from "./components/SubBanners"
import Menu from "./components/Menu"
import Delight from "./components/Delight"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Story />
      <SubBanners
        title="Always"
        subtitle="fresh"
        image="/public/images/tasteful-recipes.jpg"
      />
      <Menu />
      <SubBanners
        title="Everything"
        subtitle="tasty"
        image="/public/images/tasty.jpg"
      />
      <Delight />
      <Footer />
    </div>
  )
}

export default App
