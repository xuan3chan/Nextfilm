const country = require("../Models/countryModel");

class countryService {
    // hàm bổ trợ cho các hàm khác
    static async findCountry(countryId) {
        const countryFound = await country.findById(countryId);
        if (!countryFound) {
            throw new Error("Country not found");
        }
        return countryFound;
    }

    static async addCountryService(countryName, description, status) {
        if (!countryName) {
            return {
                success: false,
                message: "Country name is required",
            };
        }
        const countryFound = await country.findOne({ countryName });
        if (countryFound) {
            return {
                success: false,
                message: "Country name is already in use",
            };
        }
        const newCountry = new country({
            countryName,
            status,
            description,
        });
        await newCountry.save();
        return {
            success: true,
            message: "Add country successfully",
            country: newCountry,
        };
    }

    static async updateCountryService(countryId, countryName, description, status) {
        let countryFound;
        try {
            countryFound = await this.findCountry(countryId);
        } catch (error) {
            return {
                success: false,
                message: error.message,
            };
        }

        if (countryName) {
            countryFound.countryName = countryName;
        }
        if (description) {
            countryFound.description = description;
        }
        if (status) {
            countryFound.status = status;
        }

        await countryFound.save();

        return {
            success: true,
            message: "Update country successfully",
            country: countryFound,
        };
    }

    static async deleteCountryService(countryId) {
        const countryFound = await this.findCountry(countryId);
        if (countryFound) {
            await country.deleteOne({ _id: countryId });
            return {
                success: true,
                message: "Delete country successfully",
            };
        } else {
            return {
                success: false,
                message: "Country not found",
            };
        }
    }

    static async getAllCountriesService() {
        const countries = await country.find();
        return {
            success: true,
            message: "Get all countries successfully",
            countries,
        };
    }
}

module.exports = countryService;