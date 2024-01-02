const film = require("../Models/filmModel");
const { firebaseStorage } = require("../middlewares/multer");

class filmService {
  //add film service
  static async addFilmService(
    req,
    filmName,
    poster,
    description,
    trailer,
    video,
    tags,
    category,
    country,
    yearPublish,
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

    const requiredFields = {
      filmName,
      description,
      poster,
      video,
      category,
      country,
      yearPublish,
      status
    };

    for (let key in requiredFields) {
      if (!requiredFields[key]) {
        return {
          success: false,
          message: `${key} is required`,
        };
      }
    }

    const handleFileUpload = (file) => new Promise((resolve, reject) => {
      firebaseStorage._handleFile(req, file, (err, file) => {
        if (err) reject(err);
        else resolve(file.path);
      });
    });

    const posterUploads = poster.map(handleFileUpload);
    const videoUpload = handleFileUpload(video[0]);
    const trailerUpload = trailer ? handleFileUpload(trailer[0]) : Promise.resolve(null);

    const [posterUrls, videoUrl, trailerUrl] = await Promise.all([Promise.all(posterUploads), videoUpload, trailerUpload]);

    const newFilm = new film({
      filmName,
      poster: posterUrls,
      description,
      trailer: trailerUrl,
      video: videoUrl,
      status,
      tags,
      age,
      category,
      country,
      yearPublish,
    });

    await newFilm.save();

    return {
      success: true,
      message: "Add film successfully",
      film: newFilm,
    };
  }

  //update film service by id film
  static async updateFilmService(
    req, // Add req here
    id,
    filmName,
    poster,
    description,
    trailer,
    video,
    tags,
    category,
    country,
    yearPublish,
    age,
    status
  ) {
    const filmFound = await film.findById(id);
    if (!filmFound) {
      return {
        success: false,
        message: "Film not found",
      };
    }
    const fields = {
      filmName,
      description,
      poster,
      video,
      category,
      country,
      yearPublish,
      status
    };

    for (let key in fields) {
      if (fields[key]==' ') {
        return {
          success: false,
          message: `${key} is required`,
        };
      }
    }


    // Assuming 'poster' and 'video' are the fieldnames for your file inputs
    let posterUpload, videoUpload, trailerUpload;

    if (poster) {
      posterUpload = new Promise((resolve, reject) => {
        firebaseStorage._handleFile(req, poster, (err, file) => {
          if (err) reject(err);
          else resolve(file.path);
        });
      });
    }
    if (video) {
      videoUpload = new Promise((resolve, reject) => {
        firebaseStorage._handleFile(req, video, (err, file) => {
          if (err) reject(err);
          else resolve(file.path);
        });
      });
    }
    if (trailer) {
      trailerUpload = new Promise((resolve, reject) => {
        firebaseStorage._handleFile(req, trailer, (err, file) => {
          if (err) reject(err);
          else resolve(file.path);
        });
      })
    }

    // Wait for both uploads to finish
    let [posterUrl, videoUrl, trailerUrl] = await Promise.all([posterUpload, videoUpload, trailerUpload]);

    filmFound.filmName = filmName;
    filmFound.poster = posterUrl;
    filmFound.description = description;
    filmFound.trailer = trailerUrl;
    filmFound.video = videoUrl;
    filmFound.status = status;
    filmFound.tags = tags;
    filmFound.age = age;
    filmFound.category = category;
    filmFound.country = country;
    filmFound.yearPublish = yearPublish;
    await filmFound.save();
    return {
      success: true,
      message: "update film successfully",
      film: newFilm,
    };
  }
  //delete film service

  //get all film service

  //delete video of film service
} //add video of film service
module.exports = filmService;