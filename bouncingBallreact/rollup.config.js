// Rollup plugins.
import babel from 'rollup-plugin-babel'
import cjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace';
import json from 'rollup-plugin-json'
import globals from 'rollup-plugin-node-globals'
import {terser} from 'rollup-plugin-terser'
const config = {

    plugins: [
        resolve({
            browser: true,
            main: true
        }),
        babel({
            babelrc: true,
            exclude: 'node_modules/**'
        }),
        cjs({
            include: 'node_modules/**'
        }),
        globals(),

        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),

        json()
    ],

    watch: {
        include: 'src/**'
    },
    sourcemap: process.env.NODE_ENV == 'development' ? true : false
}



if (process.env.NODE_ENV == 'production') {
    config.plugins.push(terser())
}

export default config