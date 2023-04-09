import axios from 'axios';
import { Queue } from 'bullmq';
import { HttpException } from '@exceptions/HttpException';
import StationModel from '@models/stations.model'
import { Station } from '@interfaces/stations.interface';
import { STATIONS_STATUS_API_URL } from '@config';


class StationService {
    private queue: Queue;
    public station = StationModel;

    constructor() {
        this.queue = new Queue('stations', { connection: { host: '127.0.0.1', port: 6379 } });
    }

    public async fetchAndSaveStations() {
        try {
            const { data } = await axios.get(STATIONS_STATUS_API_URL);
            for (const station of data.data.stations) {
                await this.queue.add('save_station', {
                    station: {
                        stationCode: station.stationCode,
                        station_id: station.station_id,
                        num_bikes_available: station.num_bikes_available,
                        num_bikes_available_types: station.num_bikes_available_types,
                        num_docks_available: station.num_docks_available,
                        is_installed: station.is_installed,
                        is_returning: station.is_returning,
                        is_renting: station.is_renting,
                        last_reported: station.last_reported
                    }
                });
            }
        } catch (error) {
            throw new HttpException(500, error.message);
        }
    }

    public async getStations(): Promise<Station[]> {
        const stations: Station[] = await StationModel.find();
        return stations;
    }
}
export default StationService;
