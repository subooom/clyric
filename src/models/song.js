import { create } from "../db";

export class Song {
  constructor(name) {
    create("songs", { name });
  }
}
