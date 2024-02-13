export type ManagementTeam = ManagementPerson[];

export type ManagementPerson = {
  name: string;
  name2?: string;
  position: string;
  image?: string;
  career?: string;
};

export type CardData = {
  title1: string;
  title2: string;
  description: string;
  marginTop?: number;
};
