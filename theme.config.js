export default {
  repository: 'https://github.com/flomincucci/blahg',
  titleSuffix: ' – Blahg',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Blahg</span>
      <span className="text-gray-600 font-normal hidden md:inline">
      Cosas que quería compartir 
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="es" />
      <meta name="description" content="Un blog sobre cosas" />
      <meta name="og:description" content="Un blog sobre cosas" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://blahg.vercel.app/og.png" />
      <meta name="twitter:site:domain" content="blahg.vercel.app" />
      <meta name="twitter:url" content="https://blahg.vercel.app" />
      <meta name="og:title" content="Blahg: un blog sobre cosas" />
      <meta name="og:image" content="https://blahg.vercel.app/og.png" />
      <meta name="apple-mobile-web-app-title" content="Blahg" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/red-tea.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: true,
  footerText: <>MIT {new Date().getFullYear()} © Nextra.</>,
}
