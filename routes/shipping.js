const router = require("express").Router();
const RajaOngkir = require('rajaongkir-nodejs').Starter('a479bca1015c08f9142635f6103866f5');

router.get("/provinces", async (req, res) => {
    try {
        const provinces = await RajaOngkir.getProvinces();
        res.status(200).json(provinces);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/provinces/:provenceId", async (req, res) => {
    const provenceId = req.params.provenceId

    try {
        const provinceById = await RajaOngkir.getProvince(provenceId);
        res.status(200).json(provinceById);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/cities", async (req, res) => {

    try {
        const cities = await RajaOngkir.getCities();
        res.status(200).json(cities);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/cities/:cityId", async (req, res) => {
    const cityId = req.params.cityId

    try {
        const cities = await RajaOngkir.getCities();
        const dataCities = cities.rajaongkir.results;
        const citiesById = dataCities.filter(city => {
            return city.city_id === cityId
        })
        res.status(200).json(citiesById);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/cities/province/:provenceId", async (req, res) => {
    const provenceId = req.params.provenceId

    try {
        const cities = await RajaOngkir.getCities();
        const dataCities = cities.rajaongkir.results;
        const citiesByIdProvince = dataCities.filter(city => {
            return city.province_id === provenceId
        })
        res.status(200).json(citiesByIdProvince);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/cost/:destination/:weight/:courier", async (req, res) => {
    const origin = 104;
    const { destination, weight, courier } = req.params;

    try {
        if (courier === 'jne') {
            const costJNE = await RajaOngkir.getJNECost({ origin, destination, weight });
            res.status(200).json(costJNE);
        } else if (courier === 'pos') {
            const costPOS = await RajaOngkir.getPOSCost({ origin, destination, weight });
            res.status(200).json(costPOS);
        } else if (courier === 'tiki') {
            const costTIKI = await RajaOngkir.getTIKICost({ origin, destination, weight });
            res.status(200).json(costTIKI);
        } else {
            res.status(500).json('Invalid courier');
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;