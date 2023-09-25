import React, { Fragment, useEffect, useState } from 'react'
import { Stack, Card, ButtonGroup, Button, Modal, Form } from 'react-bootstrap'
import { FaEdit, FaTrash, FaStar, FaCheck } from "react-icons/fa"

const TaskList = ({ tasksList, deleteTask, updateTask, markAsImportant, markAsCompleted }: any) => {
    const [show, setShow] = useState(false);
    const [showDeleteDialogue, setShowDeleteDialogue] = useState(false);
    const [task, setTask] = useState<any>({})

    const handleClose = () => setShow(false);
    const closeDeleteDialogue = () => setShowDeleteDialogue(false)
    const handleSubmit = (e: any) => {
        setShow(false)
        e.preventDefault();
        updateTask({ ...task, name: task.name })
    }

    const handleImportant = (e: any, task: any) => {
        e.preventDefault();
        markAsImportant({ ...task, isImp: !task.isImp })
    }

    const handleCompletedTask = (e: any, task: any) => {
        e.preventDefault();
        markAsCompleted({ ...task, isCompleted: !task.isCompleted })
    }

    return (
        <Fragment>
            {tasksList.map((task: any, i: number) => (

                !task.isCompleted ?
                    <Card body className='mb-2' key={i}>
                        <Card.Text>
                            {
                                task.isImp ? <Fragment><FaStar /> {task.name}</Fragment> : <Fragment> {task.name}</Fragment>
                            }
                        </Card.Text>

                        <ButtonGroup className="m-1" aria-label="First group">
                            <Button onClick={() => {
                                setShow(true)
                                setTask(task)
                            }}>
                                <FaEdit />
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup className="m-1" aria-label="First group">
                            <Button onClick={() => { setShowDeleteDialogue(true); setTask(task) }} variant='danger'>
                                <FaTrash />
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup className="m-1" aria-label="First group">
                            <Button onClick={(e) => handleImportant(e, task)} variant='warning'>
                                <FaStar />
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup className="m-1" aria-label="First group">
                            <Button onClick={(e) => handleCompletedTask(e, task)} variant='success'>
                                <FaCheck />
                            </Button>
                        </ButtonGroup>

                    </Card> : <Card body className='mb-2' key={i}>
                        <Card.Text
                            style={{
                                textDecorationLine: 'line-through'
                            }}
                        >
                            {
                                task.isImp ? <Fragment><FaStar /> {task.name}</Fragment> : <Fragment> {task.name}</Fragment>
                            }
                        </Card.Text>
                    </Card>



            ))
            }
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            > <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Control
                                    value={task.name}
                                    onChange={(e) => {
                                        setTask({
                                            id: task.id,
                                            name: e.target.value
                                        })
                                    }} type="text" placeholder="Enter task" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            > <Modal show={showDeleteDialogue} onHide={closeDeleteDialogue}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Are you sure you want to delete the task?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeDeleteDialogue}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => {
                            setShowDeleteDialogue(false)
                            console.log(task);
                            deleteTask(task.id)
                        }}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </Fragment >

    )
}

export default TaskList