const Locations = require("../models/Event-model-locations");

module.exports = locationController = {
    addLocation: async (req, res) => {
        const { lat, lng } = req.query;
        console.log(req.query)
        console.log('hey')
        try {
            let newLocation = new Locations({
                lat,
                lng
            });

            await newLocation.save();

            res.send("Location added with success");
        } catch (err) {
            res.status(500).send("Location not added !!!");
        }
    },
    getLocations: async (req, res) => {
        try {
            const locations = await Locations.find();
            res.send(locations);
        } catch (error) {
            res.status(500).send("locations not available !!!");
        }
    },
}