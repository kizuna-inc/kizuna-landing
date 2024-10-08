export interface TeamInterface {
  name: string;
  desp: string;
  github: string;
  website: string;
}

// Image gonna use from github by using
// https://avatars.githubusercontent.com/<github username>

// GitHub Section gonna use
// https://github.com/<github username>

export const TeamData: TeamInterface[] = [
  {
    name: "Suphakit P.",
    desp: "a music composer w/ web dev. skills",
    github: "dethMastery",
    website: "https://suphakit.net",
  },
  {
    name: "Vinithorn S.",
    desp: "Hello World",
    github: "Thunder-Sowilo",
    website: "https://thunder.kizuna.zip",
  },
  {
    name: "Matin Jr.",
    desp: "Hello World",
    github: "MatinWesker69",
    website: "https://matin.kizuna.zip",
  },
  {
    name: "Sirapop Y.",
    desp: "why Assembly...",
    github: "LazyHarmo",
    website: "https://osu.ppy.sh/users/10546315",
  },
];

export const subTeamData: TeamInterface[] = [
  {
    name: "Supanat .Ponkong",
    desp: "a junior network",
    github: "ItxM3G4RrYz",
    website: "https://github.com/ItxM3G4RrYz",
  },
];
