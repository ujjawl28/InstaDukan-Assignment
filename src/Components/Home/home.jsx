import Navbar from '../Navbar/Navbar'
import './home.css';
import Footer from '../Footer/footer';
import Main from '../Main/main';
// import { Outlet } from 'react-router-dom';

export default function Home() {

  return (
    <div>
        <header>
        <Navbar />
        </header>
        <Main />
        <Footer />
    </div>
  )
}
