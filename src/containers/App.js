import { Component } from 'react';
import './App.css';
import AllTabs from '../components/AllTabs';
import {Badge, Container, Row, Col} from 'react-bootstrap';
import {links} from '../components/links'
import SearchBox from '../components/SearchBox'
import Previous from '../components/Previous';
import Next from '../components/Next';

class App extends Component {
  constructor() {
    super()
    this.state = {
      activeKey: 'planets',
      activeItems: [],
      search_field: '',
      previous:'',
      next:''
    }
  }


  componentDidMount() {
    fetch(links[this.state.activeKey])
    .then(response => response.json())
    .then(items => this.setState({activeItems: items.results, previous: items.previous, next: items.next}))
    .catch(err => {
      console.error(err)
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeKey !== this.state.activeKey) {
      fetch(links[this.state.activeKey])
      .then(response => response.json())
      .then(items => this.setState({activeItems: items.results, previous: items.previous, next: items.next}))
      .catch(err => {
        console.error(err)
      })
    }
  }

  onPrevious = () => {
    if (this.state.previous) {
      fetch(this.state.previous)
      .then(response => response.json())
      .then(items => this.setState({activeItems: items.results, previous: items.previous, next: items.next}))
      .catch(err => {
        console.error(err)
    })
    }
    
  } 

  onNext = () => {
    if (this.state.next) {
      fetch(this.state.next)
      .then(response => response.json())
      .then(items => this.setState({activeItems: items.results, previous: items.previous, next: items.next}))
      .catch(err => {
        console.error(err)
    })
    }
    
  }

  handleSelect  = (key) => {
    if (key !== this.state.activeKey) {
      this.setState({activeKey: key});
      this.setState({search_field: ''});
    }
  }

  onSearchChange = (event) => {
    this.setState({search_field: event.target.value});
  }

  render() {
    const filteredItems = this.state.activeItems.filter(item => {
      try {
        return item.name.toLowerCase().includes(this.state.search_field.toLowerCase());
      } catch {
        return item.title.toLowerCase().includes(this.state.search_field.toLowerCase());
      }
    })
    return (
      
      <div>
        <Container className="text-center" fluid>
          <Row>
            <Col>
              <h1 id='first'>
                <Badge bg="secondary">@</Badge>
              </h1>
              <SearchBox searchChange ={this.onSearchChange} kk={this.state.activeKey} uu={this.state.search_field}/>
              <hr></hr>
              <AllTabs tabChange={this.handleSelect} kk={this.state.activeKey} ll={filteredItems}/>
              <div className='pn'>
                <Previous pageChange={this.onPrevious} />
                <Next pageChange = {this.onNext}/>
              </div>
              <hr></hr>
              
              
            </Col>
          </Row>
        </Container>
        
      </div>
    );
  }
}

export default App;