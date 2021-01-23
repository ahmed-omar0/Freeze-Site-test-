import React, { Component } from 'react';
import logo from "../../images/logo.png";

class Navbar extends Component{
    constructor(props){
        super(props)
        this.iconRef1 = React.createRef();
        this.iconRef2 = React.createRef();
        this.iconRef3 = React.createRef();
        this.menuRef = React.createRef();
    }
    menuIcons = () => {
        this.iconRef1.current.classList.toggle('open');
        this.iconRef2.current.classList.toggle('open');
        this.iconRef3.current.classList.toggle('hidden');
        this.menuRef.current.classList.toggle('slide-left');
    }
    render(){
        return (  
            <nav>
                <a href="#Home">
                    <img src={logo} alt="logo" width="135"/>
                </a>
                <ul ref={this.menuRef}>
                    <li className="active">home</li>
                    <li>about</li>
                    <li>product</li>
                    <li>blog</li>
                    <li>single-post</li>
                    <li>contact us</li>
                </ul>
                <div class="menu-icons"  onClick={this.menuIcons}>
                    <span ref={this.iconRef1}></span>
                    <span ref={this.iconRef2}></span>
                    <span ref={this.iconRef3}></span>
                </div>
            </nav>
    )}
}
 
export default Navbar;