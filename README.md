# @reading-innovation/eslint-config

A comprehensive ESLint configuration package for Reading Innovation projects, providing consistent code quality and style standards across all development teams.

## 📋 Table of Contents

- [Motivation](#motivation)
- [Installation](#installation)
- [Available Configurations](#available-configurations)
- [Usage](#usage)
- [Configuration Options](#configuration-options)
- [Rules Overview](#rules-overview)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Motivation

There are various projects in progress in Reading Innovation. As different teams work on different projects, each project has different lint rules, which resulted in different coding styles between teams. It can reduce the efficiency of development team. For example, different coding styles make it difficult to review other developers' code. To prevent this, Reading Innovation maintains a consistent coding style within the development team through a single lint rule. Through a consistent coding style, we hope to improve the collaborative experience among Reading Innovation developers and increase the efficiency of development team.

## 📦 Installation

### Prerequisites

- Node.js >= 14.0.0
- npm >= 6.0.0 or yarn >= 1.22.0

### Install the package

```bash
# Using npm
npm install --save-dev @reading-innovation/eslint-config

# Using yarn
yarn add --dev @reading-innovation/eslint-config
```

### Install peer dependencies

This package requires the following peer dependencies:

```bash
# Using npm
npm install --save-dev eslint prettier eslint-plugin-jest

# Using yarn
yarn add --dev eslint prettier eslint-plugin-jest
```

## 🛠 Available Configurations

- `@reading-innovation/eslint-config`: Base rule for JavaScript or TypeScript projects
- `@reading-innovation/eslint-config/nextjs`: For Next.js projects (includes React support)

## 🚀 Usage

### Basic Configuration

Create an `.eslintrc.js` file in your project root:

```javascript
module.exports = {
  extends: ['@reading-innovation/eslint-config'],
  // Your project-specific overrides
};
```

### Next.js Projects

```javascript
module.exports = {
  extends: ['@reading-innovation/eslint-config/nextjs'],
  // Your project-specific overrides
};
```

### TypeScript Projects

For TypeScript projects, you can extend the base configuration:

```javascript
module.exports = {
  extends: ['@reading-innovation/eslint-config'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // Your project-specific overrides
};
```

## ⚙️ Configuration Options

### Environment Variables

You can customize the configuration using environment variables:

```bash
# Enable debug mode
ESLINT_DEBUG=1

# Set specific Node.js version
NODE_VERSION=16
```

### Override Rules

You can override specific rules in your project:

```javascript
module.exports = {
  extends: ['@reading-innovation/eslint-config'],
  rules: {
    // Override specific rules
    'no-console': 'warn',
    'prefer-const': 'error',
    // Disable rules if needed
    'no-unused-vars': 'off',
  },
};
```

### Ignore Files

Create an `.eslintignore` file to exclude files from linting:

```
node_modules/
dist/
build/
*.min.js
coverage/
```

## 📋 Rules Overview

### Base Configuration

The base configuration includes:

- **Code Quality**: Enforces best practices for code quality
- **Error Prevention**: Catches common programming errors
- **Style Consistency**: Maintains consistent code style
- **Performance**: Identifies potential performance issues

### Next.js Configuration

Next.js specific rules (includes React support):

- **Next.js Best Practices**: Framework-specific guidelines
- **File-based Routing**: Proper file structure for Next.js
- **API Routes**: API route conventions
- **Image Optimization**: Next.js Image component usage
- **React Integration**: Built-in React rules and JSX support
- **JSX**: Proper JSX syntax and usage
- **Hooks**: React Hooks rules and best practices
- **Accessibility**: JSX accessibility guidelines
- **React Best Practices**: React-specific coding standards
- **Browser Environment**: Configured for browser-based Next.js apps

## 🔧 Integration

### VS Code

Add to your VS Code settings (`.vscode/settings.json`):

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### Pre-commit Hooks

Using husky and lint-staged:

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

### CI/CD Integration

Add to your CI pipeline:

```yaml
# GitHub Actions example
- name: Lint code
  run: |
    npm run lint
    npm run lint:fix
```

## 🐛 Troubleshooting

### Common Issues

1. **Peer dependency warnings**: Ensure all peer dependencies are installed
2. **Parser errors**: Check that the correct parser is configured for your file types
3. **Rule conflicts**: Review rule overrides in your local configuration

### Debug Mode

Enable debug mode to see detailed information:

```bash
ESLINT_DEBUG=1 npx eslint your-file.js
```

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Development Setup

```bash
# Clone the repository
git clone <repository-url>
cd eslint-config

# Install dependencies
npm install

# Run tests
npm test

# Run linting
npm run lint
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:

- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Maintained by Reading Innovation Development Team**
