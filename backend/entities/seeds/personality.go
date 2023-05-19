package seeds

import (
	"career-paths/entities"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

func personalitySeeder(db *gorm.DB) Seed {
	seeds := []entities.Personality{
		{
			ID:           uuid.New().String(),
			Type_person:  "INFJ",
			Information1: "Mereka adalah introvert alami, orang dengan tipe kepribadian ini mampu membentuk hubungan yang kuat dan bermakna dengan orang lain. Mereka menikmati membantu orang lain, tetapi mereka juga membutuhkan waktu menyendiri untuk mengisi ulang tenaga",
			Information2: "Dengan rasa intuisi dan pemahaman emosional yang kuat, INFJ dapat berbicara dengan lembut dan empati. Namun bukan berarti  mereka adalah sosok penurut. Mereka memiliki prinsip yang kuat dan kemampuan untuk bertindak tegas untuk mencapai apa yang mereka mau",
			Information3: "Mereka mencoba memahami dunia pada sisi baik dan sisi buruk untuk menciptakan kondisi yang lebih baik",
			Information4: "Ketika membuat keputusan, mereka lebih menekankan pada masalah pribadi daripada fakta objektif yang ada. Mereka juga suka melakukan kontrol dengan perencanaan, pengorganisasian dan pengambilan keputusan sedini mungkin",
		},
		{
			ID:           uuid.New().String(),
			Type_person:  "ENFJ",
			Information1: "ENFJ memiliki jiwa ekstrovert yang kuat, mereka sangat menikmati menghabiskan waktu bersama orang lain. Mereka dipandang oleh orang lain sebagai sosok yang hangat, penuh kasih sayang dan suportif",
			Information2: "Terkadang ENFJ  terlalu sering untuk mencurahkan waktu mereka untuk orang lain sampai mereka  mengabaikan diri sendiri. Mereka juga memiliki kecenderungan untuk terlalu keras pada diri mereka sendiri, menyalahkan diri  sendiri ketika ada masalah dan tidak memberi diri mereka cukup pujian ketika semuanya berjalan dengan sukses.",
			Information3: "Mereka pandai mencari jalan tengah di banyak perdebatan. Karena hal ini lah, mereka dapat menjadi pemimpin yang luar biasa dan membawa antusiasme kepada kelompok untuk memotivasi dan memberi inspirasi",
			Information4: "Meski terlihat sangat mencintai orang, ENFJ perlu belajar untuk mencintai diri sendiri dan mencari waktu untuk sendirian",
		},
		{
			ID:           uuid.New().String(),
			Type_person:  "INFP",
			Information1: "Sifatnya cukup tertutup dan senang kesunyian",
			Information2: "Karena Introvert, INFP memperoleh energi dengan cara menghabiskan waktu sendirian. Saat mereka berada dalam situasi sosial maka mereka harus banyak mengeluarkan energi",
			Information3: "Biasanya mereka mengandalkan intuisi dan lebih fokus pada gambaran besar daripada rincian yang mendetail. Mereka bisa sangat teliti tentang hal-hal yang benar-benar mereka sukai",
			Information4: "INFP menekankan pada perasaan pribadi dan keputusan mereka lebih dipengaruhi oleh kekhawatiran ini daripada oleh informasi yang objektif",
			Information5: "Mereka sering menunda saat mengambil keputusan penting, berjaga jaga jika terjadi perubahan situasi. Biasanya mereka mengambil keputusan  didasarkan pada nilai-nilai pribadi dan bukan logika",
		},
		{
			ID:           uuid.New().String(),
			Type_person:  "ENFP",
			Information1: "Orang-orang dengan tipe kepribadian ini sangat tidak menyukai rutinitas dan lebih suka berfokus pada masa depan. Meskipun mereka hebat dalam menghasilkan ide-ide baru, mereka terkadang menunda tugas-tugas penting hingga menit terakhir. Memimpikan ide tetapi tidak menyelesaikannya sampai selesai adalah maslaah klasik",
			Information2: "ENFP memiliki keterampilan orang yang unggul. Selain memiliki antusiasme yang berlimpah, mereka juga benar-benar peduli pada orang lain. ENFP pandai memahami apa yang orang lain rasakan. Dengan semangat, karisma, dan kreativitas mereka, mereka juga bisa menjadi pemimpin yang hebat",
			Information3: "ENFP dapat dengan mudah terganggu atau terdistraksi, terutama ketika mereka mengerjakan sesuatu yang tampaknya membosankan atau tidak menginspirasi",
			Information4: "ENFP fleksibel dan suka membiarkan opsi mereka tetap terbuka. Mereka bisa spontan dan sangat mudah beradaptasi dengan perubahan. Mereka juga tidak menyukai rutinitas dan mungkin memiliki masalah dengan disorganisasi dan penundaan",
		},
		{
			ID:           uuid.New().String(),
			Type_person:  "INTP",
			Information1: "Sifat mereka tenang, pendiam, dan bijaksana. Sebagai introvert mereka lebih suka bercengkrama dengan kelompok kecil dan teman dekat",
			Information2: "Ketika menganalisis data dan membuat keputusan, mereka sangat logis dan objektif.",
			Information3: "Senang memikirkan konsep teoritis dan senderung menghargai kecerdasan daripada emosi",
			Information4: "INTP sangat fleksibel dan sering berpikir “out of the box.”",
			Information5: "Mereka menyukai sesuatu yang tetap terbuka dan merasa dibatasi oleh sebuah perencanaan",
		},
		{
			ID:           uuid.New().String(),
			Type_person:  "ENTP",
			Information1: "Mereka lebih fokus pada masa depan daripada pada saat ini. Mereka sering memulai proyek tetapi jarang  menyelesaikannya karena mereka begitu fokus pada gambaran besar daripada kebutuhan saat ini",
			Information2: "ENTP senang berinteraksi dengan berbagai tipe orang. Mereka adalah pembicara  handal dan suka melibatkan orang lain dalam perdebatan yang cerdas",
			Information3: "Sifat keingintahuan mereka tinggi untuk memahami dunia di sekitar mereka. Mereka terus-menerus mencerna informasi dan ide-ide baru dengan cepat dalam menghasilkan kesimpulan. Mereka mampu memahami hal-hal baru dengan cukup cepat",
			Information4: "Seorang ENTP menikmati debat sebagai cara mengeksplorasi suatu topik, mempelajari apa yang orang lain yakini, dan membantu orang lain melihat sisi lain dari cerita tersebut",
		},
		{
			ID:           uuid.New().String(),
			Type_person:  "INTJ",
			Information1: "Mereka cenderung introvert dan lebih nyaman bekerja sendiri",
			Information2: "Lebih suka membuat rencana jauh-jauh hari seakan mereka sedang mengendalikan dunia",
			Information3: "INTJ lebih menekankan logika dan informasi objektif dibanding emosi subjektif",
			Information4: "Mereka melihat gambaran besar dan suka berfokus pada informasi abstrak daripada detail yang konkret",
		},
		{
			ID:           uuid.New().String(),
			Type_person:  "ENTJ",
			Information1: "Mereka lebih bersemangat ketika menghabiskan banyak waktu bersama orang lain. Memiliki kemampuan berbicara yang handal dan cakap dalam berinteraksi dengan orang banyak",
			Information2: "ENTJ suka membuat jadwal atau tindakan yang terencana dengan jelas karena memberikan mereka rasa tenang jika sesuatu dapat diprediksi dan dikontrol",
			Information3: "Saat memutuskan sesuatu, mereka menekankan pada informasi yang objektif dan logis. Emosi orang lain atau perasaan pribadi jarang mempengaruhi keputusan mereka",
			Information4: "Tipe kepribadian ENTJ lebih suka memikirkan masa kini dan lebih tertarik dengan informasi abstrak dibanding detail konkret",
			Information5: "Mereka sering menyembunyikan emosi dan sentimentalitas mereka sendiri, karena bagi mereka hal tersebut adalah sebuah kelemahan yang tidak boleh diketahui pihak lain",
		},
		{
			ID:           uuid.New().String(),
			Type_person:  "ISFP",
			Information1: "Tidak seperti ekstrovert yang mendapatkan energi dari berinteraksi dengan orang lain, introvert justru terkuras energinya saat di sekitar orang lain. Setelah menghabiskan waktu dengan orang, introvert sering menemukan bahwa mereka memerlukan waktu untuk sendirian. Oleh sebab itu, mereka biasanya lebih suka berbaur dengan  teman dekat dan anggota keluarga saja",
			Information2: "ISFP suka fokus pada detail. Mereka menghabiskan lebih banyak waktu untuk menikmati waktu yang dimiliki daripada mengkhawatirkan masa depan",
			Information3: "ISFP lebih suka melakukan aksi daripada sekadar “bermimpi”. Mereka tidak menyukai teori-teori abstrak kecuali mereka dapat mengaplikasikannya secara praktis. Mereka lebih suka situasi belajar yang melibatkan pengalaman langsung",
			Information4: "ISFP suka membiarkan opsi mereka terbuka, sehingga mereka sering menunda membuat keputusan untuk melihat apakah ada yang berubah atau berjaga jika opsi baru muncul",
		},
		{
			ID:           uuid.New().String(),
			Type_person:  "ESFP",
			Information1: "ESFP hidup sangat nyaman di “momen saat ini” dan kadang-kadang gagal memikirkan bagaimana tindakan saat ini akan mengarah pada konsekuensi jangka panjang. Mereka akan sering tergesa-gesa dalam sebuah hal dan mencari tahu saat semuanya sudah terjadi. Mereka juga cenderung tidak menyukai rutinitas. Mereka selalu mencari petualangan dan menikmati pengalaman baru",
			Information2: "ESFP cenderung sangat praktis dalam banyak hal. Mereka lebih suka belajar melalui pengalaman langsung dan cenderung tidak suka belajar dari buku atau diskusi. Karena itu, siswa dengan tipe kepribadian ESFP kadang-kadang tertekan dalam ruang kelas yang monoton dan membosankan. Namun, mereka unggul dalam situasi di mana mereka diizinkan untuk berinteraksi dengan orang lain atau belajar melalui pengalaman langsung",
			Information3: "Selain memiliki kesadaran yang kuat tentang lingkungan mereka, mereka juga sangat pengertian dan tanggap ketika orang curhat dengannya. Mereka dapat merasakan apa yang orang lain rasakan dan tahu bagaimanacaranya  merespon. Orang menganggap mereka sosok yang simpatik, hangat, dan santai",
			Information4: "Karena sifatnya yang terlalu antusias, ESFP sering disindir sebagai pencari perhatian. Padahal  mereka hanya suka untuk bersenang-senang dan tidak menghindari sorotan, mereka lebih tertarik pada hidup di masa sekarang (YOLO) dan melakukan apa yang terasa benar pada saat itu",
		},
		{
			ID:           uuid.New().String(),
			Type_person:  "ISTP",
			Information1: "Orang dengan kepribadian ISTP berorientasi pada hasil. Ketika ada masalah, mereka ingin cepat memahami penyebab yang mendasarinya dan mencoba beberapa solusi. ISTP adalah sosok yang tenang dan santai terhadap orang lain",
			Information2: "ISTP menikmati pengalaman baru dan sering mencari kesenangan yang berisiko. Mereka sering menggeluti hobi yang berisiko  seperti bersepeda motor, para-layang, selancar, dan berkuda. Dalam beberapa kasus, mereka memilih karier di bidang-bidang seperti balap, terbang, atau pemadam kebakaran untuk memacu adrenalin",
			Information3: "Mereka sangat menekankan tradisi dan hukum. Mereka lebih suka mengikuti aturan dan prosedur yang sudah ada sebelumnya. Dalam beberapa kasus, ISTJ dianggap sebagai pribadi yang kaku dan keras dalam mempertahankan struktur",
			Information4: "ISTP pandai memikirkan segala masalah dengan segala masalah. Meski begitu banyak orang salah menilai bahwa mereka adalah orang yang dingin dan pendiam",
			Information5: "Mereka lebih suka membuat penilaian berdasarkan kriteria objektif daripada keyakinan atau nilai-nilai pribadi",
		},
		{
			ID:           uuid.New().String(),
			Type_person:  "ESTP",
			Information1: "ESTP tidak memiliki banyak waktu untuk teori atau konsep abstrak. Mereka  lebih suka informasi langsung yang dapat mereka pikirkan secara rasional dan segera ditindaklanjuti.",
			Information2: "Ketika dihadapkan dengan masalah, orang-orang dengan tipe kepribadian ini dengan cepat melihat fakta dan mencari solusi segera. Mereka cenderung berimprovisasi daripada menghabiskan banyak waktu  untuk merencanakannya",
			Information3: "Mereka sangat jeli, sering mengambil rincian yang orang lain tidak pernah perhatikan. Orang lain kadang-kadang menggambarkan mereka sebagai “pembicara cepat” yang sangat persuasif. Dalam pengaturan sosial, mereka sering tampak seperti beberapa langkah di depan percakapan",
			Information4: "Karena sifatnya yang sering mengambil keputusan dengan cepat, ESTP sering dinilai oleh orang-orang sebagai sosok yang gegabah. Padahal mereka bertindak cepat berdasarkan kesan dan logika mereka",
			Information5: "Orang dengan tipe kepribadian ini bukan seorang perencana. Mereka bereaksi pada saat itu dan seringkali bisa sangat impulsif atau bahkan mengambil risiko",
		},
		{
			ID:           uuid.New().String(),
			Type_person:  "ISFJ",
			Information1: "ISFJ menyukai sebuah struktur dan berusaha untuk mempertahankan struktur yang ada di semua lini kehidupan mereka. walaupun orang dengan tipe kepribadian ini tertutup dan cenderung pendiam, tetapi mereka adalah pengamat yang tajam dan fokus pada orang lain. Karena mereka sangat perseptif, ISFJ pandai mengingat detail tentang orang lain. Orang-orang dengan tipe kepribadian ini sangat terbiasa dengan emosi dan perasaan orang lain",
			Information2: "Orang dengan kepribadian ISFJ lebih suka fakta konkret daripada teori abstrak. Oleh karena itu mereka cenderung suka praktek langsung dibanding berteori. Ini juga berarti bahwa mereka biasanya menghargai pelajaran untuk diaplikasikan secara praktis. Mereka cenderung menjadi lebih tertarik pada hal-hal baru ketika mereka dapat melihat dan menghargai bagaimana hal itu dapat memecahkan masalah di dunia nyata",
			Information3: "Walaupun ISFJ pandai memahami emosi orang lain, mereka sering kesulitan untuk mengekspresikan perasaan mereka sendiri",
			Information4: "Karena ISFJ cenderung menjaga tradisi yang ada, orang menjadi khawatir mereka tidak bsia membawa perubahan. Sementara orang dengan tipe kepribadian ini mungkin tidak cepat berubah, mereka masih bisa beradaptasi. Mereka hanya lebih suka punya waktu untuk memikirkan dan mempersiapkan perubahan besar",
		},
		{
			ID:           uuid.New().String(),
			Type_person:  "ESFJ",
			Information1: "Walaupun mendapatkan kesenangan dari membantu orang lain, ESFJ juga membutuhkan penerimaan yang baik. Mereka mengharapkan kebaikan dan cara mereka untuk diperhatikan dan dihargai oleh orang lain. Mereka peka terhadap kebutuhan dan perasaan orang lain. Mereka juga pandai merespon serta memberikan perawatan yang dibutuhkan orang. Mereka ingin disukai oleh orang lain dan mudah disakiti oleh ketidakpedulian atau penolakan",
			Information2: "Individu dengan tipe kepribadian ini dibesarkan dengan nilai dan standar tinggi sehingga menjadi orang dewasa yang murah hati. ESFJ yang dibesarkan dalam lingkungan yang kurang suportif mungkin memiliki etika yang  cenderung menjadi manipulatif dan egois",
			Information3: "ESFJ secara alami pandai untuk memahami orang lain. Mereka adalah pengamat yang cermat dari orang lain dan mahir mendukung potensi terbaik dari seseorang. Karena ESFJ begitu pandai membantu orang lain merasa senang tentang diri mereka sendiri, orang merasa tertarik pada ESFJ",
			Information4: "ESFJ juga memiliki keinginan kuat untuk melakukan kontrol atas lingkungan mereka. Pengorganisasian, perencanaan, dan penjadwalan membantu orang dengan tipe kepribadian ini merasa menguasai dunia di sekitar mereka",
		},
		{
			ID:           uuid.New().String(),
			Type_person:  "ISTJ",
			Information1: "ISTJ adalah sosok yang penuh tanggung jawab dan realistis. Mereka mengambil pendekatan logis untuk mencapai sebuah tujuan. Mereka mampu mengabaikan gangguan untuk fokus pada tugas yang dihadapi dan sering digambarkan sebagai orang yang dapat diandalkan dan dapat dipercaya",
			Information2: "Mereka adalah perencana sejati, ISTJ suka merencanakan sesuatu dengan matang sebelum melakukannya. Jika terjadi kekacauan di tengah jalan, mereka tidak akan beristirahat sampai solusi untuk masalah itu ditemukan dan semuanya berjalan lurus",
			Information3: "Mereka sangat menekankan tradisi dan hukum. Mereka lebih suka mengikuti aturan dan prosedur yang sudah ada sebelumnya. Dalam beberapa kasus, ISTJ dianggap sebagai pribadi yang kaku dan keras dalam mempertahankan struktur",
		},
		{
			ID:           uuid.New().String(),
			Type_person:  "ESTJ",
			Information1: "Orang sering menggambarkan ESTJ sebagai sosok yang berkomitmen dan praktis. Mereka cenderung sangat jujur dalam berbagi pendapat, yang kadang-kadang dianggap keras atau terlalu kritis",
			Information2: "Individu dengan tipe kepribadian ini sangat menjunjung tradisi, aturan, dan keamanan. Mempertahankan status quo penting bagi ESTJ dan mereka sering terlibat dalam pemerintah dan organisasi masyarakat",
			Information3: "Karena pendekatan ortodoks mereka terhadap kehidupan, mereka kadang-kadang dapat dilihat sebagai orang kaku, keras kepala, dan pantang menyerah. Sikap mengambil alih mereka memudahkan ESTJ untuk mengambil posisi kepemimpinan",
			Information4: "Keyakinan diri dan keyakinan mereka yang kuat membantu mereka unggul dalam menjalankan rencana, tetapi kadang-kadang mereka bisa terlihat kritis dan terlalu agresif, khususnya ketika orang lain gagal memenuhi standar tinggi mereka",
		},
	}

	model := &entities.Personality{}

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
