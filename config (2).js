// config.js
// Полностью рабочие поля, без плейсхолдеров.
// Если у тебя уже был window.config.accessToken — оставил совместимость.

window.config = window.config || {};
window.config.accessToken = window.config.accessToken || (window.MAPBOX_TOKEN || '');

// Единый объект с настройками карты
window.APP_CONFIG = {
  accessToken: window.config.accessToken,
  map: {
    // два стиля между которыми переключаемся
    styleA: 'mapbox://styles/mapbox/satellite-streets-v12', // Спутник
    styleB: 'mapbox://styles/mapbox/streets-v12',           // Карта (OSM-производный стиль Mapbox)

    // стартовое положение камеры
    center: [35.0460, 48.4647],
    zoom: 14.5,
    pitch: 50,
    bearing: 10,

    // рельеф
    terrain: {
      dem: 'mapbox://mapbox.mapbox-terrain-dem-v1',
      exaggeration: 1.15
    }
  }
};


var config = {
    accessToken: 'pk.eyJ1IjoiemFlcmEiLCJhIjoiY2o3YnlzbzY3MHlpdjMxcGxqMzZzMXExZSJ9.UcS30k8fGS4bC7fujuKarw',
};


// *** ВАЖЛИВО: авторизація адмінки — зберігаємо ХЕШІ тут ***
window.APP_CONFIG.adminAuth = {
  // SHA-256 від логіна та пароля (hex)
  userHash: 'e388075da4fa4e95da9b56166145f9685d1e4b08efc7bd5e493daa2f671b49cc',
  passHash: 'ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f'
};
