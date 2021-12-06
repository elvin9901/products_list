import react, {useEffect, useState} from 'react';
import {Card, Container, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';

class App extends React.Component {
  state = {
    products: []
  };  

  prepareList(data) {
      let productList = [];
      for (var i= 0; i<0; i++) {
        productList.push({
          id: i+1,
          header: data[i].title ,
          description: data[i].description,
          image: data[i].image
        })
      } 
      return productList;
  };
    componentDidMount() {
      fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then(productsList => {
          this.setState({ products:productsList});
      });
    }
    
    componentWillUnmount() {
        // make fetch request
    }
    
    render() {
      console.log(this.state.products)
      return (
        <div>
            <Navbar>
              <Container>
                <Navbar.Brand href="#home">Products List App</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                </Navbar.Collapse>
              </Container>
            </Navbar>
          <div className="grid">
                {this.state.products.map((product) => (
                    <Card style={{ width: '18rem' }} className="box">
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                        {product.description}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                ))}
            </div>
            <p>the endpoint is provided by this website <a href="https://fakestoreapi.com">fakestoreapi</a></p>
        </div>
      )
  }
}
export default App;
