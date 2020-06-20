import axios from "axios";

export const READ_EVENTS = "READ_EVENTS"; // TODO: この書き方がわからん

const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1";
const QUERYSTRING = "?token=token123";
// NOTE: 本来ならreadEventsは非同期処理が許されないが、redux-thunkで可能になる。
export const readEvents = () => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
  dispatch({ type: READ_EVENTS, response });
};
