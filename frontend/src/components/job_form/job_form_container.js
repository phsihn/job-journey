import { connect } from 'react-redux';
import { composeJob, editJob } from '../../actions/job_actions';
import JobForm from './job_form';

const mapStateToProps = (state) => {
	return {
		currentUser: state.session.user,
		newJob: state.jobs.new,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		composeJob: (data) => dispatch(composeJob(data)),
		editJob: (data) => dispatch(editJob(data)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(JobForm);
