// FireProof page mock data

export const fireproofHero = {
  badge: 'FireProof Token (PROOF)',
  presaleBadge: 'PRESALE LIVE NOW',
  title: ['The Future of Private', 'Communication &', 'Decentralized Finance'],
  subtitle: 'Built on Solana. Powering OnFire Messenger. Enabling secure communication and seamless global transactions with integrated cryptocurrency payments.',
  stats: [
    { label: 'Token Symbol', value: 'PROOF' },
    { label: 'Blockchain', value: 'Solana' },
    { label: 'Presale Date', value: 'Oct 13-20, 2025' },
    { label: 'Hard Cap', value: '200 SOL' }
  ]
};

export const problemsSolving = {
  title: "The Problem We're Solving",
  subtitle: 'Modern communication and financial platforms face critical challenges',
  problems: [
    {
      icon: 'Shield',
      title: 'Privacy Crisis',
      description: 'User conversations are monitored, stored, and monetized. Data breaches have become normalized, eroding fundamental privacy rights.'
    },
    {
      icon: 'Zap',
      title: 'Crypto Usability Gap',
      description: 'Despite widespread adoption, spending crypto remains difficult. Complex exchanges and limited acceptance create barriers.'
    },
    {
      icon: 'TrendingUp',
      title: 'Value Extraction',
      description: 'Traditional platforms extract value through data mining while users receive no benefit from network growth.'
    }
  ]
};

export const solution = {
  title: 'Our Solution',
  subtitle: 'FireProof combines privacy-first messaging with seamless crypto payments',
  features: [
    {
      icon: 'Lock',
      title: 'Secure Messaging',
      description: 'End-to-end encrypted communications with no data storage or surveillance on a decentralized architecture.'
    },
    {
      icon: 'CreditCard',
      title: 'Payment Integration',
      description: 'Visa and Mastercard compatible cards with instant crypto-to-fiat conversion for 40M+ merchants globally.'
    },
    {
      icon: 'Globe',
      title: 'Marketplace',
      description: 'P2P transactions within messenger for digital goods and services with built-in escrow protection.'
    },
    {
      icon: 'Users',
      title: 'Value Sharing',
      description: 'Token holders benefit from network growth through staking rewards, burns, and community governance.'
    }
  ]
};

export const tokenDetails = {
  title: 'Token Details',
  details: [
    { label: 'Name', value: 'FireProof' },
    { label: 'Ticker', value: 'PROOF' },
    { label: 'Blockchain', value: 'Solana (SPL Token)' },
    { label: 'Decimals', value: '6' },
    { label: 'Contract', value: 'Dc48bjHeycsJ1a3VnxDY1g3XiciLiHzHrjAeN112yiKc' }
  ]
};

export const supplyAllocation = {
  title: 'Supply Allocation',
  allocations: [
    { name: 'CEX', description: 'Centralized exchange listings', percentage: 10, tokens: '2,100,000' },
    { name: 'Team', description: '12-month lock, 24-month vesting', percentage: 13, tokens: '2,730,000' },
    { name: 'DApp Development', description: 'Platform development and features', percentage: 14, tokens: '2,940,000' },
    { name: 'NFT', description: 'NFT ecosystem development', percentage: 7, tokens: '1,470,000' },
    { name: 'Rewards', description: 'Community rewards and incentives', percentage: 20, tokens: '4,200,000' },
    { name: 'Presale', description: 'Public presale allocation', percentage: 16, tokens: '3,360,000' },
    { name: 'Liquidity', description: 'DEX liquidity provision', percentage: 20, tokens: '4,200,000' }
  ],
  totalSupply: '21,000,000 PROOF'
};

export const roadmap = {
  title: 'Roadmap',
  phases: [
    {
      phase: 'Phase 1',
      title: 'Foundation',
      quarter: 'Q4 2025',
      items: [
        'Token presale launch',
        'Smart contract deployment',
        'Initial DEX listing',
        'Community building'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Integration',
      quarter: 'Q1 2026',
      items: [
        'OnFire Messenger beta',
        'Wallet integration',
        'Staking platform launch',
        'First CEX listings'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Expansion',
      quarter: 'Q2 2026',
      items: [
        'Payment card launch',
        'Marketplace beta',
        'Governance implementation',
        'Global expansion'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Scale',
      quarter: 'Q3 2026',
      items: [
        'Full platform launch',
        'Enterprise partnerships',
        'Advanced DeFi features',
        'Cross-chain bridges'
      ]
    }
  ]
};

export const cta = {
  title: 'Join the FireProof Revolution',
  subtitle: 'Be part of the future of private communication and decentralized finance.',
  buttons: [
    { text: 'Join Presale', href: 'https://refer.onfire.so/', primary: true },
    { text: 'Read Whitepaper', href: '#', primary: false }
  ]
};
