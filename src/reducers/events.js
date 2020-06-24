import _ from "lodash";
import {
  CREATE_EVENT,
  READ_EVENTS,
  READ_EVENT,
  DELETE_EVENT,
  UPDATE_EVENT,
} from "../actions";

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data;
      return { ...events, [data.id]: data };
    case READ_EVENTS:
      return _.mapKeys(action.response.data, "id"); // NOTE:全てのデータをスキャンしなくても済むようにデータを修正する
    case DELETE_EVENT:
      delete events[action.id]; // TODO: 中身を確認したい。
      return { ...events };
    default:
      return events;
  }
};
