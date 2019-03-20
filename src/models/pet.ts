export type PetType = 'Cat' | 'Dog' | 'Fish';

export interface Pet {
  name: string;
  type: PetType
}

type GroupPetsBy = Record<string, string[]>