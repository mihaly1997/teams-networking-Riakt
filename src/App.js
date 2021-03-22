import './App.css';
import { PersonsTable } from './PersonsTable';


let teams = [
  {
    "name": "Mihaly",
    "prenuma": "Kadar",
    "url": "https://github.com/nmatei/nmatei2.github.io"
  },
  {
    "name": "Matei",
    "prenuma": "Nicolae",
    "url": "https://github.com/nmatei/teams-networking/tree/won2"
  }
];

function App() {
  return (
    <div>
      <h1>Teams Networking</h1>
      <div>Search</div>
      <PersonsTable teams={teams} />
    </div>
  );
}

export default App;
