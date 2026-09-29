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
	sidePanel: "_sidePanel_1f6l4_1",
	closed: "_closed_1f6l4_33",
	row: "_row_1f6l4_49",
	detailsContent: "_detailsContent_1f6l4_51"
};
//#endregion
//#region src/layout/SidePanel/SidePanel.tsx
function l({ isOpen: e, children: t }) {
	return /* @__PURE__ */ n("aside", {
		className: `${c.sidePanel} ${e ? "" : c.closed}`,
		children: t
	});
}
var u = { button: "_button_a2nkt_1" };
//#endregion
//#region src/layout/UI/Button.tsx
function d({ text: e, type: t = "button", onClick: r }) {
	return /* @__PURE__ */ n("button", {
		className: u.button,
		type: t,
		onClick: r,
		children: e
	});
}
var f = { input: "_input_1if7a_1" };
//#endregion
//#region src/layout/UI/Input.tsx
function p({ value: e, onChange: t, placeholder: r }) {
	return /* @__PURE__ */ n("input", {
		className: f.input,
		value: e,
		onChange: (e) => t(e.target.value),
		placeholder: r
	});
}
var m = { wrapper: "_wrapper_1p6sj_1" };
//#endregion
//#region src/layout/InsertKeyForm/InsertKeyForm.tsx
function h({ onSubmit: t }) {
	let [i, a] = e("");
	return /* @__PURE__ */ n("div", {
		className: m.wrapper,
		children: /* @__PURE__ */ r("form", {
			className: m.form,
			onSubmit: (e) => {
				e.preventDefault(), t(i);
			},
			children: [
				/* @__PURE__ */ n("h3", {
					className: m.formTitle,
					children: "キーの挿入"
				}),
				/* @__PURE__ */ n("p", { children: "任意の文字列を入力しInsertしてください。右側に新たなキーが表示されます。既に存在しているキーを入力してInsertした場合は変化はありません。" }),
				/* @__PURE__ */ n(p, {
					value: i,
					onChange: a,
					placeholder: "Enter a key..."
				}),
				/* @__PURE__ */ n(d, {
					text: "insert",
					type: "submit"
				})
			]
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
				/* @__PURE__ */ n("h3", {
					className: g.formTitle,
					children: "マージ"
				}),
				/* @__PURE__ */ n("p", { children: "キーのうち、任意のものを2つ入力しMergeしてください。一つのグループに統合されます。" }),
				/* @__PURE__ */ n("p", { children: "存在しないキーを入力した場合、キーを新新たに作成したうえで統合されます" }),
				/* @__PURE__ */ n(p, {
					value: i,
					onChange: a,
					placeholder: "Enter a key..."
				}),
				/* @__PURE__ */ n(p, {
					value: o,
					onChange: s,
					placeholder: "Enter a key..."
				}),
				/* @__PURE__ */ n(d, {
					text: "Merge",
					type: "submit"
				})
			]
		})
	});
}
var v = {
	groups: "_groups_10sjp_1",
	group: "_group_10sjp_1",
	node: "_node_10sjp_27"
};
//#endregion
//#region src/layout/Groups/Groups.tsx
function y({ groups: e }) {
	return /* @__PURE__ */ n("div", {
		className: v.groups,
		children: e.map((e) => /* @__PURE__ */ n("div", {
			className: v.group,
			children: e.map((e) => /* @__PURE__ */ n("p", {
				className: v.node,
				children: e
			}, e))
		}, e[0]))
	});
}
//#endregion
export { d as Button, a as Dummy, y as Groups, s as Header, h as InsertKeyForm, _ as MergeForm, l as SidePanel };
