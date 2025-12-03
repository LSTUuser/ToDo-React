import TodoItem from "./TodoItem"

const TodoList = (props) => {

    const {
        tasks = [],
        onDeleteTaskButtonClick,
        onCheckboxTaskClick,
        filteredTasks,
    } = props

    const hasTasks = tasks.length > 0
    const isImptyFilteredTasks = filteredTasks?.length === 0

    if (!hasTasks) {
        return (
            <div className="todo__empty-message">There are no tasks yet</div>
        )
    }

    if (hasTasks && isImptyFilteredTasks) {
        return (
            <div className="todo__empty-message">Tasks not found</div>
        )
    }

    return (
        <ul className="todo__list">
            {(filteredTasks ?? tasks).map((task) => (
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