# Nebublox AI 🚀

**The Ultimate AI-Powered Roblox Development Platform**

Nebublox is an advanced AI-powered platform for Roblox developers, featuring intelligent code generation, Studio integration, and seamless workflow automation.

## ✨ Features

- 🤖 **AI-Powered Code Generation** - Generate Luau scripts instantly with advanced AI models
- 🔗 **Roblox Studio Integration** - Direct sync with Studio via Nebula Engine plugin
- 🎯 **Queue System** - Efficient command processing with Supabase backend
- 📊 **Project Management** - Track and manage your Roblox projects
- 🔐 **Discord Authentication** - Secure login with Discord OAuth + Bloxlink integration
- ⚡ **Real-time Collaboration** - WebSocket-based live updates

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Roblox Studio
- Supabase account

### Installation

1. **Clone and Install**
   ```bash
   cd Nebublox
   npm install
   ```

2. **Configure Environment**
   - Copy `.env.example` to `.env.local`
   - Add your Supabase credentials
   - Add AI API keys (Gemini/OpenAI)

3. **Setup Database**
   - Follow [Supabase Setup Guide](docs/setup/SUPABASE_SETUP.md)
   - Run migrations in Supabase Dashboard

4. **Install Roblox Plugin**
   - See [Plugin Installation Guide](docs/plugins/PLUGIN_INSTALLATION.md)

5. **Start Development Server**
   ```bash
   npm run dev
   ```

Visit [http://localhost:3000](http://localhost:3000) to see your app!

## 📖 Documentation

Full documentation is available in the [`/docs`](docs/README.md) folder:

- **[Setup Guides](docs/setup/)** - Environment, Supabase, and MCP configuration
- **[Plugin Guides](docs/plugins/)** - Nebula Engine installation and usage  
- **[Development](docs/development/)** - Troubleshooting and debugging

## 🏗️ Project Structure

```
Nebublox/
├── app/                    # Next.js app (pages, components, API routes)
├── docs/                   # Documentation
├── plugins/                # Roblox Studio plugins (Nebula Engine)
├── scripts/                # Utility and test scripts
│   ├── test/              # Test scripts for AI models
│   └── utils/             # Helper utilities
├── supabase/              # Database migrations & Edge Functions
│   ├── migrations/        # SQL schema files
│   └── functions/         # Edge Functions (serverless)
├── public/                # Static assets
└── lib/                   # Shared utilities and configs
```

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Storage, Edge Functions)
- **AI**: Google Gemini, OpenAI
- **Roblox**: Luau, HttpService, Studio Plugin API

## 🧪 Testing

Run test scripts to verify AI integrations:

```bash
# Test Gemini API
node scripts/test/test-gemini.js

# Test specific model
node scripts/test/test-gemini-pro.js

# List available models
node scripts/utils/list-gemini-models.js
```

## 🔐 Environment Variables

Required environment variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
DATABASE_PASSWORD=

# AI Services  
GEMINI_API_KEY=
OPENAI_API_KEY=

# Discord OAuth
DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=
```

See [.env.example](.env.example) for complete list.

## 🤝 Contributing

This is a private project, but contributions from team members are welcome!

## 📝 License

Private - All Rights Reserved

## 🆘 Support

Check the [Troubleshooting Guide](docs/development/TROUBLESHOOTING.md) or reach out on Discord.

---

**Built with ❤️ for the Roblox developer community**
