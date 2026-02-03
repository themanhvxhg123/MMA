import React from 'react';


export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Bar */}
      <div className="bg-white px-4 py-3 border-b">
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2.5 flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <input 
              type="text" 
              placeholder="Type feature's name"
              className="bg-transparent flex-1 outline-none text-sm text-gray-600 placeholder-gray-400"
            />
          </div>
          <button className="p-2">
            <Grid3x3 size={20} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Content placeholder */}
      <div className="p-4 text-center text-gray-400">
        Nội dung sẽ được thêm ở bước tiếp theo
      </div>
    </div>
  );
}