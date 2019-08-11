import { SELECT_CATEGORY } from './actions'

function chuckNorrisReducer(state = { category: "" } , action = {}){
    switch (action.type){
      case SELECT_CATEGORY:
        return {
          ...state,
          category: action.data
        }
      default:
        return state
    }
  }

export default chuckNorrisReducer