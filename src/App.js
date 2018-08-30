import React, { Component } from 'react'

class App extends Component {
  state = {
    status: false,
    img_refresh_key: Math.random()
  }

  handleClick = () => {
    this.setState({status: false, img_refresh_key: Math.random()})
  }

  onLoadImage = () => {
    this.setState({status: true})
  }

  render() {
    const { status, img_refresh_key } = this.state
    return (
      <div className="App mt-5">

        <div className="container">
          <div className="row p-3">

            <div className={status ? "main col-lg-4 offset-lg-4 mx-auto pt-3" : "main hide col-lg-4 offset-lg-4 mx-auto pt-3"}>
              <div className={status ? "button text-white pt-2 pb-2 text-center mx-auto mb-3" : 'button active text-white pt-2 pb-2 text-center mx-auto mb-3'} onClick={status ? this.handleClick : null}>
                <h3 className="m-0">{status ? 'Get image' : 'Loading...'}</h3>
              </div>
              <center className="image-block">
                <div className={status ? "image" : "image hide"}>
                    <img className="img-fluid" src={'https://picsum.photos/g/450/350/?random' + img_refresh_key} onLoad={this.onLoadImage} ref="image"/>
                </div>
                <a className={status ? "download mb-0" : "download hide mb-0"} href={this.refs.image ? this.refs.image.src : ''} target="_blank">Download</a>
              </center>
            </div>

          </div>
        </div>

      </div>
    )
  }
}

export default App;
