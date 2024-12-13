import React from 'react';
import { Star, GitFork, Eye } from 'lucide-react';

interface RepoCardProps {
  name: string;
  description: string;
  stars: number;
  forks: number;
  watchers: number;
  language: string;
}

export function RepoCard({ name, description, stars, forks, watchers, language }: RepoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="flex items-center space-x-6">
        <div className="flex items-center text-gray-600">
          <Star className="w-4 h-4 mr-1" />
          <span>{stars}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <GitFork className="w-4 h-4 mr-1" />
          <span>{forks}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Eye className="w-4 h-4 mr-1" />
          <span>{watchers}</span>
        </div>
        <div className="flex items-center">
          <span className="px-2 py-1 text-sm rounded-full bg-gray-100 text-gray-700">
            {language}
          </span>
        </div>
      </div>
    </div>
  );
}