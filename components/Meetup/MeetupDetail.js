import Image from "next/image";
import React from "react";

const MeetupDetail = (props) => {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div>
            <Image
              src={props.imgSrc}
              alt={props.title}
              width={500}
              height={500}
            />
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetupDetail;
