import React from 'react'
import {Table, Button, Col, Grid, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const API_URL = "http://cors-proxy.htmldriven.com/?url=http://infoshareacademycom.2find.ru";

class ProductList extends React.Component {
  state = {
    list: []
  };

  render() {
    if (this.props.link && this.state.list.length === 0) {
      fetch(
        API_URL + this.props.link
      ).then((response) => {
        return response.json();
      }).then((data) => {
        return JSON.parse(data.body).data;
      }).then((data) => {
          console.log('LIST FETCHED - ', data);
          this.setState({
            list: data
          });
        }
      );
    }

    return (
      /*<div>
          <Table striped bordered condensed hover>
      <thead>
      <tr>
      <th>Producent części</th>
      <th>Nazwa części</th>
      <th>Numer katalogowy</th>
      </tr>
      </thead>
      <tbody>
      {
          this.state.list.map((part) => {
                  const path = 'productWindow/'+encodeURIComponent(part.link);
                 return <tr key={part.link}>
              <td>{part.brand}</td>
              <td>{part.name}</td>
              <td>{part.number}</td>
              <Link to={path}>
                  <Button>Przejdź do części</Button>
              </Link>
            </tr>
          }
          )
      }
  </tbody>
  </Table>
  </div>*/
      <div>
          {
              this.state.list.map((part) => {
                      const path = 'productWindow/'+encodeURIComponent(part.link);
                      return (
                         <div>
                          <Grid key={part.link} className="searched-container">
                            <Row className="row-eq-height">
                              <Col md={4}>
                                <h5 className="font-change-color">Nazwa</h5>
                                <p>{part.name}</p>
                              </Col>
                              <Col md={4} className="more-info-padding">
                                <p><span className="font-change-color">Producent:</span> {part.brand}</p>
                                <p><span className="font-change-color">Numer katalogowy:</span> {part.number}</p>
                                <p><span className="font-change-color">Status:</span> {part.status}</p>
                              </Col>
                              <Col md={4} className="searched-button-padding">
                                <Link to={path}>
                                  <Button>Szczegóły</Button>
                                </Link>
                              </Col>
                            </Row>
                          </Grid>
                         </div>
                      )
                  }
              )
          }
      </div>
    )
  }
}

export default ProductList