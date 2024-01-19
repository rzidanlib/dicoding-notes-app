import React from 'react';
import PropTypes from 'prop-types';

function ArchiveButton({ id, archived, onArchive }) {
  return (
    <button className='note-item__archive-button' onClick={() => onArchive(id)}>
      {archived ? 'Aktifkan' : 'Arsipkan'}
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default ArchiveButton;
