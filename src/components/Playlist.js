import React from 'react'

const Playlist = props => {
  // debugger
  const selectedStatus = props.selectedStatus
  let playlistClassName
  
  if (props.selectedStatus == true) {
    playlistClassName = "selected"
  }

  return (
    <li onClick={props.handlePlaylistClick} className={playlistClassName}>
      {props.name}
    </li>
  )
}

export default Playlist;