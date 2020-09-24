import React from 'react'
import PlaylistCollection from './PlaylistCollection'

const App = (props) => {
  return (
    <div className="grid-container app">
      <h1 className="title">React Music Player</h1>
      <div>
       <PlaylistCollection
       playlists={props.data.playlists} />
      </div>

    </div>
  );
}

export default App
