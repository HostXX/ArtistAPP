import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Banner from './banner'
import ArtistsList from './artistsList'

const URL_ARTISTS = process.env.REACT_APP_URL_ARTISTS

const Home = () => {
  const [artists, setArtists] = useState([])

  useEffect(() => {
    axios
      .get(URL_ARTISTS)
      .then(response => {
        setArtists(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
//   console.log(artists)

  return (
    <>
      <Banner />
      <ArtistsList allArtists={artists} />
    </>
  )
}

export default Home
