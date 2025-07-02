import Events from "../Events/Events";
import { EventCardProps as EventCardType } from "../EventCard/EventCard";
import KeyEventsBanner from "../KeyEventsBanner/KeyEventsBanner";
import styles from "./KeyEvents.module.scss";

interface KeyEventsProps {
  title: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  events: EventCardType[];
}

export default function KeyEvents({ title, image, events }: KeyEventsProps) {
  return (
    <section id="key-events" className={styles.keyEvents}>
      <KeyEventsBanner title={title} image={image} />
      <Events events={events}></Events>
    </section>
  );
}
