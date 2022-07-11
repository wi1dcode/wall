import React from 'react'

class Card extends React.Component {
  render() {
    console.log(this);
    return (
      // <li>{this.props.user.name}</li>  
        <div className="card mb-3" style={{maxWidth: 540}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={this.props.user.picture} className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{this.props.user.name}</h5>
                <p className="card-text">{this.props.user.about}</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default Card 