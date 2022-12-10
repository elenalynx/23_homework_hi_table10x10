// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

const numberFrom = 1;
const numberTo = 100;
const numberOfColumns = 10;

const tbody = document.querySelector('tbody');

/**
 * @param {number} numberFrom
 * @param {number} numberTo
 * @param {number} numberOfColumns
 */
function fillTable(numberFrom, numberTo, numberOfColumns) {
    for (let i = numberFrom; i <= numberTo; ) {
        const row = document.createElement('tr');
        tbody.appendChild(row);

        for (let a = 1; a <= numberOfColumns; a++) {
            if (i > numberTo) break;
            const col = document.createElement('td');
            col.textContent = `${i}`;
            row.appendChild(col);
            i++;
        }
    }
}

fillTable(numberFrom, numberTo, numberOfColumns);


