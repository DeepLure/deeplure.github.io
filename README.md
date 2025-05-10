# DeepLure Website

A dynamic React-based landing page for DeepLure, showcasing the company's AI vision through an engaging typewriter animation and multi-page responsive design.

## Features

- React.js frontend with TypeScript
- Responsive dark-themed UI
- Custom typewriter text effect
- Multiple pages (Home, Contact, Team, Research)
- Georama font integration
- Consistent color theming

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. Fork or clone this repository to your GitHub account.
2. Go to your repository settings -> Pages and set up GitHub Pages.
3. Make sure to select GitHub Actions as the source.
4. Update the repository name in the workflow file if needed.

### Custom Domain (Optional)

If you want to use a custom domain:

1. Add your domain in repository settings under GitHub Pages -> Custom domain.
2. Create a CNAME file in your repository containing your domain name.
3. Configure your DNS settings to point to GitHub Pages.

## Local Development Setup

### Prerequisites

- Node.js (version 16.x or later)
- npm (usually comes with Node.js)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd <repository-directory>

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at [http://localhost:5000](http://localhost:5000).

### Building for Production

```bash
npm run build
```

## Technology Stack

- **Frontend**: React + TypeScript + Vite
- **UI Components**: Shadcn UI (based on Radix UI)
- **Styling**: Tailwind CSS
- **Routing**: Wouter
- **Backend**: Express.js + TypeScript

## Project Structure

```
/
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility functions
│   │   ├── pages/        # Page components
│   │   ├── styles/       # CSS files
│   │   ├── App.tsx       # Main app component
│   │   ├── index.css     # Global styles
│   │   └── main.tsx      # Application entry point
│   └── index.html        # HTML template
├── server/               # Backend Express server
├── shared/               # Shared code between client and server
├── .github/workflows/    # GitHub Actions workflows
└── package.json          # Dependencies and scripts
```

## License

MIT License