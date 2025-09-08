export default function Footer() {
  return (
    <footer className="text-center py-6 bg-gray-200 text-sm text-gray-700">
      <div className="max-w-3xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="mb-2 sm:mb-0 text-center sm:text-left">
        &copy; {new Date().getFullYear()} Valentin HALLAY |{" "}
        <a href="mailto:valentinhallay@gmail.com">
          valentinhallay@gmail.com
        </a>
      </p>
      <a
          href="https://www.linkedin.com/in/valentin-hallay"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.2h.05c.5-.95 1.75-2.2 3.6-2.2 3.85 0 4.55 2.53 4.55 5.82V24h-4v-8.2c0-1.95-.03-4.45-2.7-4.45-2.7 0-3.1 2.1-3.1 4.3V24h-4V8z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
