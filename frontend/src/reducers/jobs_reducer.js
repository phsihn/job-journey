import {
	RECEIVE_JOBS,
	RECEIVE_USER_JOBS,
	RECEIVE_NEW_JOB,
	DELETE_JOB,
	UPDATE_JOB,
} from '../actions/job_actions';

const JobsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
	Object.freeze(state);
	let newState = Object.assign({}, state);
	switch (action.type) {
		case RECEIVE_JOBS:
			newState.all = action.jobs.data;
			return newState;
		case RECEIVE_USER_JOBS:
			newState.user = action.jobs.data;
			return newState;
		case RECEIVE_NEW_JOB:
			newState.user = [action.job.data].concat(state.user);
			console.log(newState.user);
			return newState;
		case DELETE_JOB:
			console.log(action);
			newState.user = state.user.filter(
				(job) => job._id !== action.id.data._id
			);
			return newState;
		case UPDATE_JOB:
			console.log(state.user);
			console.log(action.job);
			const replaceJobIndex = state.user.findIndex(
				(job) => job._id === action.job._id
			);

			newState.user = state.user.slice();
			newState.user[replaceJobIndex] = action.job;
			console.log(newState.user);
			return newState;
		default:
			return state;
	}
};

export default JobsReducer;
