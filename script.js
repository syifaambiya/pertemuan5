// membuat netnod/ fungsi
function Penjumlahan() { // permater
    var VolumeBalok = document.getElementById("VolumeBalok").value
    var VolumeKubus = document.getElementById("VolumeKubus").value
    var VolumePrismaSegitiga = document.getElementById("VolumePrismaSegitiga").value
    // perseInt berfungsi untuk mengubah string kedalam bentuk Int
    // karena var volume balok, volume kubus, volume prisma segitiga dengan string jadi perlu diubah
    var VolumeBalokparsed = parseInt(VolumeBalok)
    var VolumeKubusparsed = parseInt(VolumeKubus)
    var VolumePrismaSegitigaparsed = parseInt(VolumePrismaSegitiga)
    var Volume = VolumeBalokparsed + VolumeKubusparsed + VolumePrismaSegitigaparsed
    var hasilpenjumlahan = document.getElementById("hasilpenjumlahan");
    hasilpenjumlahan.innerHTML = "hasil penjumlahan dari: "+ VolumeBalok + "+" + VolumeKubus + "-" + VolumePrismaSegitiga;
}