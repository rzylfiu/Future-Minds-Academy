let originalTitle = document.title;
let originalFavicon = 'original.ico';
let notificationFavicon = 'bell.ico';
let toggle = true;
let interval;

function startNotification(text) {
    endNotification();
    
    interval = setInterval(() => {
        if (toggle) {
            document.title = text;
            changeFavicon(notificationFavicon);
        } else {
            document.title = originalTitle;
            changeFavicon(originalFavicon);
        }
        toggle = !toggle;
    }, 1000);
}

function endNotification() {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
    
    document.title = originalTitle;
    changeFavicon(originalFavicon);
}

function changeFavicon(icon) {
    let link = document.querySelector("link[rel*='icon']");
    
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    
    link.href = icon;
}
