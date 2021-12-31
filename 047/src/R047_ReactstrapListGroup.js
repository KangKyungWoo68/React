import React, { Component } from 'react';
import { Button,ListGroup, ListGroupItem, Badge } from 'reactstrap';

class R047_ReactstrapListGroup extends Component {
  render() {
    return (
      <>
        <ListGroup>
          <ListGroupItem color="danger" >
            Badge
            <Badge pill>200</Badge>
            <Button>aaa</Button>
          </ListGroupItem>
          <ListGroupItem
            disabled
            tag="a"
            href="#"
            className="justify-content-between"
          >
            Disable
            <Badge pill>300</Badge>
          </ListGroupItem>
          <ListGroupItem
            tag="a"
            href="http://example.com"
            className="justify-content-between"
          >
            Link
          </ListGroupItem>
          <ListGroupItem
            tag="button"
            action
            onClick={(e) => alert("button")}
            className="justify-content-between"
          >
            Button
          </ListGroupItem>
        </ListGroup>
      </>
    );}
}

export default R047_ReactstrapListGroup;