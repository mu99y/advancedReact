import React, { Component } from 'react';

class ComponentBox extends Component{
    state = {
        comment:''
    }

    handleChange = (event) => {
        this.setState(
            {
                comment: event.target.value
            }
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // call action creator
        // save the comment
        this.setState({ comment: '' });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h4>Add a comment</h4>
                <textarea onChange={this.handleChange} value ={this.state.comment}/>
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        );
    }
}

export default ComponentBox;