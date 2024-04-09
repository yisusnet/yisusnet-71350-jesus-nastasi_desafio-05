import { resolve } from 'path';

export default {
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {

        index: resolve('index.html'),
        mariosbross: resolve('pages/mariosbross.html'),
        mortalcombat: resolve('pages/mortalcombat.html'),
        pagoexitoso: resolve('pages/pagoexitoso.html'),
      }
    }
  }
}