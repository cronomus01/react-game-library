import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import useToggleSidebar from "./hooks/toggle-sidebar";

function App() {
  const [{ windowSize, toggle, onToggle }] = useToggleSidebar();

  return (
    <div
      className={`grid ${
        toggle ? "grid-cols-desktop" : "grid-cols-mobile"
      } h-full relative`}
    >
      <SideBar
        windowSize={windowSize}
        toggle={toggle}
        onClick={onToggle}
      ></SideBar>
      <section className="grid grid-rows-content">
        <Navbar
          windowSize={windowSize}
          onClick={onToggle}
          toggle={toggle}
        ></Navbar>
        <Main></Main>
        <Footer></Footer>
      </section>
    </div>
  );
}

export default App;
