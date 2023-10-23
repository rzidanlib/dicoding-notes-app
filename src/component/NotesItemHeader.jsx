import { showFormattedDate } from "../utils";

function NotesItemHeader({ title, createdAt }) {
  return (
    <div className="notes-header">
      <p className="notes-title">{title}</p>
      <span className="notes-date">{showFormattedDate(createdAt)}</span>
    </div>
  );
}

export default NotesItemHeader;
