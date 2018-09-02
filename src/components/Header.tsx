import * as React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Header: React.StatelessComponent<{}> = () => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">dankNotDank</Link>
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>
    );
}
