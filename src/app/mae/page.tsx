import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import InsightExchange from "../components/InsightExchange/InsightExchange";
import KeyEvents from "../components/KeyEvents/KeyEvents";
import Registration from "../components/Registration/Registration";
import Swag from "../components/Swag/Swag";
import Video from "../components/Video/Video";
import data from "../data/data.json";

export default function Mae() {
  return (
    <>
      <Header></Header>
      <main>
        <Hero {...data.mae} />
        <KeyEvents {...data.mae.keyEvents} />
        <InsightExchange {...data.mae.insightExchange} />
        <Registration {...data.mae.registration} />
        <Swag {...data.mae.swag} />
        <Video />
        <Footer {...data.footer}></Footer>
      </main>
    </>
  );
}
