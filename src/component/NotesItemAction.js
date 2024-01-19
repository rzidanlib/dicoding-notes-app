import React from 'react';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
import PropTypes from 'prop-types';

function NotesItemAction({ id, onDelete, onArchive, archived }) {
  return (
    <div className='note-item__action'>
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
    </div>
  );
}

NotesItemAction.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default NotesItemAction;
