import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import MeetupFrom from "../../components/Meetup/MeetupFrom";
import MeetUpList from "../../components/Meetup/MeetupList";
import { DUMMY_MEETUPS } from "../../utils/mockData";

export default function NewMeetUp(props) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [loadedMeetup, setLoadedMeetup] = useState(DUMMY_MEETUPS);
  function addMeetupHandler(params) {
    console.log("params Submitted", params);
    loadedMeetup.unshift(params);
    setIsUpdate(true);
  }
  useEffect(() => {
    if (isUpdate) {
      Swal.fire({
        position: "bottom-end",
        icon: "success",
        title: "Đăng ký thành công!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    setIsUpdate(false);
    console.log("loadedMeetup", loadedMeetup);
  }, [isUpdate]);
  useEffect(() => {
    setLoadedMeetup(props.meetups);
  }, []);
  return (
    <div>
      <MeetupFrom onAddMeetup={addMeetupHandler} />
      <MeetUpList meetups={loadedMeetup} />
    </div>
  );
}

// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getServerSideProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}
