const tvSeries = require("../Models/tvSeriesModel");
const { firebaseStorage } = require("../middlewares/multer");

class tvSeriesService {

    static async addTvSeriesService(tvSeriesName, poster, description, trailer, category, country, yearPublish, episode, age, status){
        const tvSeriesFound = await tvSeries.findOne({ tvSeriesName });
        if (tvSeriesFound) {
            return {
                success: false,
                message: "Tv series name is already in use",
            };
        }

        const requiredFields = {
            tvSeriesName,
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

        const newTvSeries = new tvSeries({
            tvSeriesName,
            description,
            poster: posterUrls,
            trailer: trailerUrl,
            category,
            country,
            yearPublish,
            episode,
            age,
            status
        });

        await newTvSeries.save();

        return {
            success: true,
            message: "Add tv series successfully",
            data: newTvSeries,
        };

    }


}