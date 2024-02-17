const tvSeries = require("../Models/tvSeriesModel");
const { firebaseStorage } = require("../middlewares/multer");

class tvSeriesService {

    static async addTvSeriesService(
        req,
        tvSeriesName,
        poster,
        description,
        trailer,
        tags,
        category,
        country,
        yearPublish,
        age,
        status
    ) {
        const tvSeriesFound = await tvSeries.findOne({ tvSeriesName });
        if (tvSeriesFound) {
            return {
                success: false,
                message: "TvSeries name is already in use",
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
        const trailerUpload = trailer ? handleFileUpload(trailer[0]) : Promise.resolve(null);
        const [posterUrls, trailerUrl] = await Promise.all([Promise.all(posterUploads), videoUpload, trailerUpload]);

        const newTvSeries = new tvSeries({
            tvSeriesName,
            description,
            poster: posterUrls,
            trailer: trailerUrl,
            category,
            country,
            yearPublish,
            episode: null,
            tags,
            age,
            status
        });

        try {
            await newTvSeries.save();
            return {
                success: true,
                message: "TvSeries added successfully",
            };
        } catch (error) {
            return {
                success: false,
                message: error.message,
            };
        }
    }
}
module.exproes = tvSeriesService;