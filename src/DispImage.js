import React from "react";

function DispImage({ counts }) {
  const displayImage = () => {
    console.log("XXXX", counts);
    return counts.map((p, i) => {
      return (
        <img
          key={i}
          src={require("./blog2.jpg")}
          alt="img1"
          style={{ width: "120px" }}
        />
      );
    });
  };

  return <div>{displayImage()}</div>;
}

export default DispImage;
