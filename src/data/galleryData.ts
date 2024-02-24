import { Gallery, Photo } from "./galleryTypes";

const PrevFest = [
  new Photo("1.webp", "ENSEMBLE1"),
  new Photo("2.webp", "ENSEMBLE2"),
  new Photo("3.webp", "ENSEMBLE3"),
  new Photo("4.webp", "ENSEMBLE4"),
];

//
// GALLERY ARRAY
//
// shortcuts
const ll = "logo-launch";
const pe = "pre-events";
const r = "rebound";
const g = "googly";
const pf = "previous-fest";

export const Galleries = [new Gallery(pf, "Previous Fest Gallery", PrevFest)];
