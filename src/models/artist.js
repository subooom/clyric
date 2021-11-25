import { create } from "../db";

export class Artist {
  constructor(name) {
    create("artists", { name });
  }
}
