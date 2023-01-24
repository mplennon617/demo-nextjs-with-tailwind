import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='md:container mx-auto'>
        <div className='text-2xl text-center mt-4'>Are you ready to make this into a functioning site?</div>
        <Image className="px-4 mx-auto mt-4" src="https://img.memegenerator.net/instances/55208503.jpg" alt="Meme" width={500} height={500} />
      </main>
    </>
  )
}
