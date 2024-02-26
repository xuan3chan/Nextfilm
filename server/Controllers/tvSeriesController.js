const tvSeriesService = require('../Services/tvSeriesService');
const handleErrorResponse = require('../middlewares/errorHandling');

class tvSeriesController {
    static async addTvSeriesController(req, res) {
        const poster = req.files['poster'];
        const trailer = req.files['trailer'];
        const {
            tvSeriesName,
            description,
            tags,
            category,
            country,
            yearPublish,
            age,
            status,
        } = req.body;
        try {
            const response = await tvSeriesService.addTvSeriesService(
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
            );
            res.status(200).json(response);
        } catch (err) {
            handleErrorResponse(res, err);
        }
    }
    static async getTvSeriesController(req, res) {
        try {
            const response = await tvSeriesService.getTvSeriesService();
            res.status(200).json(response);
        } catch (err) {
            handleErrorResponse(res, err);
        }
    }
}
module.exports = tvSeriesController;