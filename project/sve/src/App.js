import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/navbar";
import Aboutus from "./pages/About us";
import Categories from "./pages/categories";
import Clients from "./pages/clients";
import Contactus from "./pages/contact us";
import Services from "./pages/services";
import Home from "./pages/Home";
import Fottercomponent from "./components/Fottercomponent";



export default function App(){

  return(
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="home" element={<Home/>}/>
          <Route path="About us" element={<Aboutus/>}/>
          <Route path="categories" element={<Categories/>}/>
          <Route path="clients" element={<Clients/>}/>
          <Route path="contact us" element={<Contactus/>}/>
          <Route path="services" element={<Services/>}/>
            
         </Routes>
        </BrowserRouter>
        <Fottercomponent/>
        
    </>
  )
}
