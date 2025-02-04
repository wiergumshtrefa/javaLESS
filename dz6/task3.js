const prompt = require('prompt-sync')();

function displayCurrentTime() {
    const now = new Date(); // Получаем текущее время
    const hours = String(now.getHours()).padStart(2, '0'); // Часы
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Минуты
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Секунды

    const currentTime = `${hours}:${minutes}:${seconds}`; // Форматируем время
    console.log(currentTime); // Выводим время в консоль

  
    
}

// Функция для изменения времени на переданное количество часов
function changeTimeByHours(hoursToAdd) {
    const now = new Date(); // Получаем текущее время
    now.setHours(now.getHours() + hoursToAdd); // Изменяем часы
    return now; // Возвращаем новое время
}

// Вызываем функцию для отображения времени
displayCurrentTime();

// Обновляем время каждую секунду
setInterval(displayCurrentTime, 1000);

// Пример использования функции изменения времени
const newTime = changeTimeByHours(2); // Изменяем время на 2 часа
console.log(`Новое время: ${newTime.getHours()}:${newTime.getMinutes()}:${newTime.getSeconds()}`);