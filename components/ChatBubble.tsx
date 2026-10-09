import React from 'react';
import { Message } from '../types';

interface ChatBubbleProps {
  message: Message;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`p-3 rounded-lg max-w-xs md:max-w-md ${
          isUser
            ? 'bg-[#F8BABA] text-[#2E5A4E] font-medium rounded-br-none'
            : 'bg-gray-200 text-gray-800 rounded-bl-none'
        }`}
      >
        <p className="text-sm" dangerouslySetInnerHTML={{ __html: message.text.replace(/\n/g, '<br />') }} />
        
        {message.imageUrl && (
          <div className="mt-2">
            <img src={message.imageUrl} alt="Contenido visual relacionado" className="rounded-lg w-full h-auto object-cover" />
          </div>
        )}

        {message.mapLinks && message.mapLinks.length > 0 && (
          <div className="mt-2 space-y-2">
            {message.mapLinks.map((link, index) => (
               <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-full text-center bg-[#4285F4] text-white text-sm font-bold py-2 px-4 rounded-lg hover:bg-[#357ae8] transition-colors"
              >
                <i className="fas fa-map-location-dot mr-2"></i>
                <span className="truncate">{link.name}</span>
              </a>
            ))}
          </div>
        )}

        {message.groundingChunks && message.groundingChunks.length > 0 && (
          <div className="mt-3 pt-2 border-t border-gray-300">
            <h4 className="text-xs font-bold mb-1 opacity-70">Fuentes:</h4>
            <ul className="text-xs space-y-1">
              {message.groundingChunks.map((chunk, index) => {
                const source = chunk.maps || chunk.web;
                return source ? (
                    <li key={index} className="truncate">
                        <a href={source.uri} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
                           <i className={`fas ${chunk.maps ? 'fa-map-location-dot' : 'fa-globe'} opacity-60`}></i>
                           <span className="truncate">{source.title}</span>
                        </a>
                    </li>
                ) : null;
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBubble;