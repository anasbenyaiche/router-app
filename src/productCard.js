import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { Link } from 'react-router-dom'

const CardExample = props => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="30%"
          maxWidth="300px"
          src={props.src}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.subtiltle}</CardSubtitle>
          <CardText>{props.description}</CardText>
          <Link to={props.to}><Button>{props.btn}</Button></Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardExample;
