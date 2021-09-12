import { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="movies-header">
                <div className="nav-wrapper">
                    <a href="!#" className="brand-logo">React-movies</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><label></label></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;