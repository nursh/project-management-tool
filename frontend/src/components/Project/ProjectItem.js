import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaTrashAlt, FaEdit, FaTasks } from 'react-icons/fa';

class ProjectItem extends Component {
  render() {
    return (
      <Card>
        <Card.Header>Project Id</Card.Header>
        <Card.Body>
          <Card.Title>Project Title</Card.Title>
          <Card.Text>Project Description goes in here. Lorem ipsum, dolor sit amet consectetur adipisicing eli.</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex flex-row-reverse">
          <Button variant="outline-danger" className="d-flex align-items-center  ml-3">
            <FaTrashAlt />
            <span className="pl-2">Delete project</span>
          </Button>
          <Button variant="outline-info" className="d-flex align-items-center  ml-3">
            <FaEdit />
            <span className="pl-2">Edit project</span>
          </Button>
          <Button variant="outline-primary" className="d-flex align-items-center  ml-3">
            <FaTasks />
            <span className="pl-2">View project</span>
          </Button>
        </Card.Footer>
      </Card>
    )
  }
}

export default ProjectItem;