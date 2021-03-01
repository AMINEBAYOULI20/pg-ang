
import { Subject } from 'rxjs/Subject';
import { User } from '../models/user.models';

export class UserService {
  private users: User[]=[
      {
    firstName: 'amine',
    lastName:'bayouli',
    email:'amine@gmail.com',
    drinkPreference:'coca',
    hobbies:['code','sportng']
  }
];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}