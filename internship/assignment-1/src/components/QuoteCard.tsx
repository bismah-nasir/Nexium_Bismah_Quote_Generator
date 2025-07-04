import { Card, CardContent } from "@/components/ui/card";

interface Props {
  quote: string;
}

export default function QuoteCard({ quote }: Props) {
  return (
    <Card className="my-4 shadow">
      <CardContent className="p-4 text-center text-gray-700 font-medium">
        “{quote}”
      </CardContent>
    </Card>
  );
}
