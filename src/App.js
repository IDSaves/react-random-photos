import React, { useState, useRef } from 'react'

const randomInteger = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1))

export default () => {
  const [status, setStatus] = useState(false)
  const [imgKey, setImgKey] = useState(randomInteger(1, 1084))
  const imageEl = useRef(null)

  const handleClick = () => {
    setStatus(false)
    setImgKey(randomInteger(1, 1084))
  }
  const onLoadImage = () => setTimeout(() => setStatus(true), 500)
  

  return (
    <div className="App mt-5">
      <div className="container">
        <div className="row p-3">
          <div className={status ? "main col-lg-8 offset-lg-2 mx-auto p-0" : "main hide col-lg-8 offset-lg-2 mx-auto p-0"}>
            <div className={status ? "button text-white pt-2 pb-2 text-center mx-auto" : 'button active text-white pt-2 pb-2 text-center mx-auto'} onClick={status ? handleClick : null}>
              <h3 className="m-0">{status ? 'Get image' : 'Loading...'}</h3>
            </div>
            <center className="image-block ml-3 mr-3">
              <div className={status ? "image" : "image hide"}>
                <img className="img-fluid" src={`https://picsum.photos/id/${imgKey}/900/500/`} onLoad={onLoadImage} ref={imageEl} />
              </div>
              <a className={status ? "download mb-0" : "download hide mb-0"} href={imageEl.current ? imageEl.current.src : ''} target="_blank">Download</a>
            </center>
          </div>
        </div>
      </div>
    </div>
  )
}