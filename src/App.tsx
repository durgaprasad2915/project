import React from 'react';
import { Header } from './components/Header';
import { RepoList } from './components/RepoList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Popular Repositories</h2>
          <p className="text-gray-600">
            Explore trending repositories from the GitHub community
          </p>
        </div>
        <RepoList />
      </main>
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>Built with React and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;