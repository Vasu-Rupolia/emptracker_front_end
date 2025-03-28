import { useDispatch, useSelector } from "react-redux"
import {practiceRedux} from '../../redux/actions/practiceAction';
import {getAllTasksForPractice} from '../../api/practiceApi';

const ReduxPractice = () => {

    const dispatch = useDispatch();
    const data = {
        name: "Wilhelm Stinitz",
        title: "First ever Chess World Champion"
    }

    const getDataFromAPI = async () => {
        const response = await getAllTasksForPractice();
        return response;
    }

    const onClickHandler = async () => {
        const response = await getDataFromAPI();
        dispatch(practiceRedux(response.data));
        console.log("data from API", response);
    }

    const updatedData = useSelector(state => state.reduxpractice.dummy);
    console.log("updateddddd chess data", updatedData);

    return (
        <button type="button" onClick={onClickHandler}>Click Me!</button>
    )
}

export default ReduxPractice;