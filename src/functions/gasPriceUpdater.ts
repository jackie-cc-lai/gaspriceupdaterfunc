import { app, InvocationContext, Timer } from "@azure/functions";

export async function gasPriceUpdater(myTimer: Timer, context: InvocationContext): Promise<void> {
    context.log('Timer function processed request.');
}

app.timer('j-cc-l-gas-station-price-updater', {
    schedule: '0 0 1 * * *',
    handler: gasPriceUpdater
});
