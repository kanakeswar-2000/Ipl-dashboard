// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

import Teamcard from '../TeamCard'

class Home extends Component {
  state = {listofMatches: [], isLoading: true}

  componentDidMount() {
    this.getTeamcardsDetails()
  }

  getTeamcardsDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const listofTeams = teams.map(eachteam => ({
      name: eachteam.name,
      id: eachteam.id,
      teamImageUrl: eachteam.team_image_url,
    }))
    this.setState({listofMatches: listofTeams, isLoading: false})
  }

  renderLoader = () => (
    <div>
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderTeamcards = () => {
    const {listofMatches} = this.state

    return (
      <div>
        <div className="ipl-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        <ul className="teamcards-container">
          {listofMatches.map(eachteam => (
            <Teamcard teamDetails={eachteam} key={eachteam.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-bg-container">
        {isLoading ? this.renderLoader() : this.renderTeamcards()}
      </div>
    )
  }
}
export default Home
