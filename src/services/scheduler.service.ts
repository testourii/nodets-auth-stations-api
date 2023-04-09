import  StationsService  from './stations.service';
import { CRON_TIME } from '@config';


export function startScheduling() {
    const stationsService = new StationsService();
    setInterval(async () => {
        await stationsService.fetchAndSaveStations();
    },Number(CRON_TIME));
}
