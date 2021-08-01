import { connect } from 'react-redux';
import { fetchUserJobs } from '../../actions/job_actions';
import JobBoard from './job_board';

const mapStateToProps = (state) => {
	return {
		jobs: Object.values(state.jobs.user),
		currentUser: state.session.user,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUserJobs: (id) => dispatch(fetchUserJobs(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(JobBoard);
