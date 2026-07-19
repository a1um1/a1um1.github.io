import Navbar from "./component/navbar";
import Projects from "./component/projects";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className="intro">
          <p>
            Hi, I'm <b>Thunggoen Lakchai</b>
          </p>
          <p className="description">
            Freelance Developer
            <br />
            <br />I turn{" "}
            <span
              className="wireframe font-mono"
              style={
                {
                  fontWeight: "bold",
                  fontStyle: "italic",
                } as React.CSSProperties
              }
            >
              Design
            </span>{" "}
            into <span className="badge">Product</span>
          </p>
          <div>
            <a href="mailto:th.lakchai@gmail.com" className="button lg">
              Contact Me
            </a>
          </div>
        </section>
        <Projects />
      </main>

      <footer>
        <main>Copyright {new Date().getFullYear()} All Rights Reserved</main>
      </footer>
    </>
  );
}

export default App;
