function generateQR() {
    let ssid = document.getElementById("ssid").value;
    let password = document.getElementById("password").value;
    if (!ssid || !password) {
        alert("Please enter both SSID and Password");
        return;
    }
    let qrData = `WIFI:S:${ssid};T:WPA;P:${password};;`;
    document.getElementById("qrcode").innerHTML = "";
    new QRCode(document.getElementById("qrcode"), qrData);
}

function printCard() {
    let printContent = document.getElementById("wifiCard").innerHTML;
    let originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
}
