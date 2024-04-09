import { resolve } from 'path';

export default {
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve('index.html'),
        mariosbross: resolve('mariosbross.html'),
        mortalcombat: resolve('mortalcombat.html'),
        pagoexitoso: resolve('pagoexitoso.html'),
      }
    }
  }
}