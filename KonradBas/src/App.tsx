import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
function App() {
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
