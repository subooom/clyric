import { create } from "../db";

class Translation {
  constructor(artist_name, song_name, language, lyrics, translation) {
    this.status = create("translations", {
      artist_name,
      song_name,
      language,
      lyrics,
      translation,
    });
  }

  getStatus = () => {
    return this.status;
  };
}

export default Translation;
