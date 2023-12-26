const countryService = require('../Services/countryService');
const handleErrorResponse = require('../middlewares/errorHandling');

class countryController{
    static async getAllCountriesController(req,res){
        try{
            const response = await countryService.getAllCountriesService();
            res.status(200).json(response);
        }catch(err){
            handleErrorResponse(res,err);
        }
    }
    static async addCountryController(req,res){
        const {countryName,description,status} = req.body;
        try{
            const response = await countryService.addCountryService(countryName,description,status);
            res.status(200).json(response);
        }catch(err){
            handleErrorResponse(res,err);
        }
    }
    static async updateCountryController(req,res){
        const {countryId} = req.params;
        const {countryName,description,status} = req.body;
        try{
            const response = await countryService.updateCountryService(countryId,countryName,description,status);
            res.status(200).json(response);
        }catch(err){
            handleErrorResponse(res,err);
        }
    }
    static async deleteCountryController(req,res){
        const {countryId} = req.params;
        try{
            const response = await countryService.deleteCountryService(countryId);
            res.status(200).json(response);
        }catch(err){
            handleErrorResponse(res,err);
        }
    }
}
module.exports = countryController;