import { Status } from "../enum/status.enum";

export interface Server {
    id: number;
    ipAddres: string;
    name: string;
    memory: string;
    type: string;
    imageUrl: string;
    status: Status;
}