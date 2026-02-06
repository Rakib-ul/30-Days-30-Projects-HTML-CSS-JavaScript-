let imgBox = document.getElementById('imageBox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');



function generateQRCode() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }
    else {
        qrText.classList.add("error");
        document.querySelector(".error p").style.display = "block";
        setTimeout(() => {
            qrText.classList.remove("error");
            document.querySelector(".error p").style.display = "none";
        }, 1200);
        imageBox.classList.remove("show-img");
    }


}
