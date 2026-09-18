import quoteData from '../content/quotes.json';

export interface Quote {
  id: string;
  text: string;
  author: string;
}

export function getAllQuotes(): Quote[] {
  return quoteData as Quote[];
}

export function getFirstQuote(): Quote | null {
  const quotes = getAllQuotes();
  return quotes.length > 0 ? quotes[0] : null;
}