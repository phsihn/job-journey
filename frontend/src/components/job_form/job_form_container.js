import { connect } from 'react-redux';
import JobForm from './job_form';

const mapStateToProps = (state) => {
	return {
		//errors: state.errors.session,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		//login: (user) => dispatch(login(user)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(JobForm);
