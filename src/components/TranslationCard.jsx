import React from "react";

const TranslationCard = ({ artistName, songName, language, lyric }) => {
  return (
    <div className="card">
      <div className="card-body">
        <p style={{ float: "right", fontSize: 12, color: "#6c757d" }}>
          {language}
        </p>
        <h5 className="card-title">{artistName}</h5>
        <h6 className="card-subtitle mb-2 text-muted" style={{ fontSize: 15 }}>
          {songName}
        </h6>
        <p className="card-text" style={{ fontSize: 15, paddingTop: 20 }}>
          {lyric}
        </p>
      </div>
    </div>
  );
};

export default TranslationCard;
