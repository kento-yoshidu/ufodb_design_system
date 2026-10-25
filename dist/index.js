import { useId as e, useState as t } from "react";
import { Fragment as n, jsx as r, jsxs as i } from "react/jsx-runtime";
import "@xyflow/react/dist/style.css";
import { Background as a, ReactFlow as o } from "@xyflow/react";
var s = {
	p: "_p_1mohy_1",
	label: "_label_1mohy_9"
};
//#endregion
//#region src/dummy/Dummy.tsx
function c({ label: e }) {
	let [a, o] = t(0);
	return /* @__PURE__ */ i(n, { children: [
		/* @__PURE__ */ r("button", {
			onClick: () => o(a + 1),
			children: "+1"
		}),
		/* @__PURE__ */ i("p", {
			className: s.label,
			children: ["label = ", e]
		}),
		/* @__PURE__ */ i("p", {
			className: s.p,
			children: ["count = ", a]
		})
	] });
}
//#endregion
//#region src/layout/UI/Logo.tsx
function l({ size: t = 26 }) {
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
var u = {
	header: "_header_1jeah_1",
	title: "_title_1jeah_19",
	menuButton: "_menuButton_1jeah_37"
};
//#endregion
//#region src/layout/Header/Header.tsx
function d({ isSidebarOpen: e, onToggleSidebar: t, title: n = "UFDB GUI APP", logo: a = /* @__PURE__ */ r(l, {}) }) {
	return /* @__PURE__ */ i("header", {
		className: u.header,
		children: [
			/* @__PURE__ */ r("button", {
				type: "button",
				className: u.menuButton,
				onClick: t,
				"aria-label": "操作パネルの表示切り替え",
				"aria-pressed": e,
				children: "☰"
			}),
			a,
			/* @__PURE__ */ r("h1", {
				className: u.title,
				children: n
			})
		]
	});
}
var f = {
	sidePanel: "_sidePanel_czpv0_1",
	closed: "_closed_czpv0_27",
	row: "_row_czpv0_37",
	detailsContent: "_detailsContent_czpv0_39"
};
//#endregion
//#region src/layout/SidePanel/SidePanel.tsx
function p({ isOpen: e, children: t }) {
	return /* @__PURE__ */ r("aside", {
		className: `${f.sidePanel} ${e ? "" : f.closed}`,
		children: t
	});
}
var m = { button: "_button_a2nkt_1" };
//#endregion
//#region src/layout/UI/Button.tsx
function h({ text: e, type: t = "button", onClick: n }) {
	return /* @__PURE__ */ r("button", {
		className: m.button,
		type: t,
		onClick: n,
		children: e
	});
}
var g = { input: "_input_1if7a_1" };
//#endregion
//#region src/layout/UI/Input.tsx
function _({ value: e, onChange: t, placeholder: n }) {
	return /* @__PURE__ */ r("input", {
		className: g.input,
		value: e,
		onChange: (e) => t(e.target.value),
		placeholder: n
	});
}
var v = {
	wrapper: "_wrapper_xhnes_1",
	form: "_form_xhnes_31",
	formTitle: "_formTitle_xhnes_41",
	row: "_row_xhnes_49"
};
//#endregion
//#region src/layout/InsertKeyForm/InsertKeyForm.tsx
function y({ onSubmit: e }) {
	let [n, a] = t("");
	return /* @__PURE__ */ r("div", {
		className: v.wrapper,
		children: /* @__PURE__ */ i("form", {
			className: v.form,
			onSubmit: (t) => {
				t.preventDefault(), e(n);
			},
			children: [
				/* @__PURE__ */ r("h3", {
					className: v.formTitle,
					children: "キーの挿入"
				}),
				/* @__PURE__ */ r("p", { children: "任意の文字列を入力しInsertしてください。右側に新たなキーが表示されます。既に存在しているキーを入力してInsertした場合は変化はありません。" }),
				/* @__PURE__ */ i("div", {
					className: v.row,
					children: [/* @__PURE__ */ r(_, {
						value: n,
						onChange: a,
						placeholder: "Enter a key..."
					}), /* @__PURE__ */ r(h, {
						text: "insert",
						type: "submit"
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/_components/ComboBox.tsx
function b({ value: t, onChange: a, placeholder: o, options: s }) {
	let c = e(), l = s.flat().toSorted();
	return /* @__PURE__ */ i(n, { children: [/* @__PURE__ */ r("input", {
		list: c,
		value: t,
		onChange: (e) => a(e.target.value),
		placeholder: o
	}), /* @__PURE__ */ r("datalist", {
		id: c,
		children: l.map((e) => /* @__PURE__ */ r("option", { value: e }))
	})] });
}
var x = {
	form: "_form_18szc_1",
	formTitle: "_formTitle_18szc_11",
	row: "_row_18szc_19"
};
//#endregion
//#region src/layout/MergeForm/MergeForm.tsx
function S({ onSubmit: e, options: n }) {
	let [a, o] = t(""), [s, c] = t("");
	return /* @__PURE__ */ r("div", {
		className: x.wrapper,
		children: /* @__PURE__ */ i("form", {
			className: x.form,
			onSubmit: (t) => {
				t.preventDefault(), e(a, s);
			},
			children: [
				/* @__PURE__ */ r("h3", {
					className: x.formTitle,
					children: "マージ"
				}),
				/* @__PURE__ */ r("p", { children: "キーのうち、任意のものを2つ入力しMergeしてください。一つのグループに統合されます。" }),
				/* @__PURE__ */ r("p", { children: "存在しないキーを入力した場合、キーを新たに作成したうえで統合されます" }),
				/* @__PURE__ */ i("div", {
					className: x.row,
					children: [
						/* @__PURE__ */ r(b, {
							value: a,
							onChange: o,
							placeholder: "Enter a key...",
							options: n
						}),
						/* @__PURE__ */ r(b, {
							value: s,
							onChange: c,
							placeholder: "Enter a key...",
							options: n
						}),
						/* @__PURE__ */ r(h, {
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
var C = [
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
function w(e) {
	if (e.length === 0) return C[0];
	let t = [...e].sort()[0], n = 0;
	for (let e = 0; e < t.length; e++) {
		let r = t.charCodeAt(e);
		n = n * 31 + r | 0;
	}
	return C[(n >>> 0) % C.length];
}
var T = {
	groups: "_groups_1662l_1",
	group: "_group_1662l_1",
	node: "_node_1662l_29"
};
//#endregion
//#region src/layout/Groups/Groups.tsx
function E({ groups: e }) {
	return /* @__PURE__ */ r("div", {
		className: T.groups,
		children: e.map((e) => {
			let t = w(e);
			return /* @__PURE__ */ r("div", {
				style: { "--group-color": t },
				className: T.group,
				children: e.map((e) => /* @__PURE__ */ r("p", {
					className: T.node,
					children: e
				}, e))
			}, e[0]);
		})
	});
}
var D = {
	wrapper: "_wrapper_wd859_1",
	menu: "_menu_wd859_21",
	actions: "_actions_wd859_61",
	item: "_item_wd859_79",
	active: "_active_wd859_115",
	icon: "_icon_wd859_127",
	divider: "_divider_wd859_139",
	toggle: "_toggle_wd859_153",
	segment: "_segment_wd859_167",
	selected: "_selected_wd859_189",
	popover: "_popover_wd859_201",
	close: "_close_wd859_225",
	result: "_result_wd859_263"
}, O = [
	{
		id: "insert",
		icon: "+",
		label: "Insert"
	},
	{
		id: "merge",
		icon: "⇄",
		label: "Merge"
	},
	{
		id: "same",
		icon: "=",
		label: "Same"
	}
], k = ["row", "graph"];
function A({ active: e, onSelect: t, mode: n, onChangeMode: a, children: o }) {
	return /* @__PURE__ */ i("div", {
		className: D.wrapper,
		children: [/* @__PURE__ */ i("nav", {
			className: D.menu,
			children: [
				/* @__PURE__ */ r("ul", {
					className: D.actions,
					children: O.map((n) => /* @__PURE__ */ r("li", { children: /* @__PURE__ */ i("button", {
						type: "button",
						className: `${D.item} ${e === n.id ? D.active : ""}`,
						"aria-pressed": e === n.id,
						onClick: () => t(e === n.id ? null : n.id),
						children: [/* @__PURE__ */ r("span", {
							className: D.icon,
							children: n.icon
						}), n.label]
					}) }, n.id))
				}),
				/* @__PURE__ */ r("hr", { className: D.divider }),
				/* @__PURE__ */ r("div", {
					className: D.toggle,
					role: "group",
					"aria-label": "表示の切り替え",
					children: k.map((e) => /* @__PURE__ */ r("button", {
						type: "button",
						className: `${D.segment} ${n === e ? D.selected : ""}`,
						"aria-pressed": n === e,
						onClick: () => a(e),
						children: e
					}, e))
				})
			]
		}), e && /* @__PURE__ */ i("section", {
			className: D.popover,
			children: [/* @__PURE__ */ r("button", {
				type: "button",
				className: D.close,
				"aria-label": "閉じる",
				onClick: () => t(null),
				children: "×"
			}), o]
		})]
	});
}
var j = {
	wrapper: "_wrapper_10kdc_1",
	node: "_node_10kdc_11",
	label: "_label_10kdc_39",
	edge: "_edge_10kdc_71"
}, M = 80, N = 120, P = 20;
function F(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.nodes) t.set(n, []);
	for (let { source: n, target: r } of e.edges) t.get(n).push(r), t.get(r).push(n);
	let n = /* @__PURE__ */ new Set(), r = [], i = 0;
	for (let a of e.nodes) {
		if (n.has(a)) continue;
		let e = [], o = [a];
		for (n.add(a); o.length > 0;) {
			e.push(o);
			let r = [];
			for (let e of o) for (let i of t.get(e)) n.has(i) || (n.add(i), r.push(i));
			o = r;
		}
		let s = e.flat(), c = Math.max(...e.map((e) => e.length)) * M;
		e.forEach((e, t) => {
			let n = e.length * M;
			e.forEach((e, a) => {
				r.push({
					key: e,
					x: i + (c - n) / 2 + a * M,
					y: t * N,
					group: s
				});
			});
		}), i += c + P;
	}
	return r;
}
//#endregion
//#region src/_components/views/Graph.tsx
function I({ graph: e }) {
	let t = F(e), n = new Map(t.map((e) => [e.key, w(e.group)])), i = F(e).map((e) => ({
		id: e.key,
		position: {
			x: e.x,
			y: e.y
		},
		data: { label: /* @__PURE__ */ r("span", {
			className: j.label,
			title: e.key,
			children: e.key
		}) },
		className: j.node,
		style: { "--group-color": n.get(e.key) }
	})), s = e.edges.map((e) => ({
		id: `${e.source}-${e.target}`,
		source: e.source,
		target: e.target,
		className: j.edge,
		type: "straight",
		style: { stroke: n.get(e.source) }
	}));
	return /* @__PURE__ */ r("div", {
		className: j.wrapper,
		children: /* @__PURE__ */ r(o, {
			nodes: i,
			edges: s,
			fitView: !0,
			children: /* @__PURE__ */ r(a, {})
		})
	});
}
//#endregion
export { h as Button, c as Dummy, I as Graph, E as Groups, d as Header, y as InsertKeyForm, l as Logo, A as MenuPanel, S as MergeForm, p as SidePanel, w as groupColor };
