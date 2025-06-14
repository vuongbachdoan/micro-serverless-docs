"use client"

export function AWSBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large 3D Container - Top Left */}
      <div className="absolute top-20 left-10 w-48 h-32 opacity-3 dark:opacity-5 transform rotate-12">
        <div className="relative w-full h-full">
          {/* Container main body */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 dark:from-gray-600 dark:to-gray-800 rounded-lg shadow-2xl transform perspective-1000 rotateY-15 rotateX-5">
            {/* Top face */}
            <div className="absolute -top-2 left-2 right-2 h-4 bg-gradient-to-r from-gray-200 to-gray-400 dark:from-gray-500 dark:to-gray-700 rounded-t-lg transform skew-x-12"></div>
            {/* Right face */}
            <div className="absolute -right-2 top-2 bottom-2 w-4 bg-gradient-to-b from-gray-400 to-gray-600 dark:from-gray-700 dark:to-gray-900 rounded-r-lg transform skew-y-12"></div>
            {/* Container details */}
            <div className="absolute top-4 left-4 right-8 h-2 bg-gray-600/20 dark:bg-gray-400/20 rounded"></div>
            <div className="absolute top-8 left-4 right-8 h-1 bg-gray-600/15 dark:bg-gray-400/15 rounded"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 bg-gray-600/25 dark:bg-gray-400/25 rounded-full"></div>
            {/* Container doors */}
            <div className="absolute right-2 top-6 bottom-6 w-1 bg-gray-700/30 dark:bg-gray-300/30"></div>
          </div>
        </div>
      </div>

      {/* Medium 3D Container - Top Right */}
      <div className="absolute top-32 right-16 w-36 h-24 opacity-2 dark:opacity-4 transform -rotate-6">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-500 dark:from-slate-600 dark:to-slate-800 rounded-lg shadow-xl transform perspective-1000 rotateY-12 rotateX-3">
            <div className="absolute -top-1 left-1 right-1 h-3 bg-gradient-to-r from-slate-200 to-slate-400 dark:from-slate-500 dark:to-slate-700 rounded-t-lg transform skew-x-8"></div>
            <div className="absolute -right-1 top-1 bottom-1 w-3 bg-gradient-to-b from-slate-400 to-slate-600 dark:from-slate-700 dark:to-slate-900 rounded-r-lg transform skew-y-8"></div>
            <div className="absolute top-3 left-3 right-6 h-1 bg-slate-600/20 dark:bg-slate-400/20 rounded"></div>
            <div className="absolute bottom-3 right-3 w-4 h-4 bg-slate-600/25 dark:bg-slate-400/25 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Small 3D Container - Middle Left */}
      <div className="absolute top-1/2 left-20 w-28 h-20 opacity-3 dark:opacity-5 transform rotate-45">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-500 dark:from-blue-700 dark:to-blue-900 rounded-lg shadow-lg transform perspective-1000 rotateY-20 rotateX-8">
            <div className="absolute -top-1 left-1 right-1 h-2 bg-gradient-to-r from-blue-200 to-blue-400 dark:from-blue-600 dark:to-blue-800 rounded-t-lg transform skew-x-10"></div>
            <div className="absolute -right-1 top-1 bottom-1 w-2 bg-gradient-to-b from-blue-400 to-blue-600 dark:from-blue-800 dark:to-blue-950 rounded-r-lg transform skew-y-10"></div>
            <div className="absolute top-2 left-2 right-4 h-1 bg-blue-600/20 dark:bg-blue-400/20 rounded"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 bg-blue-600/25 dark:bg-blue-400/25 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Large 3D Container - Bottom Right */}
      <div className="absolute bottom-32 right-12 w-52 h-36 opacity-2 dark:opacity-3 transform -rotate-8">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-purple-500 dark:from-purple-700 dark:to-purple-900 rounded-lg shadow-2xl transform perspective-1000 rotateY-10 rotateX-4">
            <div className="absolute -top-2 left-2 right-2 h-5 bg-gradient-to-r from-purple-200 to-purple-400 dark:from-purple-600 dark:to-purple-800 rounded-t-lg transform skew-x-6"></div>
            <div className="absolute -right-2 top-2 bottom-2 w-5 bg-gradient-to-b from-purple-400 to-purple-600 dark:from-purple-800 dark:to-purple-950 rounded-r-lg transform skew-y-6"></div>
            <div className="absolute top-6 left-6 right-10 h-2 bg-purple-600/20 dark:bg-purple-400/20 rounded"></div>
            <div className="absolute top-12 left-6 right-10 h-1 bg-purple-600/15 dark:bg-purple-400/15 rounded"></div>
            <div className="absolute bottom-6 right-6 w-8 h-8 bg-purple-600/25 dark:bg-purple-400/25 rounded-full"></div>
            <div className="absolute right-3 top-8 bottom-8 w-1 bg-purple-700/30 dark:bg-purple-300/30"></div>
            {/* Container label */}
            <div className="absolute top-4 left-4 w-16 h-8 bg-white/30 dark:bg-black/30 rounded flex items-center justify-center">
              <div className="text-xs font-bold text-purple-800 dark:text-purple-200">API</div>
            </div>
          </div>
        </div>
      </div>

      {/* Medium 3D Container - Center */}
      <div className="absolute top-1/3 left-1/2 w-32 h-22 opacity-2 dark:opacity-4 transform rotate-12 -translate-x-1/2">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-green-500 dark:from-green-700 dark:to-green-900 rounded-lg shadow-xl transform perspective-1000 rotateY-15 rotateX-6">
            <div className="absolute -top-1 left-1 right-1 h-3 bg-gradient-to-r from-green-200 to-green-400 dark:from-green-600 dark:to-green-800 rounded-t-lg transform skew-x-12"></div>
            <div className="absolute -right-1 top-1 bottom-1 w-3 bg-gradient-to-b from-green-400 to-green-600 dark:from-green-800 dark:to-green-950 rounded-r-lg transform skew-y-12"></div>
            <div className="absolute top-3 left-3 right-5 h-1 bg-green-600/20 dark:bg-green-400/20 rounded"></div>
            <div className="absolute bottom-3 right-3 w-4 h-4 bg-green-600/25 dark:bg-green-400/25 rounded-full"></div>
            <div className="absolute top-2 left-2 w-12 h-6 bg-white/30 dark:bg-black/30 rounded flex items-center justify-center">
              <div className="text-xs font-bold text-green-800 dark:text-green-200">DB</div>
            </div>
          </div>
        </div>
      </div>

      {/* Small 3D Container - Bottom Left */}
      <div className="absolute bottom-40 left-16 w-24 h-16 opacity-3 dark:opacity-5 transform -rotate-12">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-300 to-indigo-500 dark:from-indigo-700 dark:to-indigo-900 rounded-lg shadow-lg transform perspective-1000 rotateY-25 rotateX-10">
            <div className="absolute -top-1 left-1 right-1 h-2 bg-gradient-to-r from-indigo-200 to-indigo-400 dark:from-indigo-600 dark:to-indigo-800 rounded-t-lg transform skew-x-15"></div>
            <div className="absolute -right-1 top-1 bottom-1 w-2 bg-gradient-to-b from-indigo-400 to-indigo-600 dark:from-indigo-800 dark:to-indigo-950 rounded-r-lg transform skew-y-15"></div>
            <div className="absolute top-2 left-2 right-3 h-1 bg-indigo-600/20 dark:bg-indigo-400/20 rounded"></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 bg-indigo-600/25 dark:bg-indigo-400/25 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Tiny 3D Container - Top Center */}
      <div className="absolute top-16 left-1/3 w-20 h-14 opacity-3 dark:opacity-5 transform rotate-30">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-300 to-teal-500 dark:from-teal-700 dark:to-teal-900 rounded-lg shadow-md transform perspective-1000 rotateY-30 rotateX-12">
            <div className="absolute -top-1 left-1 right-1 h-2 bg-gradient-to-r from-teal-200 to-teal-400 dark:from-teal-600 dark:to-teal-800 rounded-t-lg transform skew-x-20"></div>
            <div className="absolute -right-1 top-1 bottom-1 w-2 bg-gradient-to-b from-teal-400 to-teal-600 dark:from-teal-800 dark:to-teal-950 rounded-r-lg transform skew-y-20"></div>
            <div className="absolute top-1 left-1 right-2 h-1 bg-teal-600/20 dark:bg-teal-400/20 rounded"></div>
          </div>
        </div>
      </div>

      {/* Container Stack - Right Side */}
      <div className="absolute top-1/4 right-8 opacity-2 dark:opacity-3">
        {/* Bottom container */}
        <div className="w-40 h-28 mb-1">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 to-cyan-500 dark:from-cyan-700 dark:to-cyan-900 rounded-lg shadow-xl transform perspective-1000 rotateY-8 rotateX-2">
              <div className="absolute -top-1 left-1 right-1 h-3 bg-gradient-to-r from-cyan-200 to-cyan-400 dark:from-cyan-600 dark:to-cyan-800 rounded-t-lg transform skew-x-5"></div>
              <div className="absolute -right-1 top-1 bottom-1 w-3 bg-gradient-to-b from-cyan-400 to-cyan-600 dark:from-cyan-800 dark:to-cyan-950 rounded-r-lg transform skew-y-5"></div>
              <div className="absolute top-4 left-4 w-20 h-6 bg-white/30 dark:bg-black/30 rounded flex items-center justify-center">
                <div className="text-xs font-bold text-cyan-800 dark:text-cyan-200">LAMBDA</div>
              </div>
            </div>
          </div>
        </div>
        {/* Top container */}
        <div className="w-40 h-28 transform translate-x-2 -translate-y-2">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-300 to-rose-500 dark:from-rose-700 dark:to-rose-900 rounded-lg shadow-lg transform perspective-1000 rotateY-8 rotateX-2">
              <div className="absolute -top-1 left-1 right-1 h-3 bg-gradient-to-r from-rose-200 to-rose-400 dark:from-rose-600 dark:to-rose-800 rounded-t-lg transform skew-x-5"></div>
              <div className="absolute -right-1 top-1 bottom-1 w-3 bg-gradient-to-b from-rose-400 to-rose-600 dark:from-rose-800 dark:to-rose-950 rounded-r-lg transform skew-y-5"></div>
              <div className="absolute top-4 left-4 w-16 h-6 bg-white/30 dark:bg-black/30 rounded flex items-center justify-center">
                <div className="text-xs font-bold text-rose-800 dark:text-rose-200">S3</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating small containers */}
      <div className="absolute bottom-1/4 left-1/4 w-16 h-12 opacity-4 dark:opacity-6 transform rotate-45">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-300 to-emerald-500 dark:from-emerald-700 dark:to-emerald-900 rounded shadow-md transform perspective-1000 rotateY-35 rotateX-15">
            <div className="absolute -top-1 left-1 right-1 h-1 bg-gradient-to-r from-emerald-200 to-emerald-400 dark:from-emerald-600 dark:to-emerald-800 rounded-t transform skew-x-25"></div>
            <div className="absolute -right-1 top-1 bottom-1 w-1 bg-gradient-to-b from-emerald-400 to-emerald-600 dark:from-emerald-800 dark:to-emerald-950 rounded-r transform skew-y-25"></div>
          </div>
        </div>
      </div>

      <div className="absolute top-2/3 right-1/3 w-18 h-13 opacity-3 dark:opacity-5 transform -rotate-30">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-300 to-violet-500 dark:from-violet-700 dark:to-violet-900 rounded shadow-md transform perspective-1000 rotateY-40 rotateX-18">
            <div className="absolute -top-1 left-1 right-1 h-1 bg-gradient-to-r from-violet-200 to-violet-400 dark:from-violet-600 dark:to-violet-800 rounded-t transform skew-x-30"></div>
            <div className="absolute -right-1 top-1 bottom-1 w-1 bg-gradient-to-b from-violet-400 to-violet-600 dark:from-violet-800 dark:to-violet-950 rounded-r transform skew-y-30"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
