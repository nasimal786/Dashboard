import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="dashboard-logo">
        <i className="fa-solid fa-globe fa-2xl"></i>
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard">
        <i className="fa-sharp fa-solid fa-gauge fa-lg"></i>
        <p>Dashboard</p>
      </div>
      <div className="dashboard-product">
        <i className="fa-sharp fa-solid fa-box fa-lg"></i>
        <p>Product</p>
        <i className="fa-solid fa-angle-right fa-sm"></i>
      </div>
      <div className="dashboard-customer">
        <i className="fa-solid fa-user fa-lg"></i>
        <p>Customers</p>
        <i className="fa-solid fa-angle-right fa-sm"></i>
      </div>
      <div className="dashboard-income">
        <i className="fa-solid fa-wallet fa-lg"></i>
        <p>Income</p>
        <i className="fa-solid fa-angle-right fa-sm"></i>
      </div>
      <div className="dashboard-promote">
        <i className="fa-solid fa-rectangle-ad fa-lg"></i>
        <p>Promote</p>
        <i className="fa-solid fa-angle-right fa-sm"></i>
      </div>
      <div className="dashboard-help">
        <i className="fa-solid fa-person-circle-question fa-lg"></i>
        <p>Help</p>
        <i className="fa-solid fa-angle-right fa-sm"></i>
      </div>
      <div className="dashboard-user">
        <div>
          <img src="./logo1.jpg" alt="img" />
        </div>
        <div>
          <h5>Utkarsh</h5>
          <p>Project Manager</p>
        </div>
        <i className="fa-solid fa-angle-right fa-rotate-90 fa-lg"></i>
      </div>
    </nav>
  );
}

export default Navbar;
