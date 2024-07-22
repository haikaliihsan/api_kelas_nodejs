const { kelas: kelasModels } = require("../models");

const index = async (req, res, next) => {
    const {id} = req.query;
    console.log(req.query);

    const kelas = await kelasModels.findAll ({
        where: id ? { id } : {},
        attributes: ["id", "nama_kelas"],
        include: [
            {
                association: "mode_pembelajarans",
                attributes: ["nama_mode_pembelajaran"],
            },
        ],
    });

    return res.send({
        message: "Success",
        data: kelas.map((kelas) => ({
            id: kelas.id,
            nama_kelas: kelas.nama_kelas,
            nama_mode_pembelajaran: kelas.mode_pembelajarans.map(
                (mp) => mp.nama_mode_pembelajaran 
            ),
        })),
    });
};

module.exports = {
    index,
};