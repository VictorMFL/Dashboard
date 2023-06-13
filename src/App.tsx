import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import TotalSpent from "./components/totalSpent/TotalSpent";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <NavBar />
        <main>
          <TotalSpent />
        </main>
      </div>
    </>
  );
};

export default App;
