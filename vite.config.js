import { resolve } from 'node:path'

export default {

    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                mariosbross: resolve('public/pages/mariosbross.html'),
                mortalcombat: resolve('public/pages/mortalcombat.html'),
                pagoexitoso: resolve('public/pages/pagoexitoso.html'),
                
            }
        }
    }
}

