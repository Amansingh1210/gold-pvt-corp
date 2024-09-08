import React from "react";
import { useNavigate } from "react-router-dom";
import clients from "../Data/clients.js";

function Clients() {
  const nav = useNavigate();
  return (
    <main className="d-flex flex-column gap-4">
      <div className="fluid-contanier bg-dark text-center text-white py-5 px-5">
        <div className="d-md-flex flex-row justify-content-between align-items-center ">
          <div>
            <h1 className="fs-1">Our Clients</h1>
          </div>
          <nav>
            <ol className="list-none d-flex gap-3 align-items-center cursor-pointer">
              <li className="fs-4 text-hover" onClick={() => nav("/")}>
                Home
              </li>
              <li className="">/</li>
              <li className="text-hover">Our Clients</li>
            </ol>
          </nav>
        </div>
        <div className="banner-underline"></div>
      </div>
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">S No.</th>
              <th scope="col">Clients Name </th>
            </tr>
          </thead>
          <tbody>
            {clients.map((details) => {
                const {id, name} = details
              return (
                <tr key={id}>
                  <th scope="row">{id}</th>
                  <td>{name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Clients;
