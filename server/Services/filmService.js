const film = require("../Models/filmModel");

class filmService {
        //add film service
        static async addFilmService(filmName, poster, description, trailer, video, type, category, country, yearPublish, episode){
            const filmFound = await film.findOne({ filmName });
            if (filmFound) {
                return {
                    success: false,
                    message: "Film name is already in use",
                };
            }
            const newFilm = new film({
                filmName,
                poster,
                description,
                trailer,
                video,
                type,
                category,
                country,
                yearPublish,
                episode: {
                    numEpisode: episode.numEpisode,
                    title: episode.title
                },
                comment: {
                    userId: comment.userId,
                    content: comment.content
                }
            });
            await newFilm.save();
            return {
                success: true,
                message: "Add film successfully",
                film: newFilm,
            };
        
        //update film service

        //delete film service

        //get all film service

        //delete video of film service

        //add video of film service
    }
}
    module.exports = filmService;