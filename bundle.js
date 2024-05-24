(() => {
  
  const e = {
      11: (e, t, r) => {
        r.d(t, { A: () => c });
        const n = r(601);
          const o = r.n(n);
          const a = r(314);
          const i = r.n(a)()(o());
        i.push([
          e.id,
          '*{margin:0;padding:0;box-sizing:border-box}:root{--dark-clr: #1d1b3f;--white-clr: #e0cfec;--prim-clr: 154, 154, 215;--sec-clr: #cfcfec;--cards: 4;--card-border: 0.33;--cardTopPadding: 2em;--cardMargin: 4vw}.di-inline{display:inline}.satisfy-regular{font-family:"Satisfy",cursive;font-weight:400;font-style:normal}.roboto-regular{font-family:"Roboto",sans-serif;font-weight:400;font-style:normal}.centered{text-align:center}.uppercase{text-transform:uppercase}.text-white{color:var(--white-clr)}.text-sec{color:var(--sec-clr)}.flex{display:flex;gap:.5rem;align-items:center}.just-con{justify-content:center}body{background-color:var(--dark-clr)}header{position:relative;padding-bottom:1rem;width:100%}header svg{max-width:100%;height:100%}.parralax-projects{z-index:-1;animation:fadeIn 1.5s ease-in-out}h1{height:100%;position:absolute;top:0%;transform:translate(0%, 25%);width:100%;font-size:clamp(16px,1.5rem + 2vw,80px);text-align:center;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.intro-container{width:50%;min-width:240px;margin:0 auto;font-size:16px}.intro-container h2{font-size:2.5em;color:rgb(var(--prim-clr))}.intro-container p{padding:1em;font-size:1.75em;line-height:2em}.icons-bar{display:flex;justify-content:center;flex-wrap:wrap;padding:1.5em;gap:1em}.icons-bar svg{max-width:64px}.projects-container{margin:0 auto;width:90%;display:flex;grid-auto-columns:auto;gap:1rem;flex-direction:column;justify-content:center;align-items:center}.projects-container .project__icons-bar{height:32px;width:100%}.projects-container .project__icons-bar svg{width:24px}#cards{font-size:16px;list-style:none;padding-left:0;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(var(--cards), var(--cardHeight));gap:var(--cardMargin);padding-bottom:calc(var(--cards)*var(--cardTopPadding));margin-bottom:var(--cardMargin);justify-items:center}#card1{--index: 1}#card2{--index: 2}#card3{--index: 3}#card4{--index: 4}#project4{background-color:#483d8b;aspect-ratio:1/1;border-radius:15px}.card{position:sticky;top:0;padding-top:calc(var(--index)*var(--cardTopPadding))}.card-body{background-color:#2e2857;border:1px solid rgb(var(--prim-clr), var(--card-border));max-width:350px;padding:0 30px;border-radius:15px;box-shadow:0 0 30px 0 rgba(0,0,0,.3);height:30em;display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;transition:all .5s}.card-body .img-container{width:100%;height:50%;aspect-ratio:1/1}.card-body .img-container img{border-radius:15px;width:100%;height:100%;object-fit:cover}.card-body p{padding-bottom:.5em;color:#fff;font-size:1.125em}.card-body .project-title{color:#fff;font-size:1.75em}footer{position:relative;height:350px;width:100%;display:flex;align-items:flex-end;justify-content:center}footer>svg{width:100%;height:100%}footer .footer-content{height:100%;width:100%;position:absolute;padding-bottom:2rem;display:flex;justify-content:space-around;height:max-content;flex-wrap:wrap}footer .footer-content .footer__icons-bar{align-self:end;padding:1em 0}footer .contact{display:flex;gap:.5em;flex-direction:column;height:min-content;align-self:center;padding-left:1rem;padding-right:1rem;font-size:21px}footer .contact h3{font-size:clamp(1.25em,2vw + 2vh,2em)}footer .contact p{color:var(--dark-clr);font-size:clamp(.75em,1.25vw + 1.25vh,1em)}@media screen and (max-width: 570px){.intro-container{font-size:8px}.intro-container p{font-size:2em}footer .footer-content h3{align-self:center}footer .footer-content .footer__icons-bar{padding-bottom:0}}@media screen and (min-width: 571px){.intro-container{font-size:16px}}',
          '',
        ]);
        const c = i;
      },
      314: (e) => {
        e.exports = function (e) {
          const t = [];
          return (
            (t.toString = function () {
              return this.map((t) => {
                let r = '';
                  const n = void 0 !== t[5];
                return (
                  t[4] && (r += '@supports ('.concat(t[4], ') {')),
                  t[2] && (r += '@media '.concat(t[2], ' {')),
                  n &&
                    (r += '@layer'.concat(
                      t[5].length > 0 ? ' '.concat(t[5]) : '',
                      ' {'
                    )),
                  (r += e(t)),
                  n && (r += '}'),
                  t[2] && (r += '}'),
                  t[4] && (r += '}'),
                  r
                );
              }).join('');
            }),
            (t.i = function (e, r, n, o, a) {
              typeof e === 'string' && (e = [[null, e, void 0]]);
              const i = {};
              if (n)
                for (let c = 0; c < this.length; c++) {
                  const d = this[c][0];
                  d != null && (i[d] = !0);
                }
              for (let s = 0; s < e.length; s++) {
                const p = [].concat(e[s]);
                (n && i[p[0]]) ||
                  (void 0 !== a &&
                    (void 0 === p[5] ||
                      (p[1] = '@layer'
                        .concat(p[5].length > 0 ? ' '.concat(p[5]) : '', ' {')
                        .concat(p[1], '}')),
                    (p[5] = a)),
                  r &&
                    (p[2]
                      ? ((p[1] = '@media '
                          .concat(p[2], ' {')
                          .concat(p[1], '}')),
                        (p[2] = r))
                      : (p[2] = r)),
                  o &&
                    (p[4]
                      ? ((p[1] = '@supports ('
                          .concat(p[4], ') {')
                          .concat(p[1], '}')),
                        (p[4] = o))
                      : (p[4] = ''.concat(o))),
                  t.push(p));
              }
            }),
            t
          );
        };
      },
      601: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      72: (e) => {
        const t = [];
        function r(e) {
          for (var r = -1, n = 0; n < t.length; n++)
            if (t[n].identifier === e) {
              r = n;
              break;
            }
          return r;
        }
        function n(e, n) {
          for (var a = {}, i = [], c = 0; c < e.length; c++) {
            const d = e[c];
              const s = n.base ? d[0] + n.base : d[0];
              const p = a[s] || 0;
              const l = ''.concat(s, ' ').concat(p);
            a[s] = p + 1;
            const f = r(l);
              const u = {
                css: d[1],
                media: d[2],
                sourceMap: d[3],
                supports: d[4],
                layer: d[5],
              };
            if (f !== -1) t[f].references++, t[f].updater(u);
            else {
              const m = o(u, n);
              (n.byIndex = c),
                t.splice(c, 0, { identifier: l, updater: m, references: 1 });
            }
            i.push(l);
          }
          return i;
        }
        function o(e, t) {
          const r = t.domAPI(t);
          return (
            r.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                r.update((e = t));
              } else r.remove();
            }
          );
        }
        e.exports = function (e, o) {
          let a = n((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (let i = 0; i < a.length; i++) {
              const c = r(a[i]);
              t[c].references--;
            }
            for (var d = n(e, o), s = 0; s < a.length; s++) {
              const p = r(a[s]);
              t[p].references === 0 && (t[p].updater(), t.splice(p, 1));
            }
            a = d;
          };
        };
      },
      659: (e) => {
        const t = {};
        e.exports = function (e, r) {
          const n = (function (e) {
            if (void 0 === t[e]) {
              let r = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head;
                } catch (e) {
                  r = null;
                }
              t[e] = r;
            }
            return t[e];
          })(e);
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          n.appendChild(r);
        };
      },
      540: (e) => {
        e.exports = function (e) {
          const t = document.createElement('style');
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      56: (e, t, r) => {
        e.exports = function (e) {
          const t = r.nc;
          t && e.setAttribute('nonce', t);
        };
      },
      825: (e) => {
        e.exports = function (e) {
          if (typeof document === 'undefined')
            return { update () {}, remove () {} };
          const t = e.insertStyleElement(e);
          return {
            update (r) {
              !(function (e, t, r) {
                let n = '';
                r.supports && (n += '@supports ('.concat(r.supports, ') {')),
                  r.media && (n += '@media '.concat(r.media, ' {'));
                const o = void 0 !== r.layer;
                o &&
                  (n += '@layer'.concat(
                    r.layer.length > 0 ? ' '.concat(r.layer) : '',
                    ' {'
                  )),
                  (n += r.css),
                  o && (n += '}'),
                  r.media && (n += '}'),
                  r.supports && (n += '}');
                const a = r.sourceMap;
                a &&
                  typeof btoa !== 'undefined' &&
                  (n +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      ' */'
                    )),
                  t.styleTagTransform(n, e, t.options);
              })(t, e, r);
            },
            remove () {
              !(function (e) {
                if (e.parentNode === null) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      113: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    };
    const t = {};
  function r(n) {
    const o = t[n];
    if (void 0 !== o) return o.exports;
    const a = (t[n] = { id: n, exports: {} });
    return e[n](a, a.exports, r), a.exports;
  }
  (r.n = (e) => {
    const t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (const n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.g = (function () {
      if (typeof globalThis === 'object') return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if (typeof window === 'object') return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      let e;
      r.g.importScripts && (e = `${r.g.location  }`);
      const t = r.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        const n = t.getElementsByTagName('script');
        if (n.length)
          for (let o = n.length - 1; o > -1 && (!e || !/^http(s?):/.test(e)); )
            e = n[o--].src;
      }
      if (!e)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (r.p = e);
    })(),
    (r.nc = void 0),
    (() => {
      const e = r(72);
        const t = r.n(e);
        const n = r(825);
        const o = r.n(n);
        const a = r(659);
        const i = r.n(a);
        const c = r(56);
        const d = r.n(c);
        const s = r(540);
        const p = r.n(s);
        const l = r(113);
        const f = r.n(l);
        const u = r(11);
        const m = {};
      (m.styleTagTransform = f()),
        (m.setAttributes = d()),
        (m.insert = i().bind(null, 'head')),
        (m.domAPI = o()),
        (m.insertStyleElement = p()),
        t()(u.A, m),
        u.A && u.A.locals && u.A.locals;
      const g = `${r.p  }7d1deda15db989ed6ff5.png`;
        const h = `${r.p  }bb186d2aa562294c7bd2.png`;
        const v = `${r.p  }ffa2699cf9d9355824de.png`;
        const x = new Image();
      x.src = g;
      const b = new Image();
      b.src = h;
      const y = new Image();
      (y.src = v),
        document.getElementById('project1').appendChild(x),
        document.getElementById('project2').appendChild(b),
        document.getElementById('project3').appendChild(y);
    })();
})();
