import { Star } from './star'; 

export interface Movie {
    id?: number;
    title: string;
    year: number;
    duration?: number;
    synopsis?: string;
    posterUri?: string;
    director?: Star;
    actors?: Star[];
}
