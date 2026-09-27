import { useState as e } from "react";
import { Fragment as t, jsx as n, jsxs as r } from "react/jsx-runtime";
var i = {
	p: "_p_1mohy_1",
	label: "_label_1mohy_9"
};
//#endregion
//#region src/dummy/Dummy.tsx
function a({ label: a }) {
	let [o, s] = e(0);
	return /* @__PURE__ */ r(t, { children: [
		/* @__PURE__ */ n("button", {
			onClick: () => s(o + 1),
			children: "+1"
		}),
		/* @__PURE__ */ r("p", {
			className: i.label,
			children: ["label = ", a]
		}),
		/* @__PURE__ */ r("p", {
			className: i.p,
			children: ["count = ", o]
		})
	] });
}
var o = {
	header: "_header_n36zy_1",
	logo: "_logo_n36zy_19",
	title: "_title_n36zy_27",
	menuButton: "_menuButton_n36zy_45"
};
//#endregion
//#region src/layout/Header/Header.tsx
function s({ isSidebarOpen: e, onToggleSidebar: t }) {
	return /* @__PURE__ */ r("header", {
		className: o.header,
		children: [
			/* @__PURE__ */ n("button", {
				type: "button",
				className: o.menuButton,
				onClick: t,
				"aria-label": "操作パネルの表示切り替え",
				"aria-pressed": e,
				children: "☰"
			}),
			/* @__PURE__ */ n("img", {
				src: "/app-icon.svg",
				className: o.logo,
				alt: "UFDB GUI APPのロゴ"
			}),
			/* @__PURE__ */ n("h1", {
				className: o.title,
				children: "UFDB GUI APP"
			})
		]
	});
}
var c = {
	sidePanel: "_sidePanel_xuezp_1",
	closed: "_closed_xuezp_35",
	row: "_row_xuezp_51",
	detailsContent: "_detailsContent_xuezp_53"
};
//#endregion
//#region src/layout/SidePanel/SidePanel.tsx
function l({ isOpen: e, children: t }) {
	return /* @__PURE__ */ n("aside", {
		className: `${c.sidePanel} ${e ? "" : c.closed}`,
		children: t
	});
}
var u = { wrapper: "_wrapper_1p6sj_1" }, d = { button: "_button_a2nkt_1" };
//#endregion
//#region src/layout/UI/Button.tsx
function f({ text: e, type: t = "button", onClick: r }) {
	return /* @__PURE__ */ n("button", {
		className: d.button,
		type: t,
		onClick: r,
		children: e
	});
}
var p = { input: "_input_1if7a_1" };
//#endregion
//#region src/layout/UI/Input.tsx
function m({ value: e, onChange: t, placeholder: r }) {
	return /* @__PURE__ */ n("input", {
		className: p.input,
		value: e,
		onChange: (e) => t(e.target.value),
		placeholder: r
	});
}
//#endregion
//#region src/layout/InsertKeyForm/InsertKeyForm.tsx
function h({ onSubmit: t }) {
	let [i, a] = e("");
	return /* @__PURE__ */ n("div", {
		className: u.wrapper,
		children: /* @__PURE__ */ r("form", {
			className: u.form,
			children: [/* @__PURE__ */ n(m, {
				value: i,
				onChange: a,
				placeholder: "Enter a key..."
			}), /* @__PURE__ */ n(f, {
				text: "insert",
				type: "submit",
				onClick: () => t(i)
			})]
		})
	});
}
//#endregion
//#region src/layout/MergeForm/mergeForm.module.css
var g = {};
//#endregion
//#region src/layout/MergeForm/MergeForm.tsx
function _({ onSubmit: t }) {
	let [i, a] = e(""), [o, s] = e("");
	return /* @__PURE__ */ n("div", {
		className: g.wrapper,
		children: /* @__PURE__ */ r("form", {
			className: g.form,
			onSubmit: (e) => {
				e.preventDefault(), t(i, o);
			},
			children: [
				/* @__PURE__ */ n("input", {
					value: i,
					onChange: (e) => a(e.currentTarget.value),
					placeholder: "Enter a key..."
				}),
				/* @__PURE__ */ n("input", {
					value: o,
					onChange: (e) => s(e.currentTarget.value),
					placeholder: "Enter a key..."
				}),
				/* @__PURE__ */ n("button", {
					type: "submit",
					children: "Merge"
				})
			]
		})
	});
}
//#endregion
export { f as Button, a as Dummy, s as Header, h as InsertKeyForm, _ as MergeForm, l as SidePanel };
