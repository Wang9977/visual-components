import { QuarkElement, state, customElement } from "quarkc"
// import { Tooltip } '@quarkd/quark-react';
import style from "./index.less?inline"
import {isHexColor,isRGBColor,hexToRGBA,extractRGBANumbers} from './utils'
const DefaultColor = 'rgba(38,107,246,1)'
interface TwoArray<T> {
  [index:number]:T[]
}
interface Option {
  column: Array<string>;
  row: Array<string>;
  data: TwoArray<number>;
  color?: string;
}
@customElement({ tag: "my-component", style })
class MyComponent extends QuarkElement {


  @state()
  propsData:Option = {
    column:[],
    row:[],
    data:[[]],
    color:''
  }
  setData(data:Option){
    this.propsData = data
  }
  componentDidMount() {
    // 生命周期
  }

  colorFormat =(color)=>{
    let _colorRes =  extractRGBANumbers(DefaultColor)
    if(color){
      const _color = isRGBColor(color) ? color:isHexColor(color)?hexToRGBA(color,1):DefaultColor
      _colorRes = extractRGBANumbers(_color)
    }
    return  _colorRes.slice(0,3).join(',')
  }

  render() {

    const {row,column,data,color=''} = this.propsData
    console.info('render ',this.propsData);

    const newColumn =  column.length ? ['', ...column] : []
    const newColor = this.colorFormat(color)

    return (
      <>
        <div className="chart-table">
          {newColumn.length && row.length &&
          (
            <div className='row'>
              {newColumn.map((item,i)=>
                <div className='cell head' key={i}>
                  {item}
                </div>
              )}
            </div>
          )}
          {row?.map((rowItem,rowIndex) =>
             <div className='row' key={rowIndex}>
              {newColumn.map((colItem,colIndex)=>
                <div className={`cell cell${colIndex} `} key={colIndex} style={colIndex?{backgroundColor: `rgba(${newColor},${data[rowIndex][colIndex-1]+0.1})`}:{}}>
                  { !colIndex?
                    <div>{rowItem}</div> :
                      <div>
                      {typeof data?.[rowIndex]?.[colIndex-1]=== 'number' ? (data[rowIndex][colIndex-1]*100).toFixed(2) : ''}
                      </div>
                  }
                </div>
              )}
              </div>
          )}
          </div>
      </>
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-component": MyComponent
  }
}
