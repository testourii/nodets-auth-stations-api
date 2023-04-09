export interface Station {
    stationCode: string;
    station_id: number;
    num_bikes_available: number;
    num_bikes_available_types: { [key: string]: number }[];
    num_docks_available: number;
    is_installed: number;
    is_returning: number;
    is_renting: number;
    last_reported: number;
}
