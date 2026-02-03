# Portofolio Rizki Habibi

Website portofolio modern dengan tema GitHub-style, dibuat menggunakan Next.js, Tailwind CSS, dan Framer Motion.

## 🚀 Fitur

- ✨ Desain modern dengan tema gelap (charcoal gray, navy blue)
- 📱 Fully responsive
- 🎨 Glassmorphism cards
- 🔥 Animasi smooth dengan Framer Motion
- 📊 GitHub-style activity heatmap
- 📜 Sertifikat viewer dengan PDF preview
- 📄 CV section dengan preview dan download
- ⚡ Optimized untuk Vercel deployment

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animasi:** Framer Motion
- **Icons:** React Icons, Lucide React
- **Deployment:** Vercel

## 📁 Struktur Folder

```
portofolio/
├── public/
│   ├── project/          # Gambar proyek
│   ├── sertifikat/       # File PDF sertifikat
│   └── cv/               # File CV PDF
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── GitHubHeatmap.tsx
│       ├── Projects.tsx
│       ├── Certificates.tsx
│       ├── CV.tsx
│       └── Footer.tsx
└── package.json
```

## 🚀 Cara Menjalankan

### 1. Install Dependencies

```bash
npm install
```

### 2. Siapkan Assets

Pindahkan file-file asset ke folder `public`:

```bash
# Buat folder public jika belum ada
mkdir public

# Pindahkan folder project dan sertifikat ke public
mv project public/
mv sertifikat public/

# Buat folder cv dan tambahkan CV PDF
mkdir public/cv
# Tambahkan file CV_Rizki_Habibi.pdf ke folder public/cv/
```

### 3. Jalankan Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### 4. Build untuk Production

```bash
npm run build
```

## 📤 Deploy ke Vercel

### Cara 1: Via Vercel CLI

```bash
npm install -g vercel
vercel
```

### Cara 2: Via GitHub

1. Push project ke GitHub repository
2. Buka [vercel.com](https://vercel.com)
3. Import repository
4. Deploy otomatis

## 📝 Kustomisasi

### Mengubah Data Proyek

Edit file `src/components/Projects.tsx`:

```tsx
const projects = [
  {
    id: 1,
    title: 'Nama Proyek',
    description: 'Deskripsi proyek',
    image: '/project/gambar.png',
    tech: ['Laravel', 'MySQL'],
    github: 'https://github.com/...',
    demo: 'https://...',
    year: '2024',
  },
  // ...
]
```

### Mengubah Data Sertifikat

Edit file `src/components/Certificates.tsx`:

```tsx
const certificates = [
  {
    id: 1,
    title: 'Nama Sertifikat',
    issuer: 'Penerbit',
    year: '2024',
    category: 'Kategori',
    file: '/sertifikat/nama_file.pdf',
  },
  // ...
]
```

### Mengubah Informasi Personal

Edit file-file berikut:
- `src/components/Hero.tsx` - Nama dan subtitle
- `src/components/CV.tsx` - Informasi kontak
- `src/components/Footer.tsx` - Social media links

## 🎨 Warna Theme

```css
/* Charcoal Gray */
--charcoal-950: #0d0d0d;
--charcoal-900: #1a1a1a;

/* Navy Blue */
--navy-500: #3b82f6;
--navy-600: #2563eb;
--navy-700: #1d4ed8;

/* Soft Gray */
--soft-gray-300: #d1d5db;
--soft-gray-400: #9ca3af;
```

## 📄 License

MIT License - Bebas digunakan dan dimodifikasi.

---

Dibuat dengan ❤️ oleh Rizki Habibi
