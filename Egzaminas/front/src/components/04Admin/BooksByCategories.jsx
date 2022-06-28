import React, { Component } from 'react';
import '../../App.css';
import apiEndpoint from '../10Services/endpoint';
import '../../App.css';

import http from "../10Services/httpService";
import swal from "sweetalert";

export class BooksByCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            books: []
          }
          this.onChange = this.onChange.bind(this);
          this.submitHandle = this.submitHandle.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitHandle(e) {
        e.preventDefault();
          const name = this.state.name;
          http
            .get(`${apiEndpoint}/api/books/category`, { params: this.state.name })
            .then((response) => {
              this.setState({
                books: response.data
              })
              swal({
                text: "New category was created successfully",
                button: "OK",
              });
            })
            .catch((error) => {
              console.log(error)
            });
        }


    render() {
        return (
            <><div className="container pt-4">
                <form onSubmit={this.submitHandle}>
                    <h6 className="formHeader mb-4">Input the field below to search for books by category</h6>
                    <div className="mb-3">
                        <label htmlFor="txtName"
                            className="form-label">
                            Name of the category: <span className="fieldRequired">*</span>
                        </label>
                        <input
                            type="text"
                            title=""
                            id="txtName"
                            name="name"
                            placeholder="Name"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChange}
                            required
                            minlenght="2"
                            maxlenght="70" />
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">Search by category</button>
                </form>
            </div>

            <div className='container'>
                    {this.state.books.map(book => (
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
                    ))}
                </div></>
        )
    }
}

export default BooksByCategories
