import GraphicDay from "./components/graphics/graphicDay/GraphicDay";
import GraphicProducts from "./components/graphics/grapichProducts/GraphicProducts";
import GraphicAchievement from "./components/graphics/graphicAchievement/GraphicAchievement";
import GraphicStores from "./components/graphics/graphicStores/GraphicStores";
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
            <GraphicProducts />
            <GraphicAchievement />
            <GraphicStores />
          </section>
        </main>
      </div>
    </>
  );
};

export default App;
