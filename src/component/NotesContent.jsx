import NotesListArchive from "./NotesListArchive";
import NotesListUnarchive from "./NotesListUnarchive";

function NotesContent({
  notesArchive,
  notesUnarchive,
  onDelete,
  activeTab,
  onHandleChangeTab,
  onArchive,
}) {
  return (
    <div className="notes-content">
      <div className="nav-tab">
        <div
          className={`${activeTab === "tab1" ? "active" : ""} unarchived`}
          onClick={() => onHandleChangeTab("tab1")}
        >
          Unarchived
        </div>
        <div
          className={`${activeTab === "tab2" ? "active" : ""} archived`}
          onClick={() => onHandleChangeTab("tab2")}
        >
          Archive
        </div>
      </div>

      {activeTab === "tab1" && (
        <NotesListUnarchive
          notes={notesUnarchive}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      )}
      {activeTab === "tab2" && (
        <NotesListArchive
          notes={notesArchive}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      )}
    </div>
  );
}

export default NotesContent;
