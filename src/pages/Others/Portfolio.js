import React from "react";
import me from "../../assets/me.jpeg";
import project1 from "../../assets/projects/saas.png";
import project2 from "../../assets/projects/tea.png";
import project3 from "../../assets/projects/resturent.png";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      _id: 1,
      name: "SAAS Landing",
      type: "Front-end",
      url: "https://assiddik01.github.io/Softlab_SAAS/",
      img: project1,
    },
    {
      _id: 2,
      name: "Jannatul Tea",
      type: "Front-end",
      url: "https://assiddik01.github.io/Softlab_Tea/",
      img: project2,
    },
    {
      _id: 3,
      name: "Resturent",
      type: "Front-end",
      url: "https://assiddik01.github.io/Softlab_Resturent_01/",
      img: project3,
    },
  ];
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
            <h5 className="text-3xl pt-3">Technology that I know</h5>
            <div class="overflow-x-auto">
              <table class="table w-full">
                <tbody>
                  <tr>
                    <td className="p-2">HTML5</td>
                    <td className="p-2">CSS3</td>
                    <td className="p-2">JavaScript</td>
                  </tr>
                  <tr>
                    <td className="p-2">Bootstrap</td>
                    <td className="p-2">Tailwind</td>
                    <td className="p-2">Font Awesome</td>
                  </tr>
                  <tr>
                    <td className="p-2">Material UI</td>
                    <td className="p-2">Daisy UI</td>
                    <td className="p-2">React</td>
                  </tr>
                  <tr>
                    <td className="p-2">Node JS</td>
                    <td className="p-2">Express JS</td>
                    <td className="p-2">Mongo DB</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
      <h2 className="text-5xl text-secondary text-center my-6">My Projects</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-16 px-4">
        {projects.map((project) => (
          <div
            key={project._id}
            class="card card-compact lg:max-w-lg bg-base-100 shadow-xl "
          >
            <figure>
              <img src={project.img} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{project.name}</h2>
              <p className="pb-0">{project.type}</p>
              <a target="blank" href={project.url}>
                {" "}
                <span className="text-secondary">Project URL:</span>{" "}
                {project.url}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
