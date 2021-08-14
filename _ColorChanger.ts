
class ColorChanger {
  private colorCode: ColorCode
  private redValues: InputStructure;
  private greenValues: InputStructure;
  private blueValues: InputStructure;
  private area1: HTMLElement|null;
  constructor() {
    this.colorCode = {
      r: '255',
      g: '255',
      b: '255'
    };
    this.redValues = {
      color:  'red',
      base10: document.getElementById( 'inputBase10Red' ),
      base16: document.getElementById( 'inputBase16Red' ),
      range:  document.getElementById( 'inputRangeRed' )
    };
    this.greenValues = {
      color:  'green',
      base10: document.getElementById( 'inputBase10Green' ),
      base16: document.getElementById( 'inputBase16Green' ),
      range:  document.getElementById( 'inputRangeGreen' )
    };
    this.blueValues = {
      color:  'blue',
      base10: document.getElementById( 'inputBase10Blue' ),
      base16: document.getElementById( 'inputBase16Blue' ),
      range:  document.getElementById( 'inputRangeBlue' )
    };
    this.area1 = document.getElementById( 'area1' );
  }

  public getRedValues(): InputStructure {
    return this.redValues;
  }

  public getGreenValues(): InputStructure {
    return this.greenValues;
  }

  public getBlueValues(): InputStructure {
    return this.blueValues;
  }

  public prepareInputColor( structure: InputStructure ): void {
    const color:  string           = structure.color;
    const base10: HTMLElement|null = structure.base10;
    const base16: HTMLElement|null = structure.base16;
    const range:  HTMLElement|null = structure.range;
    if ( base10 instanceof HTMLInputElement && base16 instanceof HTMLInputElement && range instanceof HTMLInputElement ) {
      base10.addEventListener( 'input', ( event ) => {
        if ( event.target instanceof HTMLInputElement ) {
          base16.value = Number( event.target.value ).toString( 16 );
          range.value  = String( event.target.value );
          this.colorConstruct( color, event.target.value );
        }
      });
      base16.addEventListener( 'input', ( event ) => {
        if ( event.target instanceof HTMLInputElement ) {
          range.value  = String( parseInt( event.target.value, 16 ) )
          base10.value = String( parseInt( event.target.value, 16 ) );
          this.colorConstruct( color, String( parseInt( event.target.value, 16 ) ) );
        }
      });
      range.addEventListener( 'input', ( event ) => {
        if ( event.target instanceof HTMLInputElement ) {
          base10.value = String( event.target.value );
          base16.value = Number( event.target.value ).toString( 16 );
          this.colorConstruct( color, event.target.value );
        }
      });
    } // if
  } // prepareInputColor

  public colorConstruct( color: string, value: string ) {
    try {
      switch ( color ) {
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
          throw new Error( "Error: no color." );
      } // switch
      if ( this.area1 instanceof HTMLElement ) {
        this.area1.style.background
          = 'rgba( ' + this.colorCode.r + ', ' + this.colorCode.g +', ' + this.colorCode.b + ', 1 )';
      }
    } catch ( error ) {
      console.log( error );      
    }
  } // colorConstruct
}

const colorChangerIns = new ColorChanger;
colorChangerIns.prepareInputColor( colorChangerIns.getRedValues() );
colorChangerIns.prepareInputColor( colorChangerIns.getGreenValues() );
colorChangerIns.prepareInputColor( colorChangerIns.getBlueValues() );
