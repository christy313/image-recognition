import React from "react";
import { Table, Row, Col } from "react-bootstrap";

export default function Output(props) {
  const { outputs = [], imageToDetect } = props;
  return (
    <Row>
      <Col>
        <div className="mb-3 row-justify-content-center align-items-start">
          {imageToDetect ? (
            <img
              src={imageToDetect}
              style={{ width: "100%", maxWidth: "400px", height: "auto" }}
              alt="detect"
            />
          ) : (
            <div>Image</div>
          )}
        </div>
      </Col>
      <Col lg={8} md={6} sm={12} xs={12}>
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Label</th>
              <th>Probability</th>
            </tr>
          </thead>
          <tbody>
            {outputs.map((output, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{output.name}</td>
                  <td>{output.value}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}
