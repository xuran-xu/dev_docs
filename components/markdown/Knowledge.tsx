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
    description: 'Protocol allowing programs to request services from other computers without understanding network details.',
    href: '/docs/Knowledge/RPC',
  },
  {
    title: 'RISC-V',
    description: 'Open standard instruction set architecture based on reduced instruction set principles.',
    href: '/docs/Knowledge/risc-v',
  },
  {
    title: 'Patricia Trie',
    description: 'Efficient data structure for storing key-value pairs in blockchain state.',
    href: '/docs/Knowledge/Patricia-Trie',
  },
  {
    title: 'Merkle Tree',
    description: 'Cryptographic data structure enabling efficient data verification in blockchains.',
    href: '/docs/Knowledge/merkle-tree',
  },
  {
    title: 'ZK Proofs',
    description: 'Cryptographic methods allowing proof of knowledge without revealing actual information.',
    href: '/docs/Knowledge/zk-proofs',
  },
  {
    title: 'PoW',
    description: 'Consensus mechanism requiring computational work to validate transactions and create blocks.',
    href: '/docs/Knowledge/pow',
  },
  {
    title: 'Layer 2',
    description: 'Scaling solutions built on top of Layer 1 blockchains to improve throughput.',
    href: '/docs/Knowledge/layer-2',
  },
  {
    title: 'Layer 1',
    description: 'Base blockchain protocols providing security and consensus for decentralized networks.',
    href: '/docs/Knowledge/layer-1',
  },
  {
    title: 'Blockchain',
    description: 'Distributed ledger technology maintaining transaction records across multiple computers.',
    href: '/docs/Knowledge/blockchain',
  },
  {
    title: 'Rollups',
    description: 'Layer 2 solutions executing transactions off-chain while storing data on-chain.',
    href: '/docs/Knowledge/rollups',
  },
  {
    title: 'ZK-STARK',
    description: 'Zero-knowledge proof system with transparent setup and quantum resistance.',
    href: '/docs/Knowledge/zk-stark',
  },
  {
    title: 'Reentrancy Attack',
    description: 'Smart contract vulnerability where malicious code repeatedly calls back into the original contract.',
    href: '/docs/Knowledge/Reentrancy-Attack',
  },
  {
    title: 'ZK-SNARK',
    description: 'Zero-knowledge proof system allowing verification without revealing underlying data.',
    href: '/docs/Knowledge/zk-snark',
  },
  {
    title: 'Gas Optimization',
    description: 'Techniques to reduce computational costs of executing transactions on Ethereum-compatible networks.',
    href: '/docs/Knowledge/Gas-optimization',
  },
  {
    title: 'PoS',
    description: 'Proof of Stake consensus where validators are selected based on their cryptocurrency holdings.',
    href: '/docs/Knowledge/pos',
  },
  {
    title: '51% Attack',
    description: 'Attack scenario where a single entity controls majority of network\'s mining/validation power.',
    href: '/docs/Knowledge/51-percent-attack',
  },
  {
    title: 'Ethereum Merge',
    description: 'Transition from Proof-of-Work to Proof-of-Stake consensus in Ethereum.',
    href: '/docs/Knowledge/ethereum-merge',
  },
  {
    title: 'Cryptography',
    description: 'Mathematical techniques for securing information and communications in blockchain systems.',
    href: '/docs/Knowledge/cryptography',
  },
  {
    title: 'Cross-Chain Bridge',
    description: 'Infrastructure enabling asset transfers between different blockchain networks.',
    href: '/docs/Knowledge/Cross-Chain-Bridge',
  },
  {
    title: 'Bitcoin and Blockchain',
    description: 'The original cryptocurrency and its underlying technology, revolutionizing digital finance.',
    href: '/docs/Learn/Bitcoin and Blockchain',
  },
  {
    title: 'Smart Contracts',
    description: 'Self-executing digital agreements with terms directly written into code.',
    href: '/docs/Knowledge/smart-contracts',
  },
  {
    title: 'EVM',
    description: 'Ethereum Virtual Machine that executes smart contracts in the Ethereum network.',
    href: '/docs/Knowledge/evm',
  },
  {
    title: 'Gas',
    description: 'Unit measuring computational effort required to execute operations on Ethereum.',
    href: '/docs/Knowledge/gas',
  },
  {
    title: 'DeFi',
    description: 'Decentralized Finance applications offering financial services without traditional intermediaries.',
    href: '/docs/Knowledge/defi',
  },
  {
    title: 'DAO',
    description: 'Decentralized Autonomous Organization governed by code and community voting.',
    href: '/docs/Knowledge/dao',
  },
  {
    title: 'ENS',
    description: 'Ethereum Name Service mapping human-readable names to blockchain addresses and resources.',
    href: '/docs/Knowledge/ens',
  },
  {
    title: 'NFT',
    description: 'Non-Fungible Token representing unique digital assets with provable ownership.',
    href: '/docs/Knowledge/nft',
  },
  {
    title: 'Ethereum',
    description: 'Blockchain platform enabling smart contracts and decentralized applications.',
    href: '/docs/Learn/Ethereum More/Introduction',
  },
  {
    title: 'DPoS',
    description: 'Delegated Proof of Stake consensus where token holders elect validators to secure the network.',
    href: '/docs/Knowledge/dpos',
  },
  {
    title: 'PoA',
    description: 'Proof of Authority consensus relying on approved validators with known identities.',
    href: '/docs/Knowledge/poa',
  },
  {
    title: 'Optimistic Rollups',
    description: 'Layer 2 scaling solution assuming transactions are valid by default with fraud proof security.',
    href: '/docs/Knowledge/optimistic-rollups',
  },
  {
    title: 'ZK Rollups',
    description: 'Layer 2 scaling solution using zero-knowledge proofs to verify transaction validity.',
    href: '/docs/Knowledge/zk-rollups',
  },
  {
    title: 'ERC-20',
    description: 'Token standard for fungible tokens on Ethereum, enabling interoperability across applications.',
    href: '/docs/Knowledge/erc20',
  },
  {
    title: 'Blockchain Explorers',
    description: 'Web interfaces for viewing and analyzing blockchain transactions, addresses, and statistics.',
    href: '/docs/Learn/Ethereum More/Explorer & Wallet',
  },
  {
    title: 'Gas Fee Calculation',
    description: 'Understanding how transaction fees are determined on Ethereum and Layer 2 solutions.',
    href: '/docs/Learn/Ethereum More/Gas Fee Calculation',
  },
  {
    title: 'Ethereum Applications',
    description: 'Overview of decentralized applications built on Ethereum across various sectors.',
    href: '/docs/Learn/Ethereum More/Ethereum Applications',
  },
  {
    title: 'Ethereum Development',
    description: 'Technical foundation and tools for building on the Ethereum ecosystem.',
    href: '/docs/Learn/Ethereum More/Ethereum Dev',
  },
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