"use strict";
class ColorChanger {
    constructor() {
        this.rangeRed = document.getElementById('inputRangeRed');
        this.numberRed = document.getElementById('inputNumberRed');
    }
    getNumberRed() {
        return this.numberRed;
    }
    getRangeRed() {
        return this.rangeRed;
    }
    InputLink(number, range) {
        number === null || number === void 0 ? void 0 : number.addEventListener('input', (event) => {
            if (event.target instanceof HTMLInputElement && range instanceof HTMLInputElement) {
                range.value = String(event.target.value);
            }
        });
        range === null || range === void 0 ? void 0 : range.addEventListener('input', (event) => {
            if (event.target instanceof HTMLInputElement && number instanceof HTMLInputElement) {
                number.value = String(event.target.value);
            }
        });
    }
}
const colorChangerIns = new ColorChanger;
colorChangerIns.InputLink(colorChangerIns.getNumberRed(), colorChangerIns.getRangeRed());
