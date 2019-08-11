import React from 'react';
import './App.css';
import Categories from './components/CategoryList.js'
import Joke from './components/RandomJoke.js'

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_CATEGORIES = gql`
  query {
    categories
  }
`;

const App = () => (

    <header className="jumbotron my-4">
        <Query query={GET_CATEGORIES}>
          {({ data, loading, error}) => {
            if (loading) return <div>Loading ...</div>;
            if (error) return `Error! ${error}`;

            return (
              <Categories categories={data.categories} />
            );
          }}
        </Query>
        <hr className="my-4" />
        <Joke />
    </header>
)

export default App;



