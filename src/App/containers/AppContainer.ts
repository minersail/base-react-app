import { connect } from 'react-redux';
import { State } from '../utils/types';
import { deleteThing } from '../actions/actions';
import App from '../App';

const mapStateToProps = (state: State) => ({
	stuff: state.stuff,
});

const mapDispatchToProps = (dispatch: any) => ({
	deleteThing: (thingIndex: number) => {
		dispatch(deleteThing(thingIndex));
	}
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;