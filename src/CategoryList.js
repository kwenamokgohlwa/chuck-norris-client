import React from 'react'

import { connect } from 'react-redux'
import { saveSelectedCategory } from './redux/actions.js'

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_JOKE = gql`
  query joke($category: String!) {
    joke(category: $category) {
      value
    }
  }
`;

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        category: this.props.categories[0]
      }
  }

  componentDidMount = () => {
    this.props.saveSelectedCategory(this.state.category);
  }

  saveSelectedCategory = (e) => {
    this.props.saveSelectedCategory(e.target.value)
  }

  render(){
    return (
      <div>
        <div className="categories">
          <select onChange={(e) => this.saveSelectedCategory(e)}>
            {this.props.categories.map((category, index) => {
               return (  
               <option key={index} value={category}>
               {category}
               </option>
               );
            })}
          </select>
        </div>
        <Query query={GET_JOKE} variables={{ category: this.props.category }}>
          {({ data, loading, error}) => {
            if (loading || !data.joke) return <div>Loading ...</div>;
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

const Categories = connect(mapStateToProps, {saveSelectedCategory})(CategoryList)

export default Categories
