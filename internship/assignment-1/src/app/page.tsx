// "use client";

// import { useState } from "react";
// import QuoteForm from "@/components/QuoteForm";
// import QuoteCard from "@/components/QuoteCard"; // or QuoteList if you're using that

// import quotesData from "@/data/quotes.json"; // adjust the path if needed

// export default function Home() {
//   const [quotes, setQuotes] = useState<string[]>([]);

//   const handleSelectTopic = (topic: string) => {
//     const match = quotesData.find((q) => q.topic.toLowerCase() === topic.toLowerCase());
//     setQuotes(match ? match.quotes.slice(0, 3) : []);
//   };

//   return (
//     <main className="min-h-screen p-4 bg-gray-50">
//       <h1 className="text-3xl font-bold text-center">Quote Generator</h1>

//       <div className="max-w-md mx-auto mt-10 p-4 border rounded-xl shadow bg-white">
//         <QuoteForm onSelectTopic={handleSelectTopic} />

//         {quotes.length > 0 && (
//           <div className="mt-6 space-y-4">
//             {quotes.map((quote, index) => (
//               <QuoteCard key={index} quote={quote} />
//             ))}
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

"use client";

import { useState } from "react";
import QuoteForm from "@/components/QuoteForm";
import QuoteCard from "@/components/QuoteCard";
import quotesData from "@/data/quotes.json"; // Adjust path as needed

// 🔁 This shuffles quotes and returns 3 randomly (from topic-specific array)
function getRandomQuotes(quotes: string[], count = 3): string[] {
  const arr = [...quotes]; // Make a copy to avoid mutating original array
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, count);
}

export default function Home() {
  const [quotes, setQuotes] = useState<string[]>([]);

  // 🧠 Called when topic is selected from dropdown
  const handleSelectTopic = (topic: string) => {
    const match = quotesData.find(
      (q) => q.topic.toLowerCase() === topic.toLowerCase()
    );

    if (match && match.quotes.length >= 3) {
      // ✅ Random 3 quotes from topic-specific list
      setQuotes(getRandomQuotes(match.quotes, 3));
    } else {
      // If not enough quotes or not found, show all or empty
      setQuotes(match ? match.quotes : []);
    }
  };

  return (
    <main className="min-h-screen p-4 bg-gray-50">
      <h1 className="text-3xl font-bold text-center">Quote Generator</h1>

      <div className="max-w-md mx-auto mt-10 p-4 border rounded-xl shadow bg-white">
        <QuoteForm onSelectTopic={handleSelectTopic} />

        {quotes.length > 0 && (
          <div className="mt-6 space-y-4">
            {quotes.map((quote, index) => (
              <QuoteCard key={index} quote={quote} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
