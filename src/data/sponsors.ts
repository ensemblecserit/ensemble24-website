export class Sponsor {
  public link: string;
  public title: string;
  constructor(link: string, title: string) {
    this.link = link;
    this.title = title;
  }
}

export const ritaan = new Sponsor("ritaan.webp", "supporting partner");
export const rigLabs = new Sponsor("riglabs.webp", "associate partner");
export const decathlon = new Sponsor("decathlon.webp", "sports partner");
export const alRazi = new Sponsor("alrazi.webp", "food partner");
export const wolfram = new Sponsor("wolfram.webp", "technical partner");
