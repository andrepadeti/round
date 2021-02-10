module.exports = {
  async redirects() {
    return [
      {
        source: '/2020/:slug*',
        destination: '/posts/:slug',
        permanent: true,
      },
    ]
  },
}