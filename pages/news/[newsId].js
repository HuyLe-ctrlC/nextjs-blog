import React from "react";
import { useRouter } from "next/router";

export default function DetailPage() {
  const router = useRouter();
  console.log("router.query.newsId", router.query.newsId);
  return (
    <div>
      {router.query.newsId == 1 && <h1 className="text-danger">DetailPage</h1>}
    </div>
  );
}
