import React from "react";
import { getInitialData } from "../utils";
import NoteList from "./NoteList";
import Header from "./Header";
import FormInput from "./FormInput";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      keyword: "", 
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this); 
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    const createdAt = new Date().toISOString();
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt,
            archived: false,
          },
        ],
      };
    });
  }

  onSearchHandler(keyword) {
    this.setState({ keyword });
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    );

    return (
      <>
        <Header onSearch={this.onSearchHandler} />
        <div className="note-app__body">
          <FormInput addNotes={this.onAddNoteHandler} />
          <h2>Catatan Aktif</h2>
          <NoteList notes={filteredNotes} onDelete={this.onDeleteHandler} />
        </div>
      </>
    );
  }
}

export default NotesApp;