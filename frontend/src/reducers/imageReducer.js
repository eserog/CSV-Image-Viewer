import { FETCH_IMAGES, UPLOAD_CSV, TOGGLE_GRAYSCALE, UPDATE_WIDTH, UPDATE_HEIGHT } from '../actions/types';

const initialState = {
	images: [],
  batch_id: null,
  page: null,
  grayscale: false,
  dataInNextSet: false,
  width: null,
  height: null,
  errors: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_IMAGES:
      return {
        ...state,
        images: state.images.concat(action.payload.images),
        page: state.page + 1,
        dataInNextSet: action.payload.data_in_next_set
      }
    case UPLOAD_CSV:
      return {
        ...state,
        images: action.payload.images,
        batchId: action.payload.batch_id,
        page: 1,
        dataInNextSet: action.payload.data_in_next_set
      }
    case TOGGLE_GRAYSCALE:
      return {
        ...state,
        grayscale: action.payload
      }
    case UPDATE_WIDTH:
      return {
        ...state,
        width: action.payload
      }
    case UPDATE_HEIGHT:
      return {
        ...state,
        height: action.payload
      }
    default:
      return state;
  }
}