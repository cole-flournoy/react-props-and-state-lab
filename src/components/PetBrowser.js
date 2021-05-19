import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">PET COMPONENT SHOULD GO HERE</div>
  }


  render() {
    const petComps = this.props.pets.map(p => <Pet pet={p} key={p.id} onAdoptPet={this.props.onAdoptPet} />)
    return <div className="ui cards">{petComps}</div>
  }
}


export default PetBrowser
