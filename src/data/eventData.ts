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
    "https://www.instagram.com/p/C3iKQvoyOjX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    false
  ),
  new PostType(
    105,
    pe,
    "trollmaking.jpeg",
    "https://www.instagram.com/p/C3nOn9zS88o/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    false
  ),
  new PostType(
    106,
    pe,
    "gitgithub.jpeg",
    "https://www.instagram.com/p/C3sYhJNy7fD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    false
  ),
  new PostType(
    107,
    pe,
    "efootball.jpeg",
    "https://www.instagram.com/p/C3u-5otyiyR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    false
  ),
  new PostType(
    108,
    pe,
    "linkedin.jpeg",
    "https://www.instagram.com/p/C30Gnwly6Nj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    false
  ),

  new PostType(
    109,
    pe,
    "survivalFittest.jpeg",
    "https://www.instagram.com/p/C35XG3_SleG/?igsh=MWd0NHB3YjNuNml4dQ==",
    false
  ),

  new PostType(
    110,
    pe,
    "uiux.jpeg",
    "https://www.instagram.com/p/C35YAzRSom_/?igsh=MTU0YzVqdnE5cTkwcw==",
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
