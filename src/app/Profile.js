import Panel from './Panel.js';
import { getImageUrl } from './utils.js';


export default function Profile({ person }) {
  currentPerson = person;
  return (
    <Panel>
      <Header person={person} />
      <Avatar person={person}/>
    </Panel>
  )
}

function Header() {
  return <h1>{person.name}</h1>;
}

function Avatar() {
  return (
    <img
      className="avatar"
      src={getImageUrl(currentPerson)}
      alt={currentPerson.name}
      width={50}
      height={50}
    />
  );
}
