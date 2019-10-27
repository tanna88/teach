var ket_qua = ""

function number(num) {
  ket_qua = ket_qua + num
  hienPhepTinh();
}

function phepTinh(c) {
  ket_qua = ket_qua + c
  hienPhepTinh();
}

function bang() {
  var inputKetQua = document.getElementById("ket_qua");
  inputKetQua.value = eval(ket_qua);
  ket_qua = "";
}

function del() {
  ket_qua = ket_qua.substring(0, ket_qua.length - 1)
  hienPhepTinh();
}

function hienPhepTinh() {
  var inputPhepTinh = document.getElementById("phep_tinh");
  inputPhepTinh.value = ket_qua;
}
