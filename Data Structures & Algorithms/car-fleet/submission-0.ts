class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {


       let fleets = 0;
       let maxTime = 0;

        const cars = position.map((pos,i)=>({
            pos,
            time: (target - pos) / speed[i]
        }));

        cars.sort((a,b) => b.pos - a.pos);

        for(const car of cars){
            if(car.time > maxTime){
                fleets++;
                maxTime = car.time;
            }
        }

        return fleets

    }
}
