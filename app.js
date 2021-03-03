/* KRONOMETRE */
const timeOver = document.querySelector('.timeOver');
const timeButton = document.querySelector('.timeButton');

const saat = document.getElementById('saat');
const dakika = document.getElementById('dakika');
const saniye = document.getElementById('saniye');
const salise = document.getElementById('salise');

const secilenSt = document.getElementById('secilen-st');
const secilenDk = document.getElementById('secilen-dk');
const secilenSn = document.getElementById('secilen-sn');
const secilenSl = document.getElementById('secilen-sl');

const baslat = document.getElementById('baslat');
const sıfırla = document.getElementById('sıfırla');
const durdur = document.getElementById('durdur');

let dur = false;

timeButton.addEventListener('click', () => {
  timeOver.style.display = 'none';
})

secilenSt.addEventListener('change', () => {
  saat.textContent = secilenSt.value < 10 ? "0" + secilenSt.value : secilenSt.value;
});

secilenDk.addEventListener('change', () => {
  dakika.textContent = secilenDk.value < 10 ? "0" + secilenDk.value : secilenDk.value;
});

secilenSn.addEventListener('change', () => {
  saniye.textContent = secilenSn.value < 10 ? "0" + secilenSn.value : secilenSn.value;
});

secilenSl.addEventListener('change', () => {
  salise.textContent = secilenSl.value < 10 ? "0" + secilenSl.value : secilenSl.value;
});

baslat.addEventListener('click', startTimer);

sıfırla.addEventListener('click', () => {
  dur = true;
  saat.textContent = "00";
  dakika.textContent = "00";
  saniye.textContent = "00";
  salise.textContent = "00";
})

function startTimer() {
  let st = saat.textContent;
  let dk = dakika.textContent;
  let sn = saniye.textContent;
  let sl = salise.textContent;


  const interval = setInterval(() => {
    sl--;
    sl = sl < 10 ? "0" + sl : sl;
    if (sl == "0-1") {
      sn--;
      sn = sn < 10 ? "0" + sn : sn;
      sl = 59;
    }
    if (sn == "0-1") {
      dk--;
      dk = dk < 10 ? "0" + dk : dk;
      sn = 59;
    }
    if (dk == "0-1") {
      st--;
      st = st < 10 ? "0" + st : st;
      dk = 59;
    }
    if (st == "00" && dk == "00" && sn == "00") {
      clearInterval(interval);
      timeOver.style.display = 'flex';
      secilenSt.value = "00";
      secilenDk.value = "00";
      secilenSn.value = "00";
      secilenSl.value = "00";
    }
    if (dur) {
      clearInterval(interval);
      secilenSt.value = "00";
      secilenDk.value = "00";
      secilenSn.value = "00";
      secilenSl.value = "00";
      return;
    }
    saat.textContent = st;
    dakika.textContent = dk;
    saniye.textContent = sn;
    salise.textContent = sl;
  }, 10);
}