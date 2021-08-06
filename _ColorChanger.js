"use strict";
class ColorChanger {
    constructor() {
        this.redValues = [
            document.getElementById('inputBase10Red'),
            document.getElementById('inputBase16Red'),
            document.getElementById('inputRangeRed')
        ];
    }
    getRedValues() {
        return this.redValues;
    }
    prepareInputColor(array) {
        const base10 = array[0];
        const base16 = array[1];
        const range = array[2];
        if (base10 instanceof HTMLInputElement && base16 instanceof HTMLInputElement && range instanceof HTMLInputElement) {
            base10.addEventListener('input', (event) => {
                if (event.target instanceof HTMLInputElement) {
                    base16.value = Number(event.target.value).toString(16);
                    range.value = String(event.target.value);
                }
            });
            base16.addEventListener('input', (event) => {
                if (event.target instanceof HTMLInputElement) {
                    range.value = String(parseInt(event.target.value, 16));
                    base10.value = String(parseInt(event.target.value, 16));
                }
            });
            range.addEventListener('input', (event) => {
                if (event.target instanceof HTMLInputElement) {
                    base10.value = String(event.target.value);
                    base16.value = Number(event.target.value).toString(16);
                }
            });
        } // if
    } // prepareInputColor
}
const colorChangerIns = new ColorChanger;
colorChangerIns.prepareInputColor(colorChangerIns.getRedValues());
