export type Resort = {
    name: string;
    nearestAirportName: string;
    nearestAirportCode: string;
    distanceFromAirportInMi: number;
    driveTimeInHrs: number;
    liftTicketPriceInDollars: {
        monday: number;
        tuesday: number;
        wednesday: number;
        thursday: number;
        friday: number;
        saturday: number;
        sunday: number;
    };
    verticalDropInFt: number;
    averageSnowfallInInches: number;
    skiableTerrainInAcres: number;
};

export function scoreResort(resort: Resort, directFlight: boolean, days: Day[]): number {
    let score: number = 0;
    score += resort.skiableTerrainInAcres / averagePrice(resort, days); 
    if(directFlight) {
        score *= 1.25
    }

    return score;

}

type Prices = Resort["liftTicketPriceInDollars"];
type Day = keyof Prices;

function averagePrice(resort: Resort , days: Day[]): number {
    const prices = resort.liftTicketPriceInDollars;

    return days.reduce((sum, day) => sum + prices[day], 0) / days.length;
}
