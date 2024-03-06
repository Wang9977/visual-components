var v = Object.defineProperty;
var w = (e, t, r) => t in e ? v(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var h = (e, t, r) => (w(e, typeof t != "symbol" ? t + "" : t, r), r);
import { state as x, customElement as D, QuarkElement as l } from "quarkc";
const y = `:root{font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#242424}.logo{height:6em;padding:1.5em;will-change:filter}.logo:hover{filter:drop-shadow(0 0 2em #646cffaa);transition:all .5s}.card{padding:2em}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}.read-the-docs{color:#888}@media (prefers-color-scheme: light){:root{color:#213547;background-color:#fff}a:hover{color:#747bff}button{background-color:#f9f9f9}}.chart-table{width:100%;overflow:auto}.chart-table__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.chart-table .row{display:flex}.chart-table .row:first-child{border:none;background-color:transparent}.chart-table .cell{min-width:10%;height:46px;line-height:46px;text-align:center;flex:1;margin-left:4px;margin-top:4px}.chart-table .cell:first-child{border:none;background-color:transparent;width:30px;flex-grow:0;flex-shrink:0}.chart-table .cell.head{background-color:#f7f7f7;margin:0;padding-left:4px;color:#262626;font-weight:600}.chart-table .cell0{width:30px;flex-grow:0;flex-shrink:0}.chart-table .noData{height:100px;text-align:center;line-height:100px}
`, k = (e) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e), u = (e) => /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*(0|1|0\.\d+|1\.0*))?\)$/.test(e), _ = (e, t) => {
  var r = parseInt(e.substring(1, 3), 16), o = parseInt(e.substring(3, 5), 16), a = parseInt(e.substring(5, 7), 16);
  return "rgba(" + r + ", " + o + ", " + a + ", " + t + ")";
}, m = (e) => u(e) ? e.replace(/rgba?\(/, "").replace(")", "").split(",").map((o) => parseFloat(o.trim())) : null;
var C = Object.defineProperty, F = Object.getOwnPropertyDescriptor, b = (e, t, r, o) => {
  for (var a = o > 1 ? void 0 : o ? F(t, r) : t, n = e.length - 1, c; n >= 0; n--)
    (c = e[n]) && (a = (o ? c(t, r, a) : c(a)) || a);
  return o && a && C(t, r, a), a;
};
const d = "rgba(38,107,246,1)";
let f = class extends l {
  constructor() {
    super(...arguments);
    h(this, "propsData", {
      column: [],
      row: [],
      data: [[]],
      color: ""
    });
    h(this, "colorFormat", (t) => {
      let r = m(d);
      if (t) {
        const o = u(t) ? t : k(t) ? _(t, 1) : d;
        r = m(o);
      }
      return r.slice(0, 3).join(",");
    });
  }
  setData(t) {
    console.log("setData start"), this.propsData = t, console.log("propsData", this.propsData);
  }
  componentDidMount() {
  }
  render() {
    const { row: t, column: r, data: o, color: a = "" } = this.propsData;
    console.info("render ", this.propsData);
    const n = r.length ? ["", ...r] : [], c = this.colorFormat(a);
    return /* @__PURE__ */ l.h(l.Fragment, null, /* @__PURE__ */ l.h("div", { className: "chart-table" }, n.length && t.length && /* @__PURE__ */ l.h("div", { className: "row" }, n.map(
      (p, i) => /* @__PURE__ */ l.h("div", { className: "cell head", key: i }, p)
    )), t == null ? void 0 : t.map(
      (p, i) => /* @__PURE__ */ l.h("div", { className: "row", key: i }, n.map(
        (A, s) => {
          var g;
          return /* @__PURE__ */ l.h("div", { className: `cell cell${s} `, key: s, style: s ? { backgroundColor: `rgba(${c},${o[i][s - 1] + 0.1})` } : {} }, s ? /* @__PURE__ */ l.h("div", null, typeof ((g = o == null ? void 0 : o[i]) == null ? void 0 : g[s - 1]) == "number" ? (o[i][s - 1] * 100).toFixed(2) : "") : /* @__PURE__ */ l.h("div", null, p));
        }
      ))
    )));
  }
};
b([
  x()
], f.prototype, "propsData", 2);
f = b([
  D({ tag: "my-component", style: y })
], f);
