import React, { Component } from 'react';
import { Card, Grid } from 'semantic-ui-react';
import axios from 'axios';

class Home extends Component {
  state = { cities: [] }

  componentDidMount(){
    axios.get('https://api.got.show/api/cities')
    .then( res => {
      console.log(res.data);
      this.setState({cities: res.data})
      })
      .catch(err => {
      // TODO: handle client side errors better. Maybe a use the Flash Component?
      console.log(err.response);
    });
  }


  displayLocation = () => {
    return this.state.cities.map ( city => {
      return(
        <Card >
          <Card.Header>
            {city.name}
          </Card.Header>
          <Card.Content>
            {city.link}
          </Card.Content>
        </Card>
      );
    })
    }
  
  

  render() {
    return (
      <Grid computer={4}>
          {this.displayLocation()}
      </Grid>
    );
  }
}


export default Home;
