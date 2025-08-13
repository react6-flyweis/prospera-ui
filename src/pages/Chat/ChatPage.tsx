import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ChatInterface from '@/components/chat/ChatInterface';
import UserList from '@/components/chat/UserList';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function ChatPage() {
  const { t } = useTranslation();
  // Mock data based on the design
  const chatTypes = [
    { value: 'users', label: t('chatPage.chatTypes.users') },
    { value: 'employees', label: t('chatPage.chatTypes.employees') },
    { value: 'corporates', label: t('chatPage.chatTypes.corporates') },
    { value: 'agents', label: t('chatPage.chatTypes.agents') },
    { value: 'lenders', label: t('chatPage.chatTypes.lenders') },
    { value: 'vendors', label: t('chatPage.chatTypes.vendors') },
  ];
  const mockUsers = [
    {
      id: '1',
      name: 'Giana Korsgaard',
      userId: 'UST2345',
      lastMessage:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      timestamp: '00:31:00',
      avatar: undefined,
      isActive: true,
      hasUnread: false,
    },
    {
      id: '2',
      name: 'Charlie Rosser',
      userId: 'UST2345',
      lastMessage: 'Lorem Ipsum is simply dummy text...',
      timestamp: '00:31:00',
      avatar: undefined,
      isActive: false,
      hasUnread: true,
    },
    {
      id: '3',
      name: 'Aspen Dorwart',
      userId: 'UST2343',
      lastMessage: 'Lorem Ipsum is simply dummy text...',
      timestamp: '00:31:00',
      avatar: undefined,
      isActive: false,
      hasUnread: false,
    },
    {
      id: '4',
      name: 'Phillip Saris',
      userId: 'UST2345',
      lastMessage: 'Lorem Ipsum is simply dummy text...',
      timestamp: '00:31:00',
      avatar: undefined,
      isActive: false,
      hasUnread: false,
    },
    {
      id: '5',
      name: 'Alena Carder',
      userId: 'UST2345',
      lastMessage: 'Lorem Ipsum is simply dummy text...',
      timestamp: '00:31:00',
      avatar: undefined,
      isActive: false,
      hasUnread: false,
    },
    {
      id: '6',
      name: 'Angel Gouse',
      userId: 'UST2345',
      lastMessage: 'Lorem Ipsum is simply dummy text...',
      timestamp: '00:31:00',
      avatar: undefined,
      isActive: false,
      hasUnread: false,
    },
    {
      id: '7',
      name: 'Jaydon Ekstrom',
      userId: 'UST2345',
      lastMessage: 'Lorem Ipsum is simply dummy text...',
      timestamp: '00:31:00',
      avatar: undefined,
      isActive: false,
      hasUnread: false,
    },
    {
      id: '8',
      name: 'Alena Carder',
      userId: 'UST2345',
      lastMessage: 'Lorem Ipsum is simply dummy text...',
      timestamp: '00:31:00',
      avatar: undefined,
      isActive: false,
      hasUnread: false,
    },
    {
      id: '9',
      name: 'Angel Gouse',
      userId: 'UST2345',
      lastMessage: 'Lorem Ipsum is simply dummy text...',
      timestamp: '00:31:00',
      avatar: undefined,
      isActive: false,
      hasUnread: false,
    },
  ];

  const mockMessages = [
    {
      id: '1',
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      timestamp: '8:09 PM',
      isOwn: false,
      sender: {
        name: 'Giana Korsgaard',
        avatar: undefined,
      },
    },
    {
      id: '2',
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      timestamp: '8:09 PM',
      isOwn: true,
    },
    {
      id: '3',
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      timestamp: '8:09 PM',
      isOwn: true,
    },
  ];
  const [selectedUserId, setSelectedUserId] = useState<string>('1');
  const [messages, setMessages] = useState(mockMessages);
  const [chatType, setChatType] = useState<string>('users');

  const selectedUser =
    mockUsers.find((user) => user.id === selectedUserId) || null;

  const handleUserSelect = (userId: string) => {
    setSelectedUserId(userId);
    // In a real app, you would fetch messages for this user
  };

  const handleSendMessage = (content: string) => {
    const newMessage = {
      id: Date.now().toString(),
      content,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      isOwn: true,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="flex h-[calc(100vh-6.5rem)] flex-col overflow-hidden">
      {/* selector */}
      <div className="mb-4 flex items-center gap-4">
        <span className="font-bold text-lg">{t('chatPage.chatWith')}</span>
        <Select onValueChange={setChatType} value={chatType}>
          <SelectTrigger className="w-40 rounded">
            <SelectValue placeholder={t('chatPage.chatTypes.users')} />
          </SelectTrigger>
          <SelectContent>
            {chatTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex h-[90%] gap-5">
        <UserList
          onUserSelect={handleUserSelect}
          selectedUserId={selectedUserId}
          users={mockUsers}
        />
        <ChatInterface
          messages={messages}
          onSendMessage={handleSendMessage}
          selectedUser={selectedUser}
        />
      </div>
    </div>
  );
}
