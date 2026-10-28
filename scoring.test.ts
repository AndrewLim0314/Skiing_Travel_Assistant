import { expect, test } from 'vitest'
import { scoreResort } from './scoring.ts'

test('scoreResort returns a number', () => {
    const resort = {
        name: "Test Resort",
        nearestAirportName: "Test Airport",
        nearestAirportCode: "TST",
        distanceFromAirportInMi: 10,
        driveTimeInHrs: 0.5,
        liftTicketPriceInDollars: {
            monday: 100,
            tuesday: 100,
            wednesday: 100,
            thursday: 100,
            friday: 100,
            saturday: 100,
            sunday: 100
        },
        verticalDropInFt: 2000,
        averageSnowfallInInches: 50,
        skiableTerrainInAcres: 500
    };
    
    const score = scoreResort(resort, false, ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]);
    expect(typeof score).toBe('number');
    expect(score).toBe(5);
});