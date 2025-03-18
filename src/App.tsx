import Hero from "./Hero";
import Projects from "./Projects";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Footer />
      {/* <section
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
        }}
      >
        <p>
          I've also had fun trying to write my own personal libraries and
          frameworks from time to time. A lot of these are just on a whim but
          some ideas are rather interesting.
        </p>
      </section> */}
    </>
  );
}

export default App;
