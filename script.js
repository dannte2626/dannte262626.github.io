document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    audio.play();
    this.style.display = 'none';
    document.getElementById('lyrics').style.display = 'block';
    showLyrics();
    showVideoAfterDelay(175); // Cambia este valor para ajustar el tiempo en segundos
});

document.getElementById('resetButton').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    audio.pause();
    audio.currentTime = 0;
    document.getElementById('playButton').style.display = 'block';
    document.getElementById('lyrics').style.display = 'none';
    document.getElementById('resetButton').style.display = 'none';
    resetLyrics();
});

var lyrics = [
    { line: "tururuuru(trompeta)tururuurur", start: 30 },
    { line: "Ni en mis pasos ni en mi tiempo", start: 225 },
    { line: "Ni en mi cara ni en mi espejo.", start: 259 },
    { line: "Hay un hueco donde no te asomes tú", start: 285 },
    { line: "No hay un milímetro de pielllllll", start: 340 },
    { line: "donde no estés", start: 395 },   
    { line: "siempre tú", start: 420 },
    { line: "Nadie sabe hacerme frente", start: 450 },
    { line: "con un beso diferente", start: 489 },
    { line: "Que despierte mis instintos como tú", start: 510 },
    { line: "Nadie conoce el mecanismo de mi amor", start: 560 },   
    { line: "Tan solo tú", start: 620 },    
    { line: "solo tu ", start: 650 },
    { line: "Sin ti", start: 680 },
    { line: "no hay nada, si no estás tú", start: 710 },
    { line: "Sin ti", start: 740 },
    { line: "se apaga el amor", start: 770 },
    { line: "SIN TI  nidinidinidi ", start: 798 }, 
    { line: "no hay nada, si no estas tu", start: 830 },
    { line: "SIN TI ", start: 860 },
    { line: "se apaga el amor", start: 883 },
    { line: "Si tu historia ya es mi historia", start: 970 },
    { line: "Tu memoria, mi memoria", start: 1000 },
    { line: "Ya no puedo distinguir si yo soy tú", start: 1030 },
    { line: "No queda un átomo de mí donde no estésessss", start: 1080 },
    { line: "siemmmpre tu", start: 1140 },
    { line: "siemmmpre tu", start: 1180 },
    { line: "Ni en mis pasos ni en mi tiempo", start: 1210 },
    { line: "Ni en mi cara ni en mi espejo.", start: 1240 },
    { line: "Hay un hueco donde no te asomes tú", start: 1271 },
    { line: "No hay un milímetro de pielllllll", start: 1320 },
    { line: "donde no estés", start: 1370 },   
    { line: "siempre tú", start: 1400 },
    { line: "Sin ti i i i", start: 1430 },
    { line: "no hay nada, si no estás tú", start: 1470},
    { line: "Sin ti", start: 1500 },
    { line: "se apaga el amor", start: 1530 },
    { line: "Sin iIIIIIIIIIIIIIII", start: 1550 },
    { line: "N0 HAY NADA SI NO ESTAS TU", start: 1580 },
    { line: "NNNOO PODREEEEEE", start: 1610},
    { line: "NO PODRE VIVIR", start: 1640 },
    { line: "SIN TU AMORRRRRRRRRRRRRRRRRRRRRRRRRRRROOOOOOOOOOOOOOOOOOOOOOOOOR", start: 1670 },

];


function showLyrics() {
    lyrics.forEach(function(lyric, index) {
        setTimeout(function() {
            var lineElement = document.getElementById('line' + (index + 1));
            lineElement.style.display = 'block';
            typeWriter(lineElement, lyric.line, 0);
            if (index === lyrics.length - 1) {
                setTimeout(function() {
                    document.getElementById('resetButton').style.display = 'block';
                }, lyric.line.length * 50 + 500);
            }
        }, lyric.start * 100);
    });
}

function typeWriter(element, text, index) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        setTimeout(function() {
            typeWriter(element, text, index + 1);
        }, 89); // 0.5 segundos por letra
    } else {
        // Quitar el borde parpadeante después de completar la escritura
        element.style.borderRight = 'none';
    }
}

function resetLyrics() {
    lyrics.forEach(function(lyric, index) {
        var lineElement = document.getElementById('line' + (index + 1));
        lineElement.style.display = 'none';
        lineElement.innerHTML = '';
        lineElement.style.borderRight = '.15em solid orange'; // Restaurar el borde parpadeante
    });
}

function showVideoAfterDelay(seconds) {
    setTimeout(function() {
        var videoContainer = document.getElementById('videoContainer');
        var video = document.getElementById('video');
        videoContainer.style.display = 'flex';
        video.play();
    }, seconds * 1000);
}