import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import MeetupFrom from "../../components/Meetup/MeetupFrom";
import MeetUpList from "../../components/Meetup/MeetupList";
import { createAction } from "../../redux/slices/userSlices";
import { DUMMY_MEETUPS } from "../../utils/mockData";

export default function NewMeetUp(props) {
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false);
  const [loadedMeetup, setLoadedMeetup] = useState(DUMMY_MEETUPS);
  async function addMeetupHandler(params) {
    console.log("params Submitted", JSON.stringify(params));
    // dispatch(createAction(params));
    // loadedMeetup.unshift(params);
    // setIsUpdate(true);
  }
  // useEffect(() => {
  //   if (isUpdate) {
  //     Swal.fire({
  //       position: "bottom-end",
  //       icon: "success",
  //       title: "Đăng ký thành công!",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //   }
  //   setIsUpdate(false);
  //   console.log("loadedMeetup", loadedMeetup);
  // }, [isUpdate]);
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
