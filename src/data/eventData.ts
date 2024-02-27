import { EventsGroupType, PostType } from "./eventTypes";

// folder & id & link name
const pe = "pre-events";
const wk = "workshops";
const cs = "competitions";
const ex = "exhibitions";
const st = "stalls";

// (id: number, folder: string, img: string, link: string, hideRegister: boolean)
const PreEvents = [
  new PostType(
    101,
    pe,
    "rebound.jpeg",
    "https://www.instagram.com/rebound.cse?igsh=MTI0ZHlzbnA2M3hwbg==",
    false
  ),
  new PostType(
    102,
    pe,
    "shootout.jpeg",
    "https://www.instagram.com/p/C3plI4aS2QY/?igsh=anh4bnlub3dnZXM4",
    false
  ),
  new PostType(
    103,
    pe,
    "googly.jpeg",
    "https://www.instagram.com/p/C3aYVbSynfI/?igsh=MW9seGp6aW1jdTV0aQ==",
    false
  ),
  new PostType(
    104,
    pe,
    "valorant.jpeg",
    "https://docs.google.com/forms/d/e/1FAIpQLSdZsmkZRa0LUcD9MRv_HaEAAGSLBxqCaLeHTD8vIMDhoe3bAQ/closedform",
    false
  ),
  new PostType(
    105,
    pe,
    "trollmaking.jpeg",
    "https://docs.google.com/forms/d/e/1FAIpQLSfPjlSw8dlcAMvfzqm4NV0rN2Mjg6ZImgxeEab577h30Qb7-w/viewform",
    false
  ),
  new PostType(
    106,
    pe,
    "gitgithub.jpeg",
    "https://docs.google.com/forms/d/e/1FAIpQLSdsunfUasmWGeH02IEEmauCvsSSiga6ohjPR2mkDfVUZ9UWQw/viewform",
    false
  ),
  new PostType(
    107,
    pe,
    "efootball.jpeg",
    "https://docs.google.com/forms/d/e/1FAIpQLScM-i0EXnaTQ3yrLvbmOrLVpH-Dv8Mb59BpCwG5NPLA_GIMWA/viewform",
    false
  ),
];

//
// GALLERY ARRAY
//
export const AllEvents = [
  new EventsGroupType(pe, PreEvents),
  // new EventsGroupType(wk, PreEvents),
  // new EventsGroupType(cs, PreEvents),
  // new EventsGroupType(ex, PreEvents),
  // new EventsGroupType(st, PreEvents),
];
