let billMonthTTC = document.getElementById ("billBrut");
let billMonthHT = document.getElementById ("billnet");
let billYearTTC = document.getElementById ("billYBrut");
let billYearHT = document.getElementById ("billYnet");

// let monthTTC = billMonthHT * 1.298;
// let monthHT = billMonthTTC / 1.298;
// let yeahHT = monthHT * 12;
// let yeahTTC = monthTTC * 12;


billMonthHT.addEventListener('change',function(event){
    billMonthTTC.value = billMonthHT.value * 1.298;
    billYearHT.value = billMonthHT.value * 12;
    billYearTTC.value = (billMonthHT.value * 1.298) * 12;
});

billMonthTTC.addEventListener('change',function(event){
    billMonthHT.value = billMonthTTC.value / 1.298;
    billYearHT.value = (billMonthTTC.value/1.298) * 12;
    billYearTTC.value = billMonthTTC.value * 12;
});

billYearHT.addEventListener('change',function(event){
    billMonthTTC.value = (billYearHT.value / 12) * 1.298;
    billMonthHT.value = billYearHT.value / 12;
    billYearTTC.value = billYearHT.value * 1.298;
});

billYearTTC.addEventListener('change',function(event){
    billMonthTTC.value = billYearTTC.value / 12;
    billMonthHT.value = (billYearTTC.value / 12) / 1.298;
    billYearHT.value = billYearTTC.value / 1.298;
});