import type { KYCDetail } from '@/components/KYCVerification/kycColumns';
import type { UserType } from '@/components/WalletManagement/walletColumns';

const kycData = [
  {
    user: {
      id: 'USR001',
      name: 'Kalyan Sarkar',
      email: 'kalyan.sarkar@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      mobile: '+1 9874 562103',
    },
    kyc: 'Verified',
  },
  {
    user: {
      id: 'USR002',
      name: 'Corey Lipshutz',
      email: 'corey.lipshutz@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      mobile: '+1 9874 562104',
    },
    kyc: 'Not verified',
  },
  {
    user: {
      id: 'USR003',
      name: 'Craig Vetrov',
      email: 'craig.vetrov@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      mobile: '+1 9874 562105',
    },
    kyc: 'Not verified',
  },
  {
    user: {
      id: 'USR004',
      name: 'Kianna Korsgaard',
      email: 'kianna.korsgaard@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      mobile: '+1 9874 562106',
    },
    kyc: 'Not verified',
  },
  {
    user: {
      id: 'USR005',
      name: 'Martin Lipshutz',
      email: 'martin.lipshutz@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
      mobile: '+1 9874 562107',
    },
    kyc: 'Not verified',
  },
  {
    user: {
      id: 'USR006',
      name: 'Mira Dokidis',
      email: 'mira.dokidis@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      mobile: '+1 9874 562108',
    },
    kyc: 'Not verified',
  },
  {
    user: {
      id: 'USR007',
      name: 'Phillip Aminoff',
      email: 'phillip.aminoff@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
      mobile: '+1 9874 562109',
    },
    kyc: 'Not verified',
  },
  {
    user: {
      id: 'USR008',
      name: 'Roger Westervelt',
      email: 'roger.westervelt@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
      mobile: '+1 9874 562110',
    },
    kyc: 'Not verified',
  },
  {
    user: {
      id: 'USR009',
      name: 'Paityn Culhane',
      email: 'paityn.culhane@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      mobile: '+1 9874 562111',
    },
    kyc: 'Not verified',
  },
  {
    user: {
      id: 'USR010',
      name: 'Alena Lipshutz',
      email: 'alena.lipshutz@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      mobile: '+1 9874 562112',
    },
    kyc: 'Not verified',
  },
  {
    user: {
      id: 'USR011',
      name: 'Lydia Workman',
      email: 'lydia.workman@gmail.com',
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
      mobile: '+1 9874 562113',
    },
    kyc: 'Not verified',
  },
];

export const getKYCDataByType = (type: UserType): KYCDetail[] => {
  switch (type) {
    case 'corporates':
      return kycData.map((kyc) => ({
        ...kyc,
        user: {
          ...kyc.user,
          id: 'CORP124566',
        },
      })) as KYCDetail[];
    case 'agents':
      return kycData.map((kyc) => ({
        ...kyc,
        user: {
          ...kyc.user,
          id: 'AGT124566',
        },
      })) as KYCDetail[];
    case 'lenders':
      return kycData.map((kyc) => ({
        ...kyc,
        user: {
          ...kyc.user,
          id: 'LND124566',
        },
      })) as KYCDetail[];
    case 'vendors':
      return kycData.map((kyc) => ({
        ...kyc,
        user: {
          ...kyc.user,
          id: 'VND124566',
        },
      })) as KYCDetail[];
    default:
      return kycData.map((kyc) => ({
        ...kyc,
        user: {
          ...kyc.user,
          id: 'US124566',
        },
      })) as KYCDetail[];
  }
};
