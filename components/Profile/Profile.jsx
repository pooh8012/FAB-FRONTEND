import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function Profile() {
  const { data: session, status } = useSession();
  const Router = useRouter();

  if (status === "unauthenticated") {
    Router.push("/login");
  }
  return (
    <div className="container mx-auto md:px-32 px-5 md:py-10">
      <div className="rounded-md shadow-2xl border p-5">
        <div className="flex flex-col justify-center items-center ">
          <Image
            src={session?.user?.image}
            alt="The google Image"
            width={1000}
            height={1000}
            className="border-4 border-blue-500 rounded-full w-28 h-28"
          />
        </div>
        <div className=" border border-black rounded-lg">
          <div className="flex gap-2 items-center p-3">
            <div className="border border-black border-t-0 border-b-0 border-l-0 border-r px-2">
              <p className="font-ssp font-semibold text-lg">Full Name: </p>
            </div>
            <p className="font-ssp font-semibold text-lg">
              {session?.user?.name}
            </p>
          </div>
          <div className="flex gap-2 items-center p-3">
            <div className="border border-black border-t-0 border-b-0 border-l-0 border-r px-2">
              <p className="font-ssp font-semibold text-lg">Email: </p>
            </div>
            <p className="font-ssp font-semibold text-lg">
              {session?.user?.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
