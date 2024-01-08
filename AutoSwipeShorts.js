console.log("AutoSwipeShorts Запускается... [RU YOUTUBE]");
    var ViewCounter = actual_check = actual_progress = newactual_progress = 0;
    var ASS = 1000000;
    for (let i = 0; i <= ASS; i++) {
    var ShTimer = setTimeout(function () {
    newactual_progress = document.getElementById('progress-bar-line').getAttribute('aria-valuenow'); // Процент просмотра шортса
    if(Number(newactual_progress) < Number(actual_progress) && actual_check == 1){ // Если во время просмотра резко поменялся процент, но скрипт не причастен то ...
            // Можно выполнить какое-то действие. ( Были замечены ложные срабатывания )
            actual_check = 0; // Обнуляем значение
        return;
    }
    if(Number(newactual_progress) >= 99 ){ // Если процент просмотра больше или равно 99 то ...
        if( actual_check == 0 ){ return; } // От ложного срабатывания.
            console.log("Всего просмотрено: " + ViewCounter + ' | - Шортс закончился, перелистываю...'); // Отправляем сообщение в консоль
            for (let v of document.getElementsByTagName('ytd-reel-video-renderer')) { // Циклом пропускаем список шортсов
                if (v.isActive) { // Если попался активный шортс то ...
                    id_shorts = v.id; // Записываем его id
                    document.querySelector('[aria-label="Следующее видео"]').click(); // "Эмулируем" клик по кнопке "Следующее видео"
                    ViewCounter = Number(id_shorts) + 1; // Записываем количество шортсов в счётчик
                }
            }
            actual_progress = newactual_progress = actual_check = 0; // Обнуляем все значения
        return;
    }else{
            console.log("Всего просмотрено: " + ViewCounter + ' | -  ' + actual_progress + " | " + newactual_progress + " | " + actual_check +" | ");// Отправляем сообщение в консоль
            actual_progress = newactual_progress;
            actual_check = 1;
        return;
    }
    }, 250 * i); // задержка увеличивается на 250 миллисекунд при каждой итерации цикла
}

