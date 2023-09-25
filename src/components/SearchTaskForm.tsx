
import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'

const SearchTaskForm = ({ searchTask }: any) => {
    const [query, setQuery] = useState("")
    const handleSearch = (e: any) => {
        e.preventDefault()
        console.log(query);
        searchTask(query)
    }
    return (
        <div>
            <Row className='mt-4'>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Control onChange={(e) => {
                                setQuery(e.target.value)
                            }} type="text" placeholder="Search task" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col >
                    <Button type='submit' variant="primary" onClick={handleSearch}>
                        <FaSearch />
                        Search</Button>
                </Col>
            </Row>
        </div>
    )
}

export default SearchTaskForm