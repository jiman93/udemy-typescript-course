import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

user.set({ name: 'newName' });

console.log(user.get('name'));
