import Header from "./components/Header";
import Footer from "./components/Footer";
import PageRoutes from "./routes/PageRoutes";
import SideSocialMedia from "./components/SideSocialMedia";

const App = () => {
  return (
    <>
      <Header />
      <PageRoutes />
      <SideSocialMedia />
      <Footer />
    </>
  );
};

export default App;
