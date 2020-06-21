import React, { Component } from "react"; // Reactモジュールがないと、jsxを使えない
import { connect } from "react-redux";
import _ from "lodash";
import { Link } from "react-router-dom";
import { readEvents } from "../actions";

class EventsIndex extends Component {
  //外部のAPIサーバーに対してイベント取得処理を実行する。
  componentDidMount() {
    this.props.readEvents();
  }

  renderEvents() {
    return _.map(this.props.events, (event) => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ));
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>

          <tbody>{this.renderEvents()}</tbody>
        </table>

        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ events: state.events });
const mapDispatchToProps = { readEvents };
// const mapDispatchToProps = (dispatch) => ({
//   readEvents: () => dispatch(readEvents()),
// });

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);