import React, { Component } from 'react';

import '../../App.css';

import http from "../10Services/httpService";
import apiEndpoint from "../10Services/endpoint";
import swal from "sweetalert";


export class CreateNewBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            summary: "",
            isbn: "",
            photoUrl: "",
            pages: "",
            category: ""
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
          const data = {
          name: this.state.name,
          summary: this.state.summary,
          isbn: this.state.isbn,
          photoUrl: this.state.photoUrl,
          pages: this.state.pages,
          category: this.state.category,
        };
          http
            .post(`${apiEndpoint}/api/books/new`, data)
            .then((response) => {
              console.log(response);
              swal({
                text: "New book was created successfully",
                button: "OK",
              });
            })
            .catch((error) => {
              console.log(error)
            });
        }


    render() {
        return (
            <div className = "container pt-4">
                <form onSubmit={this.submitHandle}>
                <h6 className="formHeader mb-4">Input the fields below to create a new book</h6>
                <div className="mb-3">
                    <label htmlFor="txtName"
                    className="form-label">
                    Name of the book: <span className="fieldRequired">*</span>
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
                    maxlenght="70"
                    />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="txtSummary"
                    className="form-label">
                    Summary of the book: <span className="fieldRequired">*</span>
                    </label>
                    <input
                    type="text"
                    title=""
                    id="txtSummary"
                    name="summary"
                    placeholder="Summary"
                    className="form-control"
                    value={this.state.summary}
                    onChange={this.onChange}
                    required
                    minlenght="2"
                    maxlenght="70"
                    />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="txtIsbn"
                    className="form-label">
                    ISBN of the book <span className="fieldRequired">*</span>
                    </label>
                    <input
                    type="number"
                    title=""
                    id="txtIsbn"
                    name="isbn"
                    placeholder="ISBN"
                    className="form-control"
                    value={this.state.isbn}
                    onChange={this.onChange}
                    required
                    minlenght="13"
                    maxlenght="13"
                    pattern="^\p{L}+(( )+(?:\p{L}+))*$"
                    />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="txtPhotoUrl"
                    className="form-label">
                    Photo URL of the book: <span className="fieldRequired">*</span>
                    </label>
                    <input
                    type="text"
                    title=""
                    id="txtPhotoUrl"
                    name="photoUrl"
                    placeholder="Photo URL"
                    className="form-control"
                    value={this.state.photoUrl}
                    onChange={this.onChange}
                    required
                    minlenght="2"
                    maxlenght="70"
                    />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="txtPages"
                    className="form-label">
                    Number of pages of the book <span className="fieldRequired">*</span>
                    </label>
                    <input
                    type="number"
                    title=""
                    id="txtPages"
                    name="pages"
                    placeholder="Pages"
                    className="form-control"
                    value={this.state.pages}
                    onChange={this.onChange}
                    required
                    minlenght="1"
                    maxlenght="4"
                    />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="txtCategory"
                    className="form-label">
                    Category of the book: <span className="fieldRequired">*</span>
                    </label>
                    <input
                    type="text"
                    title=""
                    id="txtCategory"
                    name="category"
                    placeholder="Category"
                    className="form-control"
                    value={this.state.category}
                    onChange={this.onChange}
                    required
                    minlenght="2"
                    maxlenght="70"
                    />
                    </div>

                    <button type="submit" className="btn btn-primary mt-3"> Create new Book</button>
                    </form>
                </div>
        )
    }
}

export default CreateNewBook
