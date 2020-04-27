import Buttons from '../components/Buttons';
import { connect } from "react-redux";
import * as actions from "../actions";
import * as utils from '../utils';


export default connect(
    (state) => state,
    (dispatch) => {
        return {
            onCreate: () => dispatch(actions.create(utils.getRandomColor())),
            onRemove: () => dispatch(actions.remove()),
        }
    })
(Buttons);