# Qrowd Frontend

React.js frontend for Qrowd project, a social platform for Q&A style interactions with user authentication and dashboard view.

Kullanıcı girişi ve kontrol paneli görüntüsü ile soru-cevap etkileşimi için geliştirilen Qrowd projesinin React.js tabanlı frontend uygulaması.

---

## Project Overview / Proje Özeti

### 🇬🇧 English
Qrowd is a community-driven social application where users can register, log in, and interact in a question & answer format. The frontend is built with React.js and communicates with a FastAPI backend. JWT tokens are used for secure authentication, and future improvements include Docker and Supabase integrations.

### 🇹🇷 Türkçe
Qrowd, kullanıcıların kayıt olup giriş yaptıktan sonra soru-cevap şeklinde etkileşimde bulunabildiği topluluk odaklı bir sosyal platformdur. Frontend React.js ile geliştirildi ve FastAPI backend ile haberleşiyor. Güvenli kimlik doğrulama için JWT token kullanılıyor. Gelecekte Docker ve Supabase entegrasyonu planlanıyor.

---

## Technologies / Teknolojiler

- **React.js**
- **Axios** (API istekleri)
- **JWT Authentication** (Token tabanlı kimlik doğrulama)
- **React Router DOM** (Sayfa yönlendirme)
- **Tailwind CSS** (Opsiyonel, ilerleyen aşamada ekleyebiliriz)

---

## Installation / Kurulum

### 1. Clone the repository / Depoyu klonla

```bash
git clone https://github.com/mmazgal/qrowd-frontend.git
cd qrowd-frontend
```

### 2. Install dependencies / Bağımlılıkları yükle

```bash
npm install
```

### 3. Start the development server / Geliştirme sunucusunu başlat

```bash
npm start
```

Frontend will run at: [http://localhost:3000](http://localhost:3000)

Frontend şurada çalışacak: [http://localhost:3000](http://localhost:3000)

---

## Features / Özellikler

- [x] User registration / Kullanıcı kayıt
- [x] User login with token / Token ile kullanıcı girişi
- [x] Dashboard page after login / Girişten sonra dashboard sayfası
- [ ] Token expiration handling / Token süresi kontrolü (yolda)
- [ ] Logout functionality / Çıkış sistemi
- [ ] UI improvements / Arayüz iyileştirmeleri
- [ ] Dockerize the frontend / Frontend Docker entegrasyonu

---

## Backend Integration / Backend Entegrasyonu

Frontend, FastAPI ile geliştirilen backend'e bağlanıyor. API endpoint'leri şu anda şu şekilde kullanılıyor:

- **Register:** `POST /register`
- **Login:** `POST /login`

Token başarılı bir girişten sonra local storage veya cookie ile tutulabilir (ileride).

---

## Roadmap / Yol Haritası

| Aşama | Durum |
|---------|--------|
| Backend entegrasyonu | ✔️ Tamamlandı |
| Kullanıcı Kayıt ve Giriş | ✔️ Tamamlandı |
| Dashboard bağlantısı | ✔️ Yapıldı |
| Token süresi ve otomatik çıkış | ⏳ Yapılacak |
| UI güncellemeleri | ⏳ Yapılacak |
| Docker ile yayınlama | ⏳ Yapılacak |
| Supabase entegrasyonu | ⏳ Finalde |

---

## Contribution / Katkı

This is a private repository for now.

Bu proje şu anda private (gizli) bir repodur.

Yakında proje tamamlandığında public (açık kaynak) yapabiliriz! 🚀

---

## License / Lisans

Private repository for personal development and future public release.

Şimdilik özel repo, geliştirme tamamlandığında açık kaynak yapılabilir.

