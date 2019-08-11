import React from 'react'

import { connect } from 'react-redux'
import { saveSelectedCategory } from '../redux/actions.js'

class CategoryList extends React.Component {

  componentDidMount = () => {
    this.props.saveSelectedCategory(this.props.categories[0]);
  }

  saveSelectedCategory = (e) => {
    this.props.saveSelectedCategory(e.target.value)
  }

  render(){
    return (
      <div className="col-md-12">
        <h1 className="text-center">Chuck Norris</h1>
        <img src={process.env.PUBLIC_URL + '/chuck-norris-hero.png'} className="rounded mx-auto d-block" alt="Chuck Norris" height="100" width="100" style={{marginBottom: "20px"}}></img>
        <div className="text-center">
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
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    store: state,
  }
}

const Categories = connect(mapStateToProps, {saveSelectedCategory})(CategoryList)

export default Categories
