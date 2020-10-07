import React from "react";

function Image({ item }) {
  return (
    <div class="col-sm-3" style={{ width: "100px" }}>
      <img src={require("./blog2.jpg")} alt="img1" style={{ width: "100px" }} />
    </div>
  );
}

export default Image;
