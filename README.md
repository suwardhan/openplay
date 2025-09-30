# OpenPlay

Transfer music playlists between different platforms.

## Features

- 🎵 Transfer playlists between Spotify, Apple Music, and YouTube Music
- 🔄 Seamless migration process
- 🎨 Modern, responsive interface
- 🚀 Fast and reliable

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

This project is configured to deploy to GitHub Pages and can be connected to your custom domain `openplaylist.org`.

### DNS Configuration

To connect your Namecheap domain to this GitHub Pages site:

1. Go to your Namecheap DNS settings
2. Add these DNS records:
   - **Type**: A Record, **Host**: @, **Value**: 185.199.108.153
   - **Type**: A Record, **Host**: @, **Value**: 185.199.109.153
   - **Type**: A Record, **Host**: @, **Value**: 185.199.110.153
   - **Type**: A Record, **Host**: @, **Value**: 185.199.111.153
   - **Type**: CNAME Record, **Host**: www, **Value**: yourusername.github.io

3. In your GitHub repository settings:
   - Go to Pages settings
   - Set custom domain to `openplaylist.org`
   - Enable "Enforce HTTPS"

## License

Licensed under the Apache License 2.0
