import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useQuery } from "react-query";

const Profile = () => {
  const [user, loading] = useAuthState(auth);

  const email = user.email;
  // const [lUser, setLuser] = useState({});

  const {
    data: lUser,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`http://localhost:5000/user/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")} `,
      },
    }).then((res) => res.json())
  );

  console.log(lUser);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2>Profile</h2>
      <div class="flex items-center h-screen w-full justify-center">
        <div class="max-w-xs">
          <div class="bg-white shadow-xl rounded-lg py-3">
            <div class="photo-wrapper p-2">
              <img
                class="w-32 h-32 rounded-full mx-auto"
                src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                alt="John Doe"
              />
            </div>
            <div class="p-2">
              <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
                {lUser.name}
              </h3>
              <table class="text-xs my-3">
                <tbody>
                  <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">
                      Address
                    </td>
                    <td class="px-2 py-2">{lUser?.address}</td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td class="px-2 py-2">{lUser?.phone}</td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td class="px-2 py-2">{lUser?.email}</td>
                  </tr>
                </tbody>
              </table>

              <div class="text-center my-3">h2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
