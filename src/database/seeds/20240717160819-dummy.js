'use strict';

const {
  bab,
  kelas,
  mata_pembelajaran,
  materi,
  mode_pembelajaran,
  progress,
  sub_bab,
  user,
} = require("../../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await user.destroy({ truncate: true });
    await kelas.destroy({ truncate: true });
    await mode_pembelajaran.destroy({ truncate: true });
    await mata_pembelajaran.destroy({ truncate: true });
    await bab.destroy({ truncate: true });
    await sub_bab.destroy({ truncate: true });
    await materi.destroy({ truncate: true });
    await progress.destroy({ truncate: true });

    await queryInterface.bulkInsert("users", [
      {
        id: 1,
        nama_user: "haikal",
        email: "haikal12@gmail.com",
        password: 
        "$2y$10$uj1wYF67wXP41rSmU2f4JuFlQs1TW.BbCSvolDjWZ9tb3telJpqW.",//haikal123
      },
      {
      id: 2,
      nama_user: "antoni",
      email: "toni123@gmail.com",
      password:
      "$2y$10$uj1wYF67wXP41rSmU2f4JuFlQs1TW.BbCSvolDjWZ9tb3telJpqW.",//haikal123
      },
    ]);

    await queryInterface.bulkInsert("kelas", [
      { nama_kelas: "kelas 1" },
      { nama_kelas: "kelas 2" },
      { nama_kelas: "kelas 3" },
      { nama_kelas: "kelas 4" },
      { nama_kelas: "kelas 5" },
      { nama_kelas: "kelas 6" },
      { nama_kelas: "kelas 7" },
      { nama_kelas: "kelas 8" },
      { nama_kelas: "kelas 9" },
      { nama_kelas: "kelas 10" },
      { nama_kelas: "kelas 11" },
      { nama_kelas: "kelas 12" },
      { nama_kelas: "kelas 10 SMK" },
      { nama_kelas: "kelas 11 SMK" },
      { nama_kelas: "kelas 12 SMK" },
      { nama_kelas: "UTBK & Ujian Mandiri" },
      { nama_kelas: "pelatihan guru" },
    ]);

    await queryInterface.bulkInsert("mode_pembelajarans", [
      { nama_mode_pembelajaran: "Pembelajaran Tematik", id_kelas: 1 },
      { nama_mode_pembelajaran: "Pembelajaran Menurut Topik", id_kelas: 1 },
      { nama_mode_pembelajaran: "Kurikulum Merdeka", id_kelas: 1 },
      { nama_mode_pembelajaran: "Pembelajaran Tematik", id_kelas: 2 },
      { nama_mode_pembelajaran: "Pembelajaran Menurut Topik", id_kelas: 2 },
      { nama_mode_pembelajaran: "Kurikulum Merdeka", id_kelas: 2 },
      { nama_mode_pembelajaran: "Pembelajaran Tematik", id_kelas: 3 },
      { nama_mode_pembelajaran: "Pembelajaran Menurut Topik", id_kelas: 3 },
      { nama_mode_pembelajaran: "Kurikulum Merdeka", id_kelas: 3 },
      { nama_mode_pembelajaran: "Pembelajaran Tematik", id_kelas: 4 },
      { nama_mode_pembelajaran: "Pembelajaran Menurut Topik", id_kelas: 4 },
      { nama_mode_pembelajaran: "Kurikulum Merdeka", id_kelas: 4 },
    ]);

    await queryInterface.bulkInsert("mata_pembelajarans", [
      { nama_mata_pembelajaran: "Matematika", id_mode_pembelajaran: 1 },
      { nama_mata_pembelajaran: "Bahasa Indonesia", id_mode_pembelajaran: 1 },
      { nama_mata_pembelajaran: "IPA Terpadu", id_mode_pembelajaran: 1 },
      {
        nama_mata_pembelajaran: "Pendidikan Karakter",
        id_mode_pembelajaran: 1,
      },
      { nama_mata_pembelajaran: "Ruangngaji", id_mode_pembelajaran: 1 },
      { nama_mata_pembelajaran: "Matematika", id_mode_pembelajaran: 2 },
      { nama_mata_pembelajaran: "Bahasa Indonesia", id_mode_pembelajaran: 2 },
      { nama_mata_pembelajaran: "IPA Terpadu", id_mode_pembelajaran: 2 },
      {
        nama_mata_pembelajaran: "Pendidikan Karakter",
        id_mode_pembelajaran: 2,
      },
      { nama_mata_pembelajaran: "Matematika", id_mode_pembelajaran: 3 },
      { nama_mata_pembelajaran: "Bahasa Indonesia", id_mode_pembelajaran: 3 },
      { nama_mata_pembelajaran: "IPA Terpadu", id_mode_pembelajaran: 3 },
      { nama_mata_pembelajaran: "Ruangngaji", id_mode_pembelajaran: 3 },
    ]);

    await queryInterface.bulkInsert("babs", [
      { nama_bab: "Bilangan 0-10", id_mata_pembelajaran: 1 },
      { nama_bab: "Aplikasi bilangan 0-10", id_mata_pembelajaran: 1 },
      { nama_bab: "Geometri dan Pola", id_mata_pembelajaran: 1 },
      { nama_bab: "Geometri dan Pola 2", id_mata_pembelajaran: 1 },
      { nama_bab: "Bilangan 11-20", id_mata_pembelajaran: 1 },
      { nama_bab: "pengukuran (1)", id_mata_pembelajaran: 1 },
      { nama_bab: "Bilangan 21-40", id_mata_pembelajaran: 1 },
      { nama_bab: "Geometri dan Pola 3", id_mata_pembelajaran: 1 },
      { nama_bab: "pengukuran (2)", id_mata_pembelajaran: 1 },
    ]);

    await queryInterface.bulkInsert("sub_babs", [
      {
        nama_sub_bab: "Mengenai Bilangan 1-10 (1)",
        is_free: 1,
        id_bab: 1,
      },
      {
        nama_sub_bab: "Mengenai Bilangan 1-10 (2)",
        is_free: 0,
        id_bab: 1,
      },
      {
        nama_sub_bab: "Lebih Besar? Lebih Kecil? 1-10",
        is_free: 0,
        id_bab: 1,
      },
      {
        nama_sub_bab: "Bermain dengan Bilangan 1-10",
        is_free: 0,
        id_bab: 1,
      },
    ]);

    await queryInterface.bulkInsert("materis", [
      {
        nama_materi: "video 1",
        tipe_materi: "video",
        exp: 125,
        gold: 10,
        id_sub_bab: 1,
      },
      {
        nama_materi: "end quiz 1",
        tipe_materi: "end quiz",
        exp: 125,
        gold: 10,
        id_sub_bab: 1,
      },
      {
        nama_materi: "single quiz 1",
        tipe_materi: "single quiz",
        exp: 125,
        gold: 10,
        id_sub_bab: 1,
      },
      {
        nama_materi: "summary 1",
        tipe_materi: "summary",
        exp: 125,
        gold: 10,
        id_sub_bab: 1,
      },
    ]);

    await queryInterface.bulkInsert("progresses", [
      {
        id_materi: 1,
        id_user: 1,
        status_progress: 1,
      },
      {
        id_materi: 2,
        id_user: 1,
        status_progress: 0,
      },
      {
        id_materi: 3,
        id_user: 1,
        status_progress: 1,
      },
      {
        id_materi: 4,
        id_user: 1,
        status_progress: 0,
      },
      {
        id_materi: 1,
        id_user: 2,
        status_progress: 1,
      },
      {
        id_materi: 2,
        id_user: 2,
        status_progress: 1,
      },
      {
        id_materi: 3,
        id_user: 2,
        status_progress: 1,
      },
      {
        id_materi: 4,
        id_user: 2,
        status_progress: 0,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
