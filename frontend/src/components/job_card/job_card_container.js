import { connect } from 'react-redux';
import { removeJob } from '../../actions/job_actions';
import JobCard from './job_card';

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeJob: (id) => dispatch(removeJob(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(JobCard);
