
class ColorChanger {
  private rangeRed:  HTMLElement|null;
  private numberRed: HTMLElement|null;
  constructor() {
    this.rangeRed  = document.getElementById( 'inputRangeRed' );
    this.numberRed = document.getElementById( 'inputNumberRed' );
  }

  public getNumberRed(): HTMLElement|null {
    return this.numberRed;
  }

  public getRangeRed(): HTMLElement|null {
    return this.rangeRed;
  }

  public InputLink( number: HTMLElement|null, range: HTMLElement|null ): void {
    number?.addEventListener( 'input', ( event ) => {
      if ( event.target instanceof HTMLInputElement && range instanceof HTMLInputElement ) {
        range.value = String( event.target.value );
      }
    });
    range?.addEventListener( 'input', ( event ) => {
      if ( event.target instanceof HTMLInputElement && number instanceof HTMLInputElement ) {
        number.value = String( event.target.value );
      }
    });
  }
}

const colorChangerIns = new ColorChanger;
  colorChangerIns.InputLink(
    colorChangerIns.getNumberRed(), colorChangerIns.getRangeRed()
  );