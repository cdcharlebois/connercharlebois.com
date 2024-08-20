// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: "custom",
        loaderFile: "./MyLoader.js"
    }
}

module.exports = nextConfig;