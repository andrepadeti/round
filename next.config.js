module.exports = {
  async redirects() {
    return [
      {
        source: '/2020/06/06/:slug',
        destination: '/posts/:slug',
        permanent: true,
      },
    ]
  },
}