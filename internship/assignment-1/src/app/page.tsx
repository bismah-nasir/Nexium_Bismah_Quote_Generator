"use client";

import { useState } from "react";
import QuoteForm from "@/components/QuoteForm";
import QuoteCard from "@/components/QuoteCard";
import quotesData from "@/data/quotes.json"; // Adjust path as needed

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

    // 🧠 Called when a topic is selected
    const handleSelectTopic = (topic: string) => {
        const match = quotesData.find((q) => q.topic === topic);
        if (match) {
            const randomQuotes = getRandomQuotes(match.quotes, 3); // this is Quote[]
            setQuotes(randomQuotes); // ✅ valid
        } else {
            setQuotes([]); // no match found
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
