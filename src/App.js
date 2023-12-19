import "./App.css";
import Nav from "./components/Nav";
import Promo from "./components/Promo";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Button from "./components/Button";

function App() {
  const someprop = { message: "this is a props value" };

  return (
    <div>
      <Nav props={someprop} />
      <Promo />

      <Button />
      <Intro>
        <Intro1 />
        <Intro2 />
        <Intro3 />
      </Intro>
      <Footer />
    </div>
  );
}

export default App;
