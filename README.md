# Scoutripper - Trekking Gear Rental Platform

A modern e-commerce platform for renting and buying trekking gear, built with React and Vite.

## Features

- 🏔️ Browse trekking gear for rent or purchase
- 🛒 Dynamic shopping cart with rental duration selection
- 📅 Calendar-based rental date picker
- 🔍 Advanced filtering (category, difficulty, weather, price)
- 📏 Comprehensive size guide
- 💳 Multi-step checkout flow
- 📱 Fully responsive design

## Tech Stack

- **Frontend:** React 18, React Router DOM
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Build Tool:** Vite

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd Scoutripper
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with default settings (Vite framework auto-detected)

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── context/        # React Context (CartContext)
├── data/           # Product data and mock data
└── utils/          # Utility functions
```

## License

MIT
