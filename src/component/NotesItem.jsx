import NotesItemBody from "./NotesItemBody";
import NotesItemFooter from "./NotesItemFooter";
import NotesItemHeader from "./NotesItemHeader";

function NotesItem({
  id,
  title,
  body,
  createdAt,
  archived,
  onArchive,
  onDelete,
}) {
  return (
    <div className="card notes">
      <NotesItemHeader title={title} createdAt={createdAt} />
      <hr />
      <NotesItemBody body={body} />
      <NotesItemFooter
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        archived={archived}
      />
    </div>
  );
}

export default NotesItem;
