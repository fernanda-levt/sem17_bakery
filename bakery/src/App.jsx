import Header from "./components/Header"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import Story from "./components/Story"
import SubBanners from "./components/SubBanners"

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

    </div>
  )
}

export default App
