import React from "react";
import MainNav from "./main/MainNav";
import Data from "./main/Data";
import Chart from "./main/Chart";
import Table from "./main/Table";

function MainContent() {
  return (
    <div className="maincontent">
      <MainNav />
      <Data />
      <Chart />
      <Table />
    </div>
  );
}

export default MainContent;
