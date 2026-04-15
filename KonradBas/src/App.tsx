import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";

function App() {
  const lenis = useRef(null);
  useEffect(() => {
    lenis.current = new Lenis({
      duration: 0.6,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothTouch: true,
    });
    const animate = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    return () => {
      lenis.current.destroy();
    };
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="header-pillow" />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
