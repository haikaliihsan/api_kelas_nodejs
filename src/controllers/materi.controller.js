const {materi: materiModels, progress: progressModels} = require("../models");

const index = async (req, res, next) => {
    const { id_sub_bab} = req.query;

    const materi = await materiModels.findAll ({
    where: id_sub_bab ? { id_sub_bab}: {},
    attributes: [
        "id",
        "nama_materi",
        "tipe_materi",
        "exp",
        "gold",
        [
            materiModels.sequelize.literal (
                `(select case when count(p.id) > 0 then 'selesai' else 'belum selesai' end from progresses as p where p.id_materi = materi.id and p.status_progress = 1 and p.id_user = ${req.user.id})`
            ),
            "status",
        ],
    ],
});

return res.send({
    message: "Success",
    data: materi,
    });
};

module.exports = {
    index,
};