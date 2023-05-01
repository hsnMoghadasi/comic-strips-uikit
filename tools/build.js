const webpack = require('webpack');
const getConfig = require('./../webpack.config');
const path = require('path');

const root = path.join(__dirname);
const srcRoot = path.join(__dirname, '../src');
const cssRoot = path.join(__dirname, '../src/styles');
const typesRoot = path.join(__dirname, '../types');

const libRoot = path.join(__dirname, '../lib');
const distRoot = path.join(libRoot, 'dist');
const cjsRoot = path.join(libRoot, 'cjs');
const esRoot = path.join(libRoot, 'esm');
const execa = require('execa');


const shell = (cmd) => {
    console.log(cmd)
    return execa(cmd, { stdio: ['pipe', 'pipe', 'inherit'], shell: true });
}

const clean = async () => {
    await shell(`if exist ${libRoot} (rd /s /q ${libRoot})`)
    return await shell(`if exist ${typesRoot} (rd /s /q ${typesRoot})`)
};

const buildTypes = () => {
    return shell(`yarn build-types`)
}

const copyTypes = (dest) => {
    return shell(`copy ${typesRoot} ${dest}`);
};

const buildCss = (outDir) => {
    return shell(`postcss ${cssRoot}/index.css -o ${outDir}/styles/index.css`);
};

const babel = (outDir, envName) => {
    return shell(
        `yarn babel ${srcRoot} -x .es6,.js,.es,.jsx,.mjs,.ts,.tsx --out-dir ${outDir} --env-name "${envName}" --ignore "**/*.stories.tsx"`,
    );
}

/**
 * Run babel over the src directory and output
 * compiled common js files to ./lib.
 */
const buildLib = async () => {
    await babel(cjsRoot, 'cjs');
    return await copyTypes(cjsRoot);
};


/**
 * Run babel over the src directory and output
 * compiled es modules (but otherwise es5) to /es
 */
const buildEsm = async () => {
    await babel(esRoot, 'esm');
    return await copyTypes(esRoot);
};

/**
 * Bundles a minified and unminified version of react-bootstrap including
 * all it's immediate dependencies (excluding React, ReactDOM, etc)
 */
const buildDist = async () => {
    return new Promise((resolve, reject) => {
        webpack(
            [getConfig(false), getConfig(true)],
            async (err, stats) => {
                if (err || stats.hasErrors()) {
                    reject(err || stats.toJson().errors);
                    return;
                }
                resolve();
            },
        );
    })
}




Promise.resolve(true)
    .then(clean)
    .then(buildTypes)
    .then(() =>
        Promise.all([
            buildLib(),
            buildEsm(),
            buildDist(),
        ]),
    )
    .then(() => buildCss(distRoot, 'cjs'))
    // .then(buildDirectories)
    .catch((err) => {
        if (err) console.error(err.stack || err.toString());
        process.exit(1);
    });