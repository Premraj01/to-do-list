import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa';

const AddTaskForm = ({ addTask }: any) => {
    const [task, setTask] = useState("");

    const onSubmit = (e: any) => {
        e.preventDefault();
        addTask({
            id: "id" + Math.random().toString(16).slice(2),
            name: task,
            isImp: false
        })
        setTask("")
    }
    return (
        <div>
            <Row className='mt-4'>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Control onChange={(e) => setTask(e.target.value)} type="text" placeholder="Enter task" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col >
                    <Button type='submit' variant="primary" onClick={onSubmit} >
                        <FaPlus />
                        Add Task</Button></Col>
            </Row>
        </div>

    )
}

export default AddTaskForm