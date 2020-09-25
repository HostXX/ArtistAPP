import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Banner from './banner'
import ArtistsList from './artistsList'

const URL_ARTISTS = 'https://viajesapi.herokuapp.com/api/logs/artists'

const Home = () => {
  const [artists, setArtists] = useState([])

  useEffect(() => {
    axios
      .get(URL_ARTISTS)
      .then(response => {
        setArtists(response.data.artists)
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
