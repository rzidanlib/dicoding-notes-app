import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      charLimit: 50,
      errors: {},
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChange(event) {
    if (this.state.charLimit >= 0 && event.target.value.length <= 50) {
      this.setState(() => {
        return {
          title: event.target.value,
          charLimit: 50 - event.target.value.length,
        };
      });
    }
  }

  onBodyChange(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    const { title, body } = this.state;
    const errors = {};
    if (!title.trim()) {
      errors.title = "Notes Title is required.";
    }
    if (!body.trim()) {
      errors.body = "Notes Body is required.";
    }

    if (Object.keys(errors).length === 0) {
      this.props.addNotes(this.state);
      this.setState({
        title: "",
        body: "",
      });
      this.setState({ charLimit: 50, errors: {} });
      alert("Form submitted successfully.");
    } else {
      this.setState({ errors });
      alert("Form submission failed. Please check the errors.");
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="form-content">
        <form onSubmit={this.onSubmitHandler} className="card">
          <p className="input-head-title">Input Notes</p>
          <p className="input-title_info">Maks.{this.state.charLimit}</p>
          <input
            type="text"
            value={this.state.title}
            onChange={this.onTitleChange}
            className="input-title"
            placeholder="Input title..."
          />
          {errors.title && <p className="input-text_error">{errors.title}</p>}

          <textarea
            name="notes"
            id=""
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.onBodyChange}
            className="input-body"
            placeholder="Input notes..."
          ></textarea>
          {errors.body && <p className="input-text_error">{errors.body}</p>}

          <div className="set-right">
            <button type="submit" className="input-btn">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NotesInput;
