import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Desabilitar ESLint
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Configuração para GitHub Pages
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/lucianobragaweb.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/lucianobragaweb.github.io/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Configurações adicionais aqui
  experimental: {
    // Garantir que os assets sejam servidos corretamente
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig
