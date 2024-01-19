import React from 'react';
import { addNote } from '../utils/local-data';
import NotesInput from '../component/NotesInput';
import { useNavigate } from 'react-router-dom';

function AddPage() {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNote(note);
    navigate('/');
  }

  return <NotesInput addNote={onAddNoteHandler} />;
}

export default AddPage;
