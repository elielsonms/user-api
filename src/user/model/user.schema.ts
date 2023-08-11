import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument} from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ type: mongoose.Schema.Types.ObjectId})
  userId: string

  @Prop({required: true})
  name: string;

  @Prop({required: true})
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);