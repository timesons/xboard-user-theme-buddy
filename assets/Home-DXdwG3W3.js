import { u as L } from "./User-CHhtlxsL.js";
import { I as v } from "./iconify-D5K5G99i.js";
import {
  d as h,
  B as g,
  l as f,
  D as n,
  E as a,
  F as o,
  H as u,
  J as k,
  K as b,
  S as p,
  G as m,
  I as l,
  z as $,
  b as S,
  L as w,
  g as H,
} from "./index-trPnz5BS.js";
import { _ as M } from "./index-BGVIHDrF.js";
import "./index-DtZ8MySn.js";
import { S as z } from "./Skeleton-DRQ7pli2.js";
import "./User-U_Q68dKX.js";
import "./parse-j8CtVGGo.js";
import "./vnode-BYyB1UDk.js";
import "./omit-Ddy602VB.js";
const C = { "aria-label": "title" },
  B = { key: 0, "aria-label": "content" },
  N = { class: "ml-1" },
  P = ["innerHTML"],
  V = { "aria-label": "actions" },
  x = o("span", null, "¥ ", -1),
  D = { "aria-label": "number" },
  F = h({
    __name: "StoreCard",
    props: { item: {} },
    setup(y) {
      const s = y,
        c = g(),
        r = f(() => {
          const e = s.item.content;
          let t;
          try {
            t = JSON.parse(e);
          } catch {
            t = null;
          }
          let i, d;
          return (
            t instanceof Array
              ? ((i = "array"), (d = t))
              : ((i = "string"), (d = e)),
            { type: i, result: d }
          );
        }),
        _ = f(() => {
          let e, t;
          return (
            s.item.month_price
              ? ((e = s.item.month_price * 0.01), (t = "月"))
              : s.item.quarter_price
              ? ((e = s.item.quarter_price * 0.01), (t = "季度"))
              : s.item.half_year_price
              ? ((e = s.item.half_year_price * 0.01), (t = "半年"))
              : s.item.year_price
              ? ((e = s.item.year_price * 0.01), (t = "年"))
              : ((e = s.item.onetime_price * 0.01), (t = "一次性")),
            { num: e.toFixed(2), suffix: t }
          );
        });
      return (e, t) => (
        n(),
        a(
          "div",
          { class: l(e.$style.card) },
          [
            o("div", C, u(e.item.name), 1),
            r.value.type === "array"
              ? (n(),
                a("div", B, [
                  (n(!0),
                  a(
                    k,
                    null,
                    b(
                      r.value.result,
                      (i) => (
                        n(),
                        a("div", null, [
                          i.support
                            ? (n(),
                              p(m(v), {
                                key: 0,
                                width: 24,
                                color: "#52c41a",
                                icon: "tabler:circle-check-filled",
                              }))
                            : (n(),
                              p(m(v), {
                                key: 1,
                                width: 24,
                                color: "#ff4d4f",
                                icon: "tabler:circle-x-filled",
                              })),
                          o("div", N, u(i.feature), 1),
                        ])
                      )
                    ),
                    256
                  )),
                ]))
              : (n(),
                a(
                  "div",
                  {
                    key: 1,
                    "aria-label": "content",
                    innerHTML: r.value.result,
                  },
                  null,
                  8,
                  P
                )),
            o("div", V, [
              o(
                "div",
                { class: l(e.$style.price) },
                [
                  x,
                  o("span", D, u(_.value.num), 1),
                  o("span", null, " / " + u(_.value.suffix), 1),
                ],
                2
              ),
              o(
                "div",
                {
                  class: l(e.$style.btn),
                  onClick:
                    t[0] ||
                    (t[0] = (i) =>
                      m(c).push({
                        name: "StorePlan",
                        params: { id: e.item.id },
                      })),
                },
                "立即购买",
                2
              ),
            ]),
          ],
          2
        )
      );
    },
  }),
  I = "_card_16z4y_1",
  q = "_price_16z4y_31",
  E = "_btn_16z4y_40",
  J = { card: I, price: q, btn: E },
  T = { $style: J },
  j = $(F, [["__cssModules", T]]),
  A = { class: "ViewWrapper" },
  G = h({
    __name: "Home",
    setup(y) {
      const s = L();
      S(() => s.Set_PlanList());
      const c = f(() => {
        const r = window.config.storeHome.title || "选择最适合你的套餐",
          _ = window.config.storeHome.description || "";
        return { title: r, alert: _ };
      });
      return (r, _) => {
        const e = M,
          t = z;
        return (
          n(),
          a("div", A, [
            m(s).PlanList
              ? (n(),
                a(
                  "div",
                  { key: 0, class: l(r.$style.container) },
                  [
                    o(
                      "div",
                      { class: l(r.$style.title) },
                      [
                        o("h1", null, u(c.value.title), 1),
                        c.value.alert
                          ? (n(),
                            p(
                              e,
                              {
                                key: 0,
                                message: c.value.alert,
                                "show-icon": "",
                                type: "info",
                              },
                              null,
                              8,
                              ["message"]
                            ))
                          : w("", !0),
                      ],
                      2
                    ),
                    o(
                      "div",
                      { class: l(r.$style.storeList) },
                      [
                        (n(!0),
                        a(
                          k,
                          null,
                          b(
                            m(s).PlanList,
                            (i) => (
                              n(),
                              a("div", null, [
                                H(j, { item: i }, null, 8, ["item"]),
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
              : (n(), p(t, { key: 1, active: "", size: "large" })),
          ])
        );
      };
    },
  }),
  K = "_container_649xk_1",
  O = "_title_649xk_6",
  R = "_storeList_649xk_11",
  U = { container: K, title: O, storeList: R },
  W = { $style: U },
  ae = $(G, [["__cssModules", W]]);
export { ae as default };
