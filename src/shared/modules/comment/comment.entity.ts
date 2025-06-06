import {
  defaultClasses,
  modelOptions,
  prop,
  Ref,
  Severity,
} from '@typegoose/typegoose';

import { OfferEntity } from '../offer/offer.entity.js';
import { UserEntity } from '../user/user.entity.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface CommentEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'comments',
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class CommentEntity extends defaultClasses.TimeStamps {
  @prop({ trim: true, required: true })
  public comment!: string;

  @prop({ required: true })
  public rating!: number;

  @prop({ ref: () => OfferEntity, required: true })
  public offerId!: Ref<OfferEntity>;

  @prop({ ref: () => UserEntity, required: true })
  public userId!: Ref<UserEntity>;
}
