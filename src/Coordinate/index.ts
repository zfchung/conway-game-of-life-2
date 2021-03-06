export class Coordinate {
    private countOfLivingNeighbour: number = 0;
    private static rowSize: number = 6;
    private static columnSize: number = 6;

    constructor(private row: number, private column: number) {
    }

    public getId() {
        return this.row + "_" + this.column;
    }

    public static getCoordinateList(): Record<string, Coordinate> {
        let coordinateList: Record<string, Coordinate> = {};
        for(let i = 0 ; i < this.rowSize; i++){
            for(let j = 0; j < this.columnSize; j++){
                const coordinate = new Coordinate(i,j);
                coordinateList[coordinate.getId()] = coordinate;
            }
        }

        return coordinateList;
    }

    public getNeighbourCoordinateList() {
        let neighbourList = [];
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const neighbourRow = this.row + i;
                const neighbourColumn = this.column + j;
                if (
                    neighbourRow >= 0 &&
                    neighbourColumn >= 0 &&
                    (neighbourRow != this.row ||
                    neighbourColumn != this.column)
                ) {
                    neighbourList.push(neighbourRow + "_" + neighbourColumn);
                }
            }
        }

        return neighbourList;
    }

    public setCountOfLivingNeighbours(value: number) {
        this.countOfLivingNeighbour = value;
    }

    public getCountOfLivingNeighbours() {
        return this.countOfLivingNeighbour;
    }

    public static getRow() {
        return this.rowSize;
    }

}
