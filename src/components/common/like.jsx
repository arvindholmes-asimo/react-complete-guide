import React, { Component } from 'react';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

class Like extends Component {
    // constructor(props){
    //     super(props);

    // }
    render() {
        let classes = " fa-heart fa";
        if(!this.props.liked) {classes += "solid || light"}
        return <i onClick={this.props.onClick}  
        style={{cursor:'pointer'}}
        className={classes}aria-hidden="true"/>;
        
    }
}

export default Like; 