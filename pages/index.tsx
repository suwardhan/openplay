import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [selectedPlatform, setSelectedPlatform] = useState('')

  return (
    <>
      <Head>
        <title>OpenPlay - Transfer Music Playlists</title>
        <meta name="description" content="Transfer your music playlists between different platforms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              OpenPlay
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Transfer your music playlists between platforms
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Choose Your Source Platform
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <button 
                  onClick={() => setSelectedPlatform('spotify')}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    selectedPlatform === 'spotify' 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">S</span>
                    </div>
                    <h3 className="font-semibold text-gray-800">Spotify</h3>
                  </div>
                </button>

                <button 
                  onClick={() => setSelectedPlatform('apple')}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    selectedPlatform === 'apple' 
                      ? 'border-gray-800 bg-gray-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">🍎</span>
                    </div>
                    <h3 className="font-semibold text-gray-800">Apple Music</h3>
                  </div>
                </button>

                <button 
                  onClick={() => setSelectedPlatform('youtube')}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    selectedPlatform === 'youtube' 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">▶</span>
                    </div>
                    <h3 className="font-semibold text-gray-800">YouTube Music</h3>
                  </div>
                </button>
              </div>

              {selectedPlatform && (
                <div className="text-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                    Continue with {selectedPlatform === 'apple' ? 'Apple Music' : selectedPlatform === 'youtube' ? 'YouTube Music' : 'Spotify'}
                  </button>
                </div>
              )}
            </div>

            <div className="mt-12 text-center text-blue-100">
              <p className="text-lg">
                Coming Soon: Seamless playlist migration between all major music platforms
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
