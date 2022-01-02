import React from "react";
import "./RoomPreview.css";

function RoomPreview() {
  return (
    <section id="roompreview" className="roompreview">
      <div className="container text-center">
        <div className="row">
          <h4>OUR ROOMS</h4>
          <div className="roompreview-card col-sm-3 m-3">Standard Room</div>
          <div className="roompreview-card col-sm-3 m-3">Family Room</div>
          <div className="roompreview-card col-sm-3 m-3">Dormitory</div>
        </div>
        <button className="btn btn-success flex-button">
          See all of our rooms
        </button>
      </div>
    </section>
  );
}

export default RoomPreview;
