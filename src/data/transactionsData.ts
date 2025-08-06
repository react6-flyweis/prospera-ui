export const transactions = [
  {
    date: '27 Aug 2024',
    sender: 'Kalyan Sarkar',
    senderId: 'US748520',
    recipient: 'Kadin Geidt',
    recipientId: 'US784536',
    amount: 50.0,
    transactionId: '124789952236',
  },
  {
    date: '27 Aug 2024',
    sender: 'Kadin Dorwart',
    senderId: 'AG748520',
    recipient: 'Kalyan Sarkar',
    recipientId: 'US748520',
    amount: 50.0,
    transactionId: '124789952236',
  },
  {
    date: '27 Aug 2024',
    sender: 'Talan Franci',
    senderId: 'CO748520',
    recipient: 'Kalyan Sarkar',
    recipientId: 'US748536',
    amount: 50.0,
    transactionId: '124789952236',
  },
  {
    date: '27 Aug 2024',
    sender: 'Martin Vetrovs',
    senderId: 'CO748520',
    recipient: 'Kalyan Sarkar',
    recipientId: 'US748536',
    amount: 50.0,
    transactionId: '124789952236',
  },
  {
    date: '27 Aug 2024',
    sender: 'Omar Septimus',
    senderId: 'LE748520',
    recipient: 'Kalyan Sarkar',
    recipientId: 'US784536',
    amount: 50.0,
    transactionId: '124789952236',
  },
  {
    date: '27 Aug 2024',
    sender: 'Terry Vaccaro',
    senderId: 'VE748520',
    recipient: 'Kalyan Sarkar',
    recipientId: 'US748536',
    amount: 50.0,
    transactionId: '124789952236',
  },
  {
    date: '27 Aug 2024',
    sender: 'Corey Lubin',
    senderId: 'VE748520',
    recipient: 'Kalyan Sarkar',
    recipientId: 'US748536',
    amount: 50.0,
    transactionId: '124789952236',
  },
  {
    date: '27 Aug 2024',
    sender: 'Giana Culhane',
    senderId: 'US748520',
    recipient: 'Kalyan Sarkar',
    recipientId: 'US748536',
    amount: 50.0,
    transactionId: '124789952236',
  },
  {
    date: '27 Aug 2024',
    sender: 'Kalyan Sarkar',
    senderId: 'US748520',
    recipient: 'Giana Culhane',
    recipientId: 'US748520',
    amount: 50.0,
    transactionId: '124789952236',
  },
];

import type {
  UserType,
  Wallet,
} from '@/components/WalletManagement/walletColumns';

const walletData = [
  {
    id: 'WAL001',
    balance: 1200.5,
    user: {
      name: 'Kalyan Sarkar',
      email: 'example@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      mobile: '+1 9874 562103',
    },
  },
  {
    id: 'WAL002',
    balance: 850.75,
    user: {
      name: 'Corey Lipshutz',
      email: 'corey.lipshutz@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      mobile: '+1 9874 562104',
    },
  },
  {
    id: 'WAL003',
    balance: 430.0,
    user: {
      name: 'Craig Vetrovs',
      email: 'craig.vetrovs@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      mobile: '+1 9874 562105',
    },
  },
  {
    id: 'WAL004',
    balance: 2100.0,
    user: {
      name: 'Kianna Korsgaard',
      email: 'kianna.korsgaard@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      mobile: '+1 9874 562106',
    },
  },
  {
    id: 'WAL005',
    balance: 0.0,
    user: {
      name: 'Martin Lipshutz',
      email: 'martin.lipshutz@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      mobile: '+1 9874 562107',
    },
  },
  {
    id: 'WAL006',
    balance: 999.99,
    user: {
      name: 'Mira Dokidis',
      email: 'mira.dokidis@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      mobile: '+1 9874 562108',
    },
  },
  {
    id: 'WAL007',
    balance: 150.25,
    user: {
      name: 'Arjun Mehra',
      email: 'arjun.mehra@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
      mobile: '+1 9874 562109',
    },
  },
  {
    id: 'WAL008',
    balance: 3000.0,
    user: {
      name: 'Priya Singh',
      email: 'priya.singh@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      mobile: '+1 9874 562110',
    },
  },
  {
    id: 'WAL009',
    balance: 500.0,
    user: {
      name: 'David Kim',
      email: 'david.kim@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
      mobile: '+1 9874 562111',
    },
  },
  {
    id: 'WAL010',
    balance: 1750.0,
    user: {
      name: 'Sara Lee',
      email: 'sara.lee@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      mobile: '+1 9874 562112',
    },
  },
  {
    id: 'WAL011',
    balance: 0.0,
    user: {
      name: 'Mohammed Ali',
      email: 'mohammed.ali@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
      mobile: '+1 9874 562113',
    },
  },
  {
    id: 'WAL012',
    balance: 120.0,
    user: {
      name: 'Emily Clark',
      email: 'emily.clark@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
      mobile: '+1 9874 562114',
    },
  },
];

export const getWalletDataByType = (type: UserType): Wallet[] => {
  switch (type) {
    case 'users':
      return walletData.map((wallet) => ({
        ...wallet,
        user: {
          ...wallet.user,
          id: 'US124566',
        },
      })) as Wallet[];
    case 'employees':
      return walletData.map((wallet) => ({
        ...wallet,
        user: {
          ...wallet.user,
          id: 'EMP124566',
        },
      })) as Wallet[];
    case 'corporates':
      return walletData.map((wallet) => ({
        ...wallet,
        user: {
          ...wallet.user,
          id: 'CORP124566',
        },
      })) as Wallet[];
    case 'agents':
      return walletData.map((wallet) => ({
        ...wallet,
        user: {
          ...wallet.user,
          id: 'AGT124566',
        },
      })) as Wallet[];
    case 'lenders':
      return walletData.map((wallet) => ({
        ...wallet,
        user: {
          ...wallet.user,
          id: 'LND124566',
        },
      })) as Wallet[];
    case 'vendors':
      return walletData.map((wallet) => ({
        ...wallet,
        user: {
          ...wallet.user,
          id: 'VND124566',
        },
      })) as Wallet[];
    default:
      return walletData.map((wallet) => ({
        ...wallet,
        user: {
          ...wallet.user,
          id: 'US124566',
        },
      })) as Wallet[];
  }
};
