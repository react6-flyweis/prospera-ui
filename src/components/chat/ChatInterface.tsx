import { useEffect, useRef } from 'react';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import MessageBubble from './MessageBubble';
import { useTranslation } from 'react-i18next';

interface User {
  id: string;
  name: string;
  userId: string;
  avatar?: string;
  isActive?: boolean;
}

interface Message {
  id: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
  sender?: {
    name: string;
    avatar?: string;
  };
}

interface ChatInterfaceProps {
  selectedUser: User | null;
  messages: Message[];
  onSendMessage: (message: string) => void;
}

export default function ChatInterface({
  selectedUser,
  messages,
  onSendMessage,
}: ChatInterfaceProps) {
  const { t } = useTranslation();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  if (!selectedUser) {
    return (
      <div className="flex flex-1 items-center justify-center rounded-lg border bg-background">
        <div className="text-center">
          <h3 className="font-medium text-lg text-muted-foreground">
            {t('chatInterface.selectUserToChat')}
          </h3>
          <p className="text-muted-foreground text-sm">
            {t('chatInterface.chooseConversation')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col rounded-lg border bg-gray-50">
      <ChatHeader user={selectedUser} />

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <p className="text-muted-foreground">
              {t('chatInterface.noMessagesYet')}
            </p>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      <ChatInput onSendMessage={onSendMessage} />
    </div>
  );
}
