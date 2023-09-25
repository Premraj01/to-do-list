import { Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg='primary' variant='primary' expand='lg'>
                <Navbar.Brand style={{
                    color: 'white'
                }}> To Do List </Navbar.Brand>
            </Navbar>
        </header>
    )
}

export default Header