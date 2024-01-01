const filmService = require("../Services/filmService");
const handleErrorResponse = require("../middlewares/errorHandling");

class filmController {
  //add film controller
  static async addFilmController(req, res) {
    const { poster, video, trailer } = req.files;
    console.log(poster);
    console.log(video);
    const {
      filmName,
      description,
      type,
      tags,
      category,
      country,
      yearPublish,
      episode,
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
        type,
        tags,
        category,
        country,
        yearPublish,
        episode,
        age,
        status
      );
      res.status(200).json(response);
    } catch (err) {
      handleErrorResponse(res, err);
    }
  }
}
module.exports = filmController;
