import {
  z as v,
  B as g,
  r as f,
  l as b,
  w as y,
  b as h,
  c as k,
  D as s,
  E as c,
  F as a,
  I as r,
  G as d,
  g as w,
  H as C,
  S as B,
  R as M,
} from "./index-trPnz5BS.js";
import { K as z } from "./User-U_Q68dKX.js";
import { I as x } from "./iconify-D5K5G99i.js";
import { u as D } from "./index-DVjFoVco.js";
import { M as E } from "./index-OBBF6zIq.js";
import "./index-DtZ8MySn.js";
import { S as I } from "./Skeleton-DRQ7pli2.js";
import "./parse-j8CtVGGo.js";
import "./omit-Ddy602VB.js";
const T = "_container_9zpwf_1",
  $ = "_detailContainer_9zpwf_4",
  H = "_htmlBody_9zpwf_36",
  L = { container: T, detailContainer: $, htmlBody: H },
  S = { class: "ViewWrapper" },
  A = { "aria-label": "title" },
  K = ["innerHTML"],
  R = {
    __name: "Detail",
    setup(V) {
      const l = g(),
        t = f(),
        u = E({ html: !0 }),
        m = b(() =>
          !t.value || !t.value.body ? null : u.render(t.value.body)
        ),
        { text: N, copy: p, copied: _ } = D();
      y(_, (e) => {
        e && M.success("复制成功");
      });
      const i = (e) => {
        if (e.target.getAttribute("aria-label") !== "button") return;
        const o = e.target.getAttribute("data-url"),
          n = e.target.getAttribute("data-clipboard-text");
        o ? window.open(o) : n && p(n);
      };
      return (
        h(() => {
          z(l.currentRoute.value.params.id).then((e) => {
            t.value = e.data;
          }),
            document.addEventListener("click", i);
        }),
        k(() => {
          document.removeEventListener("click", i);
        }),
        (e, o) => {
          const n = I;
          return (
            s(),
            c("div", S, [
              a(
                "div",
                { class: r(e.$style.container) },
                [
                  t.value
                    ? (s(),
                      c(
                        "div",
                        { key: 0, class: r(e.$style.detailContainer) },
                        [
                          a("div", A, [
                            a(
                              "div",
                              {
                                onClick:
                                  o[0] ||
                                  (o[0] = (F) =>
                                    d(l).push({ name: "KnowledgeHome" })),
                              },
                              [
                                w(d(x), {
                                  width: 20,
                                  icon: "material-symbols:arrow-back-rounded",
                                }),
                              ]
                            ),
                            a("div", null, C(t.value.title), 1),
                          ]),
                          a(
                            "div",
                            { class: r(e.$style.htmlBody), innerHTML: m.value },
                            null,
                            10,
                            K
                          ),
                        ],
                        2
                      ))
                    : (s(), B(n, { key: 1, active: "", size: "large" })),
                ],
                2
              ),
            ])
          );
        }
      );
    },
  },
  U = { $style: L },
  Y = v(R, [["__cssModules", U]]);
export { Y as default };
