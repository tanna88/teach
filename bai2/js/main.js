var ket_qua = ""

function bam1() {
  ket_qua = ket_qua + "1"
  hienPhepTinh();
}

function bam2() {
  ket_qua += "2"
  hienPhepTinh();
}

function bam3() {
  ket_qua += "3"
  hienPhepTinh();
}

function bam4() {
  ket_qua += "4"
  hienPhepTinh();
}

function cong() {
  ket_qua += "+"
  hienPhepTinh();
}

function tru() {
  ket_qua += "-"
  hienPhepTinh();
}

function bang() {
  var inputKetQua = document.getElementById("ket_qua");
  inputKetQua.value = eval(ket_qua);
  ket_qua = "";
}

function reset() {
  ket_qua = "";
  hienPhepTinh();
}

function hienPhepTinh() {
  var inputPhepTinh = document.getElementById("phep_tinh");
  inputPhepTinh.value = ket_qua;
}
