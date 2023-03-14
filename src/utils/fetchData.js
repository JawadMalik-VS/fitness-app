import axios from "axios";

export const exerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Key": "9d4f4ecdf6msh119ed5619c1ed48p1de4a4jsn0b8281d46e21",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

axios
  .request(exerciseOptions)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "9d4f4ecdf6msh119ed5619c1ed48p1de4a4jsn0b8281d46e21",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
