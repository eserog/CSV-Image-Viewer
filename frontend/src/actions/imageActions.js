import { FETCH_IMAGES, UPLOAD_CSV, TOGGLE_GRAYSCALE, UPDATE_HEIGHT, UPDATE_WIDTH } from './types';
import { getImages, postCsv } from '../services/CsvService';

export const fetchImages = (batch_id, options) => dispatch => {
  debugger;
  getImages(batch_id, options).then(response => {
    dispatch({
      type: FETCH_IMAGES,
      payload: response.data
    })
  });
}

export const uploadCsv = (file, options) => dispatch => {
  postCsv(file, options).then(response => {
    dispatch({
      type: UPLOAD_CSV,
      payload: response.data
    })
  });
}

export const toggleGrayscale = (grayscale) => dispatch => {
  dispatch({
    type: TOGGLE_GRAYSCALE,
    payload: !grayscale
  })
}

export const updateWidth = (width) => dispatch => {
  dispatch({
    type: UPDATE_WIDTH,
    payload: width
  })
}

export const updateHeight = (height) => dispatch => {
  dispatch({
    type: UPDATE_HEIGHT,
    payload: height
  })
}