import Link from "next/link";
import React from "react";

const News = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/news/1">Website A</Link>
        </li>
        <li>
          <Link href="/news/2">Website B</Link>
        </li>
        <li>
          <Link href="/news/3">Website C</Link>
        </li>
      </ul>
    </div>
  );
};

export default News;
