import { Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';

export default function Navbar() {
    return (
        <BootstrapNavbar expand="sm">
            <BootstrapNavbar.Brand href="">Donversity</BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav"></BootstrapNavbar.Toggle>
            <BootstrapNavbar.Collapse>
                <Nav>
                    <Nav.Link>Link 1</Nav.Link>
                    <Nav.Link>Link 2</Nav.Link>
                </Nav>
            </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
    )
}