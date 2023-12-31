import { Logo } from "./components/Logo";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <Logo />
        <main className="content">
          <Main />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
