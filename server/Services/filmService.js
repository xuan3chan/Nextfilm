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

    // Assuming 'poster' and 'video' are the fieldnames for your file inputs
    let posterUploads = [], videoUpload, trailerUpload;

    if (poster) {
      // Delete old posters
      for (let i = 0; i < filmFound.poster.length; i++) {
        await firebaseStorage._removeFile(filmFound.poster[i]);
      }
      // Upload new posters
      posterUploads = poster.map(file => new Promise((resolve, reject) => {
        firebaseStorage._handleFile(req, file, (err, file) => {
          if (err) reject(err);
          else resolve(file.path);
        });
      }));
    }
    if (video) {
      // Delete old video
      await firebaseStorage._removeFile(filmFound.video);
      // Upload new video
      videoUpload = new Promise((resolve, reject) => {
        firebaseStorage._handleFile(req, video, (err, file) => {
          if (err) reject(err);
          else resolve(file.path);
        });
      });
    }
    if (trailer) {
      // Delete old trailer
      await firebaseStorage._removeFile(filmFound.trailer);
      // Upload new trailer
      trailerUpload = new Promise((resolve, reject) => {
        firebaseStorage._handleFile(req, trailer, (err, file) => {
          if (err) reject(err);
          else resolve(file.path);
        });
      })
    }

    // Wait for all uploads to finish
    let [posterUrls, videoUrl, trailerUrl] = await Promise.all([Promise.all(posterUploads), videoUpload, trailerUpload]);

    filmFound.filmName = filmName;
    filmFound.poster = posterUrls;
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
      film: filmFound,
    };
  }
  //delete film service
  static async deleteFilmService(id) {
    const filmFound = await film.findById(id);
    if (!filmFound) {
      return {
        success: false,
        message: "Film not found",
      };
    }
    //delete array poster
    for (let i = 0; i < filmFound.poster.length; i++) {
      await firebaseStorage._removeFile(filmFound.poster[i]);
    }
    //delete video
    await firebaseStorage._removeFile(filmFound.video);
    //delete trailer
    await firebaseStorage._removeFile(filmFound.trailer);

    await filmFound.deleteOne();
    return {
      success: true,
      message: "Delete film successfully",
    };
  }
  //get all film service
  static async getAllFilmService() {
    const films = await film.find();
    return {
      success: true,
      message: "Get all film successfully",
      films,
    };
  }
  //delete video of film service
} //add video of film service
module.exports = filmService;