import React, { Fragment } from 'react'
import { ReactSVG } from 'react-svg'

function Comp (
  {
    item,
  }
) 
{
  console.log(item)
  return (
    <Fragment>
      <div className="card">
        <div className="display">
          <div className="imaView">
            <img src={"https://firebasestorage.googleapis.com/v0/b/goingbest-af666.appspot.com/o/105828186-1554212544565avengers-endgame-poster-og-social-crop.jpg?alt=media&token=9db49f1d-0138-4934-bd22-f5d45c11f431"} className="card-img-top" />
          </div>
          <div className="card-body">
            <span className="card-title">{item.title}</span>
            <div className="release_date">{item.release_date}</div>
            <p className="card-text">{item.overview}</p>
          </div>
        </div>
        <div className="rating">
          <div className="vote_average">
            {item.vote_average}
          </div>
        </div>
      </div>
      <style jsx>{`
        .display
        {
          display:flex;
          flex-wrap:wrap;
        }
        .card
        {
          margin:16px 0px;
          font-family: 'Kanit';
          box-shadow: 0px 3px 6px rgba(0,0,0, 0.16);
          border-radius: 8px;
          position: relative;
        }
        .imaView , .card-body
        {
          width:100%;
        }
        .card-text
        {
          height: 100px;
          overflow: hidden;
          padding-top: 8px;
        }
        .card-title
        {
          font-size: 20px;
          font-weight: 500;
        }
        .rating
        {
          position: absolute;
          top: -14px;
          background: red;
          width: 50px;
          margin: auto;
          text-align: center;
          border-radius: 50%;
          height: 50px;
          left: -20px;
        }
        .vote_average
        {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 50px;
          color:white;
        }
        .release_date , .card-text
        {
          color: #404040;
        }
        @media (min-width: 768px)
        {
          .imaView , .card-body
          {
            width:50%;
          }
        }
       `}</style>
    </Fragment>
  )
}

export default Comp