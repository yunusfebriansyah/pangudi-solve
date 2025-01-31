# PangudiSolve

PangudiSolve adalah aplikasi AI yang dirancang untuk membantu pengguna dalam berbagai tugas, salah satunya adalah chatbot cerdas yang dikembangkan menggunakan teknologi terbaru.

## 🚀 Teknologi yang Digunakan

### Core Technologies
- [Vite](https://vite.dev/) - Sebagai bundler modern yang cepat
- [React](https://react.dev) - Untuk membangun antarmuka pengguna yang interaktif
- [Typescript](https://www.typescriptlang.org) - Untuk meningkatkan keamanan dan kejelasan kode
- [ChakraUI](http://chakra-ui.com) - Untuk menyediakan desain yang elegan dan responsif

### AI Infrastructure
- [DeepSeek-R1](https://www.deepseek.com) - Model AI yang digunakan untuk chatbot
- [Groq](https://groq.com/) - **Akselerator AI Hardware** untuk inferensi kecepatan tinggi (LPU)

### Deployment
- [Vercel](http://vercel.com) - Untuk deployment yang cepat dan andal

## 🔥 Fitur Utama

- **Chatbot AI**: Memanfaatkan model **Deepseek R1** untuk memberikan jawaban cerdas dan relevan.
- **Dukungan Multi-Bahasa**: Dapat memberikan jawaban dalam bahasa Indonesia maupun Inggris.
- **UI Responsif**: Dibangun dengan Chakra UI untuk pengalaman pengguna yang lebih baik.
- **Performa Optimal**: Menggunakan Vite untuk bundling yang cepat dan efisien.
- **Hosting di Vercel**: Memastikan akses cepat dan stabil di berbagai perangkat.

## 📦 Instalasi dan Menjalankan Proyek

1. **Clone repository**
   ```sh
   git clone https://github.com/yunusfebriansyah/pangudi-solve.git
   cd pangudi-solve
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Menjalankan aplikasi dalam mode pengembangan**
   ```sh
   npm run dev
   ```
4. **Deploy ke Vercel** (Opsional, jika ingin langsung di-deploy)
   ```sh
   vercel
   ```

## 🎯 Cara Penggunaan

1. Buka aplikasi [PangudiSolve](http://pangudisolve.vercel.app) di browser.
2. Masukkan pertanyaan atau perintah di kolom input.
3. Tekan tombol **Send** atau tekan **Enter** untuk mengirimkan pesan.
4. Chatbot akan merespons dengan jawaban yang sesuai menggunakan model **Deepseek R1**.
5. Jika perlu, pilih bahasa yang diinginkan di bagian opsi bahasa.

## 💡 Catatan

- Jika model AI selalu memberikan output dengan format `<think>...</think>`, pastikan Anda telah menerapkan **fungsi pembersih teks** di dalam kode.
- Pastikan memiliki **API Key** yang valid untuk Deepseek agar chatbot dapat berfungsi dengan baik.

## 🤝 Kontribusi

Jika ingin berkontribusi dalam pengembangan **PangudiSolve**, silakan fork repository ini dan ajukan pull request!

## 📜 Developers
Dikembangkan dengan ❤️ oleh tim PangudiSolve!