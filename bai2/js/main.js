var ket_qua = ""

function bam1() {
  ket_qua = ket_qua + "1"
}

function bam2() {
  ket_qua += "2"
}

function bam3() {
  ket_qua += "3"
}

function bam4() {
  ket_qua += "4"
}

function cong() {
  ket_qua += "+"
}

function tru() {
  ket_qua += "-"
}

function bang() {
  alert(eval(ket_qua));
  ket_qua = "";
}
