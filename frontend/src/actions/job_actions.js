import {
	getJobs,
	getUserJobs,
	writeJob,
	deleteJobAxios,
} from '../util/job_api_util';

export const RECEIVE_JOBS = 'RECEIVE_JOBS';
export const RECEIVE_USER_JOBS = 'RECEIVE_USER_JOBS';
export const RECEIVE_NEW_JOB = 'RECEIVE_NEW_JOB';
export const DELETE_JOB = 'DELETE_JOB';

export const receiveJobs = (jobs) => ({
	type: RECEIVE_JOBS,
	jobs,
});

export const receiveUserJobs = (jobs) => ({
	type: RECEIVE_USER_JOBS,
	jobs,
});

export const receiveNewJob = (job, jobs) => ({
	type: RECEIVE_NEW_JOB,
	job,
	jobs,
});

export const deleteJob = (id) => ({
	type: DELETE_JOB,
	id,
});

export const fetchJobs = () => (dispatch) =>
	getJobs()
		.then((jobs) => dispatch(receiveJobs(jobs)))
		.catch((err) => console.log(err));

export const fetchUserJobs = (id) => (dispatch) =>
	getUserJobs(id)
		.then((jobs) => dispatch(receiveUserJobs(jobs)))
		.catch((err) => console.log(err));

export const composeJob = (data) => (dispatch) =>
	writeJob(data)
		.then((job) => dispatch(receiveNewJob(job)))
		.catch((err) => console.log(err));

export const removeJob = (id) => (dispatch) =>
	deleteJobAxios(id)
		.then((id) => dispatch(deleteJob(id)))
		.catch((err) => console.log(err));
