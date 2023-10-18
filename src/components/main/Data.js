import React from "react";

function Data() {
  return (
    <div className="data">
      <div className="data-logo">
        <i class="fa-solid fa-sack-dollar fa-2xl"></i>
        <div className="data-earning">
          <p>Earning</p>
          <h3>$198k</h3>
          <p>
            <span>37.8%</span> this month
          </p>
        </div>
      </div>
      <div className="data-logo2">
        <i class="fa-solid fa-file-lines fa-2xl"></i>{" "}
        <div className="data-order">
          <p>Order</p>
          <h3>$2.4k</h3>
          <p>
            <span>7%</span> this month
          </p>
        </div>
      </div>
      <div className="data-logo3">
        <i class="fa-solid fa-wallet fa-2xl"></i>{" "}
        <div className="data-balance">
          <p>Balance</p>
          <h3>$2.4k</h3>
          <p>
            <span>8%</span> this month
          </p>
        </div>
      </div>
      <div className="data-logo4">
        <i class="fa-solid fa-lock fa-2xl"></i>{" "}
        <div className="Total Sale">
          <p>Earning</p>
          <h3>$89k</h3>
          <p>
            <span>3%</span> this month
          </p>
        </div>
      </div>
    </div>
  );
}

export default Data;
