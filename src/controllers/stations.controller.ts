
import { Request, Response, NextFunction } from 'express';
import StationsService from '@services/stations.service';
import { Station } from '@interfaces/stations.interface';


class StationsController {
    public stationsService = new StationsService();
    
    public getStations = async (req: Request, res: Response, next: NextFunction) => {
        try {
          const findAllStationsData: Station[] = await this.stationsService.getStations();
    
          res.status(200).json({ data: findAllStationsData, message: 'getStations' });
        } catch (error) {
          next(error);
        }
      };
}

export default StationsController;
