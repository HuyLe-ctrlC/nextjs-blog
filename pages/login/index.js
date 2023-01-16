import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAccessTokenZalo,
  getInfoZalo,
  selectUsers,
} from "../../redux/slices/userSlices";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
export default function Login() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const router = useRouter();
  useEffect(() => {
    const { code } = router.query;
    if (code) {
      dispatch(getAccessTokenZalo(code));
    }
  }, [router.query.code]);

  useEffect(() => {
    if (users?.data?.data?.access_token) {
      console.log(
        "users?.data?.data?.access_token",
        users?.data?.data?.access_token
      );
      dispatch(getInfoZalo(users?.data?.data?.access_token));
    }
  }, [dispatch, users?.data?.data?.access_token]);
  return (
    <div>
      <h1>Login</h1>
      <h2>Xin Chào {users?.info?.data?.name}</h2>
    </div>
  );
}
