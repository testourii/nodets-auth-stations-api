import {Worker } from 'bullmq';
import StationModel from '@/models/stations.model';

const worker = new Worker('stations', async job => {
    if (job.name === 'save_station') {
        const station = new StationModel(job.data.station);
        await station.save();
    }
  });