import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Desabilitar ESLint
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Configurações adicionais aqui
}

export default nextConfig
