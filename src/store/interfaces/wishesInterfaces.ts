export interface IWish {
  title: string;
  picture: string;
  limitDate: Date;
  description: string;
}

export interface IdWish extends IWish {
  id: string;
}

export type Wishes = IdWish[];
