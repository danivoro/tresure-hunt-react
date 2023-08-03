const nums: number[] = [
    34, 21, 32, 41, 25, 14, 42, 43, 14, 31, 54, 45, 52, 42, 23, 33, 15, 51, 31,
    35, 21, 52, 33, 13, 23,
];

function createMap() {
    const treasureMap: [number[], number[], number[], number[], number[]] = [
        nums.slice(0, -20),
        nums.slice(5, -15),
        nums.slice(10, -10),
        nums.slice(15, -5),
        nums.slice(20),
    ];
    return treasureMap;
}

export { createMap };
