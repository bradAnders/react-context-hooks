import React, { useState, useEffect } from 'react';
import uuid from 'uuid/dist/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'almost home', id: "e91e4b60-cb8f-11ea-b814-77cf182f02e8" },
    { title: 'memory gospel', id: "ec7e1830-cb8f-11ea-b814-77cf182f02e8" },
    { title: 'this wild darkness', id: "0fac9840-cb90-11ea-b814-77cf182f02e8" },
  ]);
  const [age, setAge] = useState(20);
  const addSong = title => {
    setSongs([...songs, {title, id: uuid() }])
  };
  useEffect(() => {
    console.log('useEffect hook ran', songs);
  }, [songs]);
  useEffect(() => {
    console.log('useEffect hook ran', age);
  }, [age]);
  return (
    <div className="song-list">
      <ul>
        { songs.map(song => {
          return ( <li key={ song.id }>{ song.title }</li> )
        }) }
      </ul>
      <NewSongForm addSong={ addSong } />
      <button onClick={ () => setAge(age+1) }>Add 1 to age: { age }</button>
    </div>
  );
}
 
export default SongList;