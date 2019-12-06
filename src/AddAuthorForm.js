import React from 'react';
import "./AddAuthorForm.css";

class AuthorForm extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            name: '',
            imageUrl: ''
        };
    }
    render() {
        return <form>
            <div className="AddAuthorForm__input">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={this.state.name}/>
            </div>
            <div className="AddAuthorForm__input">
                <label htmlFor="imageUrl">Image URL</label>
                <input type="text" name="imageURL" value={this.state.imageUrl}/>
            </div>
        </form>
    }
}

function AddAuthorForm({match}){
    return <div className="AddAuthorForm">
        <h1>Add Author</h1>
        <AuthorForm />
    </div>;
}

export default AddAuthorForm;