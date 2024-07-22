const {mata_pembelajaran: mata_pelajaranModels } = require ("../models");


const index = async (req, res, next) => {
    const { id_mode_pembelajaran} = req.query;
    console.log(req.user.id);

    const mata_pelajaran = await mata_pembelajaranModels.findAll({
        where: id_mode_pembelajaran ? { id_mode_pembelajaran }: {},
        attributes: ["id", "nama_mata_pembelajaran", "id_mode_pembelajaran"],
        include: [
            {
                association: "mode_pembelajarans",
                attributes: ["nama_mode_pembelajaran"],
            },
        ],
    });

    return res.send({
        message: "Success",
        data: mata_pelajaran.map((matap) => ({
            id: matap.id,
            nama_mata_pembelajaran: matap.nama_mata_pembelajaran,
            id_mode_pembelajaran: matap.id_mode_pembelajaran,
        })),
    });
};

module.exports = {
    index,
};