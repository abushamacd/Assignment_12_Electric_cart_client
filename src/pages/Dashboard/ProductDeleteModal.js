import React from "react";
import { toast } from "react-toastify";

const ProductDeleteModal = ({
  deletingProduct,
  refetch,
  setDeletingProduct,
}) => {
  const { _id, name } = deletingProduct;

  const handleDelete = () => {
    fetch(`http://localhost:5000/product/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Product: ${name} is deleted.`);
          setDeletingProduct(null);
          refetch();
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="deleteProductModal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg ">
            Are you sure you want to delete{" "}
            <span className="text-red-500">{name}</span> !
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <button onClick={() => handleDelete()} class="btn btn-xs btn-error">
              Delete
            </button>
            <label for="deleteProductModal" class="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeleteModal;
