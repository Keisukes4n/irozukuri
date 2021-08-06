
class ColorChanger {
  private redValues: Array<HTMLElement|null>;
  constructor() {
    this.redValues = [
      document.getElementById( 'inputBase10Red' ),
      document.getElementById( 'inputBase16Red' ),
      document.getElementById( 'inputRangeRed' )
    ];
  }

  public getRedValues(): Array<HTMLElement|null> {
    return this.redValues;
  }

  public prepareInputColor( array: Array<HTMLElement|null> ): void {
    const base10: HTMLElement|null = array[0];
    const base16: HTMLElement|null = array[1];
    const range:  HTMLElement|null = array[2];
    if ( base10 instanceof HTMLInputElement && base16 instanceof HTMLInputElement && range instanceof HTMLInputElement ) {
      base10.addEventListener( 'input', ( event ) => {
        if ( event.target instanceof HTMLInputElement ) {
          base16.value = Number( event.target.value ).toString( 16 );
          range.value  = String( event.target.value );
        }
      });
      base16.addEventListener( 'input', ( event ) => {
        if ( event.target instanceof HTMLInputElement ) {
          range.value  = String( parseInt( event.target.value, 16 ) )
          base10.value = String( parseInt( event.target.value, 16 ) );
        }
      });
      range.addEventListener( 'input', ( event ) => {
        if ( event.target instanceof HTMLInputElement ) {
          base10.value = String( event.target.value );
          base16.value = Number( event.target.value ).toString( 16 );
        }
      });
    } // if
  } // prepareInputColor
}

const colorChangerIns = new ColorChanger;
colorChangerIns.prepareInputColor( colorChangerIns.getRedValues() );
