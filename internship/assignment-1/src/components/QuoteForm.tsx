"use client";

import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
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
                <SelectTrigger className=" border border-rose-200 w-full text-md">
                    <SelectValue placeholder="Select a topic" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="success" className="relative pl-2 pr-4 py-2 data-[state=checked]:pl-2">Success</SelectItem>
                    <SelectItem value="motivation" className="relative pl-2 pr-4 py-2 data-[state=checked]:pl-2">Motivation</SelectItem>
                    <SelectItem value="education" className="relative pl-2 pr-4 py-2 data-[state=checked]:pl-2">Education</SelectItem>
                    <SelectItem value="leadership" className="relative pl-2 pr-4 py-2 data-[state=checked]:pl-2">Leadership</SelectItem>
                    <SelectItem value="confidence" className="relative pl-2 pr-4 py-2 data-[state=checked]:pl-2">Confidence</SelectItem>
                    <SelectItem value="growth" className="relative pl-2 pr-4 py-2 data-[state=checked]:pl-2">Growth</SelectItem>
                    <SelectItem value="friendship" className="relative pl-2 pr-4 py-2 data-[state=checked]:pl-2">Friendship</SelectItem>
                    <SelectItem value="hard work" className="relative pl-2 pr-4 py-2 data-[state=checked]:pl-2">Hard Work</SelectItem>
                    <SelectItem value="coding" className="relative pl-2 pr-4 py-2 data-[state=checked]:pl-2">Coding</SelectItem>
                    <SelectItem value="creativity" className="relative pl-2 pr-4 py-2 data-[state=checked]:pl-2">Creativity</SelectItem>
                </SelectContent>
            </Select>

            <Button type="submit" className="w-full bg-rose-500 hover:bg-rose-900 text-md">
                Get Quotes
            </Button>
        </form>
    );
};

export default QuoteForm;
