// "build": "babel src -x .es6,.js,.es,.jsx,.mjs,.ts,.tsx --out-dir dist/cjs --env-name cjs && tsc"
console.log('[build file ]');

const path = require('path');

const root = path.join(__dirname);
const srcRoot = path.join(__dirname, '../src');
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

// const clean = () => fse.existsSync(libRoot) && fse.removeSync(libRoot);
const clean = () => {
    return shell(`rmdir /s ${libRoot}`)
};

const buildTypes = () => {
    return shell(`yarn build-types`)
}

const copyTypes = (dest) => {
    // shell(`cpy ${typesRoot}/*.d.ts ${dest}`)
    // shell(`cpy ${typesRoot}/*.d.ts" "${dest}`)
    // shell(`xcopy "find . -name ${typesRoot}\\\*.d.ts" ${dest}`);
    // cd ${typesRoot} && copy *.d.ts ${dest} && cd ${root} 
    // shell("cp --parents `find -name '*.d.ts'` " + `'${dest}'`);
    return  shell(`cd ${typesRoot} && copy *.d.ts ${dest}\\ && cd ${root}`);
};

const babel = (outDir, envName) => {
    return shell(
        `yarn babel ${srcRoot} -x .es6,.js,.es,.jsx,.mjs,.ts,.tsx --out-dir ${outDir} --env-name "${envName}"`,
    );
}

/**
 * Run babel over the src directory and output
 * compiled common js files to ./lib.
 */
const buildLib = async () => {
    await babel(cjsRoot, 'cjs');
    await copyTypes(cjsRoot);
};


/**
 * Run babel over the src directory and output
 * compiled es modules (but otherwise es5) to /es
 */
const buildEsm = async () => {
    await babel(esRoot, 'esm');
    await copyTypes(esRoot);
};

/**
 * Bundles a minified and unminified version of react-bootstrap including
 * all it's immediate dependencies (excluding React, ReactDOM, etc)
 */
const buildDist = async () => {
    await babel(distRoot, 'dist');
}


clean();


Promise.resolve(true)
    .then(buildTypes)
    .then(() =>
        Promise.all([
            buildLib(),
            buildEsm(),
            buildDist(),
        ]),
    )
    // .then(buildDirectories)
    .catch((err) => {
        if (err) console.error(err.stack || err.toString());
        process.exit(1);
    });