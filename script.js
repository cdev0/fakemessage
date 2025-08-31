document.querySelector('.showPopup').onclick = function() {
    const popup = document.querySelector('.popup');
    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
};

document.getElementById('closePopup').onclick = function() {
    document.querySelector('.popup').style.display = 'none';
};

document.getElementById('modePicker').onchange = function(e) {
    const phone = document.querySelector('.phone');
    if (e.target.value === 'dark') {
        phone.style.background = '#10161A'; // iMessage dark mode
    } else {
        phone.style.background = '#F4F6F8'; // iMessage light mode
    }
};

document.getElementById('bgColorPicker').oninput = function(e) {
    document.querySelector('.phone').style.background = e.target.value;
};

document.getElementById('bgImagePicker').onchange = function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
            document.querySelector('.phone').style.background =
                `url('${evt.target.result}') center/cover no-repeat`;
        };
        reader.readAsDataURL(file);
    }
};

document.getElementById('dynamicIslandToggle').onchange = function(e) {
    document.getElementById('dynamicIsland').style.display = e.target.checked ? 'block' : 'none';
};

document.getElementById('timePicker').oninput = function(e) {
    document.getElementById('phoneTime').textContent = e.target.value;
};