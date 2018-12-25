import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import axios from "axios";
import Pagination from "react-js-pagination";
import Loader from "../Dashboard/Loader/Loader";
import {Modal, Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

class GorProject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            pageCounts: "",
            current: "",
            activePage: 1,
            show: false
        };
    }

    request = (url) => {
        axios.get(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response);
            this.setState({
                posts: response.data.posts,
                pageCounts: response.data.pages,
                current: response.data.current
            });

        })
    };

    addPost = () => {

    };

    componentDidMount() {
        this.request("http://10.25.40.103:3001/");
    }

    handlePageChange = (arg) => {
        this.setState({
            activePage: arg
        });
        this.request("http://10.25.40.103:3001/archive/" + arg);
    };
    handleClose = () => {
        this.setState({show: false});
    };

    handleShow = () => {
        this.setState({show: true});
    };

    render() {
        return (
            <>
                <nav className={"center"}>
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={3}
                        totalItemsCount={this.state.pageCounts}
                        pageRangeDisplayed={3}
                        onChange={this.handlePageChange}
                    />
                </nav>

                {
                    this.state.posts.map((item, index) =>
                        <div className="container" key={index}>
                            <div className="row">
                                <div>
                                    <h1>{item.title}</h1>
                                    <p>{item.body}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
                <div>
                </div>
                <div>
                    <Button className={"addPost"} bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                        +
                    </Button>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add New Post</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>
                                <form>
                                    <FormGroup controlId="formBasicLogin" required>
                                        <FormControl
                                            type="text"
                                            value={this.state.first_name}
                                            placeholder="Title"
                                        />
                                        <FormControl.Feedback/>
                                    </FormGroup>
                                    <FormGroup controlId="formControlsTextarea">
                                        <FormControl componentClass="textarea" placeholder="Body"/>
                                    </FormGroup>
                                    <Button bsClass="vivaDefault" type="submit"
                                    >Submit</Button>
                                </form>
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </>
        );
    }
}

export default withRouter(GorProject);
