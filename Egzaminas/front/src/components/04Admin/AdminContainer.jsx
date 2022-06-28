import React, { Component } from 'react';

import '../../App.css';
import axios from 'axios';
import apiEndpoint from '../10Services/endpoint';


export class AdminContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { books: [] };
    }
    componentDidMount() {
        this.getBooks()
    }

    getBooks() {
        return axios.get(`${apiEndpoint}/api/books`).then(response => {
            console.log(response.data)
            this.setState({
                books: response.data
            })
        });
    }
        render() {
        return (
            <div className='container'>
            {
                this.state.books.map(book =>(
                    <div className="card" style={{ width: "16rem", display: "inline-block", textAlign: "center" }}>
                    <img className="card-img-top" src={book.photoUrl} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{book.name}</h5>
                        <p className="card-text">Category: {book.category}</p>
                        <p className="card-text">Summary: {book.summary}</p>
                        <p className="card-text">ISBN: {book.isbn}</p>
                        <p className="card-text">Pages: {book.pages}</p>
                    </div>
                    </div>
                ))
            }
         </div>
        )
    }
}

export default AdminContainer
