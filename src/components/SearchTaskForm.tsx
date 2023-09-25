
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'

const SearchTaskForm = () => {
    return (
        <div>
            <Row className='mt-4'>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Control type="text" placeholder="Enter task" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col >
                    <Button type='submit' variant="primary">
                        <FaSearch />
                        Search</Button></Col>
            </Row>
        </div>
    )
}

export default SearchTaskForm