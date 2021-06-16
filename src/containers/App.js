import { Component } from 'react';
import './App.css';
import AllTabs from '../components/AllTabs';
import {Badge, Container, Row, Col} from 'react-bootstrap';
import ItemList from '../components/ItemList';
import {whaaat} from '../components/data';
import Item from '../components/Item';
// import "bootstrap/dist/css/bootstrap.css";


console.log('Joe',whaaat.results)

class App extends Component {
  constructor() {
    super()
    this.state = {
      activeKey: 'planets',
      activeItems: [],
      search_field: ''
    }
  }


  // componentDidMount() {
  //   fetch('https://swapi.py4e.com/api/planets/')
  //   .then(response => response.json())
  //   .then(items => this.setState({activeItems: items.results}))
    
  // }


  handleSelect  = (key) => {
    this.setState({activeKey: key})
  }

  render() {
    return (
      <div>
        <Container className="text-center" fluid>
          <Row>
            <Col>
              <h1 id='first'>
                <Badge bg="secondary">@</Badge>
              </h1>
              <input type='search' placeholder={`Search ${this.state.activeKey}`}></input>
              <p>De aici ar trebui sa apara.</p>
              <ItemList props= {whaaat.results} />
              <p>Dupa ItemList</p>
              
            </Col>
          </Row>
        </Container>
        
      </div>
    );
  }
}

export default App;
