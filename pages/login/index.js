import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import Login from "../../components/Login/Login";

function index() {
  const { data: session, status } = useSession();
  const Router = useRouter();

  if (status === "authenticated") {
    Router.push("/profile");
  }

  return (
    <>
      <Login />
    </>
  );
}

export default index;
