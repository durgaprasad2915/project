import React from 'react';
import { Github, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Github className="w-8 h-8" />
            <h1 className="text-2xl font-bold">GitHub Explorer</h1>
          </div>
          <div className="flex items-center bg-gray-800 rounded-lg px-4 py-2">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search repositories..."
              className="bg-transparent border-none focus:outline-none text-white ml-2 w-64"
            />
          </div>
        </div>
      </div>
    </header>
  );
}