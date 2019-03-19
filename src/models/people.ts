import {Pet} from './pet';

enum Gender {
  male = 'Male',
  female = 'Female'
}

export interface People {
  name: string;
  gender: Gender;
  age: number;
  pets: Pet[];
}