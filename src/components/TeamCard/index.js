// Write your code here
import './index.css'

import {Link} from 'react-router-dom'

const Teamcard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-container">
        <img src={teamImageUrl} className="team-image" alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}
export default Teamcard
