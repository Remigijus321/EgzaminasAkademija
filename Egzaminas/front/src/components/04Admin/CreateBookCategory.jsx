import React, { Component } from 'react';

import '../../App.css';

import http from "../10Services/httpService";
import apiEndpoint from "../10Services/endpoint";
import swal from "sweetalert";


export class CreateBookCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
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
        };
          http
            .post(`${apiEndpoint}/api/category/new`, data)
            .then((response) => {
              console.log(response);
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
            <div className = "container pt-4">
                <form onSubmit={this.submitHandle}>
                <h6 className="formHeader mb-4">Input the field below to create a new category</h6>
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
                    maxlenght="70"
                    />
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">Create new Category</button>
                    </form>
                </div>
        )
    }
}

export default CreateBookCategory
