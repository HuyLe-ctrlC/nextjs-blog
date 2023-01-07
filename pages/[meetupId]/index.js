import React from "react";
import MeetupDetail from "../../components/Meetup/MeetupDetail";

export default function Detail() {
  return (
    <>
      <MeetupDetail
        imgSrc="https://i.ibb.co/WvwVSkW/Ph-kh-ng-ng-i-1.jpg"
        title="Detail Meetup"
        address="Some where in the world!"
        description="Some description"
      />
    </>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log({ meetupId });
  return {
    props: {
      dataMeetUp: {
        id: meetupId,
        imgSrc: "https://i.ibb.co/WvwVSkW/Ph-kh-ng-ng-i-1.jpg",
        title: "Detail Meetup",
        address: "Some where in the world!",
        description: "Some description",
      },
    },
  };
}
