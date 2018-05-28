const download = require('image-downloader');
const imgs = require('./urls');

if (!Array.isArray(imgs)) throw Error('urls.json is not Array!');

async function downloadIMG(url) {
    const options = { url, dest: './downloads' };
    try {
        const { filename } = await download.image(options);
        console.log(`Download '${filename}' successfully!`);//eslint-disable-line
    } catch (e) {
        throw e;
    }
}

imgs.forEach(url => downloadIMG(url));