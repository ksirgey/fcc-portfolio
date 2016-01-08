/*
Return a new array that transforms the element's average altitude into their orbital periods.
The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
You can read about orbital periods on: https://en.wikipedia.org/wiki/Orbital_period
The values should be rounded to the nearest whole number. The body being orbited is Earth.
The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418.
*/

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    for (var prop in arr) {
        arr[prop].orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3)/GM));
        delete arr[prop].avgAlt;
    }
    return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
