import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const ManageProduct = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch(`http://localhost:5000/product`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")} `,
      },
    }).then((res) => res.json())
  );

  console.log(products);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2>Orders</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id}>
                <th>{index + 1}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.treatment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;
