import React, {useState} from 'react';
import './new.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

const New = ({inputs,title}) => {
   const [file,setFile]= useState("")

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="new-top">
          <h1 className="new-title">{title}</h1>
        </div>
        <div className="new-bottom">
          <div className="new-left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU"
              }
              alt=""
              className="img"
            />
          </div>
          <div className="new-right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadIcon className="file-icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New