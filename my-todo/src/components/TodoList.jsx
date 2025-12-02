import TodoItem from "./TodoItem"

const TodoList = (props) => {

    const {
        tasks = [],
        onDeleteTaskButtonClick,
        onCheckboxTaskClick,
    } = props

    const hasTasks = true

    if (!hasTasks) {
        return (
            <div className="todo__empty-message"></div>
        )
    }

    return (
        <ul className="todo__list">
            {tasks.map((task) => (
                <TodoItem
                    className="todo__item"
                    key={task.id}
                    {...task}
                    onDeleteTaskButtonClick={onDeleteTaskButtonClick}
                    onCheckboxTaskClick={onCheckboxTaskClick}
                />
            ))}
        </ul>
    )
}

export default TodoList