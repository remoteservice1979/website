import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

import icons from "variables/icons";

class Icons extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md={12}>
            <Card className="demo-icons">
              <CardHeader>
                <CardTitle>Remote Service Supports</CardTitle>
                
              </CardHeader>
              <CardBody className="all-icons">
                <div id="icons-wrapper">
                  <section>
                    Remoteservice supports
                  </section>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Icons;
