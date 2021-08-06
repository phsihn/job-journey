import { connect } from 'react-redux';
import JobCategoryHeader from './job_category_header';

const mapStateToProps = (state) => {
	return { jobs: Object.values(state.jobs.user) };
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(JobCategoryHeader);
