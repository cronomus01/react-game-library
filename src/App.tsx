import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import useToggleSidebar from "./hooks/toggle-sidebar";

function App() {
  const [{ windowSize, toggle, onToggle, setToggleClass }] = useToggleSidebar();

  return (
    <>
      <SideBar
        windowSize={windowSize}
        toggle={toggle}
        setToggleClass={setToggleClass()}
        onClick={onToggle}
      ></SideBar>
      <Navbar windowSize={windowSize} onClick={onToggle}></Navbar>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
