import React from "react";

const Home = () => {
  return (
    <div className="row g-0 justify-content-center">
      <div className="col-lg-8">
        <div className="title">
          <h4 style={{ color: "#0000008A", fontSize: "18px" }}>Step 1/4</h4>
        </div>
        <div className="sub-title w-50">
          <h3 style={{ marginTop: 100 }}>Let's search for a lyrics </h3>
        </div>

        <div
          className="input-section w-50"
          style={{ marginTop: 50, marginBottom: 50 }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Enter the Lyrics"
          />
        </div>
        <div className="button-section w-50 ">
          <button type="button" className="btn btn-secondary ">
            Previous
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={{ float: "right" }}
          >
            Next
          </button>
        </div>
      </div>
      <div className="col-lg-4 offset-1 mx-0 px-0 ">
        <img
          className="image-section"
          src="https://cdni.iconscout.com/illustration/premium/thumb/woman-employee-listening-to-music-with-headphone-2763615-2302815.png"
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
};

export default Home;
