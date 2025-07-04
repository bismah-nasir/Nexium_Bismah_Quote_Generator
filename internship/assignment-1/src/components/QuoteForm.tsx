// "use client";

// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import QuoteCard from "./QuoteCard";
// import quotesData from "@/data/quotes.json";

// export default function QuoteForm() {
//   const [topic, setTopic] = useState("");
//   const [quotes, setQuotes] = useState<string[]>([]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const match = quotesData.find(
//       (item) => item.topic.toLowerCase() === topic.toLowerCase()
//     );

//     setQuotes(match ? match.quotes.slice(0, 3) : []);
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-10">
//       <form onSubmit={handleSubmit} className="flex gap-2">
//         <Input
//           placeholder="Enter a topic (e.g., motivation)"
//           value={topic}
//           onChange={(e) => setTopic(e.target.value)}
//         />
//         <Button type="submit">Get Quotes</Button>
//       </form>

//       <div className="mt-6">
//         {quotes.length > 0 ? (
//           quotes.map((q, i) => <QuoteCard key={i} quote={q} />)
//         ) : (
//           <p className="mt-4 text-sm text-gray-500">No quotes found yet.</p>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface QuoteFormProps {
  onSelectTopic: (topic: string) => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ onSelectTopic }) => {
  const [topic, setTopic] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (topic) {
      onSelectTopic(topic);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Select onValueChange={(value) => setTopic(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a topic" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="success">Success</SelectItem>
          <SelectItem value="motivation">Motivation</SelectItem>
          <SelectItem value="education">Education</SelectItem>
          <SelectItem value="leadership">Leadership</SelectItem>
          <SelectItem value="confidence">Confidence</SelectItem>
          <SelectItem value="growth">Growth</SelectItem>
          <SelectItem value="friendship">Friendship</SelectItem>
          <SelectItem value="hard work">Hard Work</SelectItem>
          <SelectItem value="coding">Coding</SelectItem>
          <SelectItem value="creativity">Creativity</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" className="w-full">
        Get Quotes
      </Button>
    </form>
  );
};

export default QuoteForm;
