
import { Container, Row, Col, } from 'react-bootstrap'
import TaskList from '../components/TaskList'
import useLocalStorage from '../hooks/useLocalStorage'
import AddTaskForm from '../components/AddTaskForm'
import SearchTaskForm from '../components/SearchTaskForm'



const ToDoList = () => {

    const [taskList, setTaskList] = useLocalStorage('tasks-list', [])

    const addTask = (task: any) => {
        setTaskList((prevState: any) => [...prevState, task])
    }

    const deleteTask = (id: any) => {
        console.log(id);
        setTaskList((prevState: any) => prevState.filter((task: any) => task.id !== id));
    }

    const updateTask = (task: any) => {
        setTaskList((prevState: any) => prevState.map((t: any) => (
            t.id === task.id
                ? { ...t, name: task.name }
                : t
        )))
    }

    const markAsImportant = (task: any) => {
        console.log(task);
        setTaskList((prevState: any) => prevState.map((t: any) => (
            t.id === task.id
                ? { ...task, isImp: task.isImp }
                : t
        )))
    }
    const markAsCompleted = (task: any) => {
        console.log(task);
        setTaskList((prevState: any) => prevState.map((t: any) => (
            t.id === task.id
                ? { ...task, isCompleted: task.isCompleted }
                : t
        )))
    }

    return (
        <Container fluid='md'>
            <Row>
                <Col>   <AddTaskForm addTask={addTask} /></Col>
                <Col>
                    <SearchTaskForm />
                </Col>
            </Row>
            <TaskList tasksList={taskList} deleteTask={deleteTask} updateTask={updateTask} markAsImportant={markAsImportant} markAsCompleted={markAsCompleted} />
        </Container >
    )
}

export default ToDoList