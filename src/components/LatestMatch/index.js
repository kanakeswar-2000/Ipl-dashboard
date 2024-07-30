// Write your code here
import './index.css'
const LatestMatch = props => {
  const {matchDetails, url} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = matchDetails
  const altvalue = `latest match ${competingTeam}`
  return (
    <div>
      <img src={url} className="banner" alt="team banner" />
      <h1>Latest Matches</h1>
      <div className="latest-match-container">
        <div className="part1">
          <p>{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <div>
          <img src={competingTeamLogo} className="team-logo" alt={altvalue} />
        </div>
        <div className="part2">
          <h3>First Innings</h3>
          <p>{firstInnings}</p>
          <h3>Second Innings</h3>
          <p>{secondInnings}</p>
          <h3>Man Of The Match</h3>
          <p>{manOfTheMatch}</p>
          <h3>Umpires</h3>
          <p>{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
