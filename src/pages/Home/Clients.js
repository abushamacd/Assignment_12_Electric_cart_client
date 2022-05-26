import React from "react";
import logo1 from "../../assets/client_logo/Mul.png";
import logo2 from "../../assets/client_logo/Nav.png";
import logo3 from "../../assets/client_logo/Red.png";
import logo4 from "../../assets/client_logo/Rep.png";
import logo5 from "../../assets/client_logo/Ser.png";

const Clients = () => {
  const clients = [
    {
      _id: 1,
      img: logo1,
    },
    {
      _id: 2,
      img: logo2,
    },
    {
      _id: 3,
      img: logo3,
    },
    {
      _id: 4,
      img: logo4,
    },
    {
      _id: 5,
      img: logo5,
    },
  ];
  return (
    <section>
      <h2 className="text-center capitalize text-4xl mb-5">Our Top Clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {clients.map((client) => (
          <div
            key={client._id}
            className="card lg:w-full bg-base-100 shadow-xl m-2"
          >
            <figure className="">
              <img src={client.img} alt="Shoes" className="rounded-xl" />
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
