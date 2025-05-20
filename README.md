# 🎮 Counter Game - Interactive Blockchain Counter

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-13-black?style=for-the-badge&logo=next.js" alt="Next.js"/>
  <img src="https://img.shields.io/badge/Hardhat-2.19.4-yellow?style=for-the-badge&logo=ethereum" alt="Hardhat"/>
  <img src="https://img.shields.io/badge/Wagmi-1.4.13-blue?style=for-the-badge&logo=ethereum" alt="Wagmi"/>
  <img src="https://img.shields.io/badge/TypeScript-5.0.4-blue?style=for-the-badge&logo=typescript" alt="TypeScript"/>
</div>

## 🌟 Overview

Counter Game is a modern, interactive blockchain application that demonstrates the power of Web3 integration with a beautiful user interface. This project combines the latest technologies in blockchain development with a sleek, responsive frontend to create an engaging user experience.

### ✨ Features

- 🔗 **Blockchain Integration**: Seamless interaction with Ethereum smart contracts
- 🎯 **Interactive Counter**: Increment and decrement functionality with blockchain state management
- 👑 **Owner Privileges**: Special reset functionality for contract owners
- 🎨 **Modern UI**: Beautiful gradient design with glassmorphism effects
- 🔒 **Secure**: Built with best practices for Web3 security
- 📱 **Responsive**: Works flawlessly on all devices

## 🚀 Getting Started

### Prerequisites

- Node.js >= 20.18.3
- Yarn >= 3.2.3
- MetaMask or any Web3 wallet

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/counter-game.git
cd counter-game
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development environment:
```bash
yarn start
```

4. Deploy the smart contract:
```bash
yarn deploy
```

## 🛠️ Technology Stack

- **Frontend**: Next.js 13 with TypeScript
- **Smart Contracts**: Solidity with Hardhat
- **Web3 Integration**: Wagmi
- **Styling**: Tailwind CSS
- **Development**: TypeScript, ESLint, Prettier

## 📦 Project Structure

```
counter-game/
├── packages/
│   ├── nextjs/          # Frontend application
│   └── hardhat/         # Smart contract development
├── .github/             # GitHub configurations
├── .husky/             # Git hooks
└── package.json        # Project configuration
```

## 🎮 Usage

1. Connect your Web3 wallet
2. View your connected address and the contract owner's address
3. Interact with the counter:
   - Click "Increment" to increase the counter
   - Click "Decrement" to decrease the counter
   - If you're the owner, use the "Reset" button to reset the counter

## 🔧 Available Scripts

- `yarn start` - Start the development server
- `yarn deploy` - Deploy the smart contract
- `yarn compile` - Compile smart contracts
- `yarn test` - Run tests
- `yarn format` - Format code
- `yarn lint` - Lint code

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Scaffold-ETH 2](https://github.com/scaffold-eth/scaffold-eth-2)
- Inspired by the Ethereum community

---

<div align="center">
  Made with ❤️ by the Counter Game Team
</div>
