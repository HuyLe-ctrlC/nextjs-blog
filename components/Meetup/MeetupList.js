import React from "react";
import MeetupItem from "./MeetupItem";

export default function MeetUpList(props) {
  return (
    <ul>
      {props.meetups?.reverse().map((meetup) => (
        <MeetupItem key={meetup.id} {...meetup} />
      ))}
    </ul>
  );
}
