import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <Logo />
        <main className="content" />
        <Footer />
      </div>
    </>
  );
}

export default App;
