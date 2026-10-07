class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {


        let left = 0;
        let maximumProfit = 0;
        for(let right = 1; right < prices.length ; right++){

            const profit = prices[right] - prices[left];

            maximumProfit = Math.max(profit,maximumProfit)


            if(prices[right] < prices[left]){
                left = right;
            };

        }

        return maximumProfit;
    }
}
