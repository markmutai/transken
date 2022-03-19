import React from 'react';


export default class NavbarScroll extends React.Component {
    constructor() {
        super();
        this.state = {
            show: true,
            scrollPos: 0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        this.setState({
            scrollPos: document.body.getBoundingClientRect().top,
            show: document.body.getBoundingClientRect().top > this.state.scrollPos
        });
    };

    render() {
        return
        <nav className={this.state.show ? 'block' : 'hidden'}>
            Test
        </nav>;
    }
}