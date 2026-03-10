# 🎬 SinemaDB

TMDB API kullanan, React + Redux ile geliştirilmiş modern film ve dizi kataloğu uygulaması.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Redux](https://img.shields.io/badge/Redux-5-764ABC?style=for-the-badge&logo=redux)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)
![TMDB](https://img.shields.io/badge/TMDB-API-01B4E4?style=for-the-badge)

---


## Ekran Görüntüsü

![](sinemadb.gif)

---

## ✨ Özellikler

- 🎬 Film listesi — Popüler, Vizyonda, En İyi, Yakında kategorileri
- 📺 Dizi listesi — Popüler, Yayında, En İyi, Bugün kategorileri
- 🔍 Gerçek zamanlı arama (film + dizi)
- 🎭 Türe göre filtreleme
- 📋 İzleme listesi — Filmleri kaydet/çıkar (localStorage)
- 🎞 Film detay sayfası — Oyuncular, fragman, benzer filmler
- 🖼 Hero banner — Otomatik geçişli
- 📱 Mobil uyumlu tasarım
- 🌙 Sinematik dark tema

---

## 🛠 Teknolojiler

| Teknoloji | Kullanım |
|-----------|----------|
| React 19 | UI bileşenleri |
| Redux 5 | Global state yönetimi |
| Redux Thunk | Async API çağrıları |
| React Router v7 | Sayfa yönlendirme |
| Axios | HTTP istekleri |
| Vite | Build tool |
| TMDB API | Film & dizi verisi |

---

## 🏗 Redux Mimarisi

Bu proje Redux'un tüm temel kavramlarını kapsar:

```
src/
├── store/
│   └── index.js              # Store — createStore + applyMiddleware
├── actions/
│   ├── actionTypes.js        # Action Types sabitleri
│   └── movieActions.js       # Action Creator Functions (Redux Thunk)
└── reducers/
    ├── index.js              # Root Reducer — combineReducers
    ├── moviesReducer.js      # Film & dizi listesi state
    ├── detailReducer.js      # Film detay state
    ├── searchReducer.js      # Arama state
    ├── watchlistReducer.js   # İzleme listesi state
    └── genreReducer.js       # Tür listesi state
```

---

## 📁 Proje Yapısı

```
src/
├── actions/
│   ├── actionTypes.js
│   └── movieActions.js
├── components/
│   ├── Hero.jsx
│   ├── Loader.jsx
│   ├── MovieCard.jsx
│   └── Navbar.jsx
├── pages/
│   ├── Home.jsx
│   ├── MovieDetail.jsx
│   ├── TvSeries.jsx
│   ├── Search.jsx
│   └── Watchlist.jsx
├── reducers/
│   ├── index.js
│   ├── moviesReducer.js
│   ├── detailReducer.js
│   ├── searchReducer.js
│   ├── watchlistReducer.js
│   └── genreReducer.js
├── store/
│   └── index.js
├── utils/
│   └── helpers.js
├── App.jsx
├── App.css
└── main.jsx
```

---

## 🚀 Kurulum

### 1. Repoyu klonla

```bash
git clone https://github.com/kullaniciadin/sinemadb.git
cd sinemadb
```

### 2. Bağımlılıkları yükle

```bash
npm install
```

### 3. TMDB API Key al

[themoviedb.org/settings/api](https://www.themoviedb.org/settings/api) adresine gidip ücretsiz hesap oluştur ve **API Key (v3 auth)** kısmındaki kısa key'i kopyala.

### 4. `.env` dosyası oluştur

Projenin kök dizininde `.env` dosyası oluştur:

```env
VITE_TMDB_API_KEY=buraya_api_keyini_yaz
```

### 5. Projeyi çalıştır

```bash
npm run dev
```

Tarayıcıda `http://localhost:5173` adresine git.

---

## 📄 Sayfalar

| Sayfa | URL | Açıklama |
|-------|-----|----------|
| Ana Sayfa | `/` | Film listesi + Hero banner |
| Film Detay | `/movie/:id` | Detaylı film bilgisi |
| Diziler | `/tv` | Dizi listesi |
| Arama | `/search?q=...` | Arama sonuçları |
| İzleme Listesi | `/watchlist` | Kaydedilen içerikler |

---

## 📝 Lisans

MIT
