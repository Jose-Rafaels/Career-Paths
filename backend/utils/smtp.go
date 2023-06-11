package utils

import (
	"career-paths/config"
	"fmt"
	"net/smtp"
)

type loginAuth struct {
	username, password string
}

func (l *loginAuth) Start(server *smtp.ServerInfo) (string, []byte, error) {
	auth := smtp.PlainAuth("", l.username, l.password, server.Name)
	return auth.Start(server)
}

func (l *loginAuth) Next(fromServer []byte, more bool) ([]byte, error) {
	return nil, nil
}

func loginsAuth(username, password string) smtp.Auth {
	return &loginAuth{username, password}
}

func SendEmail(email string) error {
	conf := config.NewAppConfig()
	host := conf.Smtp.Host
	port := 587
	password := conf.Smtp.Pass
	username := conf.Smtp.User
	from := username

	addr := fmt.Sprintf("%v:%v", host, port)
	subject := "Registrasi Berhasil! - Career Paths"

	body := `
		<html>
		<head>
			<style>
				
				h1 {
					color: #0000ff;
					font-size: 24px;
					font-weight: bold;
				}

				p {
					font-size: 16px;
					margin-bottom: 10px;
				}

				ul {
					margin-left: 20px;
					font-size: 16px;
				}

				li {
					margin-bottom: 5px;
				}
			</style>
		</head>
		<body>
			<h1>Selamat Bergabung dengan Career Paths</h1>

			<p>Dear User,</p>

			<p>
				Kami dengan senang hati mengucapkan selamat datang di Career Paths! 
				Ini adalah email konfirmasi untuk memberitahu kamu, bahwa registrasi 
				kamu pada website kami telah berhasil.
			</p>

			<p>
				Kami ingin mengingatkan kamu bahwa Career Paths adalah platform yang 
				dirancang untuk membantu kamu menemukan jenis kepribadian kamu melalui 
				tes MBTI (Myers-Briggs Type Indicator). Dari hasil tes MBTI tersebut kami akan
				memberikan rekomendasi mata kuliah pilihan yang ada di jurusan teknik informatika 
				- IT PLN. Selain rekomendasi mata kuliah, kami juga memberikan rekomendasi 
				pekerjaan yang sesuai dengan kepribadian kamu. Kami berharap, platform ini dapat
				memberikan pengalaman terbaik untuk mencapai karier impian kamu.
			</p>

			<p>
				Berikut merupakan fitur yang terdapat pada website Career Paths :
			</p>

			<ul>
				<li>Tes MBTI: Nikmati pengalaman tes MBTI yang komprehensif yang akan membantu kamu memahami diri sendiri lebih baik dan mengidentifikasi kepribadian kamu.</li>
				<li>Rekomendasi Pekerjaan: Kami akan memberikan rekomendasi pekerjaan yang sesuai dengan kepribadian kamu.</li>
				<li>Rekomendasi Mata Kuliah: Kami akan memberikan rekomendasi mata kuliah pilihan di program studi teknik informatika pada semester 5 yang sejalan dengan jenis pekerjaan.</li>
			</ul>

			<p>
				Kami sangat berterima kasih atas kepercayaannya untuk bergabung dengan Career Paths. 
				Jika kamu memiliki pertanyaan atau membutuhkan bantuan dalam menggunakan platform kami, 
				jangan ragu untuk menghubungi tim dukungan kami melalui email careerpaths.itpln@gmail.com. 
				Kami akan dengan senang hati membantu kamu.
			</p>

			<p>
				Sekali lagi, selamat bergabung dengan Career Paths! Kami berharap kamu menikmati perjalanan 
				kamu untuk menemukan karier yang sesuai dengan kepribadian kamu.
			</p>

			<p>Salam hangat,</p>

			<p>Tim Career Paths</p>
		</body>
		</html>
	`

	message := []byte("From: " + from + "\n" + "To: " + email + "\n" + "Subject: " + subject + "\n" + "Content-Type: text/html; charset=UTF-8" + "\n\n" + body + "\r\n")

	auth := loginsAuth(username, password)

	to := []string{email}

	errs := smtp.SendMail(addr, auth, from, to, message)

	if errs != nil {
		return errs
	}

	return nil
}