import React from 'react';
import './App.css';
import Categories from './CategoryList.js'

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_CATEGORIES = gql`
  query {
    categories
  }
`;

const App = () => (
  <div>
    <Query query={GET_CATEGORIES}>
      {({ data, loading, error}) => {
        if (loading || !data.categories) return <div>Loading ...</div>;
        if (error) return `Error! ${error}`;

        return (
          <Categories categories={data.categories} />
        );
      }}
    </Query>
  </div>
)

export default App;



