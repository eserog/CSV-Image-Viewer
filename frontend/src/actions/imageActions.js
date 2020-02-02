import { FETCH_IMAGES, UPLOAD_CSV, TOGGLE_GRAYSCALE } from './types';
import { getImages, postCsv } from '../services/CsvService';

export const fetchImages = (batch_id, page_id, grayscale = false) => dispatch => {
  getImages(batch_id, page_id, grayscale).then(response => {
    dispatch({
      type: FETCH_IMAGES,
      payload: response.data
    })
  });
}

export const uploadCsv = (file, grayscale = false) => dispatch => {
  postCsv(file, grayscale).then(response => {
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