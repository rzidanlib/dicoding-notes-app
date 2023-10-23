import NotesItem from "./NotesItem";

function NotesListUnarchive({ notes, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {notes.length !== 0 ? (
        notes
          .sort((a, b) => b.id - a.id)
          .map((note) => (
            <NotesItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              onArchive={onArchive}
              {...note}
            />
          ))
      ) : (
        <p className="notes-item_empty">Tidak ada catatan.</p>
      )}
    </div>
  );
}

export default NotesListUnarchive;
