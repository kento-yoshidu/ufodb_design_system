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
	header: "_header_1f90q_1",
	logo: "_logo_1f90q_19",
	title: "_title_1f90q_27",
	menuButton: "_menuButton_1f90q_45"
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
//#endregion
export { a as Dummy, s as Header };
