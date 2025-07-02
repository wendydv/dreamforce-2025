import Header from "./components/Header/Header";
import Splash from "./components/Splash/Splash";
import data from "./data/data.json";

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className="wrapper">
        <main>
          <Splash content={data.splashPage} />
        </main>
      </div>
    </>
  );
}
