import {filterGroupPetsBy} from "../filterGroupPetsBy";
import {people} from "../../fixtures";

describe ('groupPetsBy',()=> {
  const expected = {
    Male: ["Garfield", "Jim", "Max", "Tom"],
    Female: ["Garfield", "Simba", "Tabby"]
  };
  it('should return pets alphabetically by gender', () => {
    expect(filterGroupPetsBy(people, 'gender', 'Cat')).toEqual(expected);
  });
});