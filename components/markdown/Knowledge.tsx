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
    href: '/Knowledge/RPC',
  },
  {
    title: 'RISC-V',
    description: 'Open standard instruction set architecture based on reduced instruction set principles.',
    href: '/Knowledge/risc-v',
  },
  {
    title: 'Patricia Trie',
    description: 'Efficient data structure for storing key-value pairs in blockchain state.',
    href: '/Knowledge/Patricia-Trie',
  },
  {
    title: 'Merkle Tree',
    description: 'Cryptographic data structure enabling efficient data verification in blockchains.',
    href: '/Knowledge/merkle-tree',
  },
  {
    title: 'ZK Proofs',
    description: 'Cryptographic methods allowing proof of knowledge without revealing actual information.',
    href: '/Knowledge/zk-proofs',
  },
  {
    title: 'PoW',
    description: 'Consensus mechanism requiring computational work to validate transactions and create blocks.',
    href: '/Knowledge/pow',
  },
  {
    title: 'Layer 2',
    description: 'Scaling solutions built on top of Layer 1 blockchains to improve throughput.',
    href: '/Knowledge/layer-2',
  },
  {
    title: 'Layer 1',
    description: 'Base blockchain protocols providing security and consensus for decentralized networks.',
    href: '/Knowledge/layer-1',
  },
  {
    title: 'Blockchain',
    description: 'Distributed ledger technology maintaining transaction records across multiple computers.',
    href: '/Knowledge/blockchain',
  },
  {
    title: 'Rollups',
    description: 'Layer 2 solutions executing transactions off-chain while storing data on-chain.',
    href: '/Knowledge/rollups',
  },
  {
    title: 'ZK-STARK',
    description: 'Zero-knowledge proof system with transparent setup and quantum resistance.',
    href: '/Knowledge/zk-stark',
  },
  {
    title: 'Reentrancy Attack',
    description: 'Smart contract vulnerability where malicious code repeatedly calls back into the original contract.',
    href: '/Knowledge/Reentrancy-Attack',
  },
  {
    title: 'ZK-SNARK',
    description: 'Zero-knowledge proof system allowing verification without revealing underlying data.',
    href: '/Knowledge/zk-snark',
  },
  {
    title: 'Gas Optimization',
    description: 'Techniques to reduce computational costs of executing transactions on Ethereum-compatible networks.',
    href: '/Knowledge/Gas-optimization',
  },
  {
    title: 'PoS',
    description: 'Proof of Stake consensus where validators are selected based on their cryptocurrency holdings.',
    href: '/Knowledge/pos',
  },
  {
    title: '51% Attack',
    description: 'Attack scenario where a single entity controls majority of network\'s mining/validation power.',
    href: '/Knowledge/51-percent-attack',
  },
  {
    title: 'Ethereum Merge',
    description: 'Transition from Proof-of-Work to Proof-of-Stake consensus in Ethereum.',
    href: '/Knowledge/ethereum-merge',
  },
  {
    title: 'Cryptography',
    description: 'Mathematical techniques for securing information and communications in blockchain systems.',
    href: '/Knowledge/cryptography',
  },
  {
    title: 'Cross-Chain Bridge',
    description: 'Infrastructure enabling asset transfers between different blockchain networks.',
    href: '/Knowledge/Cross-Chain-Bridge',
  },
  {
    title: 'Bitcoin and Blockchain',
    description: 'The original cryptocurrency and its underlying technology, revolutionizing digital finance.',
    href: '/Knowledge/Bitcoin-and-Blockchain-knowledge',
  },
  {
    title: 'Smart Contracts',
    description: 'Self-executing digital agreements with terms directly written into code.',
    href: '/Knowledge/smart-contracts',
  },
  {
    title: 'EVM',
    description: 'Ethereum Virtual Machine that executes smart contracts in the Ethereum network.',
    href: '/Knowledge/evm',
  },
  {
    title: 'Gas',
    description: 'Unit measuring computational effort required to execute operations on Ethereum.',
    href: '/Knowledge/gas',
  },
  {
    title: 'DeFi',
    description: 'Decentralized Finance applications offering financial services without traditional intermediaries.',
    href: '/Knowledge/defi',
  },
  {
    title: 'DAO',
    description: 'Decentralized Autonomous Organization governed by code and community voting.',
    href: '/Knowledge/dao',
  },
  {
    title: 'ENS',
    description: 'Ethereum Name Service mapping human-readable names to blockchain addresses and resources.',
    href: '/Knowledge/ens',
  },
  {
    title: 'NFT',
    description: 'Non-Fungible Token representing unique digital assets with provable ownership.',
    href: '/Knowledge/nft',
  },
  {
    title: 'Ethereum',
    description: 'Blockchain platform enabling smart contracts and decentralized applications.',
    href: '/Learn/Ethereum-More/Introduction',
  },
  {
    title: 'DPoS',
    description: 'Delegated Proof of Stake consensus where token holders elect validators to secure the network.',
    href: '/Knowledge/dpos',
  },
  {
    title: 'PoA',
    description: 'Proof of Authority consensus relying on approved validators with known identities.',
    href: '/Knowledge/poa',
  },
  {
    title: 'Optimistic Rollups',
    description: 'Layer 2 scaling solution assuming transactions are valid by default with fraud proof security.',
    href: '/Knowledge/optimistic-rollups',
  },
  {
    title: 'ZK Rollups',
    description: 'Layer 2 scaling solution using zero-knowledge proofs to verify transaction validity.',
    href: '/Knowledge/zk-rollups',
  },
  {
    title: 'ERC-20',
    description: 'Token standard for fungible tokens on Ethereum, enabling interoperability across applications.',
    href: '/Knowledge/erc20',
  },
  {
    title: 'Blockchain Explorers',
    description: 'Web interfaces for viewing and analyzing blockchain transactions, addresses, and statistics.',
    href: '/Learn/Ethereum-More/Explorer-Wallet',
  },
  {
    title: 'Gas Fee Calculation',
    description: 'Understanding how transaction fees are determined on Ethereum and Layer 2 solutions.',
    href: '/Learn/Ethereum-More/Gas-Fee-Calculation',
  },
  {
    title: 'Ethereum Applications',
    description: 'Overview of decentralized applications built on Ethereum across various sectors.',
    href: '/Learn/Ethereum-More/Ethereum-Applications',
  },
  {
    title: 'Ethereum Development',
    description: 'Technical foundation and tools for building on the Ethereum ecosystem.',
    href: '/Learn/Ethereum-More/Ethereum-Dev',
  },
];

const Knowledge = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const filteredItems = knowledgeItems.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNavigate = (href: string) => {
    if (href.startsWith('http') || !href.startsWith('/Knowledge/')) {
      router.push(`/docs${href}`);
    } else {
      router.push(`/docs${href}`);
    }
  };

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
              href={`/docs${item.href}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Knowledge; 