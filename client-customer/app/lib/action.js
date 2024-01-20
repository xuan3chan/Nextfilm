import axios from "axios";
const apiURL = process.env.NEXT_PUBLIC_FILM;

export const getAllFilm = async () => {
  try {
    let res = await axios.get(`${apiURL}/getall`);
    return res.data.films;
  } catch (error) {
    alert("Can't get all film");
  }
}