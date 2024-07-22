const { bab: babModels, progress: progressModels} = require ("../models");

const index = async (req, res, next) => {
    const { id_mata_pelajaran: id_mata_pelajaran} = req.query;

    const bab= await babModels.findAll({
        where: id_mata_pelajaran ? { id_mata_pelajaran} : {},
        attributes: [
            "id",
            "nama_bab",
            [
                babModels.sequelize.literal(
                    `(SELECT COUNT (sb.id) FROM sub_babs AS sb WHERE sb.id_bab = bab.id AND sb.is_free = 1)`
                ),
                "total_sub_bab_gratis",
            ],
            [
                babModels.sequelize.literal(
                    `(SELECT COUNT(sb.id) FROM sub_babs AS sb WHERE sb.id_bab = bab.id)`
                ),
                "total_sub_bab",
            ],
        ],
    });

    res.send({
        message: "success",
        data: bab,
        //count: response,
    });
};

module.exports = {
    index,
};