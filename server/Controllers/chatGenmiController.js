const chatGenmiService = require('../Services/chatGenmiService');
const handleErrorResponse = require('../middlewares/errorHandling');

class chatGenmiController {
    static async chatController(req, res) {
        try {
            const { input } = req.body;
            const response = await chatGenmiService.chat(input);
            res.status(200).json(response);
        } catch (err) {
            handleErrorResponse(res, err);
        }
    }
    static async getChatHistoryController(req, res) {
        try {
            const response = await chatGenmiService.getChatHistoryService();
            res.status(200).json(response);
        } catch (err) {
            handleErrorResponse(res, err);
        }
    }

}

module.exports = chatGenmiController;