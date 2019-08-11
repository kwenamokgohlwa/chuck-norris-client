import React from 'react'

import { connect } from 'react-redux'

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_JOKE = gql`
  query joke($category: String!) {
    joke(category: $category) {
      value
    }
  }
`;

class RandomJoke extends React.Component {
  render(){
    return (
      <div>
        <Query query={GET_JOKE} variables={{ category: this.props.category }}>
          {({ data, loading, error}) => {
            if (loading) return <div>Loading ...</div>;
            if (error) return `Error! ${error}`;

            return (
              <div>
                {data.joke.value}
              </div>
            );
          }}
        </Query>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    store: state,
    category: state.category,
  }
}

const Joke = connect(mapStateToProps)(RandomJoke)

export default Joke