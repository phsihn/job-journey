import axios from 'axios';

export const getJobs = () => {
	return axios.get('/api/jobs');
};

export const getUserJobs = (id) => {
	return axios.get(`/api/jobs/user/${id}`);
};

export const writeJob = (data) => {
	return axios.post('/api/jobs/', data);
};

export const deleteJobAxios = (id) => {
	return axios.post(`/api/jobs/delete/${id}`);
};

export const editJobAxios = (data) => {
	return axios.post(`/api/jobs/edit/${data._id}`, data);
};
