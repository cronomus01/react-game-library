import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import useToggleSidebar from "./hooks/toggle-sidebar";

function App() {
  const [{ toggle, onToggle }] = useToggleSidebar();

  return (
    <div
      className={`grid ${
        toggle ? "grid-cols-desktop" : "grid-cols-mobile"
      } h-full relative`}
    >
      <SideBar toggle={toggle} onToggle={onToggle}></SideBar>
      <section className="grid grid-rows-content">
        <Navbar></Navbar>
        <Main></Main>
        <Footer></Footer>
      </section>
    </div>
  );
}

export default App;
