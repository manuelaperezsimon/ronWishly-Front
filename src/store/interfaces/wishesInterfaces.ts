export interface IWish {
  title: string;
  picture: string;
  limitDate: Date;
  description: string;
  imageBackUp?: string;
}

export interface IdWish extends IWish {
  id: string;
}

export interface NewOrModifyWish extends IWish {
  id?: string;
}

export type Wishes = IdWish[];
