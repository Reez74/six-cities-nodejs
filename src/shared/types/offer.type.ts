import { OfferType } from './offer-type.enum.js';
import { Goods } from './goods.enum.js';
import { UserWithPassword } from './user.type.js';
import { Location } from './location.type.js';
import { City } from './index.js';

export type Offer = {
  title: string;
  description: string;
  createdDate: Date;
  city: City;
  previewImage: string;
  images: string[];
  isPremium: boolean;
  isFavorite: boolean;
  type: OfferType;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: Goods[];
  author: UserWithPassword;
  location: Location;
}
