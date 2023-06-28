import ListGroup from "./components/ListGroup.tsx";

function App(){

  let items = [
    'Lviv',
    'Kyiv',
    'Rzeszow',
    'Krakow',
    'Night City'
]

  return <div><ListGroup items={items} heading="Cities"/></div>;
}

export default App;