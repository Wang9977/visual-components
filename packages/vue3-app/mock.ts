interface TwoArray<T> {
  [index:number]:T[]
}
interface Option {
  column: Array<string>;
  row: Array<string>;
  data: TwoArray<number>;
  color?: string;
}

export const mock: Option = {
  column:["都市蓝领","都市家庭","都市中产","都市Z世代","小镇青年","小镇家庭","小镇中年","小镇中产","学生一族"],
  data:[[0.0971,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0373,0.2328,0.0535,0.0138,0.0306,0.2788,0.0295,0.1233,0.1032]],
  row:["自用","他用"]
}