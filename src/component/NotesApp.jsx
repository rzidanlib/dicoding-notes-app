import React from "react";
import { getInitialData } from "../utils";
import Navbar from "./Navbar";
import NotesInput from "./NotesInput";
import NotesContent from "./NotesContent";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      search: props.keyword || "",
      activeTab: "tab1",
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onHandleChangeTab = this.onHandleChangeTab.bind(this);
    this.onToggleArchiveHandler = this.onToggleArchiveHandler.bind(this);
  }

  onSearchChange(search) {
    this.setState(() => {
      return {
        search,
      };
    });
  }

  onToggleArchiveHandler(id) {
    const notes = [...this.state.notes];
    const notesIndex = this.state.notes.findIndex((note) => note.id === id);

    if (notes[notesIndex].archived === true) {
      notes[notesIndex].archived = false;
    } else {
      notes[notesIndex].archived = true;
    }

    this.setState({ notes });
  }

  onHandleChangeTab(tab) {
    this.setState({ activeTab: tab });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date(),
          },
        ],
      };
    });
  }

  render() {
    const notes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.search.toLowerCase())
    );

    const notesArchive = notes.filter((note) => {
      return note.archived === true;
    });
    const notesUnarchive = notes.filter((note) => {
      return note.archived === false;
    });

    const { activeTab } = this.state;

    return (
      <div className="container">
        <Navbar search={this.state.search} onSearch={this.onSearchChange} />
        <section className="content">
          <NotesInput addNotes={this.onAddNotesHandler} />

          <NotesContent
            notes={this.state.notes}
            notesArchive={notesArchive}
            notesUnarchive={notesUnarchive}
            activeTab={activeTab}
            onDelete={this.onDeleteHandler}
            onHandleChangeTab={this.onHandleChangeTab}
            onArchive={this.onToggleArchiveHandler}
          />
        </section>
      </div>
    );
  }
}

export default NotesApp;
