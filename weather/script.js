document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true')
    .then(response => response.json())
    .then(data => {
        const weather = data.current_weather;
        const weatherDescription = getWeatherDescription(weather.weather_code);
        console.log(`取得された天気説明: ${weatherDescription}`);  // ここでコンソールにログを出力
        document.getElementById('weather').textContent = `天候: ${weatherDescription}`;
        document.getElementById('temperature').textContent = `気温: ${weather.temperature}°C`;
    })
    .catch(error => console.error('エラー:', error));
});

function getWeatherDescription(weatherCode) {
    switch(weatherCode) {
        case 0: return '晴れ';
        case 1: return '主に晴れ';
        case 2: return '部分的に晴れ';
        case 3: return 'くもり';
        case 45: return '霧';
        case 48: return '霧凍';
        case 51: return '小雨';
        case 53: return 'やや強い雨';
        case 55: return '強い雨';
        case 56: return '凍雨';
        case 57: return '強い凍雨';
        case 61: return '小雪';
        case 63: return 'やや強い雪';
        case 65: return '強い雪';
        case 66: return '霰';
        case 67: return '強い霰';
        case 71: return 'わずかな雪';
        case 73: return 'やや強い雪';
        case 75: return '強い雪';
        case 77: return '雪粒';
        case 80: return 'にわか雨';
        case 81: return 'にわか雨';
        case 82: return '強いにわか雨';
        case 85: return 'にわか雪';
        case 86: return '強いにわか雪';
        case 95: return '雷雨';
        case 96: return '強い雷雨';
        case 99: return '非常に強い雷雨';
        default: return 'データなし';
    }
}
