const questions = [
  {
    id: 1,
    text: "1. Ketika masuk ke dalam lingkungan yang baru saya cenderung ...",
    options: [
      { id: 1, text: "lebih banyak mengamati" },
      { id: 2, text: "berkenalan dengan orang lain" },
    ],
  },
  {
    id: 2,
    text: "2. Saya lebih suka membuat tujuan yang bersifat ...",
    options: [
      { id: 1, text: "jangka panjang" },
      { id: 2, text: "jangka pendek" },
    ],
  },
  {
    id: 3,
    text: "3. Jika menghadapi dua pendapat yang berbeda, saya akan mengambil keputusan setelah ...",
    options: [
      { id: 1, text: "mengetahui sebab dan akibat dari suatu permasalahan" },
      {
        id: 2,
        text: "memahami cara pandang kedua pihak yang berbeda pendapat",
      },
    ],
  },
  {
    id: 4,
    text: "4. Saya lebih memilih untuk menjalani ...",
    options: [
      { id: 1, text: "kehidupan yang punya tujuan" },
      { id: 2, text: "kehidupan yang bebas" },
    ],
  },
  {
    id: 5,
    text: "5. Dalam kondisi santai, saya lebih tertarik memperhatikan ...",
    options: [
      { id: 1, text: "gambaran yang muncul di benak saya" },
      { id: 2, text: "apa yang terjadi di sekitar saya" },
    ],
  },
  {
    id: 6,
    text: "6. Saya lebih suka memikirkan ...",
    options: [
      { id: 1, text: "kemungkinan yang akan terjadi di masa depan" },
      { id: 2, text: "apa yang sedang terjadi saat ini" },
    ],
  },
  {
    id: 7,
    text: "7. Saya akan lebih berpihak kepada orang yang ...",
    options: [
      { id: 1, text: "dapat memberikan alasan yang masuk akal" },
      { id: 2, text: "dapat memberikan alasan yang menyentuh perasaan" },
    ],
  },
  {
    id: 8,
    text: "8. Saya lebih menyukai lingkungan ...",
    options: [
      { id: 1, text: "yang menegakkan aturan" },
      { id: 2, text: "yang memberi kebebasan" },
    ],
  },
  {
    id: 9,
    text: "9. Dalam kondisi santai, saya lebih tertarik memperhatikan ...",
    options: [
      { id: 1, text: "gambaran yang muncul di benak saya" },
      { id: 2, text: "apa yang terjadi di sekitar saya" },
    ],
  },
  {
    id: 10,
    text: "10. Saya lebih bersemangat jika berbicara ...",
    options: [
      { id: 1, text: "tentang kemungkinan di masa depan" },
      { id: 2, text: "tentang kejadian yang sedang berlangsung" },
    ],
  },
  {
    id: 11,
    text: "11. Dalam memilih pakaian, saya lebih mempertimbangkan ...",
    options: [
      { id: 1, text: "fungsi dari pakaian tersebut" },
      { id: 2, text: "model dari pakaian tersebut" },
    ],
  },
  {
    id: 12,
    text: "12. Jika saya menjadi ketua kelompok, saya cenderung ...",
    options: [
      { id: 1, text: "menerapkan kedisiplinan" },
      { id: 2, text: "memberikan kebebasan" },
    ],
  },
  {
    id: 13,
    text: "13. Saya lebih sering menghabiskan waktu untuk ...",
    options: [
      { id: 1, text: "mendalami apa yang saya pikirkan/rasakan" },
      { id: 2, text: "mengikuti kegiatan bersama orang lain" },
    ],
  },
  {
    id: 14,
    text: "14. Saya lebih menyukai kegiatan yang mengandalkan ...",
    options: [
      { id: 1, text: "non fisik (membaca,merenung, dsb)" },
      { id: 2, text: "fisik (olaharaga, seni, dsb)" },
    ],
  },
  {
    id: 15,
    text: "15. Bagi saya kebenaran adalah sesuatu yang ...",
    options: [
      { id: 1, text: "bersifat objektif" },
      { id: 2, text: "bersifat relatif" },
    ],
  },
  {
    id: 16,
    text: "16. Jika saya menjadi ketua kelompok, saya cenderung ...",
    options: [
      { id: 1, text: "menerapkan kedisiplinan" },
      { id: 2, text: "memberikan kebebasan" },
    ],
  },
  {
    id: 17,
    text: "17. Saya lebih nyaman melakukan tugas yang ...",
    options: [
      { id: 1, text: "membutuhkan konsentrasi" },
      { id: 2, text: "melibatkan banyak orang" },
    ],
  },
  {
    id: 18,
    text: "18. Ketika menonton televisi, saya lebih tertarik untuk menyaksikan program acara ...",
    options: [
      { id: 1, text: "berita" },
      { id: 2, text: "olahraga" },
    ],
  },
  {
    id: 19,
    text: "19. Saya lebih sering mengambil keputusan dengan mempertimbangkan ...",
    options: [
      { id: 1, text: "bukti-bukti yang ada" },
      { id: 2, text: "situasi dan kondisi yang ada" },
    ],
  },
  {
    id: 20,
    text: "20. Saya lebih menyukai karakter tokoh yang ...",
    options: [
      { id: 1, text: "disiplin dan profesional" },
      { id: 2, text: "kreatif dan inovatif" },
    ],
  },

  {
    id: 21,
    text: "21. Saya lebih nyaman menyampaikan informasi dengan cara ...",
    options: [
      { id: 1, text: "mengetik pesan digital (chat)" },
      { id: 2, text: "berbicara langsung" },
    ],
  },
  {
    id: 22,
    text: "22. Saya dapat lebih mudah untuk ...",
    options: [
      { id: 1, text: "mengimajinasikan sesuatu yang baru" },
      { id: 2, text: "mengamati suatu objek dengan detil" },
    ],
  },
  {
    id: 23,
    text: "23. Saya lebih suka membuat suatu karya yang ...",
    options: [
      { id: 1, text: "berguna untuk orang lain" },
      {
        id: 2,
        text: "disukai oleh orang lain",
      },
    ],
  },
  {
    id: 24,
    text: "24. Saya menciptakan sesuatu yang ...",
    options: [
      { id: 1, text: "berguna untuk orang lain" },
      { id: 2, text: "disukai oleh orang lain" },
    ],
  },
  {
    id: 25,
    text: "25. Saya dapat banyak menghabiskan waktu ketika ...",
    options: [
      { id: 1, text: "membaca buku" },
      { id: 2, text: "berbicara dengan orang lain" },
    ],
  },
  {
    id: 26,
    text: "26. Saya lebih menyukai pekerjaan yang mengandalkan ...",
    options: [
      { id: 1, text: "kreativitas" },
      { id: 2, text: "ketelitian" },
    ],
  },
  {
    id: 27,
    text: "27. Jika menjadi seorang pemimpin saya akan ...",
    options: [
      { id: 1, text: "bersikap seadil-adilnya" },
      { id: 2, text: "menciptakan kedamaian" },
    ],
  },
  {
    id: 28,
    text: "28. Agar tidak terlibat suatu masalah, saya akan ...",
    options: [
      { id: 1, text: "memperhatikan peraturan yang berlaku" },
      { id: 2, text: "mencari informasi sebanyak mungkin" },
    ],
  },
  {
    id: 29,
    text: "29. Saya merasa lebih nyaman ketika ...",
    options: [
      { id: 1, text: "mengerjakan tugas mandiri" },
      { id: 2, text: "mengerjakan tugas kelompok" },
    ],
  },
  {
    id: 30,
    text: "30. Saya lebih mudah memahami pelajaran dengan ...",
    options: [
      { id: 1, text: "membuat peta pikiran" },
      { id: 2, text: "membuat catatan yang detil" },
    ],
  },
  {
    id: 31,
    text: "31. Saya lebih suka dipandang sebagai orang yang ...",
    options: [
      { id: 1, text: "tegas dan disiplin" },
      { id: 2, text: "ramah dan bersahabat" },
    ],
  },
  {
    id: 32,
    text: "32. Saya percaya bahwa saya akan lebih berhasil jika ...",
    options: [
      { id: 1, text: "fokus pada tujuan" },
      { id: 2, text: "memiliki banyak pengalaman" },
    ],
  },
  {
    id: 33,
    text: "33. Saya merasa lebih bersemangat setelah ...",
    options: [
      { id: 1, text: "meluangkan waktu untuk diri sendiri" },
      { id: 2, text: "bertemu dengan banyak orang" },
    ],
  },
  {
    id: 34,
    text: "34. Menurut orang lain saya memiliki kelebihan dalam ...",
    options: [
      { id: 1, text: "menciptakan sesuatu" },
      { id: 2, text: "mengingat sesuatu" },
    ],
  },
  {
    id: 35,
    text: "35. Saya lebih suka menjelaskan suatu kejadian ...",
    options: [
      { id: 1, text: "sesuai kronologi (urutan kejadian)" },
      { id: 2, text: "dimulai dari hal yang menarik" },
    ],
  },
  {
    id: 36,
    text: "36. Saya akan lebih bersemangat dalam ...",
    options: [
      { id: 1, text: "meraih suatu prestasi" },
      { id: 2, text: "menjelajah ke tempat-tempat baru" },
    ],
  },
  {
    id: 37,
    text: "37.",
    options: [
      { id: 1, text: "a. Privasi" },
      { id: 2, text: "b. Sosialisasi" },
    ],
  },
  {
    id: 38,
    text: "38.",
    options: [
      { id: 1, text: "a. Masa Depan" },
      { id: 2, text: "b. Saat Ini" },
    ],
  },
  {
    id: 39,
    text: "39.",
    options: [
      { id: 1, text: "a. Tercerahkan" },
      { id: 2, text: "b. Terhibur" },
    ],
  },
  {
    id: 40,
    text: "40.",
    options: [
      { id: 1, text: "a. Efektif" },
      { id: 2, text: "b. Eksploratif" },
    ],
  },
  {
    id: 41,
    text: "41.",
    options: [
      { id: 1, text: "a. Kontemplatif" },
      { id: 2, text: "b. Kesenangan" },
    ],
  },
  {
    id: 42,
    text: "42.",
    options: [
      { id: 1, text: "a. Visi" },
      { id: 2, text: "b. Aksi" },
    ],
  },
  {
    id: 43,
    text: "43.",
    options: [
      { id: 1, text: "a. Sains" },
      { id: 2, text: "b. Seni" },
    ],
  },
  {
    id: 44,
    text: "44.",
    options: [
      { id: 1, text: "a. Prestatif" },
      { id: 2, text: "b. Adaptif" },
    ],
  },
  {
    id: 45,
    text: "45.",
    options: [
      { id: 1, text: "a. Ketenangan" },
      { id: 2, text: "b. Kesenangan" },
    ],
  },
  {
    id: 46,
    text: "46.",
    options: [
      { id: 1, text: "a. Ide" },
      { id: 2, text: "b. Fakta" },
    ],
  },
  {
    id: 47,
    text: "47.",
    options: [
      { id: 1, text: "a. Peraturan" },
      { id: 2, text: "b. Perasaan" },
    ],
  },
  {
    id: 48,
    text: "48.",
    options: [
      { id: 1, text: "a. Kepemimpinan" },
      { id: 2, text: "b. Kebebasan Ekspresi" },
    ],
  },
  {
    id: 49,
    text: "49.",
    options: [
      { id: 1, text: "a. Konsentrasi" },
      { id: 2, text: "b. Kerjasama" },
    ],
  },
  {
    id: 50,
    text: "50.",
    options: [
      { id: 1, text: "a. Kualitas" },
      { id: 2, text: "b. Kuantitas" },
    ],
  },
  {
    id: 51,
    text: "51.",
    options: [
      { id: 1, text: "a. Keteraturan" },
      { id: 2, text: "b. Kenyamanan" },
    ],
  },
  {
    id: 52,
    text: "52.",
    options: [
      { id: 1, text: "a. Perencanaan" },
      { id: 2, text: "b. Spontanitas" },
    ],
  },
];

export default questions;
