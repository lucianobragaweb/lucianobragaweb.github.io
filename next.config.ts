import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Desabilitar ESLint
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Configuração para GitHub Pages
  output: 'export',
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
