import './newHotel.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import React, { useState, FC } from 'react';
import { RoomData } from '../../interfaces/intefaces';
import axios from 'axios';
import { hotelInputs } from '../../formSource';
import useFetch from '../../hooks/useFetch';

const NewHotel: FC = () => {
  const [files, setFiles] = useState<any>();
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState<string[]>([]);

  const { data, loading, error } = useFetch('/rooms');

  const handleFiles = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files != null) {
      setFiles(evt.target.files);
    }
    console.log('clicked');
  };

  // (e: React.ChangeEvent<HTMLInputElement>)
  const handleChange = (e: any) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setRooms(value);
  };

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file: any) => {
          const data = new FormData();
          data.append('file', file);
          data.append('upload_preset', 'upload');
          const uploadRes = await axios.post(
            'https://api.cloudinary.com/v1_1/bookingappfred/image/upload',
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      const newhotel = {
        ...info,
        rooms,
        photos: list,
      };

      await axios.post('/hotels', newhotel);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Hotel</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={handleFiles}
                  style={{ display: 'none' }}
                />
              </div>

              {hotelInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id as string}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
                  <option value={0}>No</option>
                  <option value={1}>Yes</option>
                </select>
              </div>
              <div className="selectRooms">
                <label>Rooms</label>
                <select id="rooms" multiple onChange={handleSelect}>
                  {loading
                    ? 'Loading'
                    : data &&
                      data.map((room: RoomData) => {
                        return (
                          <option key={room._id} value={room._id}>
                            {room.title}
                          </option>
                        );
                      })}
                </select>
              </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
