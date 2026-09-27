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
	sidePanel: "_sidePanel_x5awn_1",
	closed: "_closed_x5awn_35",
	row: "_row_x5awn_51",
	detailsContent: "_detailsContent_x5awn_53"
};
//#endregion
//#region src/layout/SidePanel/SidePanel.tsx
function l({ isOpen: e, keyValue: t, setKey: i, keyA: a, setKeyA: o, keyB: s, setKeyB: l, insert: u, handleMerge: d }) {
	return /* @__PURE__ */ r("aside", {
		className: `${c.sidePanel} ${e ? "" : c.closed}`,
		children: [/* @__PURE__ */ r("section", {
			className: "panel",
			children: [/* @__PURE__ */ n("h2", {
				className: "panel__title",
				children: "キーを追加"
			}), /* @__PURE__ */ r("form", {
				className: c.row,
				onSubmit: (e) => {
					e.preventDefault(), u();
				},
				children: [/* @__PURE__ */ n("input", {
					value: t,
					onChange: (e) => i(e.currentTarget.value),
					placeholder: "Enter a key..."
				}), /* @__PURE__ */ n("button", {
					type: "submit",
					children: "Insert"
				})]
			})]
		}), /* @__PURE__ */ n("section", {
			className: "panel",
			children: /* @__PURE__ */ r("div", {
				className: c.detailsContent,
				children: [
					/* @__PURE__ */ n("input", {
						value: a,
						onChange: (e) => o(e.currentTarget.value),
						placeholder: "Enter a key..."
					}),
					/* @__PURE__ */ n("input", {
						value: s,
						onChange: (e) => l(e.currentTarget.value),
						placeholder: "Enter a key..."
					}),
					/* @__PURE__ */ n("button", {
						type: "button",
						onClick: d,
						children: "Merge"
					})
				]
			})
		})]
	});
}
//#endregion
export { a as Dummy, s as Header, l as SidePanel };
