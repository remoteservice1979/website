import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

class Typography extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md={12}>
            <Card>
              <CardHeader>
                <h5 className="title">Blockchain</h5>
              </CardHeader>
              <CardBody>
               
                <div>
                 
              
                    
                        <div >
                        A blockchain is a digitized, decentralized, public ledger of all cryptocurrency transactions. ... Doing so creates an indelible record that cannot be changed; furthermore, the record's authenticity can be verified by the entire community using the blockchain instead of a single centralized authority.
                        <br/>
                        <strong>
                        Use Case: Contract Management System (CMS)
                        </strong><br/>
                        <strong>
                    Problem Statement:</strong> In booking current contracting system, to book an accommodation/hotel room, a single contract is recorded multiple times based upon the number of market sources, each source market are unable to sync and yield based upon the needs. 
                    <br />
                    <strong>Solution:</strong>  There is a need for a single Smart contract across multiple source markets which should be configurable, define rules to determine appropriate source markets demands, provide options to capture room types and fulfill accommodation needs. 
                    CMS is built on hyperledger blockchain, which enables to create a single Smart contract created across all source markets, provides options to demand for more accommodations and improve business by selling accommodation till last minute.

                        </div>
                </div>

                
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Typography;
