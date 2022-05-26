import React from "react";
import { toast } from "react-toastify";

const OrderDeleteModal = ({ deletingOrder, refetch, setDeletingOrder }) => {
  const { _id, productName } = deletingOrder;
  // Order delete from DB
  const handleDelete = () => {
    fetch(`https://ancient-taiga-08773.herokuapp.com/order/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Order: ${productName} is deleted.`);
          setDeletingOrder(null);
          refetch();
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="deleteOrderModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg ">
            Are you sure you want to delete{" "}
            <span className="text-red-500">{productName}</span> !
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <button
              onClick={() => handleDelete()}
              className="btn btn-xs btn-error"
            >
              Delete
            </button>
            <label htmlFor="deleteOrderModal" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDeleteModal;
