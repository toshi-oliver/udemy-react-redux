import React, { Component } from "react"; // Reactモジュールがないと、jsxを使えない
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { getEvent, deleteEvent, putEvent } from "../actions";

class EventsShow extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this); //TODO: bindってなんぞ
    this.onDeleteClick = this.onDeleteClick.bind(this); //TODO:
  }
  // NOTE: touchedはredux-formのオプションで、touched状態を見てエラーの文言の表示を決める。
  renderField(field) {
    const {
      input,
      label,
      type,
      meta: { touched, error },
    } = field;

    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
        {/* TODO: touchが何か確認する。 */}
      </div>
    );
  }

  async onDeleteClick() {
    const { id } = this.props.match.params; //TODO: matchってなんぞ
    await this.props.deleteEvent(id);
    this.props.history.push("/");
  }

  async onSubmit(values) {
    // await this.props.postEvent(values);
    this.props.history.push("/"); //TODO: history？履歴？
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field
            label="Title"
            name="title"
            type="text"
            component={this.renderField}
          />
        </div>
        <div>
          <Field
            label="Body"
            name="body"
            type="text"
            component={this.renderField}
          />
        </div>

        <div>
          <input
            type="submit"
            value="Submit"
            disabled={pristine || submitting}
          />
          <Link to="/">Cancel</Link>
          <Link to="/" onClick={this.onDeleteClick}>
            Delete
          </Link>
        </div>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.title) errors.title = "Enter a title, please.";
  if (!values.body) errors.body = "Enter a body, please.";

  return errors;
};

const mapDispatchToProps = { deleteEvent };
// const mapDispatchToProps = (dispatch) => ({
//   readEvents: () => dispatch(readEvents()),
// });
//TODO: connectについてもう一度調べる
export default connect(
  null,
  mapDispatchToProps
)(reduxForm({ validate, form: "eventShowForm" })(EventsShow));
