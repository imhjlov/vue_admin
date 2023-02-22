import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: { mode: string }) => {
  // VITE_ 에 상관없이 모든 env 가져옴.
  const env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

  return {
    define: {
      // 기존에 사용하던 process.env 방식 사용 가능하도록 수정
      'process.env.NODE_ENV': `"${env.VITE_USER_NODE_ENV}"`,
      'process.env.PORT': `"${env.PORT}"`,
      'process.env.CHOKIDAR_USEPOLLING': `"${env.CHOKIDAR_USEPOLLING}"`,
      'process.env.REACT_APP_API_KEY': `"${env.REACT_APP_API_KEY}"`,
      'process.env.REACT_APP_BASE_URL': `"${env.REACT_APP_BASE_URL}"`,
      'process.env.REACT_APP_BASE_URL_CRA': `"${env.REACT_APP_BASE_URL_CRA}"`,
    },
    // define: {
    //   __APP_VERSION__: JSON.stringify(env.npm_package_version),
    // },
    plugins: [
      vue({
        template: { transformAssetUrls }, // quasar ui templete 사용하기 위함
      }),
      vueJsx(),
      quasar({
        sassVariables: 'src/quasar-variables.sass', // quasar 기본 색상
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  };
});
