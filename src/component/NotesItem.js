import React from 'react';
import PropTypes from 'prop-types';
import NotesItemAction from './NotesItemAction';
import NotesItemContent from './NotesItemContent';

function NotesItem({
  title,
  createdAt,
  body,
  id,
  onDelete,
  onArchive,
  archived,
}) {
  return (
    <div className='note-item'>
      <NotesItemContent
        id={id}
        title={title}
        createdAt={createdAt}
        body={body}
      />
      <NotesItemAction
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        archived={archived}
      />
    </div>
  );
}

NotesItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NotesItem;
