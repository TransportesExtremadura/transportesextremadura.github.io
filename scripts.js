const map = L.map('map').setView([38.6511, -6.8562], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const busIcon = L.icon({
    iconUrl: 'bus.png',
    iconSize: [32, 45],
    iconAnchor: [16, 45],
    popupAnchor: [0, -45]
});

const trainIcon = L.icon({
    iconUrl: 'train.png',
    iconSize: [32, 45],
    iconAnchor: [16, 45],
    popupAnchor: [0, -45]
});

const lines = [
    {
        name: "Línea 1 - Autobús",
        schedule: "06:00 - 22:00",
        stops: [
            {
                name: "ESTACIÓN DE AUTOBUSES DE BADAJOZ",
                coordinates: [38.86668, -6.97475],
                departures: ["06:00", "07:00", "08:00"],
                arrivals: ["06:15", "07:15", "08:15"],
                type: "bus",
                departureDestinations: ["Ciudad X", "Ciudad Y", "Ciudad Z"],
                arrivalDestinations: ["Ciudad A", "Ciudad B", "Ciudad C"],
                departureOperators: ["Operador 1", "Operador 2", "Operador 3"],
                arrivalOperators: ["Operador A", "Operador B", "Operador C"]
            },
            {
                name: "TALAVERA LA REAL",
                coordinates: [38.87990, -6.77253],
                departures: ["06:30", "07:30", "08:30"],
                arrivals: ["06:45", "07:45", "08:45"],
                type: "bus",
                departureDestinations: ["Ciudad D", "Ciudad E", "Ciudad F"],
                arrivalDestinations: ["Ciudad G", "Ciudad H", "Ciudad I"],
                departureOperators: ["Operador 4", "Operador 5", "Operador 6"],
                arrivalOperators: ["Operador D", "Operador E", "Operador F"]
            },
            {
                name: "GUADAJIRA",
                coordinates: [38.85253, -6.68242],
                departures: ["06:30", "07:30", "08:30"],
                arrivals: ["06:45", "07:45", "08:45"],
                type: "bus",
                departureDestinations: ["Ciudad D", "Ciudad E", "Ciudad F"],
                arrivalDestinations: ["Ciudad G", "Ciudad H", "Ciudad I"],
                departureOperators: ["Operador 4", "Operador 5", "Operador 6"],
                arrivalOperators: ["Operador D", "Operador E", "Operador F"]
            },
            {
                name: "ESTACIÓN DE AUTOBUSES DE OLIVENZA",
                coordinates: [38.68515, -7.09754],
                departures: ["06:30", "07:30", "08:30"],
                arrivals: ["06:45", "07:45", "08:45"],
                type: "bus",
                departureDestinations: ["Ciudad D", "Ciudad E", "Ciudad F"],
                arrivalDestinations: ["Ciudad G", "Ciudad H", "Ciudad I"],
                departureOperators: ["Operador 4", "Operador 5", "Operador 6"],
                arrivalOperators: ["Operador D", "Operador E", "Operador F"]
            },
            {
                name: "ESTACIÓN DE AUTOBUSES DE ELVAS",
                coordinates: [38.87488, -7.16075],
                departures: ["06:00", "07:00", "08:00"],
                arrivals: ["06:15", "07:15", "08:15"],
                type: "bus",
                departureDestinations: ["Ciudad X", "Ciudad Y", "Ciudad Z"],
                arrivalDestinations: ["Ciudad A", "Ciudad B", "Ciudad C"],
                departureOperators: ["Operador 1", "Operador 2", "Operador 3"],
                arrivalOperators: ["Operador A", "Operador B", "Operador C"]
            },
            {
                name: "VALVERDE DE LEGANÉS",
                coordinates: [38.67013, -6.97909],
                departures: ["06:30", "07:30", "08:30"],
                arrivals: ["06:45", "07:45", "08:45"],
                type: "bus",
                departureDestinations: ["Ciudad D", "Ciudad E", "Ciudad F"],
                arrivalDestinations: ["Ciudad G", "Ciudad H", "Ciudad I"],
                departureOperators: ["Operador 4", "Operador 5", "Operador 6"],
                arrivalOperators: ["Operador D", "Operador E", "Operador F"]
            },
            {
                name: "LA ALBUERA",
                coordinates: [38.71799, -6.82548],
                departures: ["06:30", "07:30", "08:30"],
                arrivals: ["06:45", "07:45", "08:45"],
                type: "bus",
                departureDestinations: ["Ciudad D", "Ciudad E", "Ciudad F"],
                arrivalDestinations: ["Ciudad G", "Ciudad H", "Ciudad I"],
                departureOperators: ["Operador 4", "Operador 5", "Operador 6"],
                arrivalOperators: ["Operador D", "Operador E", "Operador F"]
            },
            {
                name: "ALMENDRAL",
                coordinates: [38.61562, -6.81818],
                departures: ["06:30", "07:30", "08:30"],
                arrivals: ["06:45", "07:45", "08:45"],
                type: "bus",
                departureDestinations: ["Ciudad D", "Ciudad E", "Ciudad F"],
                arrivalDestinations: ["Ciudad G", "Ciudad H", "Ciudad I"],
                departureOperators: ["Operador 4", "Operador 5", "Operador 6"],
                arrivalOperators: ["Operador D", "Operador E", "Operador F"]
            },
            {
                name: "TORRE DE MIGUEL SESMERO",
                coordinates: [38.61751, -6.79960],
                departures: ["06:30", "07:30", "08:30"],
                arrivals: ["06:45", "07:45", "08:45"],
                type: "bus",
                departureDestinations: ["Ciudad D", "Ciudad E", "Ciudad F"],
                arrivalDestinations: ["Ciudad G", "Ciudad H", "Ciudad I"],
                departureOperators: ["Operador 4", "Operador 5", "Operador 6"],
                arrivalOperators: ["Operador D", "Operador E", "Operador F"]
            },
            {
                name: "SAN BENITO DE LA CONTIENDA",
                coordinates: [38.63441, -7.15926],
                departures: ["06:30", "07:30", "08:30"],
                arrivals: ["06:45", "07:45", "08:45"],
                type: "bus",
                departureDestinations: ["Ciudad D", "Ciudad E", "Ciudad F"],
                arrivalDestinations: ["Ciudad G", "Ciudad H", "Ciudad I"],
                departureOperators: ["Operador 4", "Operador 5", "Operador 6"],
                arrivalOperators: ["Operador D", "Operador E", "Operador F"]
            },
            {
                name: "ESTACIÓN DE AUTOBUSES DE ALCONCHEL",
                coordinates: [38.51612, -7.06812],
                departures: ["06:30", "07:30", "08:30"],
                arrivals: ["06:45", "07:45", "08:45"],
                type: "bus",
                departureDestinations: ["Ciudad D", "Ciudad E", "Ciudad F"],
                arrivalDestinations: ["Ciudad G", "Ciudad H", "Ciudad I"],
                departureOperators: ["Operador 4", "Operador 5", "Operador 6"],
                arrivalOperators: ["Operador D", "Operador E", "Operador F"]
            },
            {
                name: "CHELES",
                coordinates: [38.51114, -7.27950],
                departures: ["06:30", "07:30", "08:30"],
                arrivals: ["06:45", "07:45", "08:45"],
                type: "bus",
                departureDestinations: ["Ciudad D", "Ciudad E", "Ciudad F"],
                arrivalDestinations: ["Ciudad G", "Ciudad H", "Ciudad I"],
                departureOperators: ["Operador 4", "Operador 5", "Operador 6"],
                arrivalOperators: ["Operador D", "Operador E", "Operador F"]
            },
            {
                name: "VILLANUEVA DEL FRESNO",
                coordinates: [38.37588, -7.16887],
                departures: ["06:30", "07:30", "08:30"],
                arrivals: ["06:45", "07:45", "08:45"],
                type: "bus",
                departureDestinations: ["Ciudad D", "Ciudad E", "Ciudad F"],
                arrivalDestinations: ["Ciudad G", "Ciudad H", "Ciudad I"],
                departureOperators: ["Operador 4", "Operador 5", "Operador 6"],
                arrivalOperators: ["Operador D", "Operador E", "Operador F"]
            },
            {
                name: "BARCARROTA",
                coordinates: [38.51801, -6.85193],
                departures: ["06:30", "07:30", "08:30"],
                arrivals: ["06:45", "07:45", "08:45"],
                type: "bus",
                departureDestinations: ["Ciudad D", "Ciudad E", "Ciudad F"],
                arrivalDestinations: ["Ciudad G", "Ciudad H", "Ciudad I"],
                departureOperators: ["Operador 4", "Operador 5", "Operador 6"],
                arrivalOperators: ["Operador D", "Operador E", "Operador F"]
            },
            {
                name: "SALVALEÓN",
                coordinates: [38.51286, -6.78463],
                departures: ["06:30", "07:30", "08:30"],
                arrivals: ["06:45", "07:45", "08:45"],
                type: "bus",
                departureDestinations: ["Ciudad D", "Ciudad E", "Ciudad F"],
                arrivalDestinations: ["Ciudad G", "Ciudad H", "Ciudad I"],
                departureOperators: ["Operador 4", "Operador 5", "Operador 6"],
                arrivalOperators: ["Operador D", "Operador E", "Operador F"]
            },
            {
                name: "SALVATIERRA DE LOS BARROS",
                coordinates: [38.49196, -6.68144],
                departures: ["06:30", "07:30", "08:30"],
                arrivals: ["06:45", "07:45", "08:45"],
                type: "bus",
                departureDestinations: ["Ciudad D", "Ciudad E", "Ciudad F"],
                arrivalDestinations: ["Ciudad G", "Ciudad H", "Ciudad I"],
                departureOperators: ["Operador 4", "Operador 5", "Operador 6"],
                arrivalOperators: ["Operador D", "Operador E", "Operador F"]
            },
            {
                name: "VALLE DE MATAMOROS",
                coordinates: [38.37975, -6.80873],
                departures: ["06:30", "07:30", "08:30"],
                arrivals: ["06:45", "07:45", "08:45"],
                type: "bus",
                departureDestinations: ["Ciudad D", "Ciudad E", "Ciudad F"],
                arrivalDestinations: ["Ciudad G", "Ciudad H", "Ciudad I"],
                departureOperators: ["Operador 4", "Operador 5", "Operador 6"],
                arrivalOperators: ["Operador D", "Operador E", "Operador F"]
            },
            {
                name: "VALLE DE MATAMOROS",
                coordinates: [38.37975, -6.80873],
                departures: ["06:30", "07:30", "08:30"],
                arrivals: ["06:45", "07:45", "08:45"],
                type: "bus",
                departureDestinations: ["Ciudad D", "Ciudad E", "Ciudad F"],
                arrivalDestinations: ["Ciudad G", "Ciudad H", "Ciudad I"],
                departureOperators: ["Operador 4", "Operador 5", "Operador 6"],
                arrivalOperators: ["Operador D", "Operador E", "Operador F"]
            },
            {
                name: "VALLE DE SANTA ANA",
                coordinates: [38.36460, -6.78753],
                departures: ["06:30", "07:30", "08:30"],
                arrivals: ["06:45", "07:45", "08:45"],
                type: "bus",
                departureDestinations: ["Ciudad D", "Ciudad E", "Ciudad F"],
                arrivalDestinations: ["Ciudad G", "Ciudad H", "Ciudad I"],
                departureOperators: ["Operador 4", "Operador 5", "Operador 6"],
                arrivalOperators: ["Operador D", "Operador E", "Operador F"]
            },
            {
                name: "ESTACIÓN DE AUTOBUSES DE JEREZ DE LOS CABALLEROS",
                coordinates: [38.31996, -6.77918],
                departures: ["06:30", "07:30", "08:30"],
                arrivals: ["06:45", "07:45", "08:45"],
                type: "bus",
                departureDestinations: ["Ciudad D", "Ciudad E", "Ciudad F"],
                arrivalDestinations: ["Ciudad G", "Ciudad H", "Ciudad I"],
                departureOperators: ["Operador 4", "Operador 5", "Operador 6"],
                arrivalOperators: ["Operador D", "Operador E", "Operador F"]
            },
            {
                name: "VILLAR DEL REY",
                coordinates: [39.12999, -6.85030],
                departures: ["06:30", "07:30", "08:30"],
                arrivals: ["06:45", "07:45", "08:45"],
                type: "bus",
                departureDestinations: ["Ciudad D", "Ciudad E", "Ciudad F"],
                arrivalDestinations: ["Ciudad G", "Ciudad H", "Ciudad I"],
                departureOperators: ["Operador 4", "Operador 5", "Operador 6"],
                arrivalOperators: ["Operador D", "Operador E", "Operador F"]
            },
            {
                name: "ESTACIÓN DE AUTOBUSES DE ALBURQUERQUE",
                coordinates: [39.22416, -6.99892],
                departures: ["06:30", "07:30", "08:30"],
                arrivals: ["06:45", "07:45", "08:45"],
                type: "bus",
                departureDestinations: ["Ciudad D", "Ciudad E", "Ciudad F"],
                arrivalDestinations: ["Ciudad G", "Ciudad H", "Ciudad I"],
                departureOperators: ["Operador 4", "Operador 5", "Operador 6"],
                arrivalOperators: ["Operador D", "Operador E", "Operador F"]
            },
            {
                name: "GÉVORA",
                coordinates: [38.91940, -6.94382],
                departures: ["06:30", "07:30", "08:30"],
                arrivals: ["06:45", "07:45", "08:45"],
                type: "bus",
                departureDestinations: ["Ciudad D", "Ciudad E", "Ciudad F"],
                arrivalDestinations: ["Ciudad G", "Ciudad H", "Ciudad I"],
                departureOperators: ["Operador 4", "Operador 5", "Operador 6"],
                arrivalOperators: ["Operador D", "Operador E", "Operador F"]
            },
            {
                name: "CUARTEL DE MENACHO BÓTOA",
                coordinates: [39.02451, -6.90319],
                departures: ["06:30", "07:30", "08:30"],
                arrivals: ["06:45", "07:45", "08:45"],
                type: "bus",
                departureDestinations: ["Ciudad D", "Ciudad E", "Ciudad F"],
                arrivalDestinations: ["Ciudad G", "Ciudad H", "Ciudad I"],
                departureOperators: ["Operador 4", "Operador 5", "Operador 6"],
                arrivalOperators: ["Operador D", "Operador E", "Operador F"]
            },
            {
                name: "VALDEBÓTOA",
                coordinates: [38.96778, -6.92484],
                departures: ["06:30", "07:30", "08:30"],
                arrivals: ["06:45", "07:45", "08:45"],
                type: "bus",
                departureDestinations: ["Ciudad D", "Ciudad E", "Ciudad F"],
                arrivalDestinations: ["Ciudad G", "Ciudad H", "Ciudad I"],
                departureOperators: ["Operador 4", "Operador 5", "Operador 6"],
                arrivalOperators: ["Operador D", "Operador E", "Operador F"]
            },
            {
                name: "SAN VICENTE DE ALCÁNTARA",
                coordinates: [39.36229, -7.13810],
                departures: ["06:30", "07:30", "08:30"],
                arrivals: ["06:45", "07:45", "08:45"],
                type: "bus",
                departureDestinations: ["Ciudad D", "Ciudad E", "Ciudad F"],
                arrivalDestinations: ["Ciudad G", "Ciudad H", "Ciudad I"],
                departureOperators: ["Operador 4", "Operador 5", "Operador 6"],
                arrivalOperators: ["Operador D", "Operador E", "Operador F"]
            },
            {
                name: "LA CODOSERA",
                coordinates: [39.20815, -7.17134],
                departures: ["06:30", "07:30", "08:30"],
                arrivals: ["06:45", "07:45", "08:45"],
                type: "bus",
                departureDestinations: ["Ciudad D", "Ciudad E", "Ciudad F"],
                arrivalDestinations: ["Ciudad G", "Ciudad H", "Ciudad I"],
                departureOperators: ["Operador 4", "Operador 5", "Operador 6"],
                arrivalOperators: ["Operador D", "Operador E", "Operador F"]
            }
        ]
    },
    {
        name: "Línea 2 - Tren",
        schedule: "05:30 - 23:00",
        stops: [
            {
                name: "ESTACIÓN DE TRENES DE BADAJOZ",
                coordinates: [38.89090, -6.98176],
                departures: ["06:50", "07:17", "07:17", "11:56", "14:09","14:20","17:43","17:43","19:33","19:41"],
                arrivals: ["08:48","12:55", "13:34", "13:34", "16:05","17:26", "19:05", "21:01", "21:01", "21:28"],
                type: "train",
                departureDestinations: ["Alcázar de San Juan", "Madrid Chamartín", "Cáceres", "Villanueva De La Serena", "Entroncamento", "Puertollano", "Madrid Chamartin", "Cáceres", "Cabeza del Buey", "Entroncamento"],
                arrivalDestinations: ["Cabeza del Buey", "Entroncamento", "Madrid Chamartín", "Cáceres", "Puertollano","Entroncamento","Villanueva De La Serena", "Madrid Chamartín", "Cáceres","Alcázar de San Juan"],
                departureOperators: ["Renfe (Media Distancia)", "Renfe (Alvia)", "Renfe (MD compartido con Alvia)", "Renfe (Regional)", "Comboios de Portugal (Regional-Internacional)", "Renfe (Regional Exprés)", "Renfe (Alvia)", "Renfe (MD compartido con Alvia)", "Renfe (Regional Exprés)", "Comboios de Portugal (Regional-Internacional)"],
                arrivalOperators: ["Renfe (Regional Exprés)","Comboios de Portugal (Regional-Internacional)", "Renfe (Alvia)", "Renfe (MD compartido con Alvia)", "Renfe (Regional Exprés)", "Comboios de Portugal (Regional-Internacional)", "Renfe (Regional)", "Renfe (Alvia)", "Renfe (MD compartido con Alvia)", "Renfe (Media Distancia)", "Renfe"],
            },
            {
                name: "ESTACIÓN DE TRENES DE ELVAS",
                coordinates: [38.89554, -7.14228],
                departures: ["PT: 11:40 / ES: 12:40", "PT: 13:25 / ES: 14:25", "PT: 16:12 / ES: 17:12", "PT: 18:57 / ES: 19:57"],
                arrivals: ["PT: 11:39 / ES: 12:39", "PT: 13:24 / ES: 14:24", "PT: 16:11 / ES: 17:11", "PT: 18:56 / ES: 19:56"],
                type: "train",
                departureDestinations: ["Badajoz", "Entroncamento", "Badajoz", "Entroncamento"],
                arrivalDestinations: ["Entroncamento", "Badajoz", "Entroncamento", "Badajoz"],
                departureOperators: ["Comboios de Portugal (Regional-Internacional)", "Comboios de Portugal (Regional-Internacional)", "Comboios de Portugal (Regional-Internacional)","Comboios de Portugal (Regional-Internacional)"],
                arrivalOperators: ["Comboios de Portugal (Regional-Internacional)", "Comboios de Portugal (Regional-Internacional)", "Comboios de Portugal (Regional-Internacional)","Comboios de Portugal (Regional-Internacional)"],
            },
            {
                name: "ESTACIÓN DE TRENES DE GUADIANA",
                coordinates: [38.92189, -6.69092],
                departures: ["05:45", "06:45", "07:45"],
                arrivals: ["06:00", "07:00", "08:00"],
                type: "train",
                departureDestinations: ["Ciudad O", "Ciudad P", "Ciudad Q"],
                arrivalDestinations: ["Ciudad R", "Ciudad S", "Ciudad T"],
                departureOperators: ["Operador O", "Operador P", "Operador Q"],
                arrivalOperators: ["Operador R", "Operador S", "Operador T"]
            },
            {
                name: "APEADERO MONTIJO-EL MOLINO",
                coordinates: [38.91402, -6.61825],
                departures: ["05:45", "06:45", "07:45"],
                arrivals: ["06:00", "07:00", "08:00"],
                type: "train",
                departureDestinations: ["Ciudad O", "Ciudad P", "Ciudad Q"],
                arrivalDestinations: ["Ciudad R", "Ciudad S", "Ciudad T"],
                departureOperators: ["Operador O", "Operador P", "Operador Q"],
                arrivalOperators: ["Operador R", "Operador S", "Operador T"]
            },
            {
                name: "ESTACIÓN DE TRENES DE MONTIJO",
                coordinates: [38.91353, -6.59860],
                departures: ["05:45", "06:45", "07:45"],
                arrivals: ["06:00", "07:00", "08:00"],
                type: "train",
                departureDestinations: ["Ciudad O", "Ciudad P", "Ciudad Q"],
                arrivalDestinations: ["Ciudad R", "Ciudad S", "Ciudad T"],
                departureOperators: ["Operador O", "Operador P", "Operador Q"],
                arrivalOperators: ["Operador R", "Operador S", "Operador T"]
            },
            {
                name: "APEADERO GARROVILLA-LAS VEGAS",
                coordinates: [38.91540, -6.47725],
                departures: ["05:45", "06:45", "07:45"],
                arrivals: ["06:00", "07:00", "08:00"],
                type: "train",
                departureDestinations: ["Ciudad O", "Ciudad P", "Ciudad Q"],
                arrivalDestinations: ["Ciudad R", "Ciudad S", "Ciudad T"],
                departureOperators: ["Operador O", "Operador P", "Operador Q"],
                arrivalOperators: ["Operador R", "Operador S", "Operador T"]
            },
            {
                name: "ESTACIÓN DE TRENES DE MÉRIDA",
                coordinates: [38.92153, -6.34287],
                departures: ["05:45", "06:45", "07:45"],
                arrivals: ["06:00", "07:00", "08:00"],
                type: "train",
                departureDestinations: ["Ciudad O", "Ciudad P", "Ciudad Q"],
                arrivalDestinations: ["Ciudad R", "Ciudad S", "Ciudad T"],
                departureOperators: ["Operador O", "Operador P", "Operador Q"],
                arrivalOperators: ["Operador R", "Operador S", "Operador T"]
            },
            {
                name: "ESTACIÓN DE TRENES DE CALAMONTE",
                coordinates: [38.92153, -6.34287],
                departures: ["05:45", "06:45", "07:45"],
                arrivals: ["06:00", "07:00", "08:00"],
                type: "train",
                departureDestinations: ["Ciudad O", "Ciudad P", "Ciudad Q"],
                arrivalDestinations: ["Ciudad R", "Ciudad S", "Ciudad T"],
                departureOperators: ["Operador O", "Operador P", "Operador Q"],
                arrivalOperators: ["Operador R", "Operador S", "Operador T"]
            },
            {
                name: "ESTACIÓN DE TRENES DE ALMENDRALEJO",
                coordinates: [38.68468, -6.39953],
                departures: ["05:45", "06:45", "07:45"],
                arrivals: ["06:00", "07:00", "08:00"],
                type: "train",
                departureDestinations: ["Ciudad O", "Ciudad P", "Ciudad Q"],
                arrivalDestinations: ["Ciudad R", "Ciudad S", "Ciudad T"],
                departureOperators: ["Operador O", "Operador P", "Operador Q"],
                arrivalOperators: ["Operador R", "Operador S", "Operador T"]
            },
            {
                name: "ESTACIÓN DE TRENES DE VILLAFRANCA DE LOS BARROS",
                coordinates: [38.5644, -6.3522],
                departures: ["05:45", "06:45", "07:45"],
                arrivals: ["06:00", "07:00", "08:00"],
                type: "train",
                departureDestinations: ["Ciudad O", "Ciudad P", "Ciudad Q"],
                arrivalDestinations: ["Ciudad R", "Ciudad S", "Ciudad T"],
                departureOperators: ["Operador O", "Operador P", "Operador Q"],
                arrivalOperators: ["Operador R", "Operador S", "Operador T"]
            },
            {
                name: "ESTACIÓN DE TRENES DE LOS SANTOS DE MAIMONA",
                coordinates: [38.44971, -6.36150],
                departures: ["05:45", "06:45", "07:45"],
                arrivals: ["06:00", "07:00", "08:00"],
                type: "train",
                departureDestinations: ["Ciudad O", "Ciudad P", "Ciudad Q"],
                arrivalDestinations: ["Ciudad R", "Ciudad S", "Ciudad T"],
                departureOperators: ["Operador O", "Operador P", "Operador Q"],
                arrivalOperators: ["Operador R", "Operador S", "Operador T"]
            },
            {
                name: "APEADERO ZAFRA FERIA",
                coordinates: [38.42445, -6.40976],
                departures: ["05:45", "06:45", "07:45"],
                arrivals: ["06:00", "07:00", "08:00"],
                type: "train",
                departureDestinations: ["Ciudad O", "Ciudad P", "Ciudad Q"],
                arrivalDestinations: ["Ciudad R", "Ciudad S", "Ciudad T"],
                departureOperators: ["Operador O", "Operador P", "Operador Q"],
                arrivalOperators: ["Operador R", "Operador S", "Operador T"]
            },
            {
                name: "ESTACIÓN DE TRENES DE ZAFRA",
                coordinates: [38.4140, -6.4051],
                departures: ["05:45", "06:45", "07:45"],
                arrivals: ["06:00", "07:00", "08:00"],
                type: "train",
                departureDestinations: ["Ciudad O", "Ciudad P", "Ciudad Q"],
                arrivalDestinations: ["Ciudad R", "Ciudad S", "Ciudad T"],
                departureOperators: ["Operador O", "Operador P", "Operador Q"],
                arrivalOperators: ["Operador R", "Operador S", "Operador T"]
            }
        ]
    }
];

function createTableRow(destination, time, operator) {
    const row = document.createElement('tr');
    const destinationCell = document.createElement('td');
    destinationCell.textContent = destination;
    const timeCell = document.createElement('td');
    timeCell.textContent = time;
    const operatorCell = document.createElement('td');
    operatorCell.textContent = operator;

    row.appendChild(destinationCell);
    row.appendChild(timeCell);
    row.appendChild(operatorCell);
    return row;
}

function displayLines() {
    const linesContainer = document.getElementById('lines');
    lines.forEach(line => {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'line';

        const lineTitle = document.createElement('h3');
        lineTitle.textContent = line.name;
        lineDiv.appendChild(lineTitle);

        const lineSchedule = document.createElement('p');
        lineSchedule.textContent = `Horario: ${line.schedule}`;
        lineDiv.appendChild(lineSchedule);

        const stopsList = document.createElement('ul');
        line.stops.forEach(stop => {
            const stopItem = document.createElement('li');
            stopItem.textContent = stop.name;
            stopsList.appendChild(stopItem);

            const icon = stop.type === "bus" ? busIcon : trainIcon;
            L.marker(stop.coordinates, { icon: icon })
                .addTo(map)
                .on('click', () => openModal(stop));
        });
        lineDiv.appendChild(stopsList);

        linesContainer.appendChild(lineDiv);
    });
}

function openModal(stop) {
    const modal = document.getElementById('scheduleModal');
    const modalTitle = document.getElementById('modalTitle');
    const departuresTableBody = document.getElementById('departuresTableBody');
    const arrivalsTableBody = document.getElementById('arrivalsTableBody');

    modalTitle.textContent = stop.name;
    departuresTableBody.innerHTML = "";
    arrivalsTableBody.innerHTML = "";

    // Crear filas para las salidas
    stop.departures.forEach((departure, index) => {
        const destination = stop.departureDestinations[index];
        const operator = stop.departureOperators[index];
        const row = createTableRow(destination, departure, operator);
        departuresTableBody.appendChild(row);
    });

    // Crear filas para las llegadas
    stop.arrivals.forEach((arrival, index) => {
        const destination = stop.arrivalDestinations[index];
        const operator = stop.arrivalOperators[index];
        const row = createTableRow(destination, arrival, operator);
        arrivalsTableBody.appendChild(row);
    });

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('scheduleModal');
    modal.style.display = "none";
}

document.querySelector('.close').addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
    const modal = document.getElementById('scheduleModal');
    if (event.target === modal) {
        closeModal();
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});

let infoOpen = false;

document.getElementById('toggleLines').addEventListener('click', function() {
    const infoContainer = document.getElementById('infoContainer');
    const arrowIcon = document.getElementById('arrowIcon');

    if (infoOpen) {
        infoContainer.style.transform = 'translateX(0)';
        arrowIcon.innerHTML = '&#9658;';
        document.getElementById('map').style.width = 'calc(100% - 300px)';
    } else {
        infoContainer.style.transform = 'translateX(100%)';
        arrowIcon.innerHTML = '&#9668;';
        document.getElementById('map').style.width = '100%';
    }
    infoOpen = !infoOpen;
});

displayLines();

// Toggle schedule sections
document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
