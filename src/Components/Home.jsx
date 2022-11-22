import Navbar from './Components/Navbar';
import Project from './Components/Project';
import { useEffect, React } from 'react';
import Typed from "typed.js";

const Home = () => {
    const el = document.querySelector(".ixa")
    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["10ta Jannatiy sahobalar haqida muhim va qisqa malumotlar!"], // Strings to display
          // Speed settings, try diffrent values untill you get good results
          startDelay: 300,
          typeSpeed: 200,
          backSpeed: 100,
          backDelay: 100,
          cursorChar: "|"
        });
    
        // Destropying
        return () => {
          typed.destroy();
        };
      }, []);
    return ( 
        <h1 className="ixa"></h1>
    );
}
 
export default Home;