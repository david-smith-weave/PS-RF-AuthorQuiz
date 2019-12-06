import React from 'react';
import "./AddAuthorForm.css";

class AuthorForm extends React.Component {
    render() {
        return <form>
            <div className="AddAuthorForm__input">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
            </div>
            <div className="AddAuthorForm__input">
                <label htmlFor="imageUrl">Image URL</label>
                <input type="text" name="imageURL" />
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