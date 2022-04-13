import React from "react";

import "./Star.css";

const Star = (props) => {
  // maybe theres a more efficient way?
  if (props.num == 1) {
    return (
      <div>
        <img
          id="staricon"
          src="/assets/Icons/star.svg"
          alt="this is a star icon"
        />
      </div>
    );
  } else if (props.num == 2) {
    return (
      <div>
        <img
          id="staricon"
          src="/assets/Icons/star.svg"
          alt="this is a star icon"
        />
        <img
          id="staricon"
          src="/assets/Icons/star.svg"
          alt="this is a star icon"
        />
      </div>
    );
  } else if (props.num == 3) {
    return (
      <div>
        <img
          id="staricon"
          src="/assets/Icons/star.svg"
          alt="this is a star icon"
        />
        <img
          id="staricon"
          src="/assets/Icons/star.svg"
          alt="this is a star icon"
        />
        <img
          id="staricon"
          src="/assets/Icons/star.svg"
          alt="this is a star icon"
        />
      </div>
    );
  } else if (props.num == 4) {
    return (
      <div>
        <img
          id="staricon"
          src="/assets/Icons/star.svg"
          alt="this is a star icon"
        />
        <img
          id="staricon"
          src="/assets/Icons/star.svg"
          alt="this is a star icon"
        />
        <img
          id="staricon"
          src="/assets/Icons/star.svg"
          alt="this is a star icon"
        />
        <img
          id="staricon"
          src="/assets/Icons/star.svg"
          alt="this is a star icon"
        />
      </div>
    );
  } else {
    return (
      <div>
        <img
          id="staricon"
          src="/assets/Icons/star.svg"
          alt="this is a star icon"
        />
        <img
          id="staricon"
          src="/assets/Icons/star.svg"
          alt="this is a star icon"
        />
        <img
          id="staricon"
          src="/assets/Icons/star.svg"
          alt="this is a star icon"
        />
        <img
          id="staricon"
          src="/assets/Icons/star.svg"
          alt="this is a star icon"
        />
        <img
          id="staricon"
          src="/assets/Icons/star.svg"
          alt="this is a star icon"
        />
      </div>
    );
  }
};

export default Star;
