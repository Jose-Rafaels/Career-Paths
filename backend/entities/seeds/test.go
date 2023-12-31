package seeds

import (
	"career-paths/entities"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

func testSeeder(db *gorm.DB) Seed {
	seeds := []entities.Test{
		{
			ID:       uuid.New().String(),
			Question: "Ketika Masuk kedalam lingkukan yang baru saya cenderung....",
			Answare1: "Lebih banyak mengamati",
			Answare2: "Berkenalan dengan orang lain",
			Type1:    "I",
			Type2:    "E",
		},
		{
			ID:       uuid.New().String(),
			Question: "Saya lebih suka membuat tujuan bersifat...",
			Answare1: "Jangka Panjang",
			Answare2: "Jangka Pendek",
			Type1:    "N",
			Type2:    "S",
		},
		{
			ID:       uuid.New().String(),
			Question: "Jika Menghadapi Dua Pendapat Yang Berbeda, saya akan mengambil keputusan setelah....",
			Answare1: "Mengetahui Sebab dan Akibat dari suatu permasalahan",
			Answare2: "Memahami cara pandang kedua pihak yang berbeda pendapat",
			Type1:    "T",
			Type2:    "F",
		},
		{
			ID:       uuid.New().String(),
			Question: "Saya lebih memilih untuk menjalani ...",
			Answare1: "kehidupan yang punya tujuan",
			Answare2: "kehidupan yang bebas",
			Type1:    "J",
			Type2:    "P",
		},
		{
			ID:       uuid.New().String(),
			Question: "Dalam kondisi santai, saya lebih tertarik memperhatikan ...",
			Answare1: "gambaran yang muncul di benak saya",
			Answare2: "apa yang terjadi di sekitar saya",
			Type1:    "I",
			Type2:    "E",
		},
		{
			ID:       uuid.New().String(),
			Question: "Saya lebih suka memikirkan ...",
			Answare1: "kemungkinan yang akan terjadi di masa depan",
			Answare2: "apa yang sedang terjadi saat ini",
			Type1:    "N",
			Type2:    "S",
		},
		{
			ID:       uuid.New().String(),
			Question: "Saya akan lebih berpihak kepada orang yang ...",
			Answare1: "dapat memberikan alasan yang masuk akal",
			Answare2: "dapat memberikan alasan yang menyentuh perasaan",
			Type1:    "T",
			Type2:    "F",
		},
		{
			ID:       uuid.New().String(),
			Question: "Saya lebih menyukai lingkungan ... ",
			Answare1: "yang menegakkan aturan",
			Answare2: "yang memberi kebebasan",
			Type1:    "J",
			Type2:    "P",
		},
		{
			ID:       uuid.New().String(),
			Question: "Saya lebih bersemangat untuk ...",
			Answare1: "membayangkan sesuatu yang menyenangkan",
			Answare2: "bertemu dengan orang baru",
			Type1:    "I",
			Type2:    "E",
		},
		{
			ID:       uuid.New().String(),
			Question: "Saya lebih bersemangat jika berbicara ...",
			Answare1: "tentang kemungkinan di masa depan",
			Answare2: "tentang kejadian yang sedang berlangsung",
			Type1:    "N",
			Type2:    "S",
		},
		{
			ID:       uuid.New().String(),
			Question: "Dalam memilih pakaian, saya lebih mempertimbangkan ...",
			Answare1: "fungsi dari pakaian tersebut",
			Answare2: "model dari pakaian tersebut",
			Type1:    "T",
			Type2:    "F",
		},
		{
			ID:       uuid.New().String(),
			Question: "Jika saya menjadi ketua kelompok, saya cenderung ...",
			Answare1: "menerapkan kedisiplinan",
			Answare2: "memberikan kebebasan",
			Type1:    "J",
			Type2:    "P",
		},
		{
			ID:       uuid.New().String(),
			Question: "Saya lebih sering menghabiskan waktu untuk ...",
			Answare1: "mendalami apa yang saya pikirkan/rasakan",
			Answare2: "mengikuti kegiatan bersama orang lain",
			Type1:    "I",
			Type2:    "E",
		},
		{
			ID:       uuid.New().String(),
			Question: "Saya lebih menyukai kegiatan yang mengandalkan ...",
			Answare1: "non fisik (membaca,merenung, dsb)",
			Answare2: "fisik (olaharaga, seni, dsb)",
			Type1:    "N",
			Type2:    "S",
		},
		{
			ID:       uuid.New().String(),
			Question: "Bagi saya kebenaran adalah sesuatu yang ...",
			Answare1: "bersifat objektif",
			Answare2: "bersifat relatif",
			Type1:    "T",
			Type2:    "F",
		},
		{
			ID:       uuid.New().String(),
			Question: "Jika saya menjadi ketua kelompok, saya cenderung ...",
			Answare1: "menerapkan kedisiplinan",
			Answare2: "memberikan kebebasan",
			Type1:    "J",
			Type2:    "P",
		},
		{
			ID:       uuid.New().String(),
			Question: "Saya lebih nyaman melakukan tugas yang ...",
			Answare1: "membutuhkan konsentrasi",
			Answare2: "melibatkan banyak orang",
			Type1:    "I",
			Type2:    "E",
		},
		{
			ID:       uuid.New().String(),
			Question: "Ketika menonton televisi, saya lebih tertarik untuk menyaksikan program acara ...",
			Answare1: "berita",
			Answare2: "olahraga",
			Type1:    "N",
			Type2:    "S",
		},
		{
			ID:       uuid.New().String(),
			Question: "Saya lebih sering mengambil keputusan dengan mempertimbangkan ...",
			Answare1: "bukti-bukti yang ada",
			Answare2: "situasi dan kondisi yang ada",
			Type1:    "T",
			Type2:    "F",
		},
		{
			ID:       uuid.New().String(),
			Question: "Saya lebih menyukai karakter tokoh yang ...",
			Answare1: "disiplin dan profesional",
			Answare2: "kreatif dan inovatif",
			Type1:    "J",
			Type2:    "P",
		},
		{
			ID:       uuid.New().String(),
			Question: "Saya lebih nyaman menyampaikan informasi dengan cara ...",
			Answare1: "mengetik pesan digital (chat)",
			Answare2: "berbicara langsung",
			Type1:    "I",
			Type2:    "E",
		},
		{
			ID:       uuid.New().String(),
			Question: "Saya dapat lebih mudah untuk ...",
			Answare1: "mengimajinasikan sesuatu yang baru",
			Answare2: "mengamati suatu objek dengan detil",
			Type1:    "N",
			Type2:    "S",
		},
		{
			ID:       uuid.New().String(),
			Question: "Saya lebih suka membuat suatu karya yang ...",
			Answare1: "berguna untuk orang lain",
			Answare2: "disukai oleh orang lain",
			Type1:    "T",
			Type2:    "F",
		},
		{
			ID:       uuid.New().String(),
			Question: "Saya menciptakan sesuatu yang ...",
			Answare1: "berguna untuk orang lain",
			Answare2: "disukai oleh orang lain",
			Type1:    "J",
			Type2:    "P",
		},
		{
			ID:       uuid.New().String(),
			Question: "Saya dapat banyak menghabiskan waktu ketika ...",
			Answare1: "membaca buku",
			Answare2: "berbicara dengan orang lain",
			Type1:    "I",
			Type2:    "E",
		},
		{
			ID:       uuid.New().String(),
			Question: "Saya lebih menyukai pekerjaan yang mengandalkan ...",
			Answare1: "kreativitas",
			Answare2: "ketelitian",
			Type1:    "N",
			Type2:    "S",
		},
		{
			ID:       uuid.New().String(),
			Question: "Jika menjadi seorang pemimpin saya akan ...",
			Answare1: "bersikap seadil-adilnya",
			Answare2: "menciptakan kedamaian",
			Type1:    "T",
			Type2:    "F",
		},
		{
			ID:       uuid.New().String(),
			Question: "Agar tidak terlibat suatu masalah, saya akan ...",
			Answare1: "memperhatikan peraturan yang berlaku",
			Answare2: "mencari informasi sebanyak mungkin",
			Type1:    "J",
			Type2:    "P",
		},
		{
			ID:       uuid.New().String(),
			Question: "Saya merasa lebih nyaman ketika ...",
			Answare1: "mengerjakan tugas mandiri",
			Answare2: "mengerjakan tugas kelompok",
			Type1:    "I",
			Type2:    "E",
		},
		{
			ID:       uuid.New().String(),
			Question: "Saya lebih mudah memahami pelajaran dengan ...",
			Answare1: "membuat peta pikiran",
			Answare2: "membuat catatan yang detil",
			Type1:    "N",
			Type2:    "S",
		},
		{
			ID:       uuid.New().String(),
			Question: "Saya lebih suka dipandang sebagai orang yang ...",
			Answare1: "tegas dan disiplin",
			Answare2: "ramah dan bersahabat",
			Type1:    "T",
			Type2:    "F",
		},
		{
			ID:       uuid.New().String(),
			Question: "Saya percaya bahwa saya akan lebih berhasil jika ...",
			Answare1: "fokus pada tujuan",
			Answare2: "memiliki banyak pengalaman",
			Type1:    "J",
			Type2:    "P",
		},
		{
			ID:       uuid.New().String(),
			Question: "Saya merasa lebih bersemangat setelah ...",
			Answare1: "meluangkan waktu untuk diri sendiri",
			Answare2: "bertemu dengan banyak orang",
			Type1:    "I",
			Type2:    "E",
		},
		{
			ID:       uuid.New().String(),
			Question: "Menurut orang lain saya memiliki kelebihan dalam ...",
			Answare1: "menciptakan sesuatu",
			Answare2: "mengingat sesuatu",
			Type1:    "N",
			Type2:    "S",
		},
		{
			ID:       uuid.New().String(),
			Question: "Saya lebih suka menjelaskan suatu kejadian ...",
			Answare1: "sesuai kronologi (urutan kejadian)",
			Answare2: "dimulai dari hal yang menarik",
			Type1:    "T",
			Type2:    "F",
		},
		{
			ID:       uuid.New().String(),
			Question: "Saya akan lebih bersemangat dalam ...",
			Answare1: "meraih suatu prestasi",
			Answare2: "menjelajah ke tempat-tempat baru",
			Type1:    "J",
			Type2:    "P",
		},
		{
			ID:       uuid.New().String(),
			Question: "Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
			Answare1: "Privasi",
			Answare2: "Sosialisasi",
			Type1:    "I",
			Type2:    "E",
		},
		{
			ID:       uuid.New().String(),
			Question: "Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
			Answare1: "Masa Depan",
			Answare2: "Saat Ini",
			Type1:    "N",
			Type2:    "S",
		},
		{
			ID:       uuid.New().String(),
			Question: "Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
			Answare1: "Tercerahkan",
			Answare2: "Terhibur",
			Type1:    "T",
			Type2:    "F",
		},
		{
			ID:       uuid.New().String(),
			Question: "Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
			Answare1: "Efektif",
			Answare2: "Eksploratif",
			Type1:    "J",
			Type2:    "P",
		},
		{
			ID:       uuid.New().String(),
			Question: "Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
			Answare1: "Kontemplatif",
			Answare2: "Kesenangan",
			Type1:    "I",
			Type2:    "E",
		},
		{
			ID:       uuid.New().String(),
			Question: "Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
			Answare1: "Visi",
			Answare2: "Aksi",
			Type1:    "N",
			Type2:    "S",
		},
		{
			ID:       uuid.New().String(),
			Question: "Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
			Answare1: "Sains",
			Answare2: "Seni",
			Type1:    "T",
			Type2:    "F",
		},
		{
			ID:       uuid.New().String(),
			Question: "Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
			Answare1: "Prestatif",
			Answare2: "Adaptif",
			Type1:    "J",
			Type2:    "P",
		},
		{
			ID:       uuid.New().String(),
			Question: "Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
			Answare1: "Ketenangan",
			Answare2: "Kesenangan",
			Type1:    "I",
			Type2:    "E",
		},
		{
			ID:       uuid.New().String(),
			Question: "Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
			Answare1: "Ide",
			Answare2: "Fakta",
			Type1:    "N",
			Type2:    "S",
		},
		{
			ID:       uuid.New().String(),
			Question: "Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
			Answare1: "Kepemimpinan",
			Answare2: "Kebebasan Ekspresi",
			Type1:    "J",
			Type2:    "P",
		},
		{
			ID:       uuid.New().String(),
			Question: "Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
			Answare1: "Konsentrasi",
			Answare2: "Kerjasama",
			Type1:    "I",
			Type2:    "E",
		},
		{
			ID:       uuid.New().String(),
			Question: "Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
			Answare1: "Kualitas",
			Answare2: "Kuantitas",
			Type1:    "N",
			Type2:    "S",
		},
		{
			ID:       uuid.New().String(),
			Question: "Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
			Answare1: "Perencanaan",
			Answare2: "Spontanitas",
			Type1:    "T",
			Type2:    "F",
		},
		{
			ID:       uuid.New().String(),
			Question: "Pilihlah kata (a atau b) yang paling mencerminkan diri Anda",
			Answare1: "Perencanaan",
			Answare2: "Spontanitas",
			Type1:    "J",
			Type2:    "P",
		},
	}

	model := &entities.Test{}

	return Seed{
		entity: model,
		run: func(db *gorm.DB) (err error) {
			for _, v := range seeds {
				err = db.Create(&v).Error
			}
			return err
		},
	}
}
