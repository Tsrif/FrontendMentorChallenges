import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, type PluginOption } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'
import PackageJson from './package.json' with { type: 'json' }

// expose build/version info
process.env.VITE_APP_VERSION = PackageJson.version
if (process.env.NODE_ENV === 'production') {
  process.env.VITE_APP_BUILD_EPOCH = String(Date.now())
}

export default defineConfig(({ mode }) => {
  const plugins: PluginOption[] = [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia', { '@/store': ['useStore'], '@unhead/vue': ['useHead'] }],
      dts: 'auto-imports.d.ts',
      vueTemplate: true,
    }),
    Components({ dts: 'components.d.ts' }),
    tailwindcss(),
  ]

  if (mode !== 'production') {
    plugins.push(VueDevTools())
  }

  return {
    base: '/FrontendMentorChallenges/',
    plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      },
    },
    css: {
      preprocessorMaxWorkers: true,
    },
  }
})
