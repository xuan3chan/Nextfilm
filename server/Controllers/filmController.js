const filmService = require("../Services/filmService");
const handleErrorResponse = require("../middlewares/errorHandling");

class filmController {
  //add film controller
  static async addFilmController(req, res) {
    const poster = req.files['poster'];
    const video = req.files['video'];
    const trailer = req.files['trailer'];
    const {
      filmName,
      description,
      tags,
      category,
      country,
      yearPublish,
      age,
      status,
    } = req.body;
    try {
      const response = await filmService.addFilmService(
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
      );
      res.status(200).json(response);
    } catch (err) {
      handleErrorResponse(res, err);
    }
  }
  static async updateFilmController(req, res) {
    const poster = req.files['poster'];
    const video = req.files['video'];
    const trailer = req.files['trailer'];
    const id = req.params.id;
    const {
      filmName,
      description,
      tags,
      category,
      country,
      yearPublish,
      age,
      status,
    } = req.body;
    try {
      const response = await filmService.updateFilmService(
        req,
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
      );
      res.status(200).json(response);
    } catch (err) {
      handleErrorResponse(res, err);
    }
  }
static async deleteFilmController(req, res) {
    const id = req.params.id;
    try {
      const response = await filmService.deleteFilmService(id);
      res.status(200).json(response);
    } catch (err) {
      handleErrorResponse(res, err);
    }
  }
  static async getAllFilmController(req, res) {
    try {
      const response = await filmService.getAllFilmService(req);
      res.status(200).json(response);
    } catch (err) {
      handleErrorResponse(res, err);
    }
  }
  static async getFilmByIdController(req, res) {
    const id = req.params.id;
    try {
      const response = await filmService.getFilmByIdService(id);
      res.status(200).json(response);
    } catch (err) {
      handleErrorResponse(res, err);
    }
  }
}
module.exports = filmController;
