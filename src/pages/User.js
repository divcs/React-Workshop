import React from "react";
import Header from "../components/Header";
import { Col, Row, Table } from "react-bootstrap";
import './mycss.css';


export const User = ({ userAllData }) => {
  return (
    <>
      <Header />
      <div className="container">
        <Row className="outline">
          <Col className="box">Photo</Col>
          <Col className="box">ID</Col>
          <Col className="box">Email</Col>
          <Col className="box">Full Name</Col>
        </Row>
      </div>
      {userAllData.map((dt, index) => {
        return (
          <>
              <Row className="outline">
                <Col>
                  <img src={dt.avatar} alt="Avatar" />
                </Col>
                <Col>{dt.id}</Col>
                <Col>{dt.email}</Col>
                <Col>
                  {dt.first_name} {dt.last_name}
                </Col>
              </Row>
          </>
        );
      })}
    </>
  );
};
