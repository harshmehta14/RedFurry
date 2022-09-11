import React from "react";
import "./restaurant.css";
import { useState } from "react";

import axios from "axios";

const Restaraunt = () => {
  const [description, setDescription] = useState();
  const [hashtag, setHashtag] = useState();

  const [resp, setResp] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/solution", {
        text_message: `This is my pin code ${hashtag} , I desire ,${description}. What could be my solution based on my desire.`,
      });
      setResp(response.data.data.choices[0].text);
      console.log(response.data.data.choices[0].text);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-div">
      <h1 className="heading">Search Your Restaurant</h1>
      <div className="form-div">
        <form>
          <div className="form-inner-div">
            <div className="input-div">
              <input
                value={hashtag}
                onChange={(e) => {
                  setHashtag(e.target.value);
                }}
                className="full-width"
                type="text"
                placeholder="pin code"
              />
            </div>
            <div className="input-div">
              <input
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
                className="full-width desc-over"
                placeholder="Enter your description"
              ></input>
            </div>
            <div className="input-div">
              <button
                onClick={handleSubmit}
                type="button"
                className="btn btn-success full-width "
              >
                Analyse
              </button>
            </div>
          </div>
        </form>
        <div>
          <p>{description}</p>
        </div>
        <div>
          <p>{resp}</p>
        </div>
      </div>
    </div>
  );
};

export default Restaraunt;
