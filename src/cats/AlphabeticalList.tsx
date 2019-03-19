import React from 'react';
import {get} from '../api';
import {People} from '../models/people';

export class AlphabeticalList extends React.PureComponent {

  componentDidMount(): void {
    const peopleData = get<People[]>('http://agl-developer-test.azurewebsites.net/people.json');
    peopleData.then((data: People[]) => console.log(data));
  }

  render() {
    return (
      <h1>Data</h1>
    )
  }
}

