import type { CryptoData } from '@/components/charts/CryptoChart';

export const cryptoData: CryptoData[] = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '$21,326.28',
    change: '+1.75%',
    changePercent: '+1.75%',
    isPositive: true,
    color: '#f59e0b',
    bgGradient:
      'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200',
    icon: '₿',
    data: [
      { time: '00:00', value: 20_500 },
      { time: '04:00', value: 20_800 },
      { time: '08:00', value: 21_100 },
      { time: '12:00', value: 21_400 },
      { time: '16:00', value: 21_200 },
      { time: '20:00', value: 21_326.28 },
    ],
  },
  {
    name: 'Tether',
    symbol: 'USDT',
    price: '$1.02',
    change: '-4.37%',
    changePercent: '-4.37%',
    isPositive: false,
    color: '#10b981',
    bgGradient: 'bg-gradient-to-br from-green-50 to-green-100 border-green-200',
    icon: '₮',
    data: [
      { time: '00:00', value: 1.05 },
      { time: '04:00', value: 1.04 },
      { time: '08:00', value: 1.03 },
      { time: '12:00', value: 1.025 },
      { time: '16:00', value: 1.02 },
      { time: '20:00', value: 1.02 },
    ],
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    price: '$1,633.05',
    change: '+3.78%',
    changePercent: '+3.78%',
    isPositive: true,
    color: '#8b5cf6',
    bgGradient:
      'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200',
    icon: 'Ξ',
    data: [
      { time: '00:00', value: 1550 },
      { time: '04:00', value: 1580 },
      { time: '08:00', value: 1600 },
      { time: '12:00', value: 1620 },
      { time: '16:00', value: 1630 },
      { time: '20:00', value: 1633.05 },
    ],
  },
];
