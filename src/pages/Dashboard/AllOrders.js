import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import OrderDeleteModal from "./OrderDeleteModal";

const AllOrders = () => {
  // set state
  const [deletingOrder, setDeletingOrder] = useState(null);

  const {
    data: order,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`https://ancient-taiga-08773.herokuapp.com/order`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")} `,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2>Orders</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {order.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.productName}</td>
                <td>{order.price}</td>
                <td>{order.quantity}</td>
                <td>
                  {order.price && order.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                    </div>
                  )}
                </td>
                <td>
                  {!order.paid && (
                    <label
                      onClick={() => setDeletingOrder(order)}
                      htmlFor="deleteOrderModal"
                      className="btn btn-xs bg-red-600 text-base-100"
                    >
                      Delete
                    </label>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingOrder && (
        <OrderDeleteModal
          deletingOrder={deletingOrder}
          refetch={refetch}
          setDeletingOrder={setDeletingOrder}
        ></OrderDeleteModal>
      )}
    </div>
  );
};

export default AllOrders;
