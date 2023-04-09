import { prop, modelOptions, getModelForClass } from '@typegoose/typegoose';

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})
export class Station {
  @prop({ type: String, required: true, unique: true })
  stationCode: string;

  @prop({ type: String, required: true, unique: true })
  station_id: number;

  @prop()
  num_bikes_available: number;

  @prop()
  num_bikes_available_types: Array<{mechanical: number, ebike: number}>;

  @prop()
  num_docks_available: number;

  @prop()
  is_installed: number;

  @prop()
  is_returning: number;

  @prop()
  is_renting: number;

  @prop()
  last_reported: number;
}

const StationModel = getModelForClass(Station);
export default StationModel;
