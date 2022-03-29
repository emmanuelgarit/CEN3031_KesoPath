import React from "react";
import axios from "axios";
import UserContext from "../UserContext";

//pulls the data from each value in the database array, stores it in a new array

export default function GetCareerPath() {
    
    // get request to db
    axios
                .post("http://localhost:4000/api/getanswer", answer)
                .then((res) => {
                  console.log(res);
                });

  //weights for the various different classes
  let SocalStudies = 0;
  let LanguageArts = 0;
  let Science = 0;
  let Arts = 0;
  let Trade = 0;
  let Math = 0;
  let Technology = 0;
  return (
      
  )
}
