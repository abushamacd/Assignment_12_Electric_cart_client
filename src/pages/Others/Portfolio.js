import React from "react";
import me from "../../assets/me.jpeg";

const Portfolio = () => {
  return (
    <div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row justify-between">
          <img alt="" src={me} class="lg:max-w-lg rounded-lg shadow-2xl" />
          <div className="">
            <h1 class="text-5xl font-bold mb-4">I'm Abu Shama</h1>
            <p>
              Phone: <span className="font-bold">01987268375</span>{" "}
            </p>
            <p>
              Email: <span className="font-bold">assiddik001@gmail.com</span>
            </p>
            <h5 className="text-3xl pt-3">About myself</h5>
            <p class="">
              My home district Chuadanga. Now I study in Finance and Banking
              department <br /> at Begum Rokeya University, Rangpur.
            </p>
            <h5 className="text-3xl pt-3">Education Qalification</h5>
            <div>
              <h6 className="text-1xl pt-3 font-bold">
                Bachelor of Business Administration
              </h6>
              <ul class="menu">
                <li>Begum Rokeya University, Rangpur.</li>
                <li>Year: 2018 - Running</li>
                <li>CGPA: 4.23</li>
                <li>Department: Finance and Banking</li>
              </ul>
            </div>
            <div>
              <h6 className="text-1xl pt-3 font-bold">
                Higher Secondary Certificate
              </h6>
              <ul class="menu">
                <li>Chuadanga Government College, Chuadanga.</li>
                <li>Year: 2017</li>
                <li>GPA: 4.25</li>
                <li>Group: Business Studies</li>
              </ul>
            </div>
            <div>
              <h6 className="text-1xl pt-3 font-bold">
                Secondary School Certificate
              </h6>
              <ul class="menu">
                <li>Victoria Jubilee High School, Chuadanga.</li>
                <li>Year: 2015</li>
                <li>GPA: 4.17</li>
                <li>Group: Business Studies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
