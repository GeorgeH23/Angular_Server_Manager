import { Server } from "./server";
import { ServerList } from "./server-list";

export interface CustomResponse {
    timeStamp: Date;
    statusCode: number;
    status: string;
    reason: string;
    message: string;
    developerMessage: string;
    data: { servers?: ServerList, server?: Server };
}