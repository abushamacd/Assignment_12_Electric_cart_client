import React from "react";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Orders = () => {
  const [user, loading] = useAuthState(auth);

  const email = user.email;
  // const [lUser, setLuser] = useState({});

  const {
    data: order,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`http://localhost:5000/order?email=${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")} `,
      },
    }).then((res) => res.json())
  );

  console.log(order);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2>Orders</h2>
    </div>
  );
};

export default Orders;
