import { QuarkElement } from "quarkc";
interface TwoArray<T> {
    [index: number]: T[];
}
interface Option {
    column: Array<string>;
    row: Array<string>;
    data: TwoArray<number>;
    color?: string;
}
declare class MyComponent extends QuarkElement {
    propsData: Option;
    setData(data: Option): void;
    componentDidMount(): void;
    colorFormat: (color: any) => string;
    render(): any;
}
declare global {
    interface HTMLElementTagNameMap {
        "my-component": MyComponent;
    }
}
export {};
