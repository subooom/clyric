import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="row g-0 justify-content-center">
      <div className="col-6">
        <h1>Step {count} of 3</h1>
        <form>
          {count === 1 ? (
            <>
              <div className="title">
                <h3 style={{ marginTop: 100 }}>Let's search for a lyrics </h3>
              </div>

              <div
                className="input-section"
                style={{ marginTop: 50, marginBottom: 50 }}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the Lyrics"
                />
              </div>
            </>
          ) : null}
          {count === 2 ? (
            <div
              className="form-group"
              style={{ marginTop: 50, marginBottom: 50 }}
            >
              <label>Lyrics</label>
              <input type="text" className="form-control" name="Lyrics" />
            </div>
          ) : null}
          {count === 3 ? (
            <div
              className="form-group"
              style={{ marginTop: 50, marginBottom: 50 }}
            >
              <label>Translate</label>
              <input type="text" className="form-control" name="translate" />
            </div>
          ) : null}
          {count === 3 ? (
            <button
              className="btn btn-primary"
              type="submit"
              style={{ marginBottom: 50 }}
            >
              Submit
            </button>
          ) : null}
        </form>
        <button
          className="btn btn-dark"
          type="submit"
          onClick={() => setCount(count - 1)}
          disabled={count < 2}
        >
          Back
        </button>
        <button
          className="btn btn-light offset-1"
          type="submit"
          onClick={() => setCount(count + 1)}
          disabled={count > 2}
        >
          Next
        </button>
      </div>
      <div className="col-4 offset-1 mx-0 px-0 ">
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
