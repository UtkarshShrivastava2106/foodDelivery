import { INCREMENT_COUNT, DECREMENT_COUNT, INCREMENT_COUNT_BY_10, INCREMENT_COUNT_BY_50, DECREMENT_COUNT_BY_50, DECREMENT_COUNT_BY_10, RESET } from "../ActionTypes";

const initialState = {
  count: 0
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      };

    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1
      };
    case INCREMENT_COUNT_BY_10:
        return{
            ...state,
            count: state.count+10
        }
        case INCREMENT_COUNT_BY_50: 
        return {
            ...state,
            count:state.count+50
        }
        case DECREMENT_COUNT_BY_10: 
        return {
            ...state,
            count:state.count-10
        }
        case DECREMENT_COUNT_BY_50:
            return{
                ...state,
                couht:state.count-50
            }
case RESET:
        return {
            ...state.count,
            count:state.count*0
        }
        default:
      return state;
  }
};
