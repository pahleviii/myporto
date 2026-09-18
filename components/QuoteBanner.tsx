import { getAllQuotes } from '@/lib/quotes';

export default function QuoteBanner() {
  const quotes = getAllQuotes();

  if (quotes.length === 0) return null;

  // Display the first quote as a static banner (no cycling needed for SSR)
  const quote = quotes[0];

  return (
    <section aria-label="Philosophy" className="py-16 bg-surface border-y border-border">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <blockquote className="text-center">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-text leading-snug max-w-3xl mx-auto">
            &ldquo;{quote.text}&rdquo;
          </p>
          <footer className="mt-6 text-text-muted text-sm font-medium uppercase tracking-widest">
            &mdash; {quote.author}
          </footer>
        </blockquote>
      </div>
    </section>
  );
}