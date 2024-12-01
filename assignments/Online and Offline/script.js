const offlinePopup = document.querySelector('#offline-popup');
const onlinePopup = document.querySelector('#online-popup');


function showOfflinePopup() {
    offlinePopup.classList.add('popup-show');
    onlinePopup.classList.remove('popup-show');
}

function showOnlinePopup() {
    onlinePopup.classList.add('popup-show');
    offlinePopup.classList.remove('popup-show');
}

window.addEventListener('offline', function() {
    showOfflinePopup();
});


window.addEventListener('online', function() {
    showOnlinePopup();
});

if (navigator.onLine) {
    showOnlinePopup(); 
} else {
    showOfflinePopup(); 
}