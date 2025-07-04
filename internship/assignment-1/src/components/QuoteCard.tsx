interface QuoteCardProps {
    quote: {
        text: string;
        author: string;
    };
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote }) => (
    <div className="border rounded-lg p-4 shadow bg-gray-100">
        <p className="text-lg italic">“{quote.text}”</p>
        <p className="text-sm text-right mt-2 font-medium text-gray-600">
            — {quote.author}
        </p>
    </div>
);

export default QuoteCard;
