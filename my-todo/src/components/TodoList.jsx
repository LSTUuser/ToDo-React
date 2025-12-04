import TodoItem from "./TodoItem"
import { memo } from "react"

const TodoList = (props) => {
    console.log(`TodoList`)
    const {
        tasks = [],
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
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
                    ref={task.id === firstIncompleteTaskId ? firstIncompleteTaskRef : null}
                    {...task}
                    onDeleteTaskButtonClick={onDeleteTaskButtonClick}
                    onCheckboxTaskClick={onCheckboxTaskClick}
                />
            ))}
        </ul>
    )
}

export default memo(TodoList)