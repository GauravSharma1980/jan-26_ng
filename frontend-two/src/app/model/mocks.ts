import { IUser } from './user-model';

export const USER_DATA: Array<IUser> = [
  {
    firstName: 'tim b.',
    lastName: 'lee',
    dob: new Date('Dec 21, 1965'),
    income: 40000,
    isWorking: true,
    company: 'World Wide Web',
    avatar: './assets/images/tim.jpg',
  },
  {
    firstName: 'steve',
    lastName: 'jobs',
    dob: new Date('Jan 1, 1965'),
    income: 0,
    isWorking: false,
    company: 'Apple Inc',
    avatar: './assets/images/steve.jpg',
  },
  {
    firstName: 'bill',
    lastName: 'gates',
    dob: new Date('Aug 21, 1965'),
    income: 60000,
    isWorking: true,
    company: 'Microsoft',
    avatar: './assets/images/bill.jpeg',
  },
];
