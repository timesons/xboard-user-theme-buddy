import { U as d } from "./subscribeInfo-NGE80HS8.js";
import { S as m } from "./User-U_Q68dKX.js";
import { I as y } from "./iconify-D5K5G99i.js";
import {
  d as g,
  l as p,
  D as i,
  E as t,
  g as u,
  G as j,
  z as _,
  r as h,
  b as v,
  I as n,
  F as o,
  J as k,
  K as b,
  H as s,
  S as w,
} from "./index-trPnz5BS.js";
import "./index-DtZ8MySn.js";
import { S as $ } from "./Skeleton-DRQ7pli2.js";
import "./User-CHhtlxsL.js";
import "./parse-j8CtVGGo.js";
import "./index-DVjFoVco.js";
import "./index-BSl9Db_y.js";
import "./index-Dj6s8LTA.js";
import "./index-Cixf66yE.js";
import "./styleChecker-L-nXk_6t.js";
import "./omit-Ddy602VB.js";
import "./vnode-BYyB1UDk.js";
const z = g({
    __name: "Country",
    props: { country: {} },
    setup(l) {
      const e = l,
        r = p(() =>
          e.country.includes("美国")
            ? "emojione:flag-for-united-states"
            : e.country.includes("荷兰")
            ? "emojione:flag-for-netherlands"
            : e.country.includes("香港")
            ? "emojione:flag-for-hong-kong-sar-china"
            : e.country.includes("日本")
            ? "emojione:flag-for-japan"
            : e.country.includes("韩国")
            ? "emojione:flag-for-south-korea"
            : e.country.includes("新加坡")
            ? "emojione:flag-for-singapore"
            : e.country.includes("澳大利亚")
            ? "emojione:flag-for-australia"
            : e.country.includes("英国")
            ? "emojione:flag-for-united-kingdom"
            : e.country.includes("法国")
            ? "emojione:flag-for-france"
            : e.country.includes("德国")
            ? "emojione:flag-for-germany"
            : e.country.includes("意大利")
            ? "emojione:flag-for-italy"
            : e.country.includes("西班牙")
            ? "emojione:flag-for-spain"
            : e.country.includes("加拿大")
            ? "emojione:flag-for-canada"
            : e.country.includes("瑞士")
            ? "emojione:flag-for-switzerland"
            : e.country.includes("瑞典")
            ? "emojione:flag-for-sweden"
            : e.country.includes("挪威")
            ? "emojione:flag-for-norway"
            : e.country.includes("丹麦")
            ? "emojione:flag-for-denmark"
            : e.country.includes("芬兰")
            ? "emojione:flag-for-finland"
            : e.country.includes("奥地利")
            ? "emojione:flag-for-austria"
            : e.country.includes("比利时")
            ? "emojione:flag-for-belgium"
            : e.country.includes("爱尔兰")
            ? "emojione:flag-for-ireland"
            : e.country.includes("葡萄牙")
            ? "emojione:flag-for-portugal"
            : e.country.includes("希腊")
            ? "emojione:flag-for-greece"
            : e.country.includes("新西兰")
            ? "emojione:flag-for-new-zealand"
            : e.country.includes("卢森堡")
            ? "emojione:flag-for-luxembourg"
            : e.country.includes("冰岛")
            ? "emojione:flag-for-iceland"
            : e.country.includes("匈牙利")
            ? "emojione:flag-for-hungary"
            : e.country.includes("捷克")
            ? "emojione:flag-for-czech-republic"
            : e.country.includes("越南")
            ? "emojione:flag-for-vietnam"
            : e.country.includes("泰国")
            ? "emojione:flag-for-thailand"
            : e.country.includes("马来西亚")
            ? "emojione:flag-for-malaysia"
            : e.country.includes("印度尼西亚")
            ? "emojione:flag-for-indonesia"
            : e.country.includes("菲律宾")
            ? "emojione:flag-for-philippines"
            : e.country.includes("印度")
            ? "emojione:flag-for-india"
            : e.country.includes("巴西")
            ? "emojione:flag-for-brazil"
            : e.country.includes("墨西哥")
            ? "emojione:flag-for-mexico"
            : e.country.includes("阿根廷")
            ? "emojione:flag-for-argentina"
            : e.country.includes("智利")
            ? "emojione:flag-for-chile"
            : e.country.includes("南非")
            ? "emojione:flag-for-south-africa"
            : e.country.includes("埃及")
            ? "emojione:flag-for-egypt"
            : e.country.includes("罗马尼亚")
            ? "emojione:flag-for-romania"
            : e.country.includes("柬埔寨")
            ? "emojione:flag-for-cambodia"
            : e.country.includes("朝鲜")
            ? "emojione:flag-for-north-korea"
            : e.country.includes("伊朗")
            ? "emojione:flag-for-iran"
            : e.country.includes("哈萨克斯坦")
            ? "emojione:flag-for-kazakhstan"
            : e.country.includes("土耳其")
            ? "emojione:flag-for-turkey"
            : e.country.includes("南极")
            ? "emojione:flag-for-antarctica"
            : e.country.includes("台湾")
            ? "emojione:flag-for-taiwan"
            : "emojione:flag-for-china"
        );
      return (f, c) => (
        i(),
        t("div", null, [
          u(j(y), { icon: r.value, width: 44 }, null, 8, ["icon"]),
        ])
      );
    },
  }),
  S = "_wrapper_1tgkm_1",
  N = "_container_1tgkm_5",
  B = "_list_1tgkm_8",
  C = {
    wrapper: S,
    container: N,
    list: B,
    "display-label": "_display-label_1tgkm_35",
    "display-value": "_display-value_1tgkm_39",
  },
  I = { "aria-label": "name" },
  M = { "aria-label": "rate" },
  V = {
    __name: "ServerNode",
    setup(l) {
      const e = h([]);
      return (
        v(() => {
          m().then((r) => {
            e.value = r.data;
          });
        }),
        (r, f) => {
          const c = $;
          return (
            i(),
            t(
              "div",
              { class: n(r.$style.wrapper) },
              [
                e.value.length > 0
                  ? (i(),
                    t(
                      "div",
                      { key: 0, class: n(r.$style.container) },
                      [
                        o(
                          "div",
                          { class: n(r.$style.list) },
                          [
                            (i(!0),
                            t(
                              k,
                              null,
                              b(
                                e.value,
                                (a) => (
                                  i(),
                                  t("div", null, [
                                    u(z, { country: a.name }, null, 8, [
                                      "country",
                                    ]),
                                    o("div", I, [
                                      o(
                                        "p",
                                        { class: n(r.$style["display-label"]) },
                                        s(a.name),
                                        3
                                      ),
                                      o(
                                        "p",
                                        { class: n(r.$style["display-value"]) },
                                        s(a.type),
                                        3
                                      ),
                                    ]),
                                    o("div", M, [
                                      o(
                                        "p",
                                        { class: n(r.$style["display-label"]) },
                                        "x" + s(a.rate),
                                        3
                                      ),
                                      o(
                                        "p",
                                        { class: n(r.$style["display-value"]) },
                                        "倍率",
                                        2
                                      ),
                                    ]),
                                  ])
                                )
                              ),
                              256
                            )),
                          ],
                          2
                        ),
                      ],
                      2
                    ))
                  : (i(), w(c, { key: 1, active: "", size: "large" })),
              ],
              2
            )
          );
        }
      );
    },
  },
  D = { $style: C },
  E = _(V, [["__cssModules", D]]),
  F = { class: "ViewWrapper" },
  X = {
    __name: "Layout",
    setup(l) {
      return (e, r) => (i(), t("div", F, [u(d, { full: !0 }), u(E)]));
    },
  };
export { X as default };
