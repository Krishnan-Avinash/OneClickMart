import React from "react";

const IndividualName = ({ name }) => {
  return (
    <div className="individualname">
      <p
      // style={
      //   isActive
      //     ? { textDecoration: "underline" }
      //     : { textDecoration: "none" }
      // }
      >
        {name}
      </p>
    </div>
  );
};

export default IndividualName;
