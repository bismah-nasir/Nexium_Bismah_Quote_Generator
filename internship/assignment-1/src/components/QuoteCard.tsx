interface QuoteCardProps {
    quote: {
        text: string;
        author: string;
    };
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote }) => (
    <div className="border border-rose-300 p-10 rounded-xl shadow-lg w-full flex flex-col justify-between min-h-[200px] pl-15 pr-15">
        <p className="text-lg italic text-rose-400">“{quote.text}”</p>
        <p className="text-right text-m font-medium text-rose-400 mt-4">
            — {quote.author}
        </p>
    </div>
);

export default QuoteCard;
