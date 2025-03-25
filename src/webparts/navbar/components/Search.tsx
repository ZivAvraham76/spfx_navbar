import * as React from 'react';

const Search: React.FC = () => {
  const [query, setQuery] = React.useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (query.trim()) {
      const searchUrl = `https://cptraining.litmoseu.com/home/library?SearchTerm=${encodeURIComponent(query)}`;
      window.open(searchUrl, '_blank');
    }
  };

  return (
    <form className="relative w-[331px] h-[38px] px-4 py-3 bg-white rounded-[81.08px] outline outline-1 outline-offset-[-1.08px] outline-zinc-400 inline-flex justify-start items-center overflow-hidden" onSubmit={handleSubmit}>
      <div className="absolute inset-y-0 left-3 flex items-center">
        <svg
          className="w-3 h-3 text-[#000000]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="text"
        id="simple-search"
        className="bg-white rounded-full text-[#000000] text-sm pl-10 pr-4 focus:outline-none focus:bg-white"
        placeholder="Search training"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />
    </form>
  );
};

export default Search;
