/*eslint-disable*/
import React from "react";
import {
  Alert,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Row,
  Col
} from "reactstrap";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

import Button from "components/CustomButton/CustomButton.jsx";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.notify = this.notify.bind(this);
  }
  onDismiss() {}
  notify(place) {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to RSS
          </div>
        </div>
      ),
      type: type,
      icon: "nc-icon nc-bell-55",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  }
  render() {
    return (
      <div className="content">
        <NotificationAlert ref="notificationAlert" />
        <Row>
          <Col md={12}>
            <Card>
              <CardHeader>
                <CardTitle>Trainings</CardTitle>
                <p className="card-category">
                  Angualr/React and Blockchain
                </p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md={6} xs={12}>
                    <Card className="card-plain">
                      <CardHeader>
                        <CardTitle>Angular/React</CardTitle>
                      </CardHeader>
                      <CardBody>
                        
                        <Alert
                          color="info"
                          className="alert-with-icon"
                          isOpen={this.state.visible}
                          toggle={this.onDismiss}
                        >
                          <span
                            data-notify="icon"
                            className="nc-icon nc-chart-pie-36"
                          />
                          <span data-notify="message">
                            Angualr/React
                          </span>
                        </Alert>
                      </CardBody>
                    </Card>
                  </Col>
                 
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        
      </div>
    );
  }
}

export default Notifications;
