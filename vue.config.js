const S3Plugin = require("webpack-s3-plugin");

module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "https://example.com.cn" : "/",
  assetsDir: "vue-with-s3",
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(
        new S3Plugin({
          exclude: /.*\.html$/,
          s3Options: {
            accessKeyId: "",
            secretAccessKey: "",
            region: "cn-north-1"
          },
          s3UploadOptions: {
            Bucket: "bjs-s3-example"
          },
          cdnizerOptions: {
            defaultCDNBase: "https://assets.example.com.cn"
          }
        })
      );
    }
  }
};
