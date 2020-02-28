import CounterList from '../components/CounterList';
import { connect } from "react-redux";
import * as actions from "../actions";
import * as utils from '../utils';


export default connect(
    (state) => {
        return {
            counters: state.counterData.toJS().counters
        }
    },
    (dispatch) => {
        return {
            onIncrement: (index) => dispatch(actions.increment(index)),
            onDecrement: (index) => dispatch(actions.decrement(index)),
            onSetColor: (index) => {
                const color = utils.getRandomColor();
                dispatch(actions.setColor({color, index}));
            }
        }
    })
(CounterList)