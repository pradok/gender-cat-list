import {People, GroupBy} from '../models/people';
import {PetType, Pet} from '../models/pet';

const comparison = (first: string, second: string) => {
  const nameA = first.toUpperCase();
  const nameB = second.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};

export const filterGroupPetsBy = (people: People[], groupBy: GroupBy, petType: PetType) => {
  return people.reduce((acc: { [key: string]: string[] }, current: { [key: string]: any }, index: number, people: People[]) => {
    let ownerPets = [];
    if (current.pets !== null) {
      ownerPets = current.pets.filter((pet: Pet) => pet.type === petType).map((pet: PetType) => Object.values(pet)[0]);
    }
    if (current[groupBy] in acc) {
      acc[current[groupBy]].push(...ownerPets);
    } else {
      acc[current[groupBy]] = ownerPets
    }
    if (index === people.length - 1) {
      Object.keys(acc).forEach(el => acc[el].sort(comparison));
    }
    return acc;
  }, {});
};