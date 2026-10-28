import { scoreResort } from './scoring.ts'
import resorts from './resorts.json' with  { type: "json" } ;

type ScoredResort = {
    name: string;
    score: number;
}

const scoredResorts: ScoredResort[] = resorts.map((resort) => {
    const score = scoreResort(resort, true, ["monday", "tuesday", "wednesday"]);
    return {
        name : resort.name,
        score : score
    };
});

scoredResorts.sort((a, b) => b.score - a.score);

console.log(scoredResorts);