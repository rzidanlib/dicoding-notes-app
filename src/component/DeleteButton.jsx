function DeleteButton({ id, onDelete }) {
  return (
    <button className="notes-btn_delete" onClick={() => onDelete(id)}>
      Delete
    </button>
  );
}

export default DeleteButton;
