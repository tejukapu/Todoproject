import './AddTodoForm.css';
export default function AddTodoForm({
    todo,
    onAddFormSubmit,
    onAddInputChange
  }) {
    return (
      <form onSubmit={onAddFormSubmit}>
        <header>
        <h2 className="header">What You Want To Do Today</h2>
        </header>&nbsp; &nbsp;
        <label htmlFor="todo"></label>
        <input className="input"
          name="todo"
          type="text"
          placeholder="Create new todo"
          value={todo}
          onChange={onAddInputChange}
        />&nbsp;
        <button className="button" type="submit">ADD&nbsp;TODO</button>
      </form>
    );
  }
  