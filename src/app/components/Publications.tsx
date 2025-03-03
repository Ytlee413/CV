import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ScholarIcon } from "@/components/icons/ScholarIcon";
import { Button } from "@/components/ui/button";

type Publication = {
  title: string;
  authors: string;
  journal: string;
  year: string;
  url: string;
};

const highlightAuthor = (authors: string) => {
  // Split authors by comma and handle "and" in the last part
  return authors.split(", ").map((author, index, array) => {
    const isLast = index === array.length - 1;
    const parts = author.split(" and ");
    
    const processedParts = parts.map(part => {
      if (part.includes("YT Lee")) {
        return `<span class="font-bold underline">YT Lee</span>`;
      }
      return part;
    });

    return isLast ? processedParts.join(" and ") : processedParts.join(", ");
  }).join(", ");
};

export function Publications({ publications }: { publications: readonly Publication[] }) {
  // Sort publications by year in descending order
  const sortedPublications = [...publications].sort((a, b) => 
    parseInt(b.year) - parseInt(a.year)
  );

  return (
    <Section>
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold">Publications</h2>
        <Button
          variant="ghost"
          size="sm"
          className="h-7 hover:bg-transparent hover:text-blue-500 -ml-2 text-xs text-muted-foreground"
          asChild
        >
          <a
            href="https://scholar.google.com/citations?user=YOUR_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <ScholarIcon className="h-4 w-4" />
            <span>Latest List</span>
          </a>
        </Button>
      </div>
      <div className="space-y-1 print:space-y-0">
        {sortedPublications.map((publication, index) => (
          <Card key={index} className="py-0.5 print:py-0">
            <CardHeader className="py-2">
              <div className="flex items-start gap-x-2 text-base">
                <div className="text-gray-500 min-w-[1.5rem] font-mono text-sm">
                  {index + 1}.
                </div>
                <div className="flex flex-col gap-0.5">
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold leading-tight hover:text-blue-500"
                  >
                    {publication.title}
                  </a>
                </div>
              </div>
            </CardHeader>
            <CardContent className="mt-1">
              <div 
                className="text-xs text-foreground/80 print:text-[10px] text-pretty"
                dangerouslySetInnerHTML={{ __html: highlightAuthor(publication.authors) }}
              />
              <div className="text-xs text-foreground/80 print:text-[10px] text-pretty">
                {publication.journal} ({publication.year})
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
} 