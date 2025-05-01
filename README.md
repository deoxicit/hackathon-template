# Ethereum Hackathon Template

A comprehensive template for Ethereum-based hackathons, featuring a modular monorepo structure with frontend, backend, and smart contracts.

## Features

- 🚀 **Modern Stack**: Next.js, TypeScript, Tailwind CSS
- 🔗 **Web3 Integration**: Wagmi, Viem, Hardhat
- 📦 **Monorepo**: Turborepo for efficient development
- 🏗️ **Modular Architecture**: Separate packages for frontend, backend, and contracts
- 🔒 **Type Safety**: Full TypeScript support across all packages

## Project Structure

```
hackathon-template/
├── apps/
│   ├── frontend/      # Next.js app with Wagmi & Viem
│   └── backend/       # Express.js API
├── packages/
│   ├── contracts/     # Hardhat smart contracts
│   ├── ui/           # Shared UI components
│   └── utils/        # Shared utilities
```

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd hackathon-template
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development servers**

   ```bash
   # Start all services
   npm run dev

   # Or start specific services
   npm run dev --workspace=@hackathon/frontend
   npm run dev --workspace=@hackathon/backend
   ```

## Available Scripts

- `npm run dev` - Start all services in development mode
- `npm run build` - Build all packages
- `npm run test` - Run tests across all packages
- `npm run lint` - Run linting across all packages

## Frontend Development

The frontend is built with Next.js and includes:

- Wagmi hooks for Web3 interactions
- Viem for Ethereum interactions
- Tailwind CSS for styling

## Backend Development

The backend is built with Express.js and includes:

- TypeScript support
- CORS configuration
- Environment variable support

## Smart Contract Development

Smart contracts are developed using Hardhat and include:

- TypeScript support
- Testing framework
- Deployment scripts

## Environment Variables

Create `.env` files in each package as needed:

- Frontend: `apps/frontend/.env.local`
- Backend: `apps/backend/.env`
- Contracts: `packages/contracts/.env`

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

MIT
