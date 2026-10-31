import { Fragment as e, useId as t, useState as n } from "react";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
import "@xyflow/react/dist/style.css";
import { Background as o, ReactFlow as s } from "@xyflow/react";
var c = {
	p: "_p_1mohy_1",
	label: "_label_1mohy_9"
};
//#endregion
//#region src/dummy/Dummy.tsx
function l({ label: e }) {
	let [t, o] = n(0);
	return /* @__PURE__ */ a(r, { children: [
		/* @__PURE__ */ i("button", {
			onClick: () => o(t + 1),
			children: "+1"
		}),
		/* @__PURE__ */ a("p", {
			className: c.label,
			children: ["label = ", e]
		}),
		/* @__PURE__ */ a("p", {
			className: c.p,
			children: ["count = ", t]
		})
	] });
}
//#endregion
//#region src/layout/UI/Logo.tsx
function u({ size: e = 26 }) {
	let n = t();
	return /* @__PURE__ */ a("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 512 512",
		width: e,
		height: e,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ i("defs", { children: /* @__PURE__ */ a("linearGradient", {
				id: n,
				x1: "0%",
				y1: "0%",
				x2: "100%",
				y2: "100%",
				children: [/* @__PURE__ */ i("stop", {
					offset: "0%",
					stopColor: "#3567D6"
				}), /* @__PURE__ */ i("stop", {
					offset: "100%",
					stopColor: "#2850AD"
				})]
			}) }),
			/* @__PURE__ */ i("rect", {
				x: "0",
				y: "0",
				width: "512",
				height: "512",
				rx: "112",
				fill: `url(#${n})`
			}),
			/* @__PURE__ */ a("g", {
				stroke: "#FFFFFF",
				strokeOpacity: "0.55",
				strokeWidth: "14",
				strokeLinecap: "round",
				children: [
					/* @__PURE__ */ i("line", {
						x1: "160",
						y1: "150",
						x2: "256",
						y2: "256"
					}),
					/* @__PURE__ */ i("line", {
						x1: "352",
						y1: "150",
						x2: "256",
						y2: "256"
					}),
					/* @__PURE__ */ i("line", {
						x1: "150",
						y1: "352",
						x2: "256",
						y2: "256"
					}),
					/* @__PURE__ */ i("line", {
						x1: "360",
						y1: "356",
						x2: "256",
						y2: "256"
					})
				]
			}),
			/* @__PURE__ */ a("g", {
				fill: "#FFFFFF",
				children: [
					/* @__PURE__ */ i("circle", {
						cx: "160",
						cy: "150",
						r: "34"
					}),
					/* @__PURE__ */ i("circle", {
						cx: "352",
						cy: "150",
						r: "34"
					}),
					/* @__PURE__ */ i("circle", {
						cx: "150",
						cy: "352",
						r: "34"
					}),
					/* @__PURE__ */ i("circle", {
						cx: "360",
						cy: "356",
						r: "34"
					})
				]
			}),
			/* @__PURE__ */ i("circle", {
				cx: "256",
				cy: "256",
				r: "56",
				fill: "#F6F5F2"
			})
		]
	});
}
var d = {
	header: "_header_1jeah_1",
	title: "_title_1jeah_19",
	menuButton: "_menuButton_1jeah_37"
};
//#endregion
//#region src/layout/Header/Header.tsx
function f({ isSidebarOpen: e, onToggleSidebar: t, title: n = "UFDB GUI APP", logo: r = /* @__PURE__ */ i(u, {}) }) {
	return /* @__PURE__ */ a("header", {
		className: d.header,
		children: [
			/* @__PURE__ */ i("button", {
				type: "button",
				className: d.menuButton,
				onClick: t,
				"aria-label": "操作パネルの表示切り替え",
				"aria-pressed": e,
				children: "☰"
			}),
			r,
			/* @__PURE__ */ i("h1", {
				className: d.title,
				children: n
			})
		]
	});
}
var p = {
	sidePanel: "_sidePanel_czpv0_1",
	closed: "_closed_czpv0_27",
	row: "_row_czpv0_37",
	detailsContent: "_detailsContent_czpv0_39"
};
//#endregion
//#region src/layout/SidePanel/SidePanel.tsx
function m({ isOpen: e, children: t }) {
	return /* @__PURE__ */ i("aside", {
		className: `${p.sidePanel} ${e ? "" : p.closed}`,
		children: t
	});
}
var h = { button: "_button_a2nkt_1" };
//#endregion
//#region src/layout/UI/Button.tsx
function g({ text: e, type: t = "button", onClick: n }) {
	return /* @__PURE__ */ i("button", {
		className: h.button,
		type: t,
		onClick: n,
		children: e
	});
}
var _ = { input: "_input_1if7a_1" };
//#endregion
//#region src/layout/UI/Input.tsx
function v({ value: e, onChange: t, placeholder: n }) {
	return /* @__PURE__ */ i("input", {
		className: _.input,
		value: e,
		onChange: (e) => t(e.target.value),
		placeholder: n
	});
}
var y = {
	wrapper: "_wrapper_xhnes_1",
	form: "_form_xhnes_31",
	formTitle: "_formTitle_xhnes_41",
	row: "_row_xhnes_49"
};
//#endregion
//#region src/layout/InsertKeyForm/InsertKeyForm.tsx
function b({ onSubmit: e }) {
	let [t, r] = n("");
	return /* @__PURE__ */ i("div", {
		className: y.wrapper,
		children: /* @__PURE__ */ a("form", {
			className: y.form,
			onSubmit: (n) => {
				n.preventDefault(), e(t);
			},
			children: [
				/* @__PURE__ */ i("h3", {
					className: y.formTitle,
					children: "キーの挿入"
				}),
				/* @__PURE__ */ i("p", { children: "任意の文字列を入力しInsertしてください。右側に新たなキーが表示されます。既に存在しているキーを入力してInsertした場合は変化はありません。" }),
				/* @__PURE__ */ a("div", {
					className: y.row,
					children: [/* @__PURE__ */ i(v, {
						value: t,
						onChange: r,
						placeholder: "Enter a key..."
					}), /* @__PURE__ */ i(g, {
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
function x({ value: e, onChange: n, placeholder: o, options: s }) {
	let c = t(), l = s.flat().toSorted();
	return /* @__PURE__ */ a(r, { children: [/* @__PURE__ */ i("input", {
		list: c,
		value: e,
		onChange: (e) => n(e.target.value),
		placeholder: o
	}), /* @__PURE__ */ i("datalist", {
		id: c,
		children: l.map((e) => /* @__PURE__ */ i("option", { value: e }))
	})] });
}
var S = {
	form: "_form_18szc_1",
	formTitle: "_formTitle_18szc_11",
	row: "_row_18szc_19"
};
//#endregion
//#region src/layout/MergeForm/MergeForm.tsx
function C({ onSubmit: e, options: t }) {
	let [r, o] = n(""), [s, c] = n("");
	return /* @__PURE__ */ i("div", {
		className: S.wrapper,
		children: /* @__PURE__ */ a("form", {
			className: S.form,
			onSubmit: (t) => {
				t.preventDefault(), e(r, s);
			},
			children: [
				/* @__PURE__ */ i("h3", {
					className: S.formTitle,
					children: "マージ"
				}),
				/* @__PURE__ */ i("p", { children: "キーのうち、任意のものを2つ入力しMergeしてください。一つのグループに統合されます。" }),
				/* @__PURE__ */ i("p", { children: "存在しないキーを入力した場合、キーを新たに作成したうえで統合されます" }),
				/* @__PURE__ */ a("div", {
					className: S.row,
					children: [
						/* @__PURE__ */ i(x, {
							value: r,
							onChange: o,
							placeholder: "Enter a key...",
							options: t
						}),
						/* @__PURE__ */ i(x, {
							value: s,
							onChange: c,
							placeholder: "Enter a key...",
							options: t
						}),
						/* @__PURE__ */ i(g, {
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
var w = [
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
function T(e) {
	if (e.length === 0) return w[0];
	let t = [...e].sort()[0], n = 0;
	for (let e = 0; e < t.length; e++) {
		let r = t.charCodeAt(e);
		n = n * 31 + r | 0;
	}
	return w[(n >>> 0) % w.length];
}
var E = {
	groups: "_groups_1662l_1",
	group: "_group_1662l_1",
	node: "_node_1662l_29"
};
//#endregion
//#region src/layout/Groups/Groups.tsx
function D({ groups: e }) {
	return /* @__PURE__ */ i("div", {
		className: E.groups,
		children: e.map((e) => {
			let t = T(e);
			return /* @__PURE__ */ i("div", {
				style: { "--group-color": t },
				className: E.group,
				children: e.map((e) => /* @__PURE__ */ i("p", {
					className: E.node,
					children: e
				}, e))
			}, e[0]);
		})
	});
}
var O = {
	wrapper: "_wrapper_zfkdv_1",
	menu: "_menu_zfkdv_21",
	actions: "_actions_zfkdv_61",
	item: "_item_zfkdv_79",
	active: "_active_zfkdv_115",
	icon: "_icon_zfkdv_127",
	divider: "_divider_zfkdv_153",
	toggle: "_toggle_zfkdv_167",
	segment: "_segment_zfkdv_181",
	selected: "_selected_zfkdv_203",
	popover: "_popover_zfkdv_215",
	close: "_close_zfkdv_239",
	result: "_result_zfkdv_277"
};
//#endregion
//#region src/_components/layout/MenuPanel.tsx
function k({ children: e }) {
	return /* @__PURE__ */ i("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		children: e
	});
}
var A = [
	[{
		id: "insert",
		icon: /* @__PURE__ */ i(k, { children: /* @__PURE__ */ i("path", { d: "M12 5v14M5 12h14" }) }),
		label: "Insert"
	}, {
		id: "delete",
		icon: /* @__PURE__ */ i(k, { children: /* @__PURE__ */ i("path", { d: "M5 12h14" }) }),
		label: "Delete"
	}],
	[{
		id: "merge",
		icon: /* @__PURE__ */ i(k, { children: /* @__PURE__ */ i("path", { d: "M9 17H7A5 5 0 0 1 7 7h2M15 7h2a5 5 0 0 1 0 10h-2M8 12h8" }) }),
		label: "Merge"
	}, {
		id: "unmerge",
		icon: /* @__PURE__ */ i(k, { children: /* @__PURE__ */ i("path", { d: "M9 17H7A5 5 0 0 1 7 7M15 7h2a5 5 0 0 1 4 8M8 12h4M2 2l20 20" }) }),
		label: "Unmerge"
	}],
	[{
		id: "same",
		icon: /* @__PURE__ */ i(k, { children: /* @__PURE__ */ i("path", { d: "M5 9h14M5 15h14" }) }),
		label: "Same"
	}, {
		id: "size",
		icon: /* @__PURE__ */ i(k, { children: /* @__PURE__ */ i("path", { d: "M4 9h16M4 15h16M10 3 8 21M16 3l-2 18" }) }),
		label: "Size"
	}]
], j = ["row", "graph"];
function M({ active: t, onSelect: n, mode: r, onChangeMode: o, children: s }) {
	return /* @__PURE__ */ a("div", {
		className: O.wrapper,
		children: [/* @__PURE__ */ a("nav", {
			className: O.menu,
			children: [
				A.map((r, o) => /* @__PURE__ */ a(e, { children: [o > 0 && /* @__PURE__ */ i("hr", { className: O.divider }), /* @__PURE__ */ i("ul", {
					className: O.actions,
					children: r.map((e) => /* @__PURE__ */ i("li", { children: /* @__PURE__ */ a("button", {
						type: "button",
						className: `${O.item} ${t === e.id ? O.active : ""}`,
						"aria-pressed": t === e.id,
						onClick: () => n(t === e.id ? null : e.id),
						children: [/* @__PURE__ */ i("span", {
							className: O.icon,
							children: e.icon
						}), e.label]
					}) }, e.id))
				})] }, r[0].id)),
				/* @__PURE__ */ i("hr", { className: O.divider }),
				/* @__PURE__ */ i("div", {
					className: O.toggle,
					role: "group",
					"aria-label": "表示の切り替え",
					children: j.map((e) => /* @__PURE__ */ i("button", {
						type: "button",
						className: `${O.segment} ${r === e ? O.selected : ""}`,
						"aria-pressed": r === e,
						onClick: () => o(e),
						children: e
					}, e))
				})
			]
		}), t && /* @__PURE__ */ a("section", {
			className: O.popover,
			children: [/* @__PURE__ */ i("button", {
				type: "button",
				className: O.close,
				"aria-label": "閉じる",
				onClick: () => n(null),
				children: "×"
			}), s]
		})]
	});
}
var N = {
	wrapper: "_wrapper_10kdc_1",
	node: "_node_10kdc_11",
	label: "_label_10kdc_39",
	edge: "_edge_10kdc_71"
}, P = 80, F = 120, I = 20;
function L(e) {
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
		let s = e.flat(), c = Math.max(...e.map((e) => e.length)) * P;
		e.forEach((e, t) => {
			let n = e.length * P;
			e.forEach((e, a) => {
				r.push({
					key: e,
					x: i + (c - n) / 2 + a * P,
					y: t * F,
					group: s
				});
			});
		}), i += c + I;
	}
	return r;
}
//#endregion
//#region src/_components/views/Graph.tsx
function R({ graph: e }) {
	let t = L(e), n = new Map(t.map((e) => [e.key, T(e.group)])), r = L(e).map((e) => ({
		id: e.key,
		position: {
			x: e.x,
			y: e.y
		},
		data: { label: /* @__PURE__ */ i("span", {
			className: N.label,
			title: e.key,
			children: e.key
		}) },
		className: N.node,
		style: { "--group-color": n.get(e.key) }
	})), a = e.edges.map((e) => ({
		id: `${e.source}-${e.target}`,
		source: e.source,
		target: e.target,
		className: N.edge,
		type: "straight",
		style: { stroke: n.get(e.source) }
	}));
	return /* @__PURE__ */ i("div", {
		className: N.wrapper,
		children: /* @__PURE__ */ i(s, {
			nodes: r,
			edges: a,
			fitView: !0,
			children: /* @__PURE__ */ i(o, {})
		})
	});
}
//#endregion
export { g as Button, l as Dummy, R as Graph, D as Groups, f as Header, b as InsertKeyForm, u as Logo, M as MenuPanel, C as MergeForm, m as SidePanel, T as groupColor };
