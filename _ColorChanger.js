"use strict";
class ColorChanger {
    constructor() {
        this.colorCode = { r: '255', g: '255', b: '255' };
        this.redValues = {
            color: 'red',
            base10: document.getElementById('inputBase10Red'),
            base16: document.getElementById('inputBase16Red'),
            range: document.getElementById('inputRangeRed')
        };
        this.greenValues = {
            color: 'green',
            base10: document.getElementById('inputBase10Green'),
            base16: document.getElementById('inputBase16Green'),
            range: document.getElementById('inputRangeGreen')
        };
        this.blueValues = {
            color: 'blue',
            base10: document.getElementById('inputBase10Blue'),
            base16: document.getElementById('inputBase16Blue'),
            range: document.getElementById('inputRangeBlue')
        };
        this.area1 = document.getElementById('area1');
    }
    getRedValues() {
        return this.redValues;
    }
    getGreenValues() {
        return this.greenValues;
    }
    getBlueValues() {
        return this.blueValues;
    }
    setColorCodes(color, value) {
        try {
            switch (color) {
                case 'red':
                    this.colorCode.r = value;
                    break;
                case 'green':
                    this.colorCode.g = value;
                    break;
                case 'blue':
                    this.colorCode.b = value;
                    break;
                default:
                    throw 'Error: no color.';
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    colorConstruct(color, value) {
        try {
            this.setColorCodes(color, value);
            if (this.area1 instanceof HTMLElement) {
                this.area1.style.background
                    = 'rgba( ' + this.colorCode.r + ', ' + this.colorCode.g + ', ' + this.colorCode.b + ', 1 )';
            }
        }
        catch (error) {
            console.log(error);
        }
    } // colorConstruct
    inputEvent(structure) {
        try {
            const color = structure.color;
            const base10 = structure.base10;
            const base16 = structure.base16;
            const range = structure.range;
            if (!(base10 instanceof HTMLInputElement))
                throw 'elementException';
            if (!(base16 instanceof HTMLInputElement))
                throw 'elementException';
            if (!(range instanceof HTMLInputElement))
                throw 'elementException';
            base10.addEventListener('input', (event) => {
                if (!(event.target instanceof HTMLInputElement))
                    throw 'Event target exception';
                base16.value = Number(event.target.value).toString(16);
                range.value = String(event.target.value);
                this.colorConstruct(color, event.target.value);
            });
            base16.addEventListener('input', (event) => {
                if (!(event.target instanceof HTMLInputElement))
                    throw 'Event target exception';
                range.value = String(parseInt(event.target.value, 16));
                base10.value = String(parseInt(event.target.value, 16));
                this.colorConstruct(color, String(parseInt(event.target.value, 16)));
            });
            range.addEventListener('input', (event) => {
                if (!(event.target instanceof HTMLInputElement))
                    throw 'Event target exception';
                base10.value = String(event.target.value);
                base16.value = Number(event.target.value).toString(16);
                this.colorConstruct(color, event.target.value);
            });
        }
        catch (identify) {
            console.error(identify);
        }
    }
}
const colorChangerIns = new ColorChanger;
colorChangerIns.inputEvent(colorChangerIns.getRedValues());
colorChangerIns.inputEvent(colorChangerIns.getGreenValues());
colorChangerIns.inputEvent(colorChangerIns.getBlueValues());
