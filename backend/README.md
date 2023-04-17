# Career Paths (Backend)

Career Paths Merupakan website rekomendasi karir di bidang IT yang menggunakan framework test tipe kepribadian MBTI. Website ini dikembangkan karena mahasiswa di Intitut Teknologi PLN Khususnya pada prodi Teknik Informatika dibingungkan dengan pilihan mata kuliah peminatan yang akan diambil di semester 5. Selain untuk rekomendasi karir pekerjaan di bidang IT. Pada website ini juga akan direkomendasikan mata kuliah yang harus diambil untuk mencapai pekerjaan yang diimpikan berdasarkan tipe kepribadian


# Tech Stack in Backend Folder

- Golang (Programming Language)
- Echo (Framework/Library)
- MySQL/PostgreSQL (Database)
- Gmail (SMTP)
- GORM (Query Database)
- JWT (Token Auth)


# How to install in Local Device

1. Clone Repository

```
git clone https://github.com/DwiSam/Career-Paths.git
```

2. Create Database in MySQL / PostgreSQL

```
Create Database career_paths
```

3. Copy .env.example to .env and insert the data with your configuration in your local device

4. If you get error in go.mod, you can solve the error with this command 

```go
go mod tidy
```

5. Running the backend with this command

``` go
go run main.go
```