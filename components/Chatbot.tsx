import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { runChat } from '../services/geminiService';
import { searchImageForPlace } from '../services/imageSearchService';
import ChatBubble from './ChatBubble';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init',
      role: 'model',
      text: '¡Hola! 👋 Soy tu asistente virtual para el turismo en Colombia. Pregúntame sobre playas en Cartagena, caminatas en el Parque Tayrona o los mejores lugares para tomar café en el Eje Cafetero.',
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState<{ latitude: number, longitude: number } | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setLocationError(null);
        },
        (error) => {
          console.error("Geolocation error:", error);
          setLocationError("No se pudo obtener tu ubicación. Las recomendaciones pueden ser menos precisas.");
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    }
  }, [isOpen]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const { responseText, placesInfo, mapLinks } = await runChat(currentInput, location);
      
      // The backend now provides an image URL for each place.
      // We'll use the image of the first place for the main message display.
      const imageUrl = (placesInfo && placesInfo.length > 0) ? placesInfo[0].imageUrl : undefined;
      
      const modelMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        imageUrl: imageUrl ?? undefined,
        mapLinks: mapLinks.length > 0 ? mapLinks : undefined,
        // NOTE: groundingChunks is not returned by the new service implementation.
        // If you need it, you'll have to add it back to geminiService.ts
        groundingChunks: [], 
      };
      setMessages(prev => [...prev, modelMessage]);

    } catch (error) {
      console.error("Error processing chat:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: 'Lo siento, algo salió mal. Por favor, inténtalo de nuevo más tarde.',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
        setIsLoading(false);
    }
  };
  
  const handleChipClick = (text: string) => {
    setInput(text);
    // Directly submit the form
    const form = document.getElementById('chatbot-form') as HTMLFormElement;
    if (form) {
        // We create a synthetic event because handleSubmit expects one
        const syntheticEvent = { 
            preventDefault: () => {}, 
            // Add other properties if your handler needs them
        } as unknown as React.FormEvent;
        handleSubmit(syntheticEvent);
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-[#2E5A4E] text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-3xl z-50 transition-transform hover:scale-110"
        aria-label="Alternar Chatbot"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comments'}`}></i>
      </button>

      <div className={`fixed bottom-24 right-6 w-[calc(100vw-3rem)] max-w-sm h-[70vh] bg-white rounded-2xl shadow-xl flex flex-col transition-all duration-300 ease-in-out z-50 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <header className="bg-[#2E5A4E] text-white p-4 rounded-t-2xl shadow-md">
          <h2 className="text-lg font-semibold">Turismo Tech Colombia 🇨🇴</h2>
          <p className="text-xs opacity-80">Tu guía inteligente de viajes</p>
        </header>

        <main className="flex-1 p-4 overflow-y-auto bg-gray-50/50">
          {locationError && (
             <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-2 text-xs mb-3 rounded-r-lg">
                <p>{locationError}</p>
             </div>
          )}
          {messages.map((msg) => (
            <ChatBubble key={msg.id} message={msg} />
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-200 text-black p-3 rounded-lg rounded-bl-none max-w-xs animate-pulse">
                <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </main>
        
        <div className="px-4 py-2 border-t bg-white overflow-x-auto whitespace-nowrap">
            <button onClick={() => handleChipClick("Playas en Santa Marta")} className="inline-block bg-white border border-[#F8BABA] text-[#2E5A4E] px-3 py-1 rounded-full text-sm mr-2">🏖️ Playas</button>
            <button onClick={() => handleChipClick("¿Qué hacer en Medellín?")} className="inline-block bg-white border border-[#F8BABA] text-[#2E5A4E] px-3 py-1 rounded-full text-sm mr-2">🏙️ Medellín</button>
            <button onClick={() => handleChipClick("Historia de Cartagena")} className="inline-block bg-white border border-[#F8BABA] text-[#2E5A4E] px-3 py-1 rounded-full text-sm">🏰 Cartagena</button>
        </div>

        <form id="chatbot-form" onSubmit={handleSubmit} className="p-4 bg-white border-t rounded-b-2xl">
          <div className="flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu pregunta..."
              className="flex-1 w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#F8BABA]"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="ml-3 bg-[#2E5A4E] text-white w-10 h-10 rounded-full flex items-center justify-center disabled:bg-gray-400"
              disabled={isLoading || !input.trim()}
              aria-label="Enviar Mensaje"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Chatbot;