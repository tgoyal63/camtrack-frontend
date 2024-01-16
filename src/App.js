import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Features from "./components/Features.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Join from "./components/Join.jsx";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <Header />
        <About />
        <Features />
        <HowItWorks />
        <Join />
      </Main>
    </div>
  );
}

export default App;

const Main = styled.div`
  padding: 100px 0;
`;
