// rollup.config.js
import typescript from 'rollup-plugin-typescript';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
    entry: './index.ts',
    moduleId: "meepo",
    moduleName: 'meepo.mobile.new',
    //   entry: 'dist/es/index.js',
    dest: 'build/main.js',
    format: 'iife',
    sourceMap: true,
    plugins: [
        typescript({
            typescript: require('typescript') // use local version
        }),
        nodeResolve({
            module: true,
            jsnext: true,
            browser: true,
            extensions: ['.js', '.json'],
            preferBuiltins: false
        })
    ]
}

// "build": "rollup -c && cpy src/index.html build/"