import { Forecast } from "./forecast";
import { Location } from "./location";

export interface Response {
    location: Location,
    current: any,
    forecast: Forecast
}