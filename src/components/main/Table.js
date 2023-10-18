import React from "react";

function Table() {
  return (
    <div className="table">
      <div className="table-heading">
        <h3>Product Sell</h3>
        <div className="table-input">
          <input type="text" placeholder="search" />
          <div className="table-selector">
            <select>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
        </div>
      </div>
      <table>
        <tr>
          <th>Product Name</th>
          <th>Stock</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
        <tr>
          <td className="logo2">
            <img src="./logo2.jpg" alt="img" />
            <div>
              Abstract 3D
              <p>Lorem this the my new work</p>
            </div>
          </td>
          <td>32 in stock</td>
          <td>$ 45.99</td>
          <td>20</td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
