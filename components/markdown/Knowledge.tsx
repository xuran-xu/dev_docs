'use client';

import { FC, useState } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface KnowledgeCardProps {
  title: string;
  description: string;
  href: string;
}

const KnowledgeCard: FC<KnowledgeCardProps> = ({ title, description, href }) => {
  const router = useRouter();

  return (
    <div 
      onClick={() => router.push(href)}
      className="group rounded-xl overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 hover:shadow-lg cursor-pointer"
    >
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-4">
        <div className="flex items-center space-x-2">
          <p className="text-base font-medium text-white group-hover:translate-x-1 transition-transform duration-300">
            {title}
          </p>
        </div>
      </div>
      <div className="px-4 py-3">
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const knowledgeItems = [
  {
    title: 'RPC',
    description: 'Remote Procedure Call, a protocol that allows programs to request services from other computers without understanding network details.',
    href: '/docs/Knowledge/RPC',
  },
  // {
  //   title: 'Patricia Trie',
  //   description: 'A data structure used in Ethereum to efficiently store key-value pairs and maintain the state of the blockchain.',
  //   href: '/docs/Knowledge/patricia-trie',
  // },
  // {
  //   title: 'zk-SNARK',
  //   description: 'Zero-Knowledge Succinct Non-Interactive Argument of Knowledge, a cryptographic method to prove knowledge without revealing the information.',
  //   href: '/docs/Knowledge/zk-snark',
  // },
  // {
  //   title: 'Reentrancy Attack',
  //   description: 'A smart contract vulnerability where an attacker repeatedly calls a function that withdraws funds before the contract can update its state.',
  //   href: '/docs/Knowledge/reentrancy-attack',
  // },
  // {
  //   title: 'Rollups',
  //   description: 'Layer 2 scaling solutions that execute transactions off-chain but store transaction data on the main blockchain.',
  //   href: '/docs/Knowledge/rollups',
  // },
  // {
  //   title: 'Blockchain',
  //   description: 'A distributed, immutable, and transparent digital ledger that records transactions across many computers.',
  //   href: '/docs/Knowledge/blockchain',
  // },
];

const Knowledge = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = knowledgeItems.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      <div className="relative mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search knowledge..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-600 focus:border-transparent transition-all duration-200"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-neutral-400" />
        </div>
      </div>
      
      {filteredItems.length === 0 ? (
        <div className="text-center py-8 text-neutral-500 dark:text-neutral-400">
          No results found for "{searchTerm}"
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map((item, index) => (
            <KnowledgeCard
              key={index}
              title={item.title}
              description={item.description}
              href={item.href}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Knowledge; 