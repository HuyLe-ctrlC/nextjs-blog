import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
export default function MeetupItem(props) {
  const router = useRouter();
  console.log("props1", props);
  function handleShowDetail() {
    router.push("/" + props.id);
  }
  return (
    <li className="my-5">
      <div className="card">
        <Image
          src={props.image}
          className="card-img-top"
          alt={props.title}
          width={500}
          height={500}
        />
        <div className="card-body">
          <h5 className="card-title text-primary">{props.title}</h5>
          <p className="card-text text-primary">{props.address}</p>
          <button onClick={handleShowDetail} className="btn btn-primary">
            {props.description}
          </button>
        </div>
      </div>
    </li>
  );
}
