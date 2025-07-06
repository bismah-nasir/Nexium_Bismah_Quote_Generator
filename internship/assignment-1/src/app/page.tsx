//     return (
//         <main className="min-h-screen bg-rose-200 text-rose-600 p-4 flex flex-col items-center justify-start space-y-6">
//             <h1 className="text-4xl font-bold mt-8">Quote Generator</h1>
//             <div className="w-full max-w-md">
//                 <QuoteForm onSelectTopic={handleSelectTopic} />
//             </div>

//             {quotes.length > 0 && (
//                 <div className="carousel w-full max-w-xl mt-6">
//                     <div className="relative w-full">
//                         <QuoteCard quote={quotes[currentIndex]} />

//                         <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
//                             <button
//                                 className="btn btn-sm btn-outline text-rose-400 rounded-full size-8 hover:text-rose-600 hover:bg-rose-200 hover:border-rose-600"
//                                 onClick={prevQuote}>
//                                 ❮
//                             </button>
//                         </div>
//                         <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
//                             <button
//                                 className="btn btn-sm btn-outline text-rose-400 rounded-full size-8"
//                                 onClick={nextQuote}>
//                                 ❯
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </main>
//     );
// }
// app/page.tsx
"use client";

import { useState } from "react";
import QuoteForm from "@/components/QuoteForm";
import QuoteCard from "@/components/QuoteCard";
import quotesData from "@/data/quotes.json";

// ✅ Type for each quote item
type Quote = {
    text: string;
    author: string;
};

// 🔁 This shuffles quotes and returns 3 randomly (from topic-specific array)
function getRandomQuotes<T>(quotes: T[], count = 3): T[] {
    const arr = [...quotes];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, count);
}

export default function Home() {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // 🧠 Called when a topic is selected
    const handleSelectTopic = (topic: string) => {
        const match = quotesData.find((q) => q.topic === topic);
        if (match) {
            const randomQuotes = getRandomQuotes(match.quotes, 3);
            setQuotes(randomQuotes);
            setCurrentIndex(0);
        } else {
            setQuotes([]);
        }
    };

    const prevQuote = () => {
        setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
    };

    const nextQuote = () => {
        setCurrentIndex((prev) => (prev + 1) % quotes.length);
    };

    return (
        <main className="min-h-screen bg-rose-100 bg-opacity-60 backdrop-blur-sm text-rose-700 p-6 flex flex-col items-center justify-center space-y-8 font-sans">
            <h1 className="text-5xl font-extrabold text-rose-600 drop-shadow-sm tracking-wide">
                Quote Generator
            </h1>
            <div className="w-full max-w-md">
                <QuoteForm onSelectTopic={handleSelectTopic} />
            </div>

            {quotes.length > 0 && (
                <div className="carousel w-full max-w-xl mt-6">
                    <div className="relative w-full">
                        <div className="p-10">
                            <QuoteCard quote={quotes[currentIndex]} />
                        </div>

                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                            <button
                                className="btn btn-sm btn-outline text-rose-400 rounded-full size-8 hover:text-rose-600 hover:bg-rose-200 hover:border-rose-600 shadow-md"
                                onClick={prevQuote}>
                                ❮
                            </button>
                        </div>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                            <button
                                className="btn btn-sm btn-outline text-rose-400 rounded-full size-8 hover:text-rose-600 hover:bg-rose-200 hover:border-rose-600 shadow-md"
                                onClick={nextQuote}>
                                ❯
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
