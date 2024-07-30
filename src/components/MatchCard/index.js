// Write your code here
import './index.css'

const MatchCard = props => {
  const {teamDetails} = props
  const {id, competingTeam, competingTeamLogo, result, matchStatus} =
    teamDetails
    const altvalue=`competing team ${competingTeam}`
  return (
    <li className="team-container">
      <img src={competingTeamLogo} alt=  {altvalue} className="logo" />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
