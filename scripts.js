// Inicializar el mapa de Leaflet
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
                name: "Estación de autobuses de Badajoz",
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
                name: "Talavera la Real",
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
                name: "Talavera la Real",
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
                name: "Guadajira",
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
                name: "Estación de autobuses de Olivenza",
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
                name: "Valverde de Leganés",
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
                name: "La Albuera",
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
                name: "Almendral",
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
                name: "Torre de Miguel Sesmero",
                coordinates: [38.61751, -6.79960],
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
                name: "Estación de tren de Badajoz",
                coordinates: [38.89090, -6.98176],
                departures: ["06:50", "07:17", "07:17", "11:56", "14:09","14:20","17:43","17:43","19:33","19:41"],
                arrivals: ["08:48","12:55", "13:34", "13:34", "16:05","17:26", "19:05", "21:01", "21:01", "21:28"],
                type: "train",
                departureDestinations: ["Alcázar de San Juan", "Madrid Chamartín", "Cáceres", "Villanueva De La Serena", "Entroncamento", "Puertollano", "Madrid Chamartin", "Cáceres", "Cabeza del Buey", "Entroncamento"],
                arrivalDestinations: ["Cabeza del Buey", "Entroncamento", "Madrid Chamartín", "Cáceres", "Puertollano","Entroncamento","Villanueva De La Serena", "Madrid Chamartín", "Cáceres","Alcázar de San Juan"],
                departureOperators: ["Renfe", "Renfe", "Renfe", "Renfe", "Comboios de Portugal", "Renfe", "Renfe", "Renfe", "Renfe", "Comboios de Portugal"],
                arrivalOperators: ["Renfe","Comboios de Portugal", "Renfe", "Renfe", "Renfe", "Comboios de Portugal", "Renfe", "Renfe", "Renfe", "Renfe", "Renfe"],
            },
            {
                name: "Estación de Elvas",
                coordinates: [38.89554, -7.14228],
                departures: ["05:45", "06:45", "07:45"],
                arrivals: ["06:00", "07:00", "08:00"],
                type: "train",
                departureDestinations: ["Ciudad O", "Ciudad P", "Ciudad Q"],
                arrivalDestinations: ["Ciudad R", "Ciudad S", "Ciudad T"],
                departureOperators: ["Operador O", "Operador P", "Operador Q"],
                arrivalOperators: ["Operador R", "Operador S", "Operador T"]
            },
            {
                name: "Estación de Guadiana",
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
                name: "Apeadero Montijo-El Molino",
                coordinates: [38.91402, -6.61825],
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
                .on('click', () => openModal(stop.name, stop.departures, stop.arrivals, stop.departureDestinations, stop.arrivalDestinations, stop.departureOperators, stop.arrivalOperators));
        });
        lineDiv.appendChild(stopsList);

        linesContainer.appendChild(lineDiv);
    });
}

function openModal(name, departures, arrivals, departureDestinations, arrivalDestinations, departureOperators, arrivalOperators) {
    const modal = document.getElementById('scheduleModal');
    const modalTitle = document.getElementById('modalTitle');
    const departuresTableBody = document.getElementById('departuresTableBody');
    const arrivalsTableBody = document.getElementById('arrivalsTableBody');

    modalTitle.textContent = name;
    departuresTableBody.innerHTML = "";
    arrivalsTableBody.innerHTML = "";

    // Crear filas para las salidas
    departures.forEach((departure, index) => {
        const destination = departureDestinations[index];
        const operator = departureOperators[index];
        const row = createTableRow(destination, departure, operator);
        departuresTableBody.appendChild(row);
    });

    // Crear filas para las llegadas
    arrivals.forEach((arrival, index) => {
        const destination = arrivalDestinations[index];
        const operator = arrivalOperators[index];
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
    if (event.target == modal) {
        closeModal();
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});

let infoOpen = true;

document.getElementById('toggleLines').addEventListener('click', function() {
    const infoContainer = document.getElementById('infoContainer');
    const arrowIcon = document.getElementById('arrowIcon');

    if (infoOpen) {
        infoContainer.style.width = '33.333%';
        arrowIcon.innerHTML = '&#9654;';
    } else {
        infoContainer.style.width = 'auto';
        arrowIcon.innerHTML = '&#9664;';
    }
    infoOpen = !infoOpen;
});

displayLines();
