import faker from 'faker';

export class User {
  name: string;
  location: {
    long: number;
    lat: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude())
    };
  }
}
