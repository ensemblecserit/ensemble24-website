import { EventsGroupType, PostType } from "./eventTypes";

// folder names
const pe = "pre-events";

// name, caption, isLandscape
const PreEvents = [
  new PostType(
    101,
    pe,
    "valorant.jpeg",
    "https://docs.google.com/forms/d/e/1FAIpQLSdZsmkZRa0LUcD9MRv_HaEAAGSLBxqCaLeHTD8vIMDhoe3bAQ/closedform",
    false
  ),
  new PostType(
    102,
    pe,
    "trollmaking.jpeg",
    "https://docs.google.com/forms/d/e/1FAIpQLSfPjlSw8dlcAMvfzqm4NV0rN2Mjg6ZImgxeEab577h30Qb7-w/viewform",
    false
  ),
  new PostType(
    103,
    pe,
    "gitgithub.jpeg",
    "https://docs.google.com/forms/d/e/1FAIpQLSdsunfUasmWGeH02IEEmauCvsSSiga6ohjPR2mkDfVUZ9UWQw/viewform",
    false
  ),
  new PostType(
    104,
    pe,
    "efootball.jpeg",
    "https://docs.google.com/forms/d/e/1FAIpQLScM-i0EXnaTQ3yrLvbmOrLVpH-Dv8Mb59BpCwG5NPLA_GIMWA/viewform",
    false
  ),
];

//
// GALLERY ARRAY
//
export const AllEvents = [new EventsGroupType("pre-events", PreEvents)];
