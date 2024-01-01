const film = require("../Models/filmModel");
const {firebaseStorage} = require("../middlewares/multer");

class filmService {
  //add film service
  static async addFilmService(
    req,
    filmName,
    poster,
    description,
    trailer,
    video,
    type,
    tags,
    category,
    country,
    yearPublish,
    episode,
    age,
    status
  ) {
    const filmFound = await film.findOne({ filmName });
    if (filmFound) {
      return {
        success: false,
        message: "Film name is already in use",
      };
    }
    if (
      !filmName ||
      !description ||
      !type ||
      !category ||
      !country ||
      !yearPublish ||
      !status
    ) {
      return {
        success: false,
        message: "filmName,poster,description,type,category,country,yearPublish,status is required",
      };
    }
    if (type === "movie" && !video) {
      return {
        success: false,
        message: "Video is required for movie",
      };
    }
    if (
      type === "series" &&
      (!episode || episode.some((ep) => !ep.numEpisode || !ep.title))
    ) {
      return {
        success: false,
        message: "Episode information is required for series",
      };
    }

    // Assuming 'poster' and 'video' are the fieldnames for your file inputs
    let posterUpload, videoUpload;

    posterUpload = new Promise((resolve, reject) => {
      firebaseStorage._handleFile(req, req.files['poster'], (err, file) => {
        if (err) reject(err);
        else resolve(file.path);
      });
    });

    videoUpload = new Promise((resolve, reject) => {
      firebaseStorage._handleFile(req, req.files['video'], (err, file) => {
        if (err) reject(err);
        else resolve(file.path);
      });
    });

    // Wait for both uploads to finish
    let [posterUrl, videoUrl] = await Promise.all([posterUpload, videoUpload]);

    // Rest of your code...

    const newFilm = new film({
      filmName,
      poster: posterUrl,
      description,
      trailer,
      video: videoUrl,
      type,
      status,
      tags,
      age,
      category,
      country,
      yearPublish,
      episode,
    });
    await newFilm.save();
    return {
      success: true,
      message: "Add film successfully",
      film: newFilm,
    };
  }

  //update film service

  //delete film service

  //get all film service

  //delete video of film service
} //add video of film service
module.exports = filmService;