import axios from 'axios';

export default ({method, url, data}, resolve = data => console.log(data), reject = err => console.log(err)) => {
	axios({
		method, url, data, headers: {
			'Content-type': 'application/json',
			'X-Requested-With': 'XMLHttpRequest'
		}
	}).then(response => {
		resolve(response.data);
		return response.data;
	}).catch(error => {
		reject(error.response);
		return error.response;
	});
}