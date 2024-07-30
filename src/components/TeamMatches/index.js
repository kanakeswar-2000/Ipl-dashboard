// Write your code here
import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    bannerUrl: '',
    latestMatchDetails: {},
    recentMatchesList: [],
    isLoading: true,
  }
  componentDidMount() {
    this.getallmatchesDetails()
  }
  getallmatchesDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const teamBannerUrl = data.team_banner_url
    const mainmatch = data.latest_match_details
    const latestMatchDetails = {
      umpires: mainmatch.umpires,
      result: mainmatch.result,
      manOfTheMatch: mainmatch.man_of_the_match,
      id: mainmatch.id,
      date: mainmatch.date,
      venue: mainmatch.venue,
      competingTeam: mainmatch.competing_team,
      competingTeamLogo: mainmatch.competing_team_logo,
      firstInnings: mainmatch.first_innings,
      secondInnings: mainmatch.second_innings,
      matchStatus: mainmatch.match_status,
    }
    const recentMatches = data.recent_matches.map(eachmatch => {
      return {
        umpires: eachmatch.umpires,
        result: eachmatch.result,
        manOfTheMatch: eachmatch.man_of_the_match,
        id: eachmatch.id,
        date: eachmatch.date,
        venue: eachmatch.venue,
        competingTeam: eachmatch.competing_team,
        competingTeamLogo: eachmatch.competing_team_logo,
        firstInnings: eachmatch.first_innings,
        secondInnings: eachmatch.second_innings,
        matchStatus: eachmatch.match_status,
      }
    })

    this.setState({
      isLoading: false,
      bannerUrl: teamBannerUrl,
      latestMatchDetails: latestMatchDetails,
      recentMatchesList: recentMatches,
    })
  }
  renderMatchesDetails = () => {
    const {bannerUrl, latestMatchDetails, recentMatchesList} = this.state

    return (
      <div>
        <LatestMatch matchDetails={latestMatchDetails} url={bannerUrl} />

        <ul className="recent-matches-container">
          {recentMatchesList.map(eachteam => (
            <MatchCard teamDetails={eachteam} key={eachteam.id} />
          ))}
        </ul>
      </div>
    )
  }
  render() {
    const {isLoading} = this.state
    return (
      <div className="bgl-container">
        {isLoading ? (
          <div testid="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          this.renderMatchesDetails()
        )}
      </div>
    )
  }
}
export default TeamMatches
