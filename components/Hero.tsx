import BrowserMockup from '@/components/BrowserMockup';

const headlineWords = ['Building', 'products', 'that'];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0A0A0A]">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text content */}
          <div>
            <p
              className="hero-word text-sm font-medium text-gray-500 uppercase tracking-widest mb-4"
              style={{ animationDelay: '0.1s' }}
            >
              Software &amp; Web Developer
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
              {headlineWords.map((word, i) => (
                <span
                  key={word}
                  className="hero-word"
                  style={{ animationDelay: `${0.2 + i * 0.12}s` }}
                >
                  {word}{' '}
                </span>
              ))}
              <span
                className="hero-word italic text-gray-300 typing-cursor"
                style={{ animationDelay: '0.56s' }}
              >
                actually
              </span>
              <span
                className="hero-word"
                style={{ animationDelay: '0.68s' }}
              >
                {' '}ship.
              </span>
            </h1>

            <p
              className="hero-word text-lg text-gray-400 leading-relaxed mb-10 max-w-lg"
              style={{ animationDelay: '0.8s' }}
            >
              I craft modern, performant web applications with clean code and
              user-focused design. Currently working with Next.js, React, and
              TypeScript.
            </p>

            <div
              className="hero-word flex flex-col sm:flex-row gap-4"
              style={{ animationDelay: '1s' }}
            >
              <a
                href="#projects"
                className="px-7 py-3 bg-white text-[#0A0A0A] hover:bg-gray-200 transition-colors rounded-lg font-medium inline-flex justify-center"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-7 py-3 border border-gray-600 hover:bg-gray-900 transition-colors rounded-lg font-medium inline-flex justify-center text-white"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right: browser mockup -- fade in after headline */}
          <div
            className="hero-word relative"
            style={{ animationDelay: '0.4s' }}
          >
            <BrowserMockup url="rezapahlevi.vercel.app" />
          </div>

        </div>
      </div>
    </section>
  );
}
