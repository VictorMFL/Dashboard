import GraphicDay from "./components/graphics/graphicDay/GraphicDay";
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Salesman from "./components/salesman/Salesman";
import TotalSpent from "./components/totalSpent/TotalSpent";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <NavBar />
        <main>
          <TotalSpent />
          <section>
            <GraphicDay />
            <Salesman />
          </section>
        </main>
      </div>
    </>
  );
};

export default App;
