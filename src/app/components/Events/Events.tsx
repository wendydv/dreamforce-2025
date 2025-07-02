import EventCard from "../EventCard/EventCard";
import { EventCardProps as EventCardType } from "../EventCard/EventCard";
import styles from "./Events.module.scss";

interface EventsProps {
  events: EventCardType[];
}

export default function Events({ events }: EventsProps) {
  return (
    <div className={styles.events}>
      {events.map(ev => (
        <EventCard {...ev} key={ev.variant}></EventCard>
      ))}
    </div>
  );
}
