import React from "react";

function Header() {
  return (
    <section id="home" className="container">
      <div className="row">
        <div className=" text-container col-md-6 mt-5 mb-3">
          <h1>KWAKUNJE VILLAGE B&B</h1>
          <p>Sleep in a traditional Zulu hut on the foot of Talana Hill </p>
        </div>
      </div>
      <div className="row pb-5">
        <div className="col-12">
          <a className="btn btn-success" href="#module">
            See our rooms
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;
