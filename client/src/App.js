import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    //console.log(movie.title)
    if (this.state.savedList.includes(movie)) {
      alert(`${movie.title} is already in your list!`)
    } else {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
    }
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
      
        <Route  path="/movies/:id" render={(props, index) => <Movie key={index} {...props} addToSavedList={this.addToSavedList}/>} />
        
      </div>
    );
  }
}
