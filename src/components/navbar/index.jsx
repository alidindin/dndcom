import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from './nav.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
let cx = classNames.bind(styles);

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        };
    }

    // Adds an event listener when the component is mount.
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    // Remove the event listener when the component is unmount.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    // Hide or show the menu.
    handleScroll = () => {
        const { prevScrollpos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };

    render() {
        let className = cx({
            navbar: true,
            navbarHidden: !this.state.visible
        });
        return (
            <nav
                className={className}
            >
                <a href="index.html" className={styles.logo}><strong>ALI DIN DIN</strong></a>
                <ul className={styles.ulClass}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/">About</Link>
                    </li>
                    <li>
                        <Link to="/portfolio/">Portfolio</Link>
                    </li>
                </ul>

            </nav>
        );
    }
}
