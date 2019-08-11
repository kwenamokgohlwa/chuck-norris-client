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

    <div className="jumbotron">
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 offset-3 float-md-center">
        <Query query={GET_CATEGORIES}>
          {({ data, loading, error}) => {
            if (loading || !data.categories) return <div>Loading ...</div>;
            if (error) return `Error! ${error}`;

            return (
              <Categories categories={data.categories} />
            );
          }}
        </Query>
        <hr className="my-4" />
        <Joke />
      </div>
    </div>
)

export default App;



