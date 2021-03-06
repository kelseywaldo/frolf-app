import { COURSE_LIST_FETCH_SUCCESS,
  COURSE_DETAILS_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = { courses: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COURSE_LIST_FETCH_SUCCESS:
      return { ...state, courses: action.payload };
    case COURSE_DETAILS_FETCH_SUCCESS:
      return {
        ...state,
        courseDetails: action.payload.courseDetails,
        courseDistance: action.payload.distance
      };
    default:
      return state;
  }
};
