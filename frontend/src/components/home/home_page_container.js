import { connect } from 'react-redux';
import HomePage from './home_page';

const mapStateToProps = (state) => {
	return {
		//tweets: Object.values(state.tweets.all),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		//fetchTweets: () => dispatch(fetchTweets()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
