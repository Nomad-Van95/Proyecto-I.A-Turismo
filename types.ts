export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  imageUrl?: string;
  mapLinks?: { name: string; url: string; }[];
  groundingChunks?: GroundingChunk[];
}

export interface GroundingChunk {
  maps?: {
    uri: string;
    title: string;
    placeAnswerSources?: {
      reviewSnippets: {
        text: string;
        author: string;
      }[];
    }[];
  };
  web?: {
    uri: string;
    title: string;
  }
}