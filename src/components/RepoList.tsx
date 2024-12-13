import React from 'react';
import { RepoCard } from './RepoCard';

const mockRepos = [
  {
    name: 'react',
    description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
    stars: 203000,
    forks: 42000,
    watchers: 6500,
    language: 'JavaScript'
  },
  {
    name: 'typescript',
    description: 'TypeScript is a superset of JavaScript that compiles to clean JavaScript output.',
    stars: 92000,
    forks: 12000,
    watchers: 2100,
    language: 'TypeScript'
  },
  {
    name: 'vite',
    description: 'Next generation frontend tooling. Its fast!',
    stars: 58000,
    forks: 4800,
    watchers: 890,
    language: 'TypeScript'
  }
];

export function RepoList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {mockRepos.map((repo) => (
        <RepoCard key={repo.name} {...repo} />
      ))}
    </div>
  );
}