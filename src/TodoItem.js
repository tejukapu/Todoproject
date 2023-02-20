export default function TodoItem({
  todo,
  onEditClick,
  onDeleteClick
}) {
  return (
    <h3 key={todo.id}>
      {todo.text}&nbsp;
        <button className="editbutton" onClick={() => onEditClick(todo)}>Edit</button>&nbsp;
        <button className="editbutton" onClick={() => onDeleteClick(todo.id)}>Delete</button>
    </h3>
  );
}
