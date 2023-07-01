import Header from "./components/Header";
import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <div className="flex">
        <Header className="w-[30%]" />
        <main className="w-[70%]">
          <div className="cm-container ml-auto">
            <Banner />
          </div>
          <Sidebar />
        </main>
      </div>
    </>
  );
};

export default App;
