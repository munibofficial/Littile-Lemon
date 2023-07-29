import Main from './components/Main'
import Header from './components/Header'
import './styles/grid.css'
import Footer from './components/Footer'
function App() {

  return (

<div class="container">
    <header class="header"><Header/></header>
    <nav class="navbar"></nav>
    <main class="main">
      <Main/>
    </main>
    <footer class="footer">
      <Footer/>
    </footer>
</div>

  )
}

export default App
