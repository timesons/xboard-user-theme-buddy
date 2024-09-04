import {
  L as O,
  n as Y,
  s as G,
  o as J,
  p as K,
  F as Q,
} from "./User-U_Q68dKX.js";
import {
  B as q,
  M as F,
  r as y,
  ac as R,
  D as p,
  E as b,
  F as e,
  g as a,
  O as n,
  J as j,
  R as v,
  A as z,
  ap as W,
  l as M,
  S as $,
  K as X,
  Q as f,
  H as U,
  L as C,
  b as Z,
} from "./index-trPnz5BS.js";
import { I as B, k as E, n as D } from "./index-BYqP-HDu.js";
import { _ as T, F as V } from "./index-DxzMOp5t.js";
import { S as ee, a as te, C as se } from "./index-nJ0d2FTv.js";
import { B as L } from "./index-Dj6s8LTA.js";
import "./omit-Ddy602VB.js";
import "./vnode-BYyB1UDk.js";
import "./index-F5vFXRx9.js";
import "./ResizeObserver.es-B1PUzC5B.js";
import "./index-Dgv9Pplv.js";
import "./styleChecker-L-nXk_6t.js";
import "./colors-vDoEnMgw.js";
import "./collapseMotion-C389xCpC.js";
import "./CheckOutlined-kSoYgoEi.js";
const ae =
    "" +
    new URL("public.svg", import.meta.url).href,
  le = e(
    "div",
    null,
    [
      e(
        "h2",
        { class: "mt-6 text-3xl font-bold tracking-tight text-gray-900" },
        "登陆账号"
      ),
    ],
    -1
  ),
  oe = { class: "mt-8" },
  ie = e(
    "div",
    null,
    [
      e("div", { class: "relative mt-6" }, [
        e(
          "div",
          {
            class: "absolute inset-0 flex items-center",
            "aria-hidden": "true",
          },
          [e("div", { class: "w-full border-t border-gray-300" })]
        ),
        e("div", { class: "relative flex justify-center text-sm" }, [
          e(
            "span",
            { class: "bg-white px-2 text-gray-500" },
            "请输入您的邮箱和密码"
          ),
        ]),
      ]),
    ],
    -1
  ),
  ne = { class: "mt-6" },
  re = { action: "#", method: "POST", class: "space-y-6" },
  ue = e(
    "label",
    {
      for: "email",
      class: "block text-sm font-medium leading-6 text-gray-900",
    },
    "邮箱",
    -1
  ),
  ce = { class: "space-y-1" },
  de = e(
    "label",
    {
      for: "email",
      class: "block text-sm font-medium leading-6 text-gray-900",
    },
    "密码",
    -1
  ),
  me = e("div", { class: "flex items-center justify-between" }, null, -1),
  _e = { class: "flex font-black justify-center items-center gap-5" },
  pe = e("p", { class: "text-[#8c8c8c]" }, "还没账号?", -1),
  fe = {
    __name: "Login",
    props: { page: {}, pageModifiers: {} },
    emits: ["update:page"],
    setup(k) {
      const l = q(),
        o = F(),
        g = y(),
        i = y({ username: "", password: "" }),
        u = R(k, "page"),
        t = {
          username: [
            {
              type: "email",
              required: !0,
              message: "请填写正确的邮箱",
              trigger: "change",
            },
          ],
          password: [
            { required: !0, message: "请填写密码", trigger: "change" },
            { min: 8, message: "最小8位密码" },
          ],
        },
        d = () => {
          g.value.validate().then(() => {
            O(i.value.username, i.value.password).then((w) => {
              v.success("登陆成功"),
                o.Set_Token(w.data.auth_data),
                l.push({ name: "Dashboard" });
            });
          });
        };
      return (w, _) => {
        const r = B,
          s = T,
          h = E,
          x = V;
        return (
          p(),
          b(
            j,
            null,
            [
              le,
              e("div", oe, [
                a(
                  x,
                  { ref_key: "formRef", ref: g, model: i.value, rules: t },
                  {
                    default: n(() => [
                      ie,
                      e("div", ne, [
                        e("form", re, [
                          e("div", null, [
                            ue,
                            a(
                              s,
                              { name: "username" },
                              {
                                default: n(() => [
                                  a(
                                    r,
                                    {
                                      value: i.value.username,
                                      "onUpdate:value":
                                        _[0] ||
                                        (_[0] = (m) => (i.value.username = m)),
                                    },
                                    null,
                                    8,
                                    ["value"]
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          e("div", ce, [
                            de,
                            a(
                              s,
                              { name: "password" },
                              {
                                default: n(() => [
                                  a(
                                    h,
                                    {
                                      value: i.value.password,
                                      "onUpdate:value":
                                        _[1] ||
                                        (_[1] = (m) => (i.value.password = m)),
                                    },
                                    null,
                                    8,
                                    ["value"]
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          me,
                          e("div", null, [
                            e(
                              "p",
                              {
                                onClick: d,
                                class:
                                  "flex w-full cursor-pointer hover:opacity-85 justify-center rounded-md bg-[#0b7fe9] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                              },
                              " 登陆"
                            ),
                          ]),
                          e("div", _e, [
                            pe,
                            e(
                              "p",
                              {
                                onClick: _[2] || (_[2] = (m) => (u.value = 2)),
                                class: "cursor-pointer text-[#40a9ff]",
                              },
                              "立即注册"
                            ),
                            e(
                              "p",
                              {
                                onClick: _[3] || (_[3] = (m) => (u.value = 3)),
                                class: "cursor-pointer text-[#40a9ff]",
                              },
                              "忘记密码"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ["model"]
                ),
              ]),
            ],
            64
          )
        );
      };
    },
  },
  ve = e(
    "div",
    null,
    [
      e(
        "h2",
        { class: "mt-6 text-3xl font-bold tracking-tight text-gray-900" },
        "注册账号"
      ),
    ],
    -1
  ),
  ge = { class: "mt-8" },
  he = e(
    "div",
    null,
    [
      e("div", { class: "relative mt-6" }, [
        e(
          "div",
          {
            class: "absolute inset-0 flex items-center",
            "aria-hidden": "true",
          },
          [e("div", { class: "w-full border-t border-gray-300" })]
        ),
        e("div", { class: "relative flex justify-center text-sm" }, [
          e(
            "span",
            { class: "bg-white px-2 text-gray-500" },
            "请输入您的邮箱和密码"
          ),
        ]),
      ]),
    ],
    -1
  ),
  xe = { class: "mt-6" },
  ye = { class: "space-y-6" },
  we = e(
    "label",
    {
      for: "email",
      class: "block text-sm font-medium leading-6 text-gray-900",
    },
    [e("span", { class: "text-red-500" }, "*"), f("邮箱")],
    -1
  ),
  be = { class: "flex items-center gap-x-4" },
  ke = { key: 0, class: "space-y-1" },
  $e = e(
    "label",
    {
      for: "email",
      class: "block text-sm font-medium leading-6 text-gray-900",
    },
    [e("span", { class: "text-red-500" }, "*"), f("验证码")],
    -1
  ),
  Ce = { class: "space-y-1" },
  je = e(
    "label",
    {
      for: "email",
      class: "block text-sm font-medium leading-6 text-gray-900",
    },
    [e("span", { class: "text-red-500" }, "*"), f("密码")],
    -1
  ),
  qe = { class: "space-y-1" },
  Se = {
    for: "email",
    class: "block text-sm font-medium leading-6 text-gray-900",
  },
  Ue = { key: 0, class: "text-red-500" },
  Re = { class: "space-y-1" },
  Be = e(
    "a",
    {
      target: "_blank",
      href: "http://localhost:8080",
      class: "font-black hover:text-blue-600",
    },
    "服务条款",
    -1
  ),
  Ee = { class: "flex items-center justify-center font-black gap-5" },
  Te = e("p", { class: "text-[#8c8c8c]" }, "已经有帐户？", -1),
  Ve = {
    __name: "Register",
    props: { page: {}, pageModifiers: {} },
    emits: ["update:page"],
    setup(k) {
      const l = q(),
        o = z(),
        g = F(),
        i = R(k, "page"),
        u = y({
          username: [
            {
              type: "email",
              required: !0,
              message: "请填写正确的邮箱",
              trigger: "change",
            },
          ],
          password: [
            { required: !0, message: "请填写密码", trigger: "change" },
            { min: 8, message: "最小8位密码" },
          ],
          code: [{ required: !1, message: "请填写邀请码", trigger: "change" }],
        }),
        t = y({
          username: "",
          password: "",
          email_whitelist_suffix: 0,
          email_whitelist_suffix_value: "",
          is_email_verify: 0,
          email_code: "",
          is_recaptcha: !1,
          recaptcha_site_key: "",
          code: "",
          tos_url: "",
          checked: !1,
          email() {
            return this.username + this.email_whitelist_suffix_value;
          },
          EmailVerify() {
            if (this.username.length <= 2) {
              v.warn("请填写正确的邮箱");
              return;
            }
            G(this.email())
              .then((r) => {
                v.success("发送成功");
              })
              .catch((r) => {
                let s = r.data.message;
                s === "The given data was invalid." &&
                  (s = "请检查邮箱是否正确"),
                  v.error(s);
              });
          },
        });
      W(() => {
        (t.value.code = o.query.code),
          Y().then((r) => {
            (t.value.email_whitelist_suffix = r.data.email_whitelist_suffix),
              (t.value.is_email_verify = r.data.is_email_verify),
              (u.value.code[0].required = r.data.is_invite_force === 1),
              t.value.email_whitelist_suffix !== 0 &&
                (delete u.value.username,
                (t.value.email_whitelist_suffix =
                  t.value.email_whitelist_suffix.map((s) => "@" + s)),
                (t.value.email_whitelist_suffix_value =
                  t.value.email_whitelist_suffix[0]));
          });
      });
      const d = y(),
        w = () => {
          d.value.validate().then(() => {
            if (!t.value.checked) return v.warn("请同意服务条款");
            if (t.value.username.length === 0) return v.warn("请填写邮箱地址");
            J(
              t.value.email(),
              t.value.password,
              t.value.code,
              t.value.email_code
            )
              .then((r) => {
                v.success("注册成功"),
                  g.Set_Token(r.data.auth_data),
                  l.push({ name: "Dashboard" });
              })
              .catch((r) => {
                let s = r.data.message;
                s === "The given data was invalid." &&
                  (s = "请检查邮箱或密码是否正确"),
                  v.error(s);
              });
          });
        },
        _ = M(() => {
          let {
            title: r,
            desc1: s,
            desc2: h,
            inviteCodeEdit: x,
          } = window.config.SignPage;
          return (
            (x = x === !1 && l.currentRoute.value.query.code),
            {
              title: r || "FXQ",
              desc1: s || "High-speed network covering the whole world",
              desc2: h || "Unblock All websites with FXQ",
              inviteCodeEdit: x,
            }
          );
        });
      return (r, s) => {
        const h = B,
          x = ee,
          m = te,
          S = T,
          P = L,
          A = D,
          H = E,
          I = se,
          N = V;
        return (
          p(),
          b(
            j,
            null,
            [
              ve,
              e("div", ge, [
                a(
                  N,
                  {
                    ref_key: "formRef",
                    ref: d,
                    model: t.value,
                    rules: u.value,
                  },
                  {
                    default: n(() => [
                      he,
                      e("div", xe, [
                        e("form", ye, [
                          e("div", null, [
                            we,
                            a(
                              S,
                              { name: "username" },
                              {
                                default: n(() => [
                                  e("div", be, [
                                    a(
                                      h,
                                      {
                                        value: t.value.username,
                                        "onUpdate:value":
                                          s[0] ||
                                          (s[0] = (c) =>
                                            (t.value.username = c)),
                                        placeholder: "邮箱",
                                      },
                                      null,
                                      8,
                                      ["value"]
                                    ),
                                    t.value.email_whitelist_suffix !== 0
                                      ? (p(),
                                        $(
                                          m,
                                          {
                                            key: 0,
                                            ref: "select",
                                            value:
                                              t.value
                                                .email_whitelist_suffix_value,
                                            "onUpdate:value":
                                              s[1] ||
                                              (s[1] = (c) =>
                                                (t.value.email_whitelist_suffix_value =
                                                  c)),
                                            style: { width: "120px" },
                                          },
                                          {
                                            default: n(() => [
                                              (p(!0),
                                              b(
                                                j,
                                                null,
                                                X(
                                                  t.value
                                                    .email_whitelist_suffix,
                                                  (c) => (
                                                    p(),
                                                    $(
                                                      x,
                                                      { value: c },
                                                      {
                                                        default: n(() => [
                                                          f(U(c), 1),
                                                        ]),
                                                        _: 2,
                                                      },
                                                      1032,
                                                      ["value"]
                                                    )
                                                  )
                                                ),
                                                256
                                              )),
                                            ]),
                                            _: 1,
                                          },
                                          8,
                                          ["value"]
                                        ))
                                      : C("", !0),
                                  ]),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          t.value.is_email_verify === 1
                            ? (p(),
                              b("div", ke, [
                                $e,
                                a(
                                  A,
                                  { compact: "" },
                                  {
                                    default: n(() => [
                                      a(
                                        h,
                                        {
                                          value: t.value.email_code,
                                          "onUpdate:value":
                                            s[2] ||
                                            (s[2] = (c) =>
                                              (t.value.email_code = c)),
                                          style: { width: "calc(80%)" },
                                        },
                                        null,
                                        8,
                                        ["value"]
                                      ),
                                      a(
                                        P,
                                        {
                                          onClick:
                                            s[3] ||
                                            (s[3] = (c) =>
                                              t.value.EmailVerify()),
                                          type: "primary",
                                        },
                                        { default: n(() => [f("发送")]), _: 1 }
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]))
                            : C("", !0),
                          e("div", Ce, [
                            je,
                            a(
                              S,
                              { name: "password" },
                              {
                                default: n(() => [
                                  a(
                                    H,
                                    {
                                      value: t.value.password,
                                      "onUpdate:value":
                                        s[4] ||
                                        (s[4] = (c) => (t.value.password = c)),
                                      placeholder: "密码",
                                    },
                                    null,
                                    8,
                                    ["value"]
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          e("div", qe, [
                            e("label", Se, [
                              u.value.code[0].required
                                ? (p(), b("span", Ue, "*"))
                                : C("", !0),
                              f("邀请码"),
                            ]),
                            a(
                              S,
                              { name: "code" },
                              {
                                default: n(() => [
                                  a(
                                    h,
                                    {
                                      value: t.value.code,
                                      "onUpdate:value":
                                        s[5] ||
                                        (s[5] = (c) => (t.value.code = c)),
                                      placeholder: "邀请码",
                                      disabled: _.value.inviteCodeEdit,
                                    },
                                    null,
                                    8,
                                    ["value", "disabled"]
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          e("div", Re, [
                            a(
                              I,
                              {
                                checked: t.value.checked,
                                "onUpdate:checked":
                                  s[6] || (s[6] = (c) => (t.value.checked = c)),
                              },
                              {
                                default: n(() => [f("我已阅读并同意 "), Be]),
                                _: 1,
                              },
                              8,
                              ["checked"]
                            ),
                          ]),
                          e("div", null, [
                            e(
                              "p",
                              {
                                onClick: w,
                                class:
                                  "flex w-full cursor-pointer hover:opacity-85 justify-center rounded-md bg-[#0b7fe9] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                              },
                              " 立即注册"
                            ),
                          ]),
                          e("div", Ee, [
                            Te,
                            e(
                              "p",
                              {
                                class: "cursor-pointer text-[#0b7fe9]",
                                onClick: s[7] || (s[7] = (c) => (i.value = 1)),
                              },
                              "登 录"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ["model", "rules"]
                ),
              ]),
            ],
            64
          )
        );
      };
    },
  },
  Fe = e(
    "div",
    null,
    [
      e(
        "h2",
        { class: "mt-6 text-3xl font-bold tracking-tight text-gray-900" },
        "忘记密码"
      ),
    ],
    -1
  ),
  Me = { class: "mt-8" },
  De = e(
    "div",
    null,
    [
      e("div", { class: "relative mt-6" }, [
        e(
          "div",
          {
            class: "absolute inset-0 flex items-center",
            "aria-hidden": "true",
          },
          [e("div", { class: "w-full border-t border-gray-300" })]
        ),
        e("div", { class: "relative flex justify-center text-sm" }, [
          e(
            "span",
            { class: "bg-white px-2 text-gray-500" },
            "请输入您的邮箱和密码"
          ),
        ]),
      ]),
    ],
    -1
  ),
  Le = { class: "mt-6" },
  Pe = { action: "#", method: "POST", class: "space-y-6" },
  Ae = e(
    "label",
    {
      for: "email",
      class: "block text-sm font-medium leading-6 text-gray-900",
    },
    [e("span", { class: "text-red-500" }, "*"), f(" 邮箱")],
    -1
  ),
  He = { class: "space-y-1" },
  Ie = e(
    "label",
    {
      for: "email",
      class: "block text-sm font-medium leading-6 text-gray-900",
    },
    [e("span", { class: "text-red-500" }, "*"), f(" 验证码")],
    -1
  ),
  Ne = { class: "space-y-1" },
  Oe = e(
    "label",
    {
      for: "email",
      class: "block text-sm font-medium leading-6 text-gray-900",
    },
    [e("span", { class: "text-red-500" }, "*"), f(" 密码")],
    -1
  ),
  Ye = e("div", { class: "flex items-center justify-between" }, null, -1),
  Ge = { class: "flex font-black justify-center items-center gap-5" },
  Je = e("p", { class: "text-[#8c8c8c]" }, "已经有帐户？", -1),
  Ke = {
    __name: "ForgetPassword",
    props: { page: {}, pageModifiers: {} },
    emits: ["update:page"],
    setup(k) {
      q();
      const l = y(),
        o = y({
          username: "",
          password: "",
          code: "",
          send_email() {
            K(this.username).then((t) => {
              v.success("发送成功");
            });
          },
        }),
        g = R(k, "page"),
        i = {
          username: [
            {
              type: "email",
              required: !0,
              message: "请填写正确的邮箱",
              trigger: "change",
            },
          ],
          code: [{ required: !0, message: "请填写验证码", trigger: "change" }],
          password: [
            { required: !0, message: "请填写密码", trigger: "change" },
            { min: 8, message: "最小8位密码" },
          ],
        },
        u = () => {
          l.value.validate().then(() => {
            Q(o.value.username, o.value.password, o.value.code).then((t) => {
              v.success("重置成功 快去登陆吧"), (g.value = 1);
            });
          });
        };
      return (t, d) => {
        const w = B,
          _ = T,
          r = L,
          s = D,
          h = E,
          x = V;
        return (
          p(),
          b(
            j,
            null,
            [
              Fe,
              e("div", Me, [
                a(
                  x,
                  { ref_key: "formRef", ref: l, model: o.value, rules: i },
                  {
                    default: n(() => [
                      De,
                      e("div", Le, [
                        e("form", Pe, [
                          e("div", null, [
                            Ae,
                            a(
                              _,
                              { name: "username" },
                              {
                                default: n(() => [
                                  a(
                                    w,
                                    {
                                      value: o.value.username,
                                      "onUpdate:value":
                                        d[0] ||
                                        (d[0] = (m) => (o.value.username = m)),
                                    },
                                    null,
                                    8,
                                    ["value"]
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          e("div", He, [
                            Ie,
                            a(
                              _,
                              { name: "code" },
                              {
                                default: n(() => [
                                  a(
                                    s,
                                    { compact: "" },
                                    {
                                      default: n(() => [
                                        a(
                                          w,
                                          {
                                            value: o.value.code,
                                            "onUpdate:value":
                                              d[1] ||
                                              (d[1] = (m) =>
                                                (o.value.code = m)),
                                            style: { width: "calc(80%)" },
                                          },
                                          null,
                                          8,
                                          ["value"]
                                        ),
                                        a(
                                          r,
                                          {
                                            onClick:
                                              d[2] ||
                                              (d[2] = (m) =>
                                                o.value.send_email()),
                                            type: "primary",
                                          },
                                          {
                                            default: n(() => [f("发送")]),
                                            _: 1,
                                          }
                                        ),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          e("div", Ne, [
                            Oe,
                            a(
                              _,
                              { name: "password" },
                              {
                                default: n(() => [
                                  a(
                                    h,
                                    {
                                      value: o.value.password,
                                      "onUpdate:value":
                                        d[3] ||
                                        (d[3] = (m) => (o.value.password = m)),
                                    },
                                    null,
                                    8,
                                    ["value"]
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          Ye,
                          e("div", null, [
                            e(
                              "p",
                              {
                                onClick: u,
                                class:
                                  "flex w-full cursor-pointer hover:opacity-85 justify-center rounded-md bg-[#0b7fe9] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                              },
                              " 立即重置"
                            ),
                          ]),
                          e("div", Ge, [
                            Je,
                            e(
                              "p",
                              {
                                onClick: d[4] || (d[4] = (m) => (g.value = 1)),
                                class: "cursor-pointer text-[#40a9ff]",
                              },
                              " 登 录"
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ["model"]
                ),
              ]),
            ],
            64
          )
        );
      };
    },
  },
  Qe = { class: "flex flex-1 h-screen items-center justify-center" },
  ze = { class: "flex-1 hidden h-full relative lg:flex p-5" },
  We = {
    class:
      "bg-[#1890ff] w-full h-full rounded-xl flex justify-center gap-8 flex-col items-center",
  },
  Xe = e("img", { alt: "", class: "max-w-[500px]", src: ae }, null, -1),
  Ze = { class: "text-center" },
  et = { class: "text-white text-[24px] font-black" },
  tt = e(
    "p",
    { class: "mt-4 text-white" },
    "High-speed network covering the whole world",
    -1
  ),
  st = { class: "text-white" },
  at = {
    class:
      "flex lg:w-[40%] w-full flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none",
  },
  lt = { class: "" },
  yt = {
    __name: "Home",
    setup(k) {
      const l = y(1),
        o = M(() => {
          var i;
          return {
            title: ((i = window.config) == null ? void 0 : i.title) || "FXQ",
          };
        }),
        g = q();
      return (
        Z(() => {
          const { query: i } = g.currentRoute.value;
          i && i.code && (l.value = 2);
        }),
        (i, u) => (
          p(),
          b("div", Qe, [
            e("div", ze, [
              e("div", We, [
                Xe,
                e("div", Ze, [
                  e(
                    "h4",
                    et,
                    "覆盖全球的高速网络，解锁所有网站从 " +
                      U(o.value.title) +
                      " 开始",
                    1
                  ),
                  tt,
                  e(
                    "p",
                    st,
                    // "Your high-speed journey starts with " + U(o.value.title),
                    "Unblock All websites with FXQ",
                    1
                  ),
                ]),
              ]),
            ]),
            e("div", at, [
              e("div", lt, [
                l.value === 1
                  ? (p(),
                    $(
                      fe,
                      {
                        key: 0,
                        page: l.value,
                        "onUpdate:page": u[0] || (u[0] = (t) => (l.value = t)),
                      },
                      null,
                      8,
                      ["page"]
                    ))
                  : l.value === 2
                  ? (p(),
                    $(
                      Ve,
                      {
                        key: 1,
                        page: l.value,
                        "onUpdate:page": u[1] || (u[1] = (t) => (l.value = t)),
                      },
                      null,
                      8,
                      ["page"]
                    ))
                  : l.value === 3
                  ? (p(),
                    $(
                      Ke,
                      {
                        key: 2,
                        page: l.value,
                        "onUpdate:page": u[2] || (u[2] = (t) => (l.value = t)),
                      },
                      null,
                      8,
                      ["page"]
                    ))
                  : C("", !0),
              ]),
            ]),
          ])
        )
      );
    },
  };
export { yt as default };
