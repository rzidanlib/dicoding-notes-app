import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NotesList from '../component/NotesList';
import SearchBar from '../component/SearchBar';
import { getActiveNotes, deleteNote, archiveNote } from '../utils/local-data';
import PropTypes from 'prop-types';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword') || '';

  function changeSearchParam(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParam} />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
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
        notes: getActiveNotes(),
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
    archiveNote(id);

    this.setState(() => {
      return {
        notes: getActiveNotes(),
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
          <h1>Catatan Aktif</h1>
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

HomePage.propTypes = {
  defaultKeyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
