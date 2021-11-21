import { useEffect, useState } from "react";

const CreateTranslation = () => {
  const [state, setState] = useState(0);
  const maxSteps = 2;

  const renderCurrentStep = () => {
    if (state === 0) {
      return (
        <div style={{ width: 600, paddingTop: 50 }}>
          <h3>
            Please go through this form to translate a song's lyrics to a
            language of your choice.
          </h3>
        </div>
      );
    } else if (state === 1) {
      return (
        <>
          <h2 className="mb-4">Basic Detail</h2>
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
      return <h2>Lyric/Translation</h2>;
    } else {
      return <h2>Done</h2>;
    }
  };

  const renderLegend = () => {
    if (state === 0) return `(Total ${maxSteps} steps)`;
    if (state < maxSteps + 1 && state > 0)
      return `(Step ${state} of ${maxSteps})`;
  };

  return (
    <>
      <h4 style={{ opacity: 0.3, marginBottom: 50 }}>
        Create a translation {renderLegend()}
      </h4>
      <div style={{ minHeight: 250 }}>{renderCurrentStep()}</div>
      <div>
        <button
          style={{
            background: "#9edbff",
            borderColor: "#9edbff",
            color: "#030707",
          }}
          className="btn btn-primary btn-lg"
          onClick={() => setState(state + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default CreateTranslation;
