function drawRoom() {
    let width = parseFloat(document.getElementById('width').value);
    let length = parseFloat(document.getElementById('length').value);

    if (isNaN(width) || isNaN(length) || width <= 0 || length <= 0) {
        alert("Please enter valid positive numbers for width and length.");
        return;
    }

    if (width < length) {
        [width, length] = [length, width];
    }

    const area = (width * length).toFixed(2);
    const perimeter = (2 * (width + length)).toFixed(2);

    const roomWidth = width * 50;
    const roomLength = length * 50;

    const maxWidth = window.innerWidth * 0.8;
    const maxHeight = window.innerHeight * 0.5;

    const scaleWidth = roomWidth > maxWidth ? maxWidth / roomWidth : 1;
    const scaleHeight = roomLength > maxHeight ? maxHeight / roomLength : 1;

    const scale = Math.min(scaleWidth, scaleHeight);

    const scaledWidth = roomWidth * scale;
    const scaledLength = roomLength * scale;

    const roomContainer = document.getElementById('roomContainer');
    roomContainer.innerHTML = `
        <div class="room-box" style="width: ${scaledWidth}px; height: ${scaledLength}px;">
            <div class="room-dimensions">Width: ${width} m, Length: ${length} m</div>
        </div>
    `;

    const roomInfo = document.getElementById('roomInfo');
    roomInfo.innerHTML = `
        <p><strong>Area:</strong> ${area} m²</p>
        <p><strong>Perimeter:</strong> ${perimeter} m</p>
    `;

    // Hide the inputs and button after the room is drawn
    document.getElementById('inputs').style.display = 'none';
}
