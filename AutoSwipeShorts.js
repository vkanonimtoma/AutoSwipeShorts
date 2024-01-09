console.log("AutoSwipeShorts Запускается... [RU YOUTUBE!]");
    var ViewCounter = actual_check = actual_progress = newactual_progress = 0;
    var ASS = 1000000;
    for (let i = 0; i <= ASS; i++) {
    var ShTimer = setTimeout(function () {
    newactual_progress = document.getElementById('progress-bar-line').getAttribute('aria-valuenow'); 
    if(Number(newactual_progress) >= 99 ){ 
        if( actual_check == 0 ){ return; } //
            console.log("Всего просмотрено: " + ViewCounter + ' | - Шортс закончился, перелистываю...'); 
            for (let v of document.getElementsByTagName('ytd-reel-video-renderer')) { 
                if (v.isActive) {
                    id_shorts = v.id; 
                    document.querySelector('[aria-label="Следующее видео"]').click();
                    ViewCounter = Number(id_shorts) + 1; 
                }
            }
            actual_progress = newactual_progress = actual_check = 0;
        return;
    }else{
            console.log("Всего просмотрено: " + ViewCounter + ' | -  ' + actual_progress + " | " + newactual_progress + " | " + actual_check +" | ");
            actual_progress = newactual_progress;
            actual_check = 1;
        return;
    }
    }, 200 * i); 
}

