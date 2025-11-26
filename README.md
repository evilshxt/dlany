<div align="center">

# 🚀 dlany

**Universal Media Downloader** - Download high-quality videos and audio from YouTube, Instagram, and TikTok

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)

[Live Demo](https://dlany.vercel.app) • [Report Bug](https://github.com/evilshxt/dlany/issues) • [Request Feature](https://github.com/evilshxt/dlany/issues)

</div>

## ✨ Features

- 🎥 **Multi-Platform Support** - Download from YouTube, Instagram, and TikTok
- 🎵 **Flexible Formats** - Choose between MP4 video or MP3 audio
- ⚡ **High Performance** - Optimized for speed with queue-based processing
- 🎨 **Beautiful UI** - Modern glass-morphism design with smooth animations
- 📱 **Responsive** - Works perfectly on desktop and mobile devices
- 🔒 **Privacy-First** - No tracking, no data collection
- 🚀 **Fast & Reliable** - Built with modern tech stack

## 🏗️ Tech Stack

### Frontend
- **React 19** with TypeScript
- **Vite** for lightning-fast development
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

### Backend (Planned)
- **FastAPI** with Python
- **yt-dlp** for media extraction
- **FFmpeg** for video/audio processing
- **Redis** for job queuing
- **Docker** for deployment

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/evilshxt/dlany.git
cd dlany
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:5173](http://localhost:5173)

## 📖 Usage

1. **Paste your media URL** (YouTube, Instagram, or TikTok)
2. **Choose format** - Video (MP4) or Audio (MP3)
3. **Click Download** - Your file will be processed and downloaded

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Project Structure

```
dlany/
├── public/           # Static assets
├── src/            # Source code
│   ├── App.tsx     # Main application component
│   ├── main.tsx    # Application entry point
│   └── index.css   # Global styles
├── backend/        # Backend code (git-ignored)
├── package.json    # Dependencies and scripts
└── README.md       # This file
```

## 🌟 Roadmap

- [ ] Backend API implementation
- [ ] YouTube video/audio extraction
- [ ] Instagram media download
- [ ] TikTok video processing
- [ ] Queue system for handling multiple requests
- [ ] Progress indicators
- [ ] Batch download support
- [ Quality options
- [ ] Browser extension

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

**dlany** is intended for educational purposes and for downloading content you have the rights to access. Please respect copyright laws and terms of service of the platforms. This tool is not affiliated with YouTube, Instagram, or TikTok.
This Project is still in development

## 🙏 Acknowledgments

- [yt-dlp](https://github.com/yt-dlp/yt-dlp) for media extraction
- [FFmpeg](https://ffmpeg.org/) for media processing
- [Tailwind CSS](https://tailwindcss.com/) for the beautiful UI
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
  
---

<div align="center">

Made with ❤️ by [evilshxt](https://github.com/evilshxt)

[⭐ Star this repo](https://github.com/evilshxt/dlany) if it helped you!

</div>
