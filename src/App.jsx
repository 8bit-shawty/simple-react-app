import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Header/>
      <Content color="crimson" text="This is my crimson text. Cool Huh?!"/>
      <Content color="skyblue" text="How about some skyblue???"/>
      <Content color="darkSeaGreen" text="Dark Sea Green is my favorite" textDecoration="underline"/>
      <Footer/>
    </>
  )
}

export default App
