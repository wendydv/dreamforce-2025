import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import KeyEvents from "../components/KeyEvents/KeyEvents";
import data from "../data/data.json";

export default function Mae() {
  return (
    <>
      <Header></Header>
      <main>
        <Hero content={data.mae} />
        <KeyEvents {...data.mae.keyEvents} />
        <Footer {...data.footer}></Footer>
      </main>
    </>
  );
}
