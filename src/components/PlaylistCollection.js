import React, { useState } from 'react'
import Playlist from './Playlist'

const PlaylistCollection = (props) => {
  const [selectedId, setSelectedId] = useState(null)
  // debugger

  const playlists = props.playlists.map((playlist) => {
    const handlePlaylistClick = () => {
      // debugger
      if (selectedId === playlist.id) {
        setSelectedId(null)
      } else {
        setSelectedId(playlist.id)
      }
    }

    let selectedStatus = false
   
    if (playlist.id === selectedId) {
      selectedStatus = true
    } else {
      selectedStatus = false
    }

    return(
      <Playlist 
        key={playlist.id}
        name={playlist.name}
        selectedStatus={selectedStatus}
        handlePlaylistClick={handlePlaylistClick}
      />
    )
  })

  return(
    <div>
      <h1>Playlists</h1>
      <ul>
        {playlists}
      </ul>
    </div>
  )
}

export default PlaylistCollection;