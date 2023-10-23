import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";

function NotesItemFooter({ id, onDelete, onArchive, archived }) {
  return (
    <div className="set-right notes-footer">
      <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default NotesItemFooter;
