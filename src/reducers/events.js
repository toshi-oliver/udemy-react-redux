import _ from "lodash";
import { READ_EVENTS } from "../actions";

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, "id"); // NOTE:全てのデータをスキャンしなくても済むようにデータを修正する
    default:
      return events;
  }
};
