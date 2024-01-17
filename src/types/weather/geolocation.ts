export type LocationObj = {
    name: string;
    local_names?: Record<string, string>;
    lat: number;
    lon: number;
    country: string;
    state: string;
};

export type LocationsType = LocationObj[] | [];