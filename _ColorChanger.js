"use strict";
class ColorChanger {
    constructor() {
        this.colorCode = {
            r: '00',
            g: '00',
            b: '00'
        };
        this.redValues = {
            color: 'red',
            base10: document.getElementById('inputBase10Red'),
            base16: document.getElementById('inputBase16Red'),
            range: document.getElementById('inputRangeRed')
        };
        this.area1 = document.getElementById('area1');
    }
    getRedValues() {
        return this.redValues;
    }
    prepareInputColor(structure) {
        const base10 = structure.base10;
        const base16 = structure.base16;
        const range = structure.range;
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
                    this.colorConstruct(structure.color, event.target.value);
                }
            });
        } // if
    } // prepareInputColor
    colorConstruct(color, value) {
        try {
            switch (color) {
                case 'red':
                    this.colorCode.r = value;
                    break;
                case 'green':
                    break;
                case 'blue':
                    break;
                default:
                    throw new Error("Error: no color.");
            } // switch
            if (this.area1 instanceof HTMLElement) {
                this.area1.style.background = 'rgba(' + this.colorCode.r + ', 0, 0, 1 )';
            }
        }
        catch (error) {
            console.log(error);
        }
    } // colorConstruct
}
const colorChangerIns = new ColorChanger;
colorChangerIns.prepareInputColor(colorChangerIns.getRedValues());
