import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      charLimit: 50,
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
    this.props.addNotes(this.state);
    this.setState({
      title: "",
      body: "",
    });
  }

  render() {
    return (
      <div className="form-content">
        <form onSubmit={this.onSubmitHandler} className="card">
          <p className="input-head-title">Input Notes</p>
          <input
            type="text"
            value={this.state.title}
            onChange={this.onTitleChange}
            className="input-title"
            placeholder="Input title..."
          />
          <p className="input-title_info">Maks.{this.state.charLimit}</p>
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
