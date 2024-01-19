import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NotesList from '../component/NotesList';
import SearchBar from '../component/SearchBar';
import PropTypes from 'prop-types';
import {
  getArchivedNotes,
  deleteNote,
  unarchiveNote,
} from '../utils/local-data';

function ArchivePageWrapper() {
  const [searchParams, setSeacrhParams] = useSearchParams();

  const keyword = searchParams.get('keyword') || '';

  function changeSearchParams(keyword) {
    setSeacrhParams({ keyword });
  }

  return (
    <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordHandler = this.onKeywordHandler.bind(this);
    this.onToggleArchiveHandler = this.onToggleArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        notes: getArchivedNotes(),
      };
    });
  }

  onKeywordHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  onToggleArchiveHandler(id) {
    unarchiveNote(id);

    this.setState(() => {
      return {
        notes: getArchivedNotes(),
      };
    });
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <>
        <header className='header-title'>
          <h1>Catatan Arsip</h1>
          <SearchBar
            keyword={this.state.keyword}
            keywordChange={this.onKeywordHandler}
          />
        </header>

        {this.state.notes.length !== 0 ? (
          <section className='homepage'>
            <NotesList
              notes={notes}
              onDelete={this.onDeleteHandler}
              onArchive={this.onToggleArchiveHandler}
            />
          </section>
        ) : (
          <section className='notes-list-empty'>
            <p className='notes-list__empty'>Tidak ada catatan</p>
          </section>
        )}
      </>
    );
  }
}

ArchivePage.propTypes = {
  defaultKeyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default ArchivePageWrapper;
