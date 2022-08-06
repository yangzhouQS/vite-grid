import { faker } from '@faker-js/faker';

interface User {
  userId: string
  username: string
  phone: string
  address?: string
  email: string
  avatar: string
  avatarImg: string
  password: string
  birthdate: any
  registeredAt: Date
}

export const USERS: User[] = [];

export function createRandomUser(): User {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    phone: faker.phone.phoneNumber(),
    address: faker.address.city(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    avatarImg: faker.image.cats(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

Array.from({ length: 10 }).forEach(() => {
  USERS.push(createRandomUser());
});
