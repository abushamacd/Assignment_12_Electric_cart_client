import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ProductDeleteModal from "./ProductDeleteModal";

const ManageProduct = () => {
  const [deletingProduct, setDeletingProduct] = useState(null);
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

  console.log(deletingProduct);

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id}>
                <th>{index + 1}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <label
                    onClick={() => setDeletingProduct(product)}
                    for="deleteProductModal"
                    class="btn btn-xs bg-red-600 text-base-100"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingProduct && (
        <ProductDeleteModal
          deletingProduct={deletingProduct}
          refetch={refetch}
          setDeletingProduct={setDeletingProduct}
        ></ProductDeleteModal>
      )}
    </div>
  );
};

export default ManageProduct;
