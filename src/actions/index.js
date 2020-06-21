import axios from "axios";

export const READ_EVENTS = "READ_EVENTS"; // TODO: この書き方がわからん
export const CREATE_EVENT = "CREATE_EVENT"; // TODO: この書き方がわからん
export const DELETE_EVENT = "DELETE_EVENT"; // TODO: この書き方がわからん

const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1";
const QUERYSTRING = "?token=token123";
// NOTE: 本来ならreadEventsは非同期処理が許されないが、redux-thunkで可能になる。
export const readEvents = () => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
  dispatch({ type: READ_EVENTS, response });
};

export const postEvent = (values) => async (dispatch) => {
  const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values);
  dispatch({ type: CREATE_EVENT, response });
};

export const deleteEvent = (id) => async (dispatch) => {
  const response = await axios.delete(`${ROOT_URL}/events${id}{QUERYSTRING}`);
  dispatch({ type: DELETE_EVENT, response, id });
};
