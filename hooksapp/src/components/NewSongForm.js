import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    addSong(title);
    setTitle('');
  }
  return (
    <form onSubmit={ handleSubmit } >
      <label htmlFor="input-song-name">Song name:</label>
      <input type="text" value={title} required id="input-song-name" onChange={ e => setTitle(e.target.value) } />
      <input type="submit" value="add song" />
    </form>
  );
}
 
export default NewSongForm;