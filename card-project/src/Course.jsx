import React from "react";

export const Course = ({ title, desc, img }) => {
  // const { title, desc } = props;
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={img} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
          </div>
          <div className="content">{desc}</div>
        </div>
      </div>
      {/* <img src={img} alt="" />
      <div>{title}</div>
      <div>{desc}</div> */}
    </div>
  );
};
