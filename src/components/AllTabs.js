import {Tab, Tabs} from 'react-bootstrap';
import ItemList from './ItemList';

const AllTabs = ({tabChange}) => {
    
    return (
        <div>
            <Tabs defaultActiveKey='planets' onSelect={tabChange}>            
                <Tab eventKey="planets" title="Planets">
                    <h3>Planets details</h3>
                </Tab>
                <Tab eventKey="spaceships" title="Spaceships">
                    <h3>Spaceships details</h3>
                </Tab>
                <Tab eventKey="vehicles" title="Vehicles">
                    <h3>Vehicles details</h3>
                </Tab>
                <Tab eventKey="people" title="People">
                    <h3>People details</h3>
                </Tab>
                <Tab eventKey="films" title="Films">
                    <h3>Films details</h3>
                </Tab>
                <Tab eventKey="species" title="Species">
                    <h3>Species details</h3>
                </Tab>
            </Tabs>
        </div>
    )
}




export default AllTabs;