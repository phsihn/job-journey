import { connect } from 'react-redux';
import { composeJob } from '../../actions/job_actions';
import JobForm from './job_form';

const mapStateToProps = (state) => {
	return {
		currentUser: state.session.user,
		newJob: state.jobs.new,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		composeJob: (data, id) => dispatch(composeJob(data, id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(JobForm);
