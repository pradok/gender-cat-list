import React from 'react';
import {get} from '../api';
import {People} from '../models/people';
import {filterGroupPetsBy} from "../utils";

type Props = {};

interface State {
  groupedList: { [key: string]: string[] }
}

export class AlphabeticalList extends React.PureComponent<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {groupedList: {}};
  }

  componentDidMount(): void {
    const peopleData = get<People[]>('http://agl-developer-test.azurewebsites.net/people.json');
    peopleData.then((data: People[]) => this.setState({groupedList: filterGroupPetsBy(data, 'gender', 'Cat')}));
  }

  render() {
    const genders = Object.keys(this.state.groupedList);
    const {groupedList} = this.state;
    if (genders.length > 0) {
      return (
        <React.Fragment>
          <h1>Pets</h1>
          <h2>by owner's gender</h2>
          <ul>
            {
              genders.map((gender: string) => {
                return (
                  <li key={gender}>
                    {gender}
                    <ul>
                      {groupedList[gender].map(subListItem => <li key={subListItem}>{subListItem}</li>)}
                    </ul>
                    <br/>
                  </li>
                )
              })
            }
          </ul>
        </React.Fragment>
      )
    }
    return 'LOADING';
  }
}
