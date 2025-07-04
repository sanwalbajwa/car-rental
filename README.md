# Car Rental Web Application

A modern car rental web application built with Next.js that allows users to browse, book cars and administrators to manage the rental fleet and bookings.

## Features

### User Features
- Browse available cars with detailed information
- Book cars for specific dates
- Contact support through contact form
- User authentication and account management
- Responsive design for all devices

### Admin Features
- Add new cars to the fleet
- View and manage car listings
- Track and manage bookings
- Administrative dashboard

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Authentication**: Built-in authentication system
- **Deployment**: Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd car-rental-master
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── admin/             # Admin panel pages
│   ├── components/        # Shared components
│   ├── content/          # User-facing content pages
│   └── globals.css       # Global styles
├── public/               # Static assets
└── ...configuration files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Add your environment variables here
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please email [sanwalbajwa6026@gmail.com] or open an issue in the repository.
