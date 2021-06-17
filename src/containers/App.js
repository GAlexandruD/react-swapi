import { Component } from 'react';
import './App.css';
import AllTabs from '../components/AllTabs';
import {Badge, Container, Row, Col} from 'react-bootstrap';
import {links} from '../components/links'
// import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      activeKey: 'planets',
      activeItems: [],
      search_field: ''
    }
  }


  componentDidMount() {
    fetch(links[this.state.activeKey])
    .then(response => response.json())
    .then(items => this.setState({activeItems: items.results}))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeKey !== this.state.activeKey) {
      fetch(links[this.state.activeKey])
      .then(response => response.json())
      .then(items => this.setState({activeItems: items.results}))
            
    }
    // if (this.props.activeItems !== prevProps.activeItems) {
    //   fetch(links[this.state.activeKey])
    //   .then(response => response.json())
    //   .then(items => this.setState({activeItems: items.results}))
    //   console.log(prevProps.activeItems, 'component did update', this.state.activeItems)
    // }
    
  }

  handleSelect  = (key) => {
    if (key !== this.state.activeKey) {
      this.setState({activeKey: key});
    }
    
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
              <hr></hr>
              <AllTabs tabChange={this.handleSelect} kk={this.state.activeKey} ll={this.state.activeItems}/>
              <hr></hr>
              
            </Col>
          </Row>
        </Container>
        
      </div>
    );
  }
}

export default App;
