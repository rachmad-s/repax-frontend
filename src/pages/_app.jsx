import '@/styles/globals.css';

import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <main className={`${poppins.variable} font-sans`}>
      {getLayout(<Component {...pageProps} />)}
    </main >
  )
}
