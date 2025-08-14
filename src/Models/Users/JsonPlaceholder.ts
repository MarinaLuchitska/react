export interface IPlaceholderUsers {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IPlaceholderUsersAddress;
    phone: string;
    website: string;
    company: IPlaceholderUsersCompany;
}
export interface IPlaceholderUsersGeo {
  lat: string;
  lng: string;
}

export interface IPlaceholderUsersAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IPlaceholderUsersGeo;
}

export interface IPlaceholderUsersCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

