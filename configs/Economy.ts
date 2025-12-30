import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const Economy = {
 storagePath: __dirname+"/databases/Economy.json",
 dailyCooldown: 60000 * 60 * 24, // Daily Cooldown, ms (24 Hours = 1 Day). Default: 24 Hours (60000 * 60 * 24) ms.
 workCooldown: 60000 * 60, // Work Cooldown, ms (1 Hour). Default: 1 Hour (60000 * 60) ms.
 weeklyCooldown: 60000 * 60 * 24 * 7, // Cooldown for Weekly Command (in ms). Default: 7 Days (60000 * 60 * 24 * 7) ms
 hourlyAmount: [1, 10],
 dailyAmount: [150, 250], // Daily Amount. Default: 100.
 weeklyAmount: [500, 750],
 monthlyAmount: [1500, 2500],
 yearlyAmount: [5000, 7500],
 workAmount: [5, 100], // Work Amount: first element is min value, second is max value (It also can be a Number). Default: [10, 50].
 sellingItemPercent: 75,
 savePurchasesHistory: true, // enable or disable saving the purchases history
 subtractOnBuy: true, // eanable or disable subtracting the item price when buying the item
 debug: true
}

export default Economy
