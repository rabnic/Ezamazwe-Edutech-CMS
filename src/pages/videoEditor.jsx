import React, { useState, useEffect } from "react";

// import React, { useState } from 'react';

function VideoUploader() {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [editedVideo, setEditedVideo] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
  
    const handleVideoChange = (event) => {
      const file = event.target.files[0];
      setSelectedVideo(file);
    };
  
    const handleEdit = () => {
      // Perform video editing operations here
      // This can be done either on the server or client-side using appropriate libraries or tools
      // Update the edited video state once editing is complete
      const editedVideoFile = /* Edited video file */
      setEditedVideo(editedVideoFile);
    };
  
    const handleSave = () => {
      // Save the edited video along with additional information
      const videoData = {
        title,
        description,
        video: editedVideo,
      };
      // Perform the saving logic, e.g., send the video data to the server or save it in a storage solution
      console.log('Video saved:', videoData);
    };
  
    return (
      <div>
        <input type="file" accept="video/*" onChange={handleVideoChange} />
        <button onClick={handleEdit}>Edit Video</button>
        <br />
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        <br />
        {editedVideo && <video src={URL.createObjectURL(editedVideo)} controls />}
        <br />
        <button onClick={handleSave} disabled={!editedVideo || !title || !description}>Save</button>
      </div>
    );
  }

export default VideoUploader;