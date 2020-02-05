import axios from 'axios';

const URL = "http://localhost:3000";

export function postCsv(csv, options = {}) {
	let url = `${URL}/csv_file`;
  url = urlBuilder(url, options);

  return axios.post(url , csv).then(response => response)
    .catch((error) => error);
}

export function getImages(batch_id, options = {}) {
  const page = options.page || 1;
  let url = `${URL}/pictures/${batch_id}/${page}`;
  url = urlBuilder(url, options);

	return axios.get(url).then(response => response)
    .catch((error) => error);
}

// appends query options
function urlBuilder(url, options) {
  const grayscale = options.grayscale === true ? 1 : 0;
  const width = options.width || null;
  const height = options.height || null;

  return url.concat(`?grayscale=${grayscale}&width=${width}&height=${height}`);
}