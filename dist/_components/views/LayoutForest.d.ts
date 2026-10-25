import type { GraphData } from "../../types";
export type Placed = {
    key: string;
    x: number;
    y: number;
    group: string[];
};
export declare function layoutForest(graph: GraphData): Placed[];
