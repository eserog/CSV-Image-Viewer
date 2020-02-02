import axios from 'axios';

const URL = "http://localhost:3000";

export function postCsv(csv, grayscale = false) {
	const url = grayscale ? `${URL}/csv_file?grayscale=1` : `${URL}/csv_file`;

  return axios.post(url , csv).then(response => response)
    .catch((error) => error);
}

export function getImages(batch_id, page = 1, grayscale = false) {
	const url = grayscale ? `${URL}/pictures/${batch_id}/${page}?grayscale=1` : `${URL}/pictures/${batch_id}/${page}`;
	
	return axios.get(url).then(response => response)
    .catch((error) => error);
}