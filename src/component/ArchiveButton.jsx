function ArchiveButton({ id, archived, onArchive }) {
  return (
    <button className="notes-btn_archived" onClick={() => onArchive(id)}>
      {archived ? "Unarchive" : "Archive"}
    </button>
  );
}

export default ArchiveButton;
