import { useId as e, useState as t } from "react";
import { Fragment as n, jsx as r, jsxs as i } from "react/jsx-runtime";
var a = {
	p: "_p_1mohy_1",
	label: "_label_1mohy_9"
};
//#endregion
//#region src/dummy/Dummy.tsx
function o({ label: e }) {
	let [o, s] = t(0);
	return /* @__PURE__ */ i(n, { children: [
		/* @__PURE__ */ r("button", {
			onClick: () => s(o + 1),
			children: "+1"
		}),
		/* @__PURE__ */ i("p", {
			className: a.label,
			children: ["label = ", e]
		}),
		/* @__PURE__ */ i("p", {
			className: a.p,
			children: ["count = ", o]
		})
	] });
}
//#endregion
//#region src/layout/UI/Logo.tsx
function s({ size: t = 26 }) {
	let n = e();
	return /* @__PURE__ */ i("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 512 512",
		width: t,
		height: t,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ r("defs", { children: /* @__PURE__ */ i("linearGradient", {
				id: n,
				x1: "0%",
				y1: "0%",
				x2: "100%",
				y2: "100%",
				children: [/* @__PURE__ */ r("stop", {
					offset: "0%",
					stopColor: "#3567D6"
				}), /* @__PURE__ */ r("stop", {
					offset: "100%",
					stopColor: "#2850AD"
				})]
			}) }),
			/* @__PURE__ */ r("rect", {
				x: "0",
				y: "0",
				width: "512",
				height: "512",
				rx: "112",
				fill: `url(#${n})`
			}),
			/* @__PURE__ */ i("g", {
				stroke: "#FFFFFF",
				strokeOpacity: "0.55",
				strokeWidth: "14",
				strokeLinecap: "round",
				children: [
					/* @__PURE__ */ r("line", {
						x1: "160",
						y1: "150",
						x2: "256",
						y2: "256"
					}),
					/* @__PURE__ */ r("line", {
						x1: "352",
						y1: "150",
						x2: "256",
						y2: "256"
					}),
					/* @__PURE__ */ r("line", {
						x1: "150",
						y1: "352",
						x2: "256",
						y2: "256"
					}),
					/* @__PURE__ */ r("line", {
						x1: "360",
						y1: "356",
						x2: "256",
						y2: "256"
					})
				]
			}),
			/* @__PURE__ */ i("g", {
				fill: "#FFFFFF",
				children: [
					/* @__PURE__ */ r("circle", {
						cx: "160",
						cy: "150",
						r: "34"
					}),
					/* @__PURE__ */ r("circle", {
						cx: "352",
						cy: "150",
						r: "34"
					}),
					/* @__PURE__ */ r("circle", {
						cx: "150",
						cy: "352",
						r: "34"
					}),
					/* @__PURE__ */ r("circle", {
						cx: "360",
						cy: "356",
						r: "34"
					})
				]
			}),
			/* @__PURE__ */ r("circle", {
				cx: "256",
				cy: "256",
				r: "56",
				fill: "#F6F5F2"
			})
		]
	});
}
var c = {
	header: "_header_r5eps_1",
	title: "_title_r5eps_19",
	menuButton: "_menuButton_r5eps_37"
};
//#endregion
//#region src/layout/Header/Header.tsx
function l({ isSidebarOpen: e, onToggleSidebar: t, title: n = "UFDB GUI APP", logo: a = /* @__PURE__ */ r(s, {}) }) {
	return /* @__PURE__ */ i("header", {
		className: c.header,
		children: [
			/* @__PURE__ */ r("button", {
				type: "button",
				className: c.menuButton,
				onClick: t,
				"aria-label": "操作パネルの表示切り替え",
				"aria-pressed": e,
				children: "☰"
			}),
			a,
			/* @__PURE__ */ r("h1", {
				className: c.title,
				children: n
			})
		]
	});
}
var u = {
	sidePanel: "_sidePanel_czpv0_1",
	closed: "_closed_czpv0_27",
	row: "_row_czpv0_37",
	detailsContent: "_detailsContent_czpv0_39"
};
//#endregion
//#region src/layout/SidePanel/SidePanel.tsx
function d({ isOpen: e, children: t }) {
	return /* @__PURE__ */ r("aside", {
		className: `${u.sidePanel} ${e ? "" : u.closed}`,
		children: t
	});
}
var f = { button: "_button_a2nkt_1" };
//#endregion
//#region src/layout/UI/Button.tsx
function p({ text: e, type: t = "button", onClick: n }) {
	return /* @__PURE__ */ r("button", {
		className: f.button,
		type: t,
		onClick: n,
		children: e
	});
}
var m = { input: "_input_1if7a_1" };
//#endregion
//#region src/layout/UI/Input.tsx
function h({ value: e, onChange: t, placeholder: n }) {
	return /* @__PURE__ */ r("input", {
		className: m.input,
		value: e,
		onChange: (e) => t(e.target.value),
		placeholder: n
	});
}
var g = {
	wrapper: "_wrapper_xhnes_1",
	form: "_form_xhnes_31",
	formTitle: "_formTitle_xhnes_41",
	row: "_row_xhnes_49"
};
//#endregion
//#region src/layout/InsertKeyForm/InsertKeyForm.tsx
function _({ onSubmit: e }) {
	let [n, a] = t("");
	return /* @__PURE__ */ r("div", {
		className: g.wrapper,
		children: /* @__PURE__ */ i("form", {
			className: g.form,
			onSubmit: (t) => {
				t.preventDefault(), e(n);
			},
			children: [
				/* @__PURE__ */ r("h3", {
					className: g.formTitle,
					children: "キーの挿入"
				}),
				/* @__PURE__ */ r("p", { children: "任意の文字列を入力しInsertしてください。右側に新たなキーが表示されます。既に存在しているキーを入力してInsertした場合は変化はありません。" }),
				/* @__PURE__ */ i("div", {
					className: g.row,
					children: [/* @__PURE__ */ r(h, {
						value: n,
						onChange: a,
						placeholder: "Enter a key..."
					}), /* @__PURE__ */ r(p, {
						text: "insert",
						type: "submit"
					})]
				})
			]
		})
	});
}
var v = {
	form: "_form_18szc_1",
	formTitle: "_formTitle_18szc_11",
	row: "_row_18szc_19"
};
//#endregion
//#region src/layout/MergeForm/MergeForm.tsx
function y({ onSubmit: e }) {
	let [n, a] = t(""), [o, s] = t("");
	return /* @__PURE__ */ r("div", {
		className: v.wrapper,
		children: /* @__PURE__ */ i("form", {
			className: v.form,
			onSubmit: (t) => {
				t.preventDefault(), e(n, o);
			},
			children: [
				/* @__PURE__ */ r("h3", {
					className: v.formTitle,
					children: "マージ"
				}),
				/* @__PURE__ */ r("p", { children: "キーのうち、任意のものを2つ入力しMergeしてください。一つのグループに統合されます。" }),
				/* @__PURE__ */ r("p", { children: "存在しないキーを入力した場合、キーを新たに作成したうえで統合されます" }),
				/* @__PURE__ */ i("div", {
					className: v.row,
					children: [
						/* @__PURE__ */ r(h, {
							value: n,
							onChange: a,
							placeholder: "Enter a key..."
						}),
						/* @__PURE__ */ r(h, {
							value: o,
							onChange: s,
							placeholder: "Enter a key..."
						}),
						/* @__PURE__ */ r(p, {
							text: "Merge",
							type: "submit"
						})
					]
				})
			]
		})
	});
}
//#endregion
//#region src/styles/groupPalette.ts
var b = [
	"#f87171",
	"#fb923c",
	"#facc15",
	"#4ade80",
	"#2dd4bf",
	"#38bdf8",
	"#818cf8",
	"#c084fc"
];
//#endregion
//#region src/util/groupColor.ts
function x(e) {
	if (e.length === 0) return b[0];
	let t = [...e].sort()[0], n = 0;
	for (let e = 0; e < t.length; e++) {
		let r = t.charCodeAt(e);
		n = n * 31 + r | 0;
	}
	return b[(n >>> 0) % b.length];
}
var S = {
	groups: "_groups_1662l_1",
	group: "_group_1662l_1",
	node: "_node_1662l_29"
};
//#endregion
//#region src/layout/Groups/Groups.tsx
function C({ groups: e }) {
	return /* @__PURE__ */ r("div", {
		className: S.groups,
		children: e.map((e) => {
			let t = x(e);
			return /* @__PURE__ */ r("div", {
				style: { "--group-color": t },
				className: S.group,
				children: e.map((e) => /* @__PURE__ */ r("p", {
					className: S.node,
					children: e
				}, e))
			}, e[0]);
		})
	});
}
//#endregion
export { p as Button, o as Dummy, C as Groups, l as Header, _ as InsertKeyForm, s as Logo, y as MergeForm, d as SidePanel };
