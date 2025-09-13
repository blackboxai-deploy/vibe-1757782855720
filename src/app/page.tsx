export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Main Container */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center space-y-8 max-w-2xl mx-auto">
          
          {/* Welcome Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Welcome to Next.js
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Hello
              </span>
              <br />
              <span className="text-gray-800">World!</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto leading-relaxed">
              This is a simple Hello World page built with 
              <span className="font-semibold text-gray-800"> Next.js</span>, 
              <span className="font-semibold text-gray-800"> TypeScript</span>, and 
              <span className="font-semibold text-gray-800"> Tailwind CSS</span>.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="group p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fast</h3>
              <p className="text-sm text-gray-600">Built with Next.js for optimal performance and developer experience.</p>
            </div>

            <div className="group p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">🎨</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Beautiful</h3>
              <p className="text-sm text-gray-600">Styled with Tailwind CSS for modern and responsive design.</p>
            </div>

            <div className="group p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">🚀</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Modern</h3>
              <p className="text-sm text-gray-600">TypeScript ready with latest web development standards.</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12">
            <button className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Started
              <span className="ml-2">→</span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Made with ❤️ using Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}