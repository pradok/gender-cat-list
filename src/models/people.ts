import {Pet} from './pet';

export type Gender = 'Male' | 'Female';

export type GroupBy = 'gender' | 'name' | 'age';

export interface People {
  name: string;
  gender: Gender;
  age: number;
  pets: Pet[] | null;
}