import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
import { Model } from './Model';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }
  // public events: Eventing = new Eventing();
  // public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  // public attributes: Attributes<UserProps>;
  // constructor(attrs: UserProps) {
  //   this.attributes = new Attributes<UserProps>(attrs);
  // }
}
