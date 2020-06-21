import _ from "lodash";
import { READ_EVENTS, DELETE_EVENT } from "../actions";

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, "id"); // NOTE:全てのデータをスキャンしなくても済むようにデータを修正する
    case DELETE_EVENT:
      delete events[action.id]; // TODO: 中身を確認したい。
      return { ...events };
    default:
      return events;
  }
};
