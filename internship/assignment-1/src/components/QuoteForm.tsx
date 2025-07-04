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
