import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import Avatar from "../../components/Avatar";
import Layout from "../../components/Layout";

export default function FirstPost() {
  // useEffect(() => {
  //   setTimeout(() => {}, 3000);
  // }, []);
  const [show, setShow] = useState(false);
  const handleAvatar = () => {
    if (show) {
      return <Avatar imgSrc="/images/profile.jpg" />;
    } else {
      return <Avatar imgSrc="/images/heading.jpg" />;
    }
  };
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <div className="d-flex flex-column align-items-center">
        <h1>FirstPost</h1>
        <button onClick={() => setShow(!show)}>Click here</button>
        {handleAvatar()}
      </div>
    </Layout>
  );
}
