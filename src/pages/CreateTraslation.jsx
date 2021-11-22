import { useEffect, useState } from "react";

const CreateTranslation = () => {
  const [state, setState] = useState(0);
  const maxSteps = 2;

  const renderCurrentStep = () => {
    if (state === 0) {
      return (
        <div style={{ paddingTop: 50 }}>
          <h1 style={{ fontSize: 30, fontWeight: "bold" }}>
            Welcome to the <span style={{ fontStyle: "italic" }}>clyric</span>{" "}
            community!
          </h1>
          <p style={{ color: "#a8aaad" }}>
            Please go through this form to translate a song's lyrics to a
            language of your choice.
          </p>
        </div>
      );
    } else if (state === 1) {
      return (
        <>
          <h2 className="mb-4" style={{ fontSize: 25, fontWeight: "bold" }}>
            Basic Detail
          </h2>
          <div class="mb-3">
            <label for="artist-name" class="form-label">
              Artist Name
            </label>
            <input
              type="text"
              class="form-control"
              id="artist-name"
              placeholder="Michael Jackson"
            />
          </div>
          <div class="mb-3">
            <label for="song-name" class="form-label">
              Song Name
            </label>
            <input
              type="text"
              class="form-control"
              id="song-name"
              placeholder="Thriller"
            />
          </div>
        </>
      );
    } else if (state === 2) {
      return (
        <>
          <h2 class="mb-3" style={{ fontSize: 25, fontWeight: "bold" }}>
            Lyric/Translation
          </h2>
          <div class="mb-3">
            <label for="translation" class="form-label">
              Which language would you be translating to?
            </label>
            <select class="form-select mb-3">
              <option value="" selected>
                Original
              </option>
              <option value="1">English</option>
              <option value="2">Nepali</option>
              <option value="3">Hindi</option>
            </select>
          </div>
          <div class="row mb-3 mt-3">
            <div class="col-6">
              <label for="lyrics" class="form-label" style={{ fontSize: 15 }}>
                Original Lyrics (Paste from Rap Genius)
              </label>
              <textarea class="form-control" id="lyrics" rows="5"></textarea>
            </div>
            <div class="col-6">
              <label for="translation" class="form-label">
                Translation
              </label>
              <textarea
                class="form-control"
                id="translation"
                rows="5"
              ></textarea>
            </div>
          </div>
        </>
      );
    } else {
      return <h2>Done</h2>;
    }
  };

  const renderLegend = () => {
    if (state === 0) return ``;
    if (state < maxSteps + 1 && state > 0)
      return `(Step ${state} of ${maxSteps})`;
  };

  const renderButtonText = () => {
    if (state === 0) return "Proceed";
    else if (state > maxSteps) return "Finish";
    else return "Next";
  };

  return (
    <div className="row justify-content-between" style={{ overflow: "hidden" }}>
      <div className="col-6">
        <h4
          style={{
            marginBottom: 30,
            color: "#b0b0b2",
            fontSize: 20,
            fontWeight: 300,
            marginTop: 30,
          }}
        >
          {state === 0 ? "" : "Create a translation"} {renderLegend()}
        </h4>
        <div style={{ minHeight: 320 }}>{renderCurrentStep()}</div>
        <div>
          <button
            style={{
              background: "rgb(79 92 211)",
              borderColor: "rgb(79 92 211)",
              color: "white",
              marginRight: 20,
              textTransform: "uppercase",
              width: 120,
              fontSize: 15,
              letterSpacing: 1,
            }}
            className="btn btn-primary btn-lg"
            onClick={() => {
              if (state >= maxSteps + 1) return;
              setState(state + 1);
            }}
          >
            {renderButtonText()}
          </button>
          {state === 0 ? (
            ""
          ) : (
            <button
              className="btn btn-dark btn-lg"
              style={{
                fontSize: 15,
                letterSpacing: 1,
                textTransform: "uppercase",
                background: "rgb(176, 176, 178)",
                borderColor: "rgb(176, 176, 178)",
                width: 120,
              }}
              onClick={() => {
                if (state <= 0) return;
                setState(state - 1);
              }}
            >
              Back
            </button>
          )}
        </div>
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

export default CreateTranslation;
