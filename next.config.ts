import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Desabilitar ESLint
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Configuração para GitHub Pages
  output: 'export',
  basePath: '/lucianobragaweb.github.io',
  assetPrefix: '/lucianobragaweb.github.io/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Configurações adicionais aqui
}

export default nextConfig
