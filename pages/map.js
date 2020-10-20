import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home ()
{
  return (
    <div className="container">
      <iframe className="map" frameBorder="0"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJCaR9IbGE4jARuVOp96OYqp4&key=AIzaSyBUMksPr9oC_pe0kqFEWLJAMCe2MjfCngY" allowFullScreen />
      <style jsx>{`
          .container
          {
              max-width:1024px;
              margin:auto;
              padding:8px;
              padding:2em 0;
          }
          iframe
          {
            width:100%;
            height:300px;
          }
          @media (min-width: 768px)
          {
            iframe
            {
              height:500px;
            }
            .container
            {
              padding:4em 0;
            }
          }
      `}</style>
    </div>
  )
}
