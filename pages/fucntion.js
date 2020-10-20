import React, { useState } from 'react'
import Button from "react-bootstrap/Button"
export default function Home ()
{
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [z, setZ] = useState("");
  const [state, setState] = useState(false);
  function Answer ()
  {
    setState(true);
    var sum = 3;
    for (let round = 1; round <= 7; round++)
    {
      sum += (2 * round);
      console.log(sum)
      if (round == 5)
      {
        setX(sum)

      }
      if (round == 6)
      {
        setY(sum)

      }
      if (round == 7)
      {
        setZ(sum)
      }
    }
    console.log("sasa", x, y, z)
  }
  return (
    <div className="container">
      {
        state === false ?
          <div>
            <div className="q_a">3  5  9  15 x y z</div>
            <div className="button" >
              <Button onClick={() => { Answer() }}>กดเพื่อดูคำตอบ</Button>
            </div>
          </div>
          :
          <div className="q_a">
            {`3  5  9  15  ${x}  ${y}  ${z}`}
          </div>
      }
      <style jsx>{`
            .container
            {
              padding:4em;
              font-family: 'Kanit'
            }
            .button
            {
              width: 100%;
              margin: auto;
              max-width: 360px;
            }
            .button :global(button)
            {
              width: 100%;
            }
            .q_a
            {
              text-align:center;
              margin-bottom:16px;
            }
      `}</style>
    </div>
  )
}
