import * as React from 'react';
import {WordDefinitionResult} from "./api/wordDefinitionResult";
import Form from './components/Form';
import Titles from './components/Titles';

const logo = require('./image.svg');

interface AppState {
  wordDefinitionResult: WordDefinitionResult,
  isLoading: boolean
}

export const initialState: AppState={
  wordDefinitionResult:{word:"", definitions:[]},
  isLoading: true
}
export default class App extends React.Component<{}, AppState> {
  constructor(props:any) {
    super(props);
    this.state = initialState;
    this.onSearchClick = this.onSearchClick.bind(this);
  }

  public onSearchClick(word: string){
    fetch(`"https://wordsapiv1.p.mashape.com/words/${word}/definitions"`, {
      headers: {
        "X-Mashape-Host": "",
        "X-Mashape-Key": "",
      },
      method: 'GET',
    }) 
    .then(response => {
      if(response.status < 200 || response.status >= 300) {
        alert("Please enter an English word right (without a space, digits and symbols).");
        return Promise.reject("Not a right form of word")
      }
      else{
        return response.json();
      }}).then(data =>  {
        const a: WordDefinitionResult = data;
        console.log(a);
        const newState: AppState={
          wordDefinitionResult:a,
          isLoading: false
        }
        this.setState(
          newState
        )
      })
  }

  public render() {
    const listOfDefinitons = this.state.wordDefinitionResult.definitions.map((definition) =>  
        <li key={definition.definition}>{definition.definition}</li>,
        this.state.isLoading === true
    );    
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Titles />
          <Form  onSearchClick={this.onSearchClick} />
          <div className="App-body"> 
            <ul className="definitions">{listOfDefinitons}</ul>
          </div>
        </div>
      </div>
    );
  }
}