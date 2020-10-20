import Head from 'next/head'
import React, { Fragment, useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Card from './../components/Card'
import Axios from 'axios'
export default function Home ()
{
  const [row, setRow] = useState([]);

  function onSearch (keyword)
  {
    if (keyword !== "" && keyword != null)
    {
      try
      {
        var data = []
        var url = "https://api.themoviedb.org/3/search/movie?api_key=e52bdda9130a961c03681755c4d50ec6&query=" + keyword
        Axios.get(url).then(result => 
        {
          result.data.results.forEach(element =>
          {
            data.push(element)
          });
          setRow(data)
        })
      } catch (error)
      {
        console.log(error)
      }
    }
  }

  return (
    <div className="container">
      <div className="input">
        <InputGroup size="sm" className="mb-3" onChange={(event) => { onSearch(event.target.value) }}>
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">อาหาร</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
      </div>
      <div className="">
        {
          row.map((item, i) =>
          {
            return (
              <Fragment key={`Card-${i}`}>
                <Card
                  item={item}
                />
              </Fragment>
            )
          })
        }
      </div>
      <style jsx>{`
        .container
        {
          width:100%;
        }
        .input
        {
          margin:12px 0;
        }
      `}</style>
    </div>
  )
}
