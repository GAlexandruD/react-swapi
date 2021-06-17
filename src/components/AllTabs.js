import {Tab, Tabs} from 'react-bootstrap';
import ItemList from './ItemList';

const AllTabs = ({tabChange, kk, ll}) => {
    return (
        <div>
            <Tabs defaultActiveKey='planets' onSelect={tabChange}>            
                <Tab eventKey="planets" title="Planets">
                    <ItemList props= {ll} ak={kk} />
                </Tab>
                <Tab eventKey="starships" title="Starships">
                    <ItemList props= {ll} ak={kk} />
                </Tab>
                <Tab eventKey="vehicles" title="Vehicles">
                    <ItemList props= {ll} ak={kk} />
                </Tab>
                <Tab eventKey="people" title="People">
                    <ItemList props= {ll} ak={kk} />
                </Tab>
                <Tab eventKey="films" title="Films">
                    <ItemList props= {ll} ak={kk} />
                </Tab>
                <Tab eventKey="species" title="Species">
                    <ItemList props= {ll} ak={kk} />
                </Tab>
            </Tabs>
        </div>
    )
}




export default AllTabs;