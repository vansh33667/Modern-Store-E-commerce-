(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/auth-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Get user initial from name or email
 * @param user - User object with name and/or email
 * @returns First letter of name in uppercase, or first letter before @ in email
 */ __turbopack_context__.s([
    "getUserInitial",
    ()=>getUserInitial,
    "handleLogout",
    ()=>handleLogout
]);
function getUserInitial(name, email) {
    if (name && name.length > 0) {
        return name.charAt(0).toUpperCase();
    }
    if (email && email.length > 0) {
        const emailPrefix = email.split("@")[0];
        return emailPrefix.charAt(0).toUpperCase();
    }
    return "?";
}
function handleLogout(logoutFn, redirectUrl = "/") {
    logoutFn();
    setTimeout(()=>{
        window.location.href = redirectUrl;
    }, 100);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-lg leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/image-search-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageSearchModal",
    ()=>ImageSearchModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ImageSearchModal({ open, onClose, onImageSelected }) {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cameraActive, setCameraActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Handle file upload
    const handleFileUpload = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        // Validate file type
        if (![
            "image/jpeg",
            "image/png",
            "image/webp"
        ].includes(file.type)) {
            setError("Please upload JPG, PNG, or WEBP images only");
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const reader = new FileReader();
            reader.onload = (event)=>{
                const base64 = event.target?.result;
                setPreview(base64);
            };
            reader.readAsDataURL(file);
        } catch (err) {
            setError("Failed to load image");
        } finally{
            setLoading(false);
        }
    };
    // Start camera
    const startCamera = async ()=>{
        setError(null);
        setLoading(true);
        try {
            // Check camera support
            if (!navigator.mediaDevices?.getUserMedia) {
                setError("Camera not supported on this device or browser");
                setLoading(false);
                return;
            }
            // Request camera permissions
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: "environment"
                }
            });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                setCameraActive(true);
            }
        } catch (err) {
            if (err.name === "NotAllowedError") {
                setError("Camera permission denied. Please allow camera access to continue.");
            } else if (err.name === "NotFoundError") {
                setError("No camera found on this device");
            } else {
                setError("Failed to access camera");
            }
        } finally{
            setLoading(false);
        }
    };
    // Capture photo from camera
    const capturePhoto = ()=>{
        if (videoRef.current && canvasRef.current) {
            const context = canvasRef.current.getContext("2d");
            if (context) {
                canvasRef.current.width = videoRef.current.videoWidth;
                canvasRef.current.height = videoRef.current.videoHeight;
                context.drawImage(videoRef.current, 0, 0);
                const base64 = canvasRef.current.toDataURL("image/jpeg", 0.8);
                setPreview(base64);
                stopCamera();
            }
        }
    };
    // Stop camera
    const stopCamera = ()=>{
        if (videoRef.current?.srcObject) {
            const stream = videoRef.current.srcObject;
            stream.getTracks().forEach((track)=>track.stop());
        }
        setCameraActive(false);
    };
    // Submit image search
    const handleSubmit = ()=>{
        if (preview) {
            onImageSelected(preview);
            handleClose();
        }
    };
    // Close modal
    const handleClose = ()=>{
        stopCamera();
        setPreview(null);
        setError(null);
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: handleClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        children: "Search by Image"
                    }, void 0, false, {
                        fileName: "[project]/components/image-search-modal.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/image-search-modal.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this),
                preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full aspect-square rounded-lg overflow-hidden bg-muted",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: preview || "/placeholder.svg",
                                alt: "Preview",
                                className: "w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/components/image-search-modal.tsx",
                                lineNumber: 140,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/image-search-modal.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setPreview(null),
                                    className: "flex-1",
                                    children: "Choose Another Image"
                                }, void 0, false, {
                                    fileName: "[project]/components/image-search-modal.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleSubmit,
                                    className: "flex-1",
                                    children: "Search with This Image"
                                }, void 0, false, {
                                    fileName: "[project]/components/image-search-modal.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/image-search-modal.tsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/image-search-modal.tsx",
                    lineNumber: 138,
                    columnNumber: 11
                }, this) : cameraActive ? // Camera View
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full aspect-video rounded-lg overflow-hidden bg-black",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                ref: videoRef,
                                autoPlay: true,
                                playsInline: true,
                                className: "w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/components/image-search-modal.tsx",
                                lineNumber: 156,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/image-search-modal.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: stopCamera,
                                    className: "flex-1 bg-transparent",
                                    disabled: loading,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/image-search-modal.tsx",
                                    lineNumber: 160,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: capturePhoto,
                                    className: "flex-1",
                                    disabled: loading,
                                    children: [
                                        loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-4 h-4 animate-spin mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/image-search-modal.tsx",
                                            lineNumber: 164,
                                            columnNumber: 28
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/image-search-modal.tsx",
                                            lineNumber: 164,
                                            columnNumber: 80
                                        }, this),
                                        "Capture Photo"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/image-search-modal.tsx",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/image-search-modal.tsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/image-search-modal.tsx",
                    lineNumber: 154,
                    columnNumber: 11
                }, this) : // Initial Options
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/components/image-search-modal.tsx",
                            lineNumber: 173,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>fileInputRef.current?.click(),
                            disabled: loading,
                            className: "w-full p-4 border-2 border-dashed rounded-lg hover:bg-muted transition flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed",
                            children: [
                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "w-5 h-5 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/components/image-search-modal.tsx",
                                    lineNumber: 181,
                                    columnNumber: 26
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/image-search-modal.tsx",
                                    lineNumber: 181,
                                    columnNumber: 73
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: "Upload Image"
                                }, void 0, false, {
                                    fileName: "[project]/components/image-search-modal.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/image-search-modal.tsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: startCamera,
                            disabled: loading,
                            className: "w-full p-4 border-2 border-dashed rounded-lg hover:bg-muted transition flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed",
                            children: [
                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "w-5 h-5 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/components/image-search-modal.tsx",
                                    lineNumber: 190,
                                    columnNumber: 26
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/image-search-modal.tsx",
                                    lineNumber: 190,
                                    columnNumber: 73
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: "Open Camera"
                                }, void 0, false, {
                                    fileName: "[project]/components/image-search-modal.tsx",
                                    lineNumber: 191,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/image-search-modal.tsx",
                            lineNumber: 185,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: fileInputRef,
                            type: "file",
                            accept: "image/jpeg,image/png,image/webp",
                            onChange: handleFileUpload,
                            className: "hidden"
                        }, void 0, false, {
                            fileName: "[project]/components/image-search-modal.tsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/image-search-modal.tsx",
                    lineNumber: 171,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef,
                    className: "hidden"
                }, void 0, false, {
                    fileName: "[project]/components/image-search-modal.tsx",
                    lineNumber: 204,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/image-search-modal.tsx",
            lineNumber: 131,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/image-search-modal.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_s(ImageSearchModal, "jx59udV3AQy4w9hPbyhDWg8cqlA=");
_c = ImageSearchModal;
var _c;
__turbopack_context__.k.register(_c, "ImageSearchModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-voice-search.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVoiceSearch",
    ()=>useVoiceSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useVoiceSearch() {
    _s();
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [transcript, setTranscript] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const startListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoiceSearch.useCallback[startListening]": ()=>{
            if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
                setError("Speech Recognition not supported in your browser");
                return;
            }
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = true;
            recognitionRef.current.language = "en-US";
            recognitionRef.current.onstart = ({
                "useVoiceSearch.useCallback[startListening]": ()=>{
                    setIsListening(true);
                    setError(null);
                }
            })["useVoiceSearch.useCallback[startListening]"];
            recognitionRef.current.onresult = ({
                "useVoiceSearch.useCallback[startListening]": (event)=>{
                    let interimTranscript = "";
                    for(let i = event.resultIndex; i < event.results.length; i++){
                        const transcript = event.results[i][0].transcript;
                        if (event.results[i].isFinal) {
                            setTranscript(transcript);
                        } else {
                            interimTranscript += transcript;
                        }
                    }
                }
            })["useVoiceSearch.useCallback[startListening]"];
            recognitionRef.current.onerror = ({
                "useVoiceSearch.useCallback[startListening]": (event)=>{
                    setError(`Speech recognition error: ${event.error}`);
                }
            })["useVoiceSearch.useCallback[startListening]"];
            recognitionRef.current.onend = ({
                "useVoiceSearch.useCallback[startListening]": ()=>{
                    setIsListening(false);
                }
            })["useVoiceSearch.useCallback[startListening]"];
            recognitionRef.current.start();
        }
    }["useVoiceSearch.useCallback[startListening]"], []);
    const stopListening = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoiceSearch.useCallback[stopListening]": ()=>{
            if (recognitionRef.current) {
                recognitionRef.current.stop();
                setIsListening(false);
            }
        }
    }["useVoiceSearch.useCallback[stopListening]"], []);
    return {
        isListening,
        transcript,
        error,
        startListening,
        stopListening,
        setTranscript
    };
}
_s(useVoiceSearch, "IRKm2/ZmwVHEpOeUQ+aFPDMC7Vo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-in.js [app-client] (ecmascript) <export default as LogIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$image$2d$search$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/image-search-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$voice$2d$search$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-voice-search.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function Header({ cartCount = 0, wishlistCount = 0, onMenuClick = ()=>{} }) {
    _s();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { isAuthenticated, user, logout, isLoading, userType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [avatarOpen, setAvatarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imageSearchOpen, setImageSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isListening, transcript, startListening, stopListening } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$voice$2d$search$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceSearch"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (transcript && !isListening) {
                setSearchTerm(transcript);
            }
        }
    }["Header.useEffect"], [
        transcript,
        isListening
    ]);
    const handleSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Header.useCallback[handleSearch]": (e)=>{
            e?.preventDefault();
            if (searchTerm.trim()) {
                router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
            } else {
                router.push("/search");
            }
        }
    }["Header.useCallback[handleSearch]"], [
        searchTerm,
        router
    ]);
    const handleImageSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Header.useCallback[handleImageSearch]": (imageBase64)=>{
            router.push(`/search?image=true`);
        }
    }["Header.useCallback[handleImageSearch]"], [
        router
    ]);
    const handleLogout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Header.useCallback[handleLogout]": ()=>{
            setAvatarOpen(false);
            logout();
            setTimeout({
                "Header.useCallback[handleLogout]": ()=>{
                    const redirectUrl = userType === "customer" ? "/login/customer" : "/";
                    router.push(redirectUrl);
                }
            }["Header.useCallback[handleLogout]"], 100);
        }
    }["Header.useCallback[handleLogout]"], [
        logout,
        router,
        userType
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleClickOutside = {
                "Header.useEffect.handleClickOutside": (e)=>{
                    const target = e.target;
                    if (!target.closest("[data-avatar-menu]") && !target.closest("[data-avatar-button]")) {
                        setAvatarOpen(false);
                    }
                }
            }["Header.useEffect.handleClickOutside"];
            if (avatarOpen) {
                document.addEventListener("click", handleClickOutside);
                return ({
                    "Header.useEffect": ()=>document.removeEventListener("click", handleClickOutside)
                })["Header.useEffect"];
            }
        }
    }["Header.useEffect"], [
        avatarOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "md:hidden",
                                        onClick: onMenuClick,
                                        title: "Open Menu",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg",
                                                children: "M"
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hidden font-semibold md:inline",
                                                children: "ModernStore"
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden gap-8 md:flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "text-sm font-medium transition hover:text-accent",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/products",
                                        className: "text-sm font-medium transition hover:text-accent",
                                        children: "Products"
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about",
                                        className: "text-sm font-medium transition hover:text-accent",
                                        children: "About"
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSearch,
                                className: "hidden md:flex items-center flex-1 max-w-xs mx-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            variant: "ghost",
                                            size: "icon",
                                            onClick: isListening ? stopListening : startListening,
                                            className: "absolute left-2 h-8 w-8 p-0 hover:bg-muted",
                                            title: isListening ? "Stop listening" : "Start voice search",
                                            children: isListening ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "h-4 w-4 animate-spin text-accent"
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 117,
                                                columnNumber: 32
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 117,
                                                columnNumber: 91
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search, voice, or upload image...",
                                            value: searchTerm,
                                            onChange: (e)=>setSearchTerm(e.target.value),
                                            className: "w-full pl-10 pr-10 py-2 rounded-lg border border-border bg-input text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition",
                                            title: "Search",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 md:gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: ()=>setImageSearchOpen(true),
                                        title: "Search by image",
                                        className: "hidden md:inline-flex",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/wishlist",
                                        className: "relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "icon",
                                            title: "Wishlist",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, this),
                                                wishlistCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute -right-2 -top-2 inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold w-5 h-5",
                                                    children: wishlistCount
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/cart",
                                        className: "relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "icon",
                                            title: "Shopping Cart",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, this),
                                                cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute -right-2 -top-2 inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold w-5 h-5",
                                                    children: cartCount
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this),
                                    !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: !isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden gap-2 md:flex",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/login",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        size: "sm",
                                                        className: "gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__["LogIn"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/header.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "hidden sm:inline",
                                                                children: "Login"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/header.tsx",
                                                                lineNumber: 179,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/header.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/register",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        size: "sm",
                                                        className: "gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/header.tsx",
                                                                lineNumber: 184,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "hidden sm:inline",
                                                                children: "Sign Up"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/header.tsx",
                                                                lineNumber: 185,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/header.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 175,
                                            columnNumber: 19
                                        }, this) : // Avatar with dropdown
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative hidden md:block",
                                            "data-avatar-menu": true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    "data-avatar-button": true,
                                                    onClick: ()=>setAvatarOpen(!avatarOpen),
                                                    className: "flex items-center justify-center h-9 w-9 rounded-full bg-accent text-accent-foreground font-bold text-sm hover:ring-2 hover:ring-accent/50 transition-all",
                                                    title: user?.name || user?.email,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserInitial"])(user?.name, user?.email)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 21
                                                }, this),
                                                avatarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute right-0 mt-2 w-48 rounded-lg border border-border bg-card shadow-lg z-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-4 border-b border-border",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-semibold",
                                                                    children: user?.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/header.tsx",
                                                                    lineNumber: 204,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: user?.email
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/header.tsx",
                                                                    lineNumber: 205,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/header.tsx",
                                                            lineNumber: 203,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-2 space-y-1",
                                                            children: [
                                                                userType === "customer" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/customer-panel",
                                                                    onClick: ()=>setAvatarOpen(false),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "w-full text-left px-3 py-2 text-sm rounded hover:bg-secondary transition",
                                                                        children: "My Store"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/header.tsx",
                                                                        lineNumber: 210,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/header.tsx",
                                                                    lineNumber: 209,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/account",
                                                                    onClick: ()=>setAvatarOpen(false),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "w-full text-left px-3 py-2 text-sm rounded hover:bg-secondary transition",
                                                                        children: "Edit Profile"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/header.tsx",
                                                                        lineNumber: 216,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/header.tsx",
                                                                    lineNumber: 215,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: handleLogout,
                                                                    className: "w-full text-left px-3 py-2 text-sm rounded hover:bg-secondary transition text-destructive",
                                                                    children: "Sign Out"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/header.tsx",
                                                                    lineNumber: 220,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/header.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 191,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "md:hidden",
                                        onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                        title: "Toggle mobile menu",
                                        children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-6 w-6"
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 236,
                                            columnNumber: 33
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            className: "h-6 w-6"
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 236,
                                            columnNumber: 61
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/header.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-border md:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSearch,
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            variant: "ghost",
                                            size: "icon",
                                            onClick: isListening ? stopListening : startListening,
                                            className: "h-9 w-9 p-0",
                                            title: isListening ? "Stop listening" : "Start voice search",
                                            children: isListening ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "h-4 w-4 animate-spin text-accent"
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 254,
                                                columnNumber: 34
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 254,
                                                columnNumber: 93
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 246,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search...",
                                            value: searchTerm,
                                            onChange: (e)=>setSearchTerm(e.target.value),
                                            className: "flex-1 px-3 py-2 rounded-lg border border-border bg-input text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 257,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "p-2 rounded hover:bg-secondary transition",
                                            title: "Search",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 265,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 264,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 245,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setImageSearchOpen(true),
                                    className: "w-full p-2 rounded hover:bg-secondary transition flex items-center justify-center gap-2",
                                    title: "Search by image",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 274,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: "Search by Image"
                                        }, void 0, false, {
                                            fileName: "[project]/components/header.tsx",
                                            lineNumber: 275,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 269,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "text-sm font-medium",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 278,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/products",
                                    className: "text-sm font-medium",
                                    children: "Products"
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 281,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/wishlist",
                                    className: "text-sm font-medium",
                                    children: "Wishlist"
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 284,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/about",
                                    className: "text-sm font-medium",
                                    children: "About"
                                }, void 0, false, {
                                    fileName: "[project]/components/header.tsx",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, this),
                                !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: !isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 pt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/login",
                                                className: "flex-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "w-full bg-transparent",
                                                    children: "Login"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 294,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/register",
                                                className: "flex-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "sm",
                                                    className: "w-full",
                                                    children: "Sign Up"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 299,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 293,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2 pt-2 border-t border-border",
                                        children: [
                                            userType === "customer" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/customer-panel",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "w-full bg-transparent",
                                                    children: "My Store"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 308,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/account",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "w-full bg-transparent",
                                                    children: "Edit Profile"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/header.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 314,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                size: "sm",
                                                className: "w-full bg-transparent text-destructive hover:text-destructive",
                                                onClick: handleLogout,
                                                children: "Sign Out"
                                            }, void 0, false, {
                                                fileName: "[project]/components/header.tsx",
                                                lineNumber: 319,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/header.tsx",
                                        lineNumber: 306,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/header.tsx",
                            lineNumber: 244,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/header.tsx",
                        lineNumber: 243,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/header.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$image$2d$search$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageSearchModal"], {
                open: imageSearchOpen,
                onClose: ()=>setImageSearchOpen(false),
                onImageSelected: handleImageSearch
            }, void 0, false, {
                fileName: "[project]/components/header.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Header, "7rux70gbR2G4mY2710DXqOOM6yk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$voice$2d$search$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceSearch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t border-border bg-secondary/30 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4 md:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-8 md:grid-cols-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-4 font-semibold",
                                    children: "About"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 7,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Premium products curated for modern living."
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 8,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 6,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-4 font-semibold",
                                    children: "Shop"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 11,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm text-muted-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-foreground transition",
                                                children: "Products"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 14,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 13,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-foreground transition",
                                                children: "Categories"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 19,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 18,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-foreground transition",
                                                children: "Deals"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 24,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 23,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 12,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-4 font-semibold",
                                    children: "Support"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm text-muted-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-foreground transition",
                                                children: "Contact"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 34,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-foreground transition",
                                                children: "Help Center"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 39,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-foreground transition",
                                                children: "Returns"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 44,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-4 font-semibold",
                                    children: "Legal"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-sm text-muted-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-foreground transition",
                                                children: "Privacy"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 54,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-foreground transition",
                                                children: "Terms"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "hover:text-foreground transition",
                                                children: "Cookies"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 64,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/footer.tsx",
                    lineNumber: 5,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "© 2025 Created by Vansh Darji"
                    }, void 0, false, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/footer.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/footer.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/footer.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/hero-slider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSlider",
    ()=>HeroSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function HeroSlider() {
    _s();
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAutoPlay, setIsAutoPlay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const slides = [
        {
            image: "/images/hero/slide-1.jpg",
            title: "Elevate Your Style",
            description: "Discover curated collection of premium, modern clothing designed for contemporary living",
            tag: "New Collection"
        },
        {
            image: "/images/hero/slide-9.jpg",
            title: "Premium Fashion",
            description: "Quality crafted pieces for every occasion and season",
            tag: "Trending Now"
        },
        {
            image: "/images/hero/slide-8.jpg",
            title: "Modern Elegance",
            description: "Timeless designs meeting contemporary trends",
            tag: "Exclusive"
        },
        {
            image: "/images/hero/slide-10.jpg",
            title: "Your Perfect Look",
            description: "Express yourself with our exclusive collection",
            tag: "Limited Edition"
        },
        {
            image: "/images/hero/slide-5.jpg",
            title: "Shop the Latest",
            description: "Find your new favorite piece from our curated selection",
            tag: "Sale"
        }
    ];
    const SLIDES_LENGTH = slides.length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSlider.useEffect": ()=>{
            if (!isAutoPlay) return;
            const timer = setInterval({
                "HeroSlider.useEffect.timer": ()=>{
                    setCurrentSlide({
                        "HeroSlider.useEffect.timer": (prev)=>(prev + 1) % SLIDES_LENGTH
                    }["HeroSlider.useEffect.timer"]);
                }
            }["HeroSlider.useEffect.timer"], 5000);
            return ({
                "HeroSlider.useEffect": ()=>clearInterval(timer)
            })["HeroSlider.useEffect"];
        }
    }["HeroSlider.useEffect"], [
        SLIDES_LENGTH,
        isAutoPlay
    ]);
    const handleSlideChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroSlider.useCallback[handleSlideChange]": (index)=>{
            setCurrentSlide(index);
            setIsAutoPlay(false);
            // Resume auto-play after 8 seconds of inactivity
            const resumeTimer = setTimeout({
                "HeroSlider.useCallback[handleSlideChange].resumeTimer": ()=>setIsAutoPlay(true)
            }["HeroSlider.useCallback[handleSlideChange].resumeTimer"], 8000);
            return ({
                "HeroSlider.useCallback[handleSlideChange]": ()=>clearTimeout(resumeTimer)
            })["HeroSlider.useCallback[handleSlideChange]"];
        }
    }["HeroSlider.useCallback[handleSlideChange]"], []);
    const handleNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroSlider.useCallback[handleNext]": ()=>{
            setCurrentSlide({
                "HeroSlider.useCallback[handleNext]": (prev)=>(prev + 1) % SLIDES_LENGTH
            }["HeroSlider.useCallback[handleNext]"]);
            setIsAutoPlay(false);
        }
    }["HeroSlider.useCallback[handleNext]"], [
        SLIDES_LENGTH
    ]);
    const handlePrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroSlider.useCallback[handlePrev]": ()=>{
            setCurrentSlide({
                "HeroSlider.useCallback[handlePrev]": (prev)=>(prev - 1 + SLIDES_LENGTH) % SLIDES_LENGTH
            }["HeroSlider.useCallback[handlePrev]"]);
            setIsAutoPlay(false);
        }
    }["HeroSlider.useCallback[handlePrev]"], [
        SLIDES_LENGTH
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden h-96 md:h-[500px] lg:h-[600px] bg-background",
        children: [
            slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: slide.image || "/placeholder.svg",
                            alt: slide.title,
                            className: "h-full w-full object-cover",
                            loading: index === 0 ? "eager" : "lazy",
                            crossOrigin: "anonymous"
                        }, void 0, false, {
                            fileName: "[project]/components/hero-slider.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10"
                        }, void 0, false, {
                            fileName: "[project]/components/hero-slider.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/components/hero-slider.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-white px-4 z-10 max-w-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 inline-block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-medium",
                                children: slides[currentSlide].tag
                            }, void 0, false, {
                                fileName: "[project]/components/hero-slider.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/hero-slider.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance leading-tight",
                            children: slides[currentSlide].title
                        }, void 0, false, {
                            fileName: "[project]/components/hero-slider.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base md:text-lg mb-8 max-w-2xl mx-auto text-balance text-white/90",
                            children: slides[currentSlide].description
                        }, void 0, false, {
                            fileName: "[project]/components/hero-slider.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/products",
                            className: "inline-block px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105",
                            children: "Shop Now"
                        }, void 0, false, {
                            fileName: "[project]/components/hero-slider.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/hero-slider.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/hero-slider.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handlePrev,
                className: "absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white transition-all duration-300 border border-white/30",
                "aria-label": "Previous slide",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                    size: 24
                }, void 0, false, {
                    fileName: "[project]/components/hero-slider.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/hero-slider.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleNext,
                className: "absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white transition-all duration-300 border border-white/30",
                "aria-label": "Next slide",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                    size: 24
                }, void 0, false, {
                    fileName: "[project]/components/hero-slider.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/hero-slider.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20",
                children: slides.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleSlideChange(index),
                        className: `h-2.5 rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide ? "w-8 bg-white shadow-lg" : "w-2.5 bg-white/50 hover:bg-white/75"}`,
                        "aria-label": `Go to slide ${index + 1}`,
                        "aria-current": index === currentSlide
                    }, index, false, {
                        fileName: "[project]/components/hero-slider.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/hero-slider.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 z-20 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/30",
                children: [
                    currentSlide + 1,
                    " / ",
                    SLIDES_LENGTH
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero-slider.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/hero-slider.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(HeroSlider, "vZgHdhL6TNr+T1Xoe4C5Str4S8A=");
_c = HeroSlider;
var _c;
__turbopack_context__.k.register(_c, "HeroSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/store-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "products",
    ()=>products
]);
const products = [
    // ===== MEN'S WEAR - TOP WEAR =====
    {
        id: "m1",
        name: "Summer Cotton T-Shirt White",
        description: "Breathable cotton t-shirt for summer",
        price: 29.99,
        image: "/images/featured-1-summer-cotton-white.jpg",
        category: "men",
        subcategory: "Top Wear",
        stock: 120,
        rating: 4.6,
        reviews: 340,
        gender: "men",
        discount: 0
    },
    {
        id: "m2",
        name: "Summer Cotton T-Shirt Blue",
        description: "Comfortable blue cotton t-shirt",
        price: 29.99,
        image: "/images/featured-2-summer-cotton-blue.jpg",
        category: "men",
        subcategory: "Top Wear",
        stock: 110,
        rating: 4.5,
        reviews: 320,
        gender: "men",
        discount: 0
    },
    {
        id: "m3",
        name: "Summer Cotton T-Shirt Black",
        description: "Classic black cotton t-shirt",
        price: 29.99,
        image: "/images/featured-3-summer-cotton-black.jpg",
        category: "men",
        subcategory: "Top Wear",
        stock: 135,
        rating: 4.7,
        reviews: 380,
        gender: "men",
        discount: 0
    },
    {
        id: "m4",
        name: "Casual Linen Shirt",
        description: "Lightweight linen shirt for casual wear",
        price: 49.99,
        image: "/images/featured-4-casual-linen-shirt.jpg",
        category: "men",
        subcategory: "Shirts",
        stock: 85,
        rating: 4.4,
        reviews: 250,
        gender: "men",
        discount: 0
    },
    {
        id: "m5",
        name: "Formal White Shirt",
        description: "Professional white dress shirt",
        price: 79.99,
        image: "/images/featured-5-formal-white-shirt.jpg",
        category: "men",
        subcategory: "Shirts",
        stock: 95,
        rating: 4.8,
        reviews: 420,
        gender: "men",
        discount: 0
    },
    {
        id: "m6",
        name: "Formal Blue Shirt",
        description: "Premium blue formal shirt",
        price: 79.99,
        image: "/images/featured-6-formal-blue-shirt.jpg",
        category: "men",
        subcategory: "Shirts",
        stock: 88,
        rating: 4.7,
        reviews: 380,
        gender: "men",
        discount: 0
    },
    {
        id: "m7",
        name: "T-Shirt Combo Pack 3",
        description: "Pack of 3 comfortable t-shirts",
        price: 59.99,
        image: "/images/m7-tshirt-combo-pack.jpg",
        category: "men",
        subcategory: "T-shirts",
        stock: 200,
        rating: 4.6,
        reviews: 520,
        gender: "men",
        discount: 0
    },
    {
        id: "m8",
        name: "Striped Casual Shirt",
        description: "Trendy striped casual shirt",
        price: 45.99,
        image: "/images/m8-striped-casual-shirt.jpg",
        category: "men",
        subcategory: "Shirts",
        stock: 75,
        rating: 4.5,
        reviews: 280,
        gender: "men",
        discount: 0
    },
    // ===== MEN'S WEAR - BOTTOM WEAR =====
    {
        id: "m9",
        name: "Blue Denim Jeans",
        description: "Classic blue denim jeans",
        price: 69.99,
        image: "/images/m9-blue-denim-jeans.jpg",
        category: "men",
        subcategory: "Bottom Wear",
        stock: 150,
        rating: 4.7,
        reviews: 680,
        gender: "men",
        discount: 0
    },
    {
        id: "m10",
        name: "Black Denim Jeans",
        description: "Stylish black denim jeans",
        price: 69.99,
        image: "/images/m10-black-denim-jeans.jpg",
        category: "men",
        subcategory: "Bottom Wear",
        stock: 140,
        rating: 4.6,
        reviews: 620,
        gender: "men",
        discount: 0
    },
    {
        id: "m11",
        name: "Cargo Pants Khaki",
        description: "Multi-pocket cargo pants",
        price: 59.99,
        image: "/images/m11-cargo-pants-khaki.jpg",
        category: "men",
        subcategory: "Bottom Wear",
        stock: 100,
        rating: 4.5,
        reviews: 350,
        gender: "men",
        discount: 0
    },
    {
        id: "m12",
        name: "Cargo Pants Black",
        description: "Black cargo pants with pockets",
        price: 59.99,
        image: "/images/m12-cargo-pants-black.jpg",
        category: "men",
        subcategory: "Bottom Wear",
        stock: 95,
        rating: 4.4,
        reviews: 320,
        gender: "men",
        discount: 0
    },
    {
        id: "m13",
        name: "Baggy Fit Jeans",
        description: "Trendy baggy fit jeans",
        price: 74.99,
        image: "/images/m13-baggy-fit-jeans.jpg",
        category: "men",
        subcategory: "Bottom Wear",
        stock: 80,
        rating: 4.5,
        reviews: 280,
        gender: "men",
        discount: 0
    },
    {
        id: "m14",
        name: "Joggers Black",
        description: "Comfortable black joggers",
        price: 44.99,
        image: "/images/m14-joggers-black.jpg",
        category: "men",
        subcategory: "Bottom Wear",
        stock: 120,
        rating: 4.6,
        reviews: 420,
        gender: "men",
        discount: 0
    },
    {
        id: "m15",
        name: "Joggers Grey",
        description: "Casual grey joggers",
        price: 44.99,
        image: "/images/m15-joggers-grey.jpg",
        category: "men",
        subcategory: "Bottom Wear",
        stock: 110,
        rating: 4.5,
        reviews: 380,
        gender: "men",
        discount: 0
    },
    {
        id: "m16",
        name: "Formal Trousers Black",
        description: "Professional black formal trousers",
        price: 89.99,
        image: "/images/m16-formal-trousers-black.jpg",
        category: "men",
        subcategory: "Bottom Wear",
        stock: 70,
        rating: 4.8,
        reviews: 350,
        gender: "men",
        discount: 0
    },
    {
        id: "m17",
        name: "Dhoti Traditional",
        description: "Traditional dhoti for ethnic wear",
        price: 39.99,
        image: "/images/m17-dhoti-traditional.jpg",
        category: "men",
        subcategory: "Bottom Wear",
        stock: 60,
        rating: 4.5,
        reviews: 200,
        gender: "men",
        discount: 0
    },
    {
        id: "m18",
        name: "Track Pants Navy",
        description: "Navy track pants for sports",
        price: 34.99,
        image: "/images/m18-track-pants-navy.jpg",
        category: "men",
        subcategory: "Bottom Wear",
        stock: 140,
        rating: 4.6,
        reviews: 420,
        gender: "men",
        discount: 0
    },
    {
        id: "m19",
        name: "Shorts Casual Blue",
        description: "Casual blue shorts",
        price: 34.99,
        image: "/images/m19-shorts-casual-blue.jpg",
        category: "men",
        subcategory: "Bottom Wear",
        stock: 130,
        rating: 4.4,
        reviews: 310,
        gender: "men",
        discount: 0
    },
    {
        id: "m20",
        name: "Shorts Casual Black",
        description: "Classic black shorts",
        price: 34.99,
        image: "/images/m20-shorts-casual-black.jpg",
        category: "men",
        subcategory: "Bottom Wear",
        stock: 125,
        rating: 4.5,
        reviews: 340,
        gender: "men",
        discount: 0
    },
    // ===== MEN'S WEAR - ETHNIC WEAR =====
    {
        id: "m21",
        name: "Kurta Pajama White",
        description: "Traditional white kurta pajama",
        price: 84.99,
        image: "/images/m21-kurta-pajama-white.jpg",
        category: "men",
        subcategory: "Ethnic Wear",
        stock: 90,
        rating: 4.7,
        reviews: 380,
        gender: "men",
        discount: 0
    },
    {
        id: "m22",
        name: "Kurta Pajama Blue",
        description: "Blue ethnic kurta pajama",
        price: 84.99,
        image: "/images/m22-kurta-pajama-blue.jpg",
        category: "men",
        subcategory: "Ethnic Wear",
        stock: 85,
        rating: 4.6,
        reviews: 350,
        gender: "men",
        discount: 0
    },
    {
        id: "m23",
        name: "Sherwani Gold",
        description: "Premium gold sherwani",
        price: 249.99,
        image: "/images/m23-sherwani-gold.jpg",
        category: "men",
        subcategory: "Ethnic Wear",
        stock: 40,
        rating: 4.9,
        reviews: 200,
        gender: "men",
        discount: 0
    },
    {
        id: "m24",
        name: "Sherwani Maroon",
        description: "Elegant maroon sherwani",
        price: 249.99,
        image: "/images/m24-sherwani-maroon.jpg",
        category: "men",
        subcategory: "Ethnic Wear",
        stock: 35,
        rating: 4.8,
        reviews: 180,
        gender: "men",
        discount: 0
    },
    {
        id: "m25",
        name: "Jodhpuri Suit Black",
        description: "Black jodhpuri suit",
        price: 199.99,
        image: "/images/m25-jodhpuri-suit-black.jpg",
        category: "men",
        subcategory: "Ethnic Wear",
        stock: 45,
        rating: 4.8,
        reviews: 220,
        gender: "men",
        discount: 0
    },
    {
        id: "m26",
        name: "Jodhpuri Suit Navy",
        description: "Navy jodhpuri suit",
        price: 199.99,
        image: "/images/m26-jodhpuri-suit-navy.jpg",
        category: "men",
        subcategory: "Ethnic Wear",
        stock: 42,
        rating: 4.7,
        reviews: 210,
        gender: "men",
        discount: 0
    },
    {
        id: "m27",
        name: "Wedding Suit Black",
        description: "Premium wedding suit",
        price: 279.99,
        image: "/images/m27-wedding-suit-black.jpg",
        category: "men",
        subcategory: "Ethnic Wear",
        stock: 30,
        rating: 4.9,
        reviews: 150,
        gender: "men",
        discount: 0
    },
    {
        id: "m28",
        name: "Nehru Jacket Black",
        description: "Traditional nehru jacket",
        price: 129.99,
        image: "/images/m28-nehru-jacket-black.jpg",
        category: "men",
        subcategory: "Ethnic Wear",
        stock: 55,
        rating: 4.6,
        reviews: 240,
        gender: "men",
        discount: 0
    },
    // ===== MEN'S WEAR - INNERWEAR =====
    {
        id: "m29",
        name: "Cotton Vest White",
        description: "Classic white cotton vest",
        price: 14.99,
        image: "/images/m29-cotton-vest-white.jpg",
        category: "men",
        subcategory: "Innerwear",
        stock: 200,
        rating: 4.5,
        reviews: 420,
        gender: "men",
        discount: 0
    },
    {
        id: "m30",
        name: "Cotton Vest Pack 3",
        description: "Pack of 3 white cotton vests",
        price: 34.99,
        image: "/images/m30-cotton-vest-pack.jpg",
        category: "men",
        subcategory: "Innerwear",
        stock: 180,
        rating: 4.6,
        reviews: 520,
        gender: "men",
        discount: 0
    },
    {
        id: "m31",
        name: "Thermal Inner Black",
        description: "Thermal innerwear for winter",
        price: 24.99,
        image: "/images/m31-thermal-inner-black.jpg",
        category: "men",
        subcategory: "Innerwear",
        stock: 140,
        rating: 4.7,
        reviews: 380,
        gender: "men",
        discount: 0
    },
    {
        id: "m32",
        name: "Briefs Pack 3",
        description: "Pack of 3 comfortable briefs",
        price: 29.99,
        image: "/images/m32-briefs-pack.jpg",
        category: "men",
        subcategory: "Innerwear",
        stock: 170,
        rating: 4.5,
        reviews: 450,
        gender: "men",
        discount: 0
    },
    {
        id: "m33",
        name: "Boxer Shorts Pack 3",
        description: "Pack of 3 boxer shorts",
        price: 34.99,
        image: "/images/m33-boxer-shorts-pack.jpg",
        category: "men",
        subcategory: "Innerwear",
        stock: 160,
        rating: 4.6,
        reviews: 480,
        gender: "men",
        discount: 0
    },
    {
        id: "m34",
        name: "Trunk Innerwear Pack 2",
        description: "Pack of 2 trunk style innerwear",
        price: 24.99,
        image: "/images/m34-trunk-innerwear-pack.jpg",
        category: "men",
        subcategory: "Innerwear",
        stock: 150,
        rating: 4.5,
        reviews: 360,
        gender: "men",
        discount: 0
    },
    // ===== MEN'S WEAR - SPORTSWEAR =====
    {
        id: "m35",
        name: "Track Pants Black",
        description: "Black sports track pants",
        price: 39.99,
        image: "/images/m35-track-pants-black.jpg",
        category: "men",
        subcategory: "Sportswear",
        stock: 110,
        rating: 4.6,
        reviews: 340,
        gender: "men",
        discount: 0
    },
    {
        id: "m36",
        name: "Track Suit Navy",
        description: "Navy track suit",
        price: 89.99,
        image: "/images/m36-track-suit-navy.jpg",
        category: "men",
        subcategory: "Sportswear",
        stock: 80,
        rating: 4.7,
        reviews: 280,
        gender: "men",
        discount: 0
    },
    {
        id: "m37",
        name: "Gym T-Shirt Black",
        description: "Performance gym t-shirt",
        price: 34.99,
        image: "/images/m37-gym-tshirt-black.jpg",
        category: "men",
        subcategory: "Sportswear",
        stock: 120,
        rating: 4.5,
        reviews: 390,
        gender: "men",
        discount: 0
    },
    {
        id: "m38",
        name: "Gym Shorts Navy",
        description: "Sports gym shorts",
        price: 29.99,
        image: "/images/m38-gym-shorts-navy.jpg",
        category: "men",
        subcategory: "Sportswear",
        stock: 100,
        rating: 4.6,
        reviews: 320,
        gender: "men",
        discount: 0
    },
    // ===== MEN'S WEAR - NIGHTWEAR =====
    {
        id: "m39",
        name: "Pyjama Set Blue",
        description: "Comfortable blue pyjama set",
        price: 44.99,
        image: "/images/m39-pyjama-set-blue.jpg",
        category: "men",
        subcategory: "Nightwear",
        stock: 90,
        rating: 4.6,
        reviews: 280,
        gender: "men",
        discount: 0
    },
    {
        id: "m40",
        name: "Pyjama Set Black",
        description: "Black pyjama set",
        price: 44.99,
        image: "/images/m40-pyjama-set-black.jpg",
        category: "men",
        subcategory: "Nightwear",
        stock: 85,
        rating: 4.5,
        reviews: 260,
        gender: "men",
        discount: 0
    },
    {
        id: "m41",
        name: "Night Suit Grey",
        description: "Comfortable grey night suit",
        price: 54.99,
        image: "/images/m41-night-suit-grey.jpg",
        category: "men",
        subcategory: "Nightwear",
        stock: 75,
        rating: 4.6,
        reviews: 240,
        gender: "men",
        discount: 0
    },
    {
        id: "m42",
        name: "Night Shorts Black",
        description: "Black night shorts",
        price: 24.99,
        image: "/images/m42-night-shorts-black.jpg",
        category: "men",
        subcategory: "Nightwear",
        stock: 110,
        rating: 4.4,
        reviews: 220,
        gender: "men",
        discount: 0
    },
    // ===== MEN'S WEAR - WINTER WEAR =====
    {
        id: "m43",
        name: "Shrug Grey",
        description: "Warm grey shrug",
        price: 54.99,
        image: "/images/m43-shrug-grey.jpg",
        category: "men",
        subcategory: "Winter Wear",
        stock: 80,
        rating: 4.5,
        reviews: 240,
        gender: "men",
        discount: 0
    },
    {
        id: "m44",
        name: "Jacket Black",
        description: "Winter black jacket",
        price: 119.99,
        image: "/images/m44-jacket-black.jpg",
        category: "men",
        subcategory: "Winter Wear",
        stock: 70,
        rating: 4.7,
        reviews: 320,
        gender: "men",
        discount: 0
    },
    {
        id: "m45",
        name: "Jacket Navy",
        description: "Navy winter jacket",
        price: 119.99,
        image: "/images/m45-jacket-navy.jpg",
        category: "men",
        subcategory: "Winter Wear",
        stock: 65,
        rating: 4.6,
        reviews: 300,
        gender: "men",
        discount: 0
    },
    {
        id: "m46",
        name: "Sweater Grey",
        description: "Cozy grey sweater",
        price: 64.99,
        image: "/images/m46-sweater-grey.jpg",
        category: "men",
        subcategory: "Winter Wear",
        stock: 90,
        rating: 4.6,
        reviews: 340,
        gender: "men",
        discount: 0
    },
    {
        id: "m47",
        name: "Sweater Black",
        description: "Black winter sweater",
        price: 64.99,
        image: "/images/m47-sweater-black.jpg",
        category: "men",
        subcategory: "Winter Wear",
        stock: 85,
        rating: 4.5,
        reviews: 310,
        gender: "men",
        discount: 0
    },
    {
        id: "m48",
        name: "Cap Black",
        description: "Classic black winter cap",
        price: 19.99,
        image: "/images/m48-cap-black.jpg",
        category: "men",
        subcategory: "Winter Wear",
        stock: 150,
        rating: 4.4,
        reviews: 280,
        gender: "men",
        discount: 0
    },
    {
        id: "m49",
        name: "Socks Wool Pack 3",
        description: "Pack of 3 warm wool socks",
        price: 24.99,
        image: "/images/m49-socks-wool-pack.jpg",
        category: "men",
        subcategory: "Winter Wear",
        stock: 130,
        rating: 4.5,
        reviews: 350,
        gender: "men",
        discount: 0
    },
    {
        id: "m50",
        name: "Hand Gloves Black",
        description: "Warm black hand gloves",
        price: 34.99,
        image: "/images/m50-hand-gloves-black.jpg",
        category: "men",
        subcategory: "Winter Wear",
        stock: 100,
        rating: 4.6,
        reviews: 240,
        gender: "men",
        discount: 0
    },
    // ===== MEN'S WEAR - FOOTWEAR =====
    {
        id: "m51",
        name: "Party Shoes Black",
        description: "Elegant black party shoes",
        price: 79.99,
        image: "/images/m51-party-shoes-black.jpg",
        category: "men",
        subcategory: "Footwear",
        stock: 60,
        rating: 4.7,
        reviews: 240,
        gender: "men",
        discount: 0
    },
    {
        id: "m52",
        name: "Loafers Brown",
        description: "Casual brown loafers",
        price: 69.99,
        image: "/images/m52-loafers-brown.jpg",
        category: "men",
        subcategory: "Footwear",
        stock: 70,
        rating: 4.6,
        reviews: 280,
        gender: "men",
        discount: 0
    },
    {
        id: "m53",
        name: "Office Shoes Black",
        description: "Professional black office shoes",
        price: 84.99,
        image: "/images/m53-office-shoes-black.jpg",
        category: "men",
        subcategory: "Footwear",
        stock: 75,
        rating: 4.7,
        reviews: 320,
        gender: "men",
        discount: 0
    },
    {
        id: "m54",
        name: "Branded Shoes Nike",
        description: "Nike branded shoes",
        price: 129.99,
        image: "/images/m54-branded-shoes-nike.jpg",
        category: "men",
        subcategory: "Footwear",
        stock: 90,
        rating: 4.8,
        reviews: 420,
        gender: "men",
        discount: 0
    },
    {
        id: "m55",
        name: "Casual Shoes Grey",
        description: "Casual grey shoes",
        price: 64.99,
        image: "/images/m55-casual-shoes-grey.jpg",
        category: "men",
        subcategory: "Footwear",
        stock: 85,
        rating: 4.5,
        reviews: 310,
        gender: "men",
        discount: 0
    },
    {
        id: "m56",
        name: "Sports Shoes Running",
        description: "Professional running sports shoes",
        price: 119.99,
        image: "/images/m56-sports-shoes-running.jpg",
        category: "men",
        subcategory: "Footwear",
        stock: 100,
        rating: 4.8,
        reviews: 480,
        gender: "men",
        discount: 0
    },
    {
        id: "m57",
        name: "Trendy Shoes Blue",
        description: "Trendy blue shoes",
        price: 74.99,
        image: "/images/m57-trendy-shoes-blue.jpg",
        category: "men",
        subcategory: "Footwear",
        stock: 80,
        rating: 4.6,
        reviews: 280,
        gender: "men",
        discount: 0
    },
    {
        id: "m58",
        name: "Flip Flops",
        description: "Comfortable flip flops",
        price: 19.99,
        image: "/images/m58-flip-flops.jpg",
        category: "men",
        subcategory: "Footwear",
        stock: 200,
        rating: 4.4,
        reviews: 420,
        gender: "men",
        discount: 0
    },
    {
        id: "m59",
        name: "Crocs Black",
        description: "Comfortable black crocs",
        price: 49.99,
        image: "/images/m59-crocs-black.jpg",
        category: "men",
        subcategory: "Footwear",
        stock: 120,
        rating: 4.5,
        reviews: 360,
        gender: "men",
        discount: 0
    },
    {
        id: "m60",
        name: "Slippers Comfort",
        description: "Comfortable home slippers",
        price: 29.99,
        image: "/images/m60-slippers-comfort.jpg",
        category: "men",
        subcategory: "Footwear",
        stock: 140,
        rating: 4.6,
        reviews: 340,
        gender: "men",
        discount: 0
    },
    // ===== WOMEN'S WEAR - TOP WEAR =====
    {
        id: "w1",
        name: "Summer Top White",
        description: "Breathable white summer top",
        price: 34.99,
        image: "/images/w1-summer-top-white.jpg",
        category: "women",
        subcategory: "Top Wear",
        stock: 110,
        rating: 4.6,
        reviews: 340,
        gender: "women",
        discount: 0
    },
    {
        id: "w2",
        name: "Casual T-Shirt Blue",
        description: "Casual blue t-shirt",
        price: 29.99,
        image: "/images/w2-casual-tshirt-blue.jpg",
        category: "women",
        subcategory: "Top Wear",
        stock: 130,
        rating: 4.5,
        reviews: 380,
        gender: "women",
        discount: 0
    },
    {
        id: "w3",
        name: "Dress Casual Blue",
        description: "Casual blue dress",
        price: 74.99,
        image: "/images/w3-dress-casual-blue.jpg",
        category: "women",
        subcategory: "Top Wear",
        stock: 80,
        rating: 4.7,
        reviews: 320,
        gender: "women",
        discount: 0
    },
    {
        id: "w4",
        name: "Gown Evening Red",
        description: "Elegant red evening gown",
        price: 149.99,
        image: "/images/w4-gown-evening-red.jpg",
        category: "women",
        subcategory: "Top Wear",
        stock: 40,
        rating: 4.8,
        reviews: 180,
        gender: "women",
        discount: 0
    },
    {
        id: "w5",
        name: "Top Bottom Set Black",
        description: "Black top and bottom set",
        price: 89.99,
        image: "/images/w5-top-bottom-set-black.jpg",
        category: "women",
        subcategory: "Top Wear",
        stock: 60,
        rating: 4.6,
        reviews: 240,
        gender: "women",
        discount: 0
    },
    {
        id: "w6",
        name: "Formal Shirt White",
        description: "Professional white formal shirt",
        price: 69.99,
        image: "/images/w6-formal-shirt-white.jpg",
        category: "women",
        subcategory: "Top Wear",
        stock: 75,
        rating: 4.7,
        reviews: 280,
        gender: "women",
        discount: 0
    },
    {
        id: "w7",
        name: "Jumpsuit Black",
        description: "Chic black jumpsuit",
        price: 99.99,
        image: "/images/w7-jumpsuit-black.jpg",
        category: "women",
        subcategory: "Top Wear",
        stock: 50,
        rating: 4.7,
        reviews: 220,
        gender: "women",
        discount: 0
    },
    {
        id: "w8",
        name: "Trendy Top Crop",
        description: "Trendy crop top",
        price: 39.99,
        image: "/images/w8-trendy-top-crop.jpg",
        category: "women",
        subcategory: "Top Wear",
        stock: 95,
        rating: 4.5,
        reviews: 300,
        gender: "women",
        discount: 0
    },
    {
        id: "w9",
        name: "Tunic Top Navy",
        description: "Navy tunic top",
        price: 44.99,
        image: "/images/w9-tunic-top-navy.jpg",
        category: "women",
        subcategory: "Top Wear",
        stock: 85,
        rating: 4.6,
        reviews: 280,
        gender: "women",
        discount: 0
    },
    {
        id: "w10",
        name: "Gown Casual White",
        description: "Casual white gown",
        price: 84.99,
        image: "/images/w10-gown-casual-white.jpg",
        category: "women",
        subcategory: "Top Wear",
        stock: 70,
        rating: 4.6,
        reviews: 260,
        gender: "women",
        discount: 0
    },
    // ===== WOMEN'S WEAR - BOTTOM WEAR =====
    {
        id: "w11",
        name: "Jeans Blue",
        description: "Blue denim jeans",
        price: 74.99,
        image: "/images/w11-jeans-blue.jpg",
        category: "women",
        subcategory: "Bottom Wear",
        stock: 120,
        rating: 4.7,
        reviews: 420,
        gender: "women",
        discount: 0
    },
    {
        id: "w12",
        name: "Jeans Black",
        description: "Black denim jeans",
        price: 74.99,
        image: "/images/w12-jeans-black.jpg",
        category: "women",
        subcategory: "Bottom Wear",
        stock: 115,
        rating: 4.6,
        reviews: 390,
        gender: "women",
        discount: 0
    },
    {
        id: "w13",
        name: "Jeggings Black",
        description: "Black comfortable jeggings",
        price: 39.99,
        image: "/images/w13-jeggings-black.jpg",
        category: "women",
        subcategory: "Bottom Wear",
        stock: 140,
        rating: 4.6,
        reviews: 440,
        gender: "women",
        discount: 0
    },
    {
        id: "w14",
        name: "Shorts Casual",
        description: "Casual shorts",
        price: 39.99,
        image: "/images/w14-shorts-casual.jpg",
        category: "women",
        subcategory: "Bottom Wear",
        stock: 130,
        rating: 4.5,
        reviews: 360,
        gender: "women",
        discount: 0
    },
    {
        id: "w15",
        name: "Skirt Casual Blue",
        description: "Casual blue skirt",
        price: 54.99,
        image: "/images/w15-skirt-casual-blue.jpg",
        category: "women",
        subcategory: "Bottom Wear",
        stock: 95,
        rating: 4.5,
        reviews: 280,
        gender: "women",
        discount: 0
    },
    {
        id: "w16",
        name: "Leggings Black",
        description: "Comfortable black leggings",
        price: 34.99,
        image: "/images/w16-leggings-black.jpg",
        category: "women",
        subcategory: "Bottom Wear",
        stock: 160,
        rating: 4.6,
        reviews: 520,
        gender: "women",
        discount: 0
    },
    // ===== WOMEN'S WEAR - WINTER WEAR =====
    {
        id: "w17",
        name: "Jacket Black",
        description: "Winter black jacket",
        price: 129.99,
        image: "/images/w17-jacket-black.jpg",
        category: "women",
        subcategory: "Winter Wear",
        stock: 70,
        rating: 4.7,
        reviews: 320,
        gender: "women",
        discount: 0
    },
    {
        id: "w18",
        name: "Sweater Pink",
        description: "Cozy pink sweater",
        price: 69.99,
        image: "/images/w18-sweater-pink.jpg",
        category: "women",
        subcategory: "Winter Wear",
        stock: 85,
        rating: 4.6,
        reviews: 300,
        gender: "women",
        discount: 0
    },
    {
        id: "w19",
        name: "Sweatshirt Grey",
        description: "Grey sweatshirt",
        price: 59.99,
        image: "/images/w19-sweatshirt-grey.jpg",
        category: "women",
        subcategory: "Winter Wear",
        stock: 95,
        rating: 4.5,
        reviews: 340,
        gender: "women",
        discount: 0
    },
    {
        id: "w20",
        name: "Cap Beanie Black",
        description: "Warm black beanie cap",
        price: 24.99,
        image: "/images/w20-cap-beanie-black.jpg",
        category: "women",
        subcategory: "Winter Wear",
        stock: 130,
        rating: 4.5,
        reviews: 300,
        gender: "women",
        discount: 0
    },
    {
        id: "w21",
        name: "Socks Wool Pack 3",
        description: "Pack of 3 warm wool socks",
        price: 24.99,
        image: "/images/w21-socks-wool-pack.jpg",
        category: "women",
        subcategory: "Winter Wear",
        stock: 120,
        rating: 4.5,
        reviews: 320,
        gender: "women",
        discount: 0
    },
    {
        id: "w22",
        name: "Coat Formal Black",
        description: "Formal black coat",
        price: 179.99,
        image: "/images/w22-coat-formal-black.jpg",
        category: "women",
        subcategory: "Winter Wear",
        stock: 50,
        rating: 4.8,
        reviews: 200,
        gender: "women",
        discount: 0
    },
    {
        id: "w23",
        name: "Blazer Navy",
        description: "Navy formal blazer",
        price: 119.99,
        image: "/images/w23-blazer-navy.jpg",
        category: "women",
        subcategory: "Winter Wear",
        stock: 65,
        rating: 4.7,
        reviews: 280,
        gender: "women",
        discount: 0
    },
    {
        id: "w24",
        name: "Waistcoat Black",
        description: "Black formal waistcoat",
        price: 89.99,
        image: "/images/w24-waistcoat-black.jpg",
        category: "women",
        subcategory: "Winter Wear",
        stock: 60,
        rating: 4.6,
        reviews: 220,
        gender: "women",
        discount: 0
    },
    // ===== WOMEN'S WEAR - PLUS SIZE =====
    {
        id: "w25",
        name: "Plus Size Dress Blue",
        description: "Plus size blue dress",
        price: 99.99,
        image: "/images/w25-plus-size-dress-blue.jpg",
        category: "women",
        subcategory: "Plus Size",
        stock: 70,
        rating: 4.6,
        reviews: 240,
        gender: "women",
        discount: 0
    },
    {
        id: "w26",
        name: "Plus Size Gown Red",
        description: "Plus size red gown",
        price: 129.99,
        image: "/images/w26-plus-size-gown-red.jpg",
        category: "women",
        subcategory: "Plus Size",
        stock: 50,
        rating: 4.7,
        reviews: 180,
        gender: "women",
        discount: 0
    },
    {
        id: "w27",
        name: "Plus Size Top Black",
        description: "Plus size black top",
        price: 54.99,
        image: "/images/w27-plus-size-top-black.jpg",
        category: "women",
        subcategory: "Plus Size",
        stock: 80,
        rating: 4.5,
        reviews: 220,
        gender: "women",
        discount: 0
    },
    {
        id: "w28",
        name: "Plus Size Jeans",
        description: "Plus size blue jeans",
        price: 89.99,
        image: "/images/w28-plus-size-jeans.jpg",
        category: "women",
        subcategory: "Plus Size",
        stock: 75,
        rating: 4.6,
        reviews: 260,
        gender: "women",
        discount: 0
    },
    {
        id: "w29",
        name: "Plus Size Bottom Wear",
        description: "Plus size trousers",
        price: 79.99,
        image: "/images/w29-plus-size-bottom-wear.jpg",
        category: "women",
        subcategory: "Plus Size",
        stock: 70,
        rating: 4.5,
        reviews: 200,
        gender: "women",
        discount: 0
    },
    // ===== WOMEN'S WEAR - INNERWEAR =====
    {
        id: "w30",
        name: "Bra Black",
        description: "Comfortable black bra",
        price: 44.99,
        image: "/images/w30-bra-black.jpg",
        category: "women",
        subcategory: "Innerwear",
        stock: 120,
        rating: 4.6,
        reviews: 380,
        gender: "women",
        discount: 0
    },
    {
        id: "w31",
        name: "Bralette Comfort",
        description: "Comfortable bralette",
        price: 34.99,
        image: "/images/w31-bralette-comfort.jpg",
        category: "women",
        subcategory: "Innerwear",
        stock: 140,
        rating: 4.5,
        reviews: 420,
        gender: "women",
        discount: 0
    },
    {
        id: "w32",
        name: "Panties Pack 3",
        description: "Pack of 3 comfortable panties",
        price: 34.99,
        image: "/images/w32-panties-pack.jpg",
        category: "women",
        subcategory: "Innerwear",
        stock: 150,
        rating: 4.5,
        reviews: 480,
        gender: "women",
        discount: 0
    },
    {
        id: "w33",
        name: "Lingerie Set Black",
        description: "Black lingerie set",
        price: 79.99,
        image: "/images/w33-lingerie-set-black.jpg",
        category: "women",
        subcategory: "Innerwear",
        stock: 80,
        rating: 4.7,
        reviews: 280,
        gender: "women",
        discount: 0
    },
    {
        id: "w34",
        name: "Shapewear Black",
        description: "Black shapewear",
        price: 64.99,
        image: "/images/w34-shapewear-black.jpg",
        category: "women",
        subcategory: "Innerwear",
        stock: 90,
        rating: 4.6,
        reviews: 240,
        gender: "women",
        discount: 0
    },
    {
        id: "w35",
        name: "Camisole White",
        description: "White camisole",
        price: 24.99,
        image: "/images/w35-camisole-white.jpg",
        category: "women",
        subcategory: "Innerwear",
        stock: 130,
        rating: 4.5,
        reviews: 320,
        gender: "women",
        discount: 0
    },
    {
        id: "w36",
        name: "Strappy Innerwear",
        description: "Strappy innerwear",
        price: 29.99,
        image: "/images/w36-strappy-innerwear.jpg",
        category: "women",
        subcategory: "Innerwear",
        stock: 120,
        rating: 4.4,
        reviews: 280,
        gender: "women",
        discount: 0
    },
    // ===== WOMEN'S WEAR - SLEEPWEAR =====
    {
        id: "w37",
        name: "Night Suit Blue",
        description: "Blue night suit",
        price: 54.99,
        image: "/images/w37-night-suit-blue.jpg",
        category: "women",
        subcategory: "Sleepwear",
        stock: 90,
        rating: 4.6,
        reviews: 280,
        gender: "women",
        discount: 0
    },
    {
        id: "w38",
        name: "Night Suit Pink",
        description: "Pink night suit",
        price: 54.99,
        image: "/images/w38-night-suit-pink.jpg",
        category: "women",
        subcategory: "Sleepwear",
        stock: 80,
        rating: 4.5,
        reviews: 260,
        gender: "women",
        discount: 0
    },
    {
        id: "w39",
        name: "Pyjama Set Purple",
        description: "Purple pyjama set",
        price: 49.99,
        image: "/images/w39-pyjama-set-purple.jpg",
        category: "women",
        subcategory: "Sleepwear",
        stock: 90,
        rating: 4.6,
        reviews: 300,
        gender: "women",
        discount: 0
    },
    {
        id: "w40",
        name: "Sleepwear Shorts",
        description: "Comfortable sleep shorts",
        price: 29.99,
        image: "/images/w40-sleepwear-shorts.jpg",
        category: "women",
        subcategory: "Sleepwear",
        stock: 110,
        rating: 4.4,
        reviews: 280,
        gender: "women",
        discount: 0
    },
    // ===== WOMEN'S WEAR - SPORTSWEAR =====
    {
        id: "w41",
        name: "Sports Leggings Black",
        description: "Black sports leggings",
        price: 59.99,
        image: "/images/w41-sports-leggings-black.jpg",
        category: "women",
        subcategory: "Sportswear",
        stock: 100,
        rating: 4.7,
        reviews: 340,
        gender: "women",
        discount: 0
    },
    {
        id: "w42",
        name: "Sports Bra Black",
        description: "Black sports bra",
        price: 54.99,
        image: "/images/w42-sports-bra-black.jpg",
        category: "women",
        subcategory: "Sportswear",
        stock: 90,
        rating: 4.6,
        reviews: 280,
        gender: "women",
        discount: 0
    },
    {
        id: "w43",
        name: "Gym Top Navy",
        description: "Navy gym top",
        price: 39.99,
        image: "/images/w43-gym-top-navy.jpg",
        category: "women",
        subcategory: "Sportswear",
        stock: 95,
        rating: 4.5,
        reviews: 260,
        gender: "women",
        discount: 0
    },
    {
        id: "w44",
        name: "Gym Set Blue",
        description: "Blue gym top and bottom set",
        price: 89.99,
        image: "/images/w44-gym-set-blue.jpg",
        category: "women",
        subcategory: "Sportswear",
        stock: 75,
        rating: 4.6,
        reviews: 220,
        gender: "women",
        discount: 0
    },
    // ===== WOMEN'S WEAR - MATERNITY =====
    {
        id: "w45",
        name: "Maternity Kurti Black",
        description: "Black maternity kurti",
        price: 74.99,
        image: "/images/w45-maternity-kurti-black.jpg",
        category: "women",
        subcategory: "Maternity Wear",
        stock: 60,
        rating: 4.6,
        reviews: 180,
        gender: "women",
        discount: 0
    },
    {
        id: "w46",
        name: "Maternity Top White",
        description: "White maternity top",
        price: 54.99,
        image: "/images/w46-maternity-top-white.jpg",
        category: "women",
        subcategory: "Maternity Wear",
        stock: 70,
        rating: 4.5,
        reviews: 200,
        gender: "women",
        discount: 0
    },
    {
        id: "w47",
        name: "Feeding Bra Black",
        description: "Black nursing/feeding bra",
        price: 59.99,
        image: "/images/w47-feeding-bra-black.jpg",
        category: "women",
        subcategory: "Maternity Wear",
        stock: 75,
        rating: 4.6,
        reviews: 220,
        gender: "women",
        discount: 0
    },
    {
        id: "w48",
        name: "Maternity Brief",
        description: "Maternity comfort brief",
        price: 29.99,
        image: "/images/w48-maternity-brief.jpg",
        category: "women",
        subcategory: "Maternity Wear",
        stock: 80,
        rating: 4.5,
        reviews: 240,
        gender: "women",
        discount: 0
    },
    {
        id: "w49",
        name: "Maternity Bottom Wear",
        description: "Maternity leggings",
        price: 64.99,
        image: "/images/w49-maternity-bottom-wear.jpg",
        category: "women",
        subcategory: "Maternity Wear",
        stock: 70,
        rating: 4.6,
        reviews: 200,
        gender: "women",
        discount: 0
    },
    // ===== WOMEN'S FOOTWEAR =====
    {
        id: "w50",
        name: "Heels Red",
        description: "Stylish red heels",
        price: 99.99,
        image: "/images/w50-heels-red.jpg",
        category: "women",
        subcategory: "Footwear",
        stock: 60,
        rating: 4.7,
        reviews: 240,
        gender: "women",
        discount: 0
    },
    {
        id: "w51",
        name: "Sandals Navy",
        description: "Comfortable navy sandals",
        price: 49.99,
        image: "/images/w51-sandals-navy.jpg",
        category: "women",
        subcategory: "Footwear",
        stock: 70,
        rating: 4.6,
        reviews: 280,
        gender: "women",
        discount: 0
    },
    {
        id: "w52",
        name: "Boots Black",
        description: "Winter black boots",
        price: 149.99,
        image: "/images/w52-boots-black.jpg",
        category: "women",
        subcategory: "Footwear",
        stock: 75,
        rating: 4.7,
        reviews: 320,
        gender: "women",
        discount: 0
    },
    {
        id: "w53",
        name: "Sneakers White",
        description: "Casual white sneakers",
        price: 79.99,
        image: "/images/w53-sneakers-white.jpg",
        category: "women",
        subcategory: "Footwear",
        stock: 85,
        rating: 4.5,
        reviews: 310,
        gender: "women",
        discount: 0
    },
    {
        id: "w54",
        name: "Flip Flops Pink",
        description: "Comfortable pink flip flops",
        price: 29.99,
        image: "/images/w54-flip-flops-pink.jpg",
        category: "women",
        subcategory: "Footwear",
        stock: 90,
        rating: 4.6,
        reviews: 280,
        gender: "women",
        discount: 0
    },
    {
        id: "w55",
        name: "Shoes Flat Brown",
        description: "Casual flat brown shoes",
        price: 59.99,
        image: "/images/w55-shoes-flat-brown.jpg",
        category: "women",
        subcategory: "Footwear",
        stock: 100,
        rating: 4.5,
        reviews: 340,
        gender: "women",
        discount: 0
    },
    {
        id: "w56",
        name: "Sports Shoes Running",
        description: "Professional running sports shoes",
        price: 119.99,
        image: "/images/w56-sports-shoes-running.jpg",
        category: "women",
        subcategory: "Footwear",
        stock: 110,
        rating: 4.8,
        reviews: 480,
        gender: "women",
        discount: 0
    },
    {
        id: "w57",
        name: "Trendy Shoes Blue",
        description: "Trendy blue shoes",
        price: 74.99,
        image: "/images/w57-trendy-shoes-blue.jpg",
        category: "women",
        subcategory: "Footwear",
        stock: 80,
        rating: 4.6,
        reviews: 280,
        gender: "women",
        discount: 0
    },
    {
        id: "w58",
        name: "Flip Flops",
        description: "Comfortable flip flops",
        price: 19.99,
        image: "/images/w58-flip-flops.jpg",
        category: "women",
        subcategory: "Footwear",
        stock: 200,
        rating: 4.4,
        reviews: 420,
        gender: "women",
        discount: 0
    },
    {
        id: "w59",
        name: "Crocs Black",
        description: "Comfortable black crocs",
        price: 49.99,
        image: "/images/w59-crocs-black.jpg",
        category: "women",
        subcategory: "Footwear",
        stock: 120,
        rating: 4.5,
        reviews: 360,
        gender: "women",
        discount: 0
    },
    {
        id: "w60",
        name: "Slippers Comfort",
        description: "Comfortable home slippers",
        price: 29.99,
        image: "/images/w60-slippers-comfort.jpg",
        category: "women",
        subcategory: "Footwear",
        stock: 140,
        rating: 4.6,
        reviews: 340,
        gender: "women",
        discount: 0
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/product-image-mapping.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Comprehensive product image mapping system
// Ensures ZERO missing images by intelligently matching products to relevant e-commerce images
__turbopack_context__.s([
    "getProductImage",
    ()=>getProductImage,
    "productImageMapping",
    ()=>productImageMapping
]);
const productImageMapping = {
    // ===== T-SHIRTS & CASUAL TOPS =====
    "Summer Cotton": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop&q=90",
    "T-Shirt": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop&q=90",
    "Striped Casual": "https://images.unsplash.com/photo-1555062645-c07966c4a3fb?w=600&h=600&fit=crop&q=90",
    "Trendy Top": "https://images.unsplash.com/photo-1572459687212-167e3e3c1a65?w=600&h=600&fit=crop&q=90",
    "Top Wear": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop&q=90",
    Top: "https://images.unsplash.com/photo-1535193566835-653ccbf986c6?w=600&h=600&fit=crop&q=90",
    // ===== SHIRTS & FORMAL WEAR =====
    "Casual Linen": "https://images.unsplash.com/photo-1596399874116-aab77e5b0c5d?w=600&h=600&fit=crop&q=90",
    "Formal Shirt": "https://images.unsplash.com/photo-1617638924702-92f37f7d4ad7?w=600&h=600&fit=crop&q=90",
    Shirt: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=600&fit=crop&q=90",
    Formal: "https://images.unsplash.com/photo-1617638924702-92f37f7d4ad7?w=600&h=600&fit=crop&q=90",
    // ===== BOTTOMS & JEANS =====
    "Blue Denim": "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=600&h=600&fit=crop&q=90",
    "Black Denim": "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=600&h=600&fit=crop&q=90",
    Jeans: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=600&h=600&fit=crop&q=90",
    "Cargo Pants": "https://images.unsplash.com/photo-1506629082632-401017062e57?w=600&h=600&fit=crop&q=90",
    "Baggy Fit": "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=600&h=600&fit=crop&q=90",
    Joggers: "https://images.unsplash.com/photo-1506629082632-401017062e57?w=600&h=600&fit=crop&q=90",
    "Track Pants": "https://images.unsplash.com/photo-1506629082632-401017062e57?w=600&h=600&fit=crop&q=90",
    "Formal Trousers": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=600&fit=crop&q=90",
    Dhoti: "https://images.unsplash.com/photo-1595777707802-69b0b9a1a428?w=600&h=600&fit=crop&q=90",
    Shorts: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=600&fit=crop&q=90",
    "Bottom Wear": "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=600&h=600&fit=crop&q=90",
    // ===== ETHNIC WEAR =====
    Kurta: "https://images.unsplash.com/photo-1584872276542-ec1b0db9e71d?w=600&h=600&fit=crop&q=90",
    "Kurta Pajama": "https://images.unsplash.com/photo-1584872276542-ec1b0db9e71d?w=600&h=600&fit=crop&q=90",
    Sherwani: "https://images.unsplash.com/photo-1644863567841-85a6e4fe0945?w=600&h=600&fit=crop&q=90",
    Jodhpuri: "https://images.unsplash.com/photo-1644863567841-85a6e4fe0945?w=600&h=600&fit=crop&q=90",
    "Wedding Suit": "https://images.unsplash.com/photo-1591047990418-b491889adf11?w=600&h=600&fit=crop&q=90",
    "Nehru Jacket": "https://images.unsplash.com/photo-1591047990418-b491889adf11?w=600&h=600&fit=crop&q=90",
    Saree: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop&q=90",
    Kurti: "https://images.unsplash.com/photo-1617450443192-e19d93e6c99c?w=600&h=600&fit=crop&q=90",
    Lehenga: "https://images.unsplash.com/photo-1614613535308-eb5fbd8f2c42?w=600&h=600&fit=crop&q=90",
    Ethnic: "https://images.unsplash.com/photo-1584872276542-ec1b0db9e71d?w=600&h=600&fit=crop&q=90",
    // ===== INNERWEAR & INTIMATE =====
    "Cotton Vest": "https://images.unsplash.com/photo-1578331815242-7c5d6c9c4b53?w=600&h=600&fit=crop&q=90",
    Thermal: "https://images.unsplash.com/photo-1544131519-9fc3c4dcb569?w=600&h=600&fit=crop&q=90",
    Brief: "https://images.unsplash.com/photo-1578331815242-7c5d6c9c4b53?w=600&h=600&fit=crop&q=90",
    Boxer: "https://images.unsplash.com/photo-1578331815242-7c5d6c9c4b53?w=600&h=600&fit=crop&q=90",
    Trunk: "https://images.unsplash.com/photo-1578331815242-7c5d6c9c4b53?w=600&h=600&fit=crop&q=90",
    Innerwear: "https://images.unsplash.com/photo-1578331815242-7c5d6c9c4b53?w=600&h=600&fit=crop&q=90",
    Bra: "https://images.unsplash.com/photo-1578331815242-7c5d6c9c4b53?w=600&h=600&fit=crop&q=90",
    Panties: "https://images.unsplash.com/photo-1578331815242-7c5d6c9c4b53?w=600&h=600&fit=crop&q=90",
    // ===== SPORTSWEAR =====
    Gym: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=600&h=600&fit=crop&q=90",
    Sports: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&q=90",
    Sportswear: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=600&h=600&fit=crop&q=90",
    "Track Suit": "https://images.unsplash.com/photo-1506629082632-401017062e57?w=600&h=600&fit=crop&q=90",
    Yoga: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=600&h=600&fit=crop&q=90",
    Fitness: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=600&h=600&fit=crop&q=90",
    // ===== NIGHTWEAR & SLEEPWEAR =====
    Pyjama: "https://images.unsplash.com/photo-1551956797-d816af19a829?w=600&h=600&fit=crop&q=90",
    "Night Suit": "https://images.unsplash.com/photo-1551956797-d816af19a829?w=600&h=600&fit=crop&q=90",
    "Night Shorts": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=600&fit=crop&q=90",
    Nightwear: "https://images.unsplash.com/photo-1551956797-d816af19a829?w=600&h=600&fit=crop&q=90",
    Loungewear: "https://images.unsplash.com/photo-1551956797-d816af19a829?w=600&h=600&fit=crop&q=90",
    // ===== WINTER WEAR & OUTERWEAR =====
    Shrug: "https://images.unsplash.com/photo-1556821552-5f694361f1c5?w=600&h=600&fit=crop&q=90",
    Jacket: "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=600&h=600&fit=crop&q=90",
    Sweater: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d537?w=600&h=600&fit=crop&q=90",
    Cap: "https://images.unsplash.com/photo-1588850561407-ed78c282e117?w=600&h=600&fit=crop&q=90",
    Socks: "https://images.unsplash.com/photo-1556821552-28581ce09c3d?w=600&h=600&fit=crop&q=90",
    "Hand Gloves": "https://images.unsplash.com/photo-1547925253-6c039ee4b410?w=600&h=600&fit=crop&q=90",
    "Winter Wear": "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=600&h=600&fit=crop&q=90",
    // ===== DRESS & GOWN =====
    Dress: "https://images.unsplash.com/photo-1595777707802-69b0b9a1a428?w=600&h=600&fit=crop&q=90",
    Gown: "https://images.unsplash.com/photo-1595777707802-69b0b9a1a428?w=600&h=600&fit=crop&q=90",
    Jumpsuit: "https://images.unsplash.com/photo-1617450443192-e19d93e6c99c?w=600&h=600&fit=crop&q=90",
    Tunic: "https://images.unsplash.com/photo-1535193566835-653ccbf986c6?w=600&h=600&fit=crop&q=90",
    // ===== FOOTWEAR =====
    Shoes: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&q=90",
    "Party Shoes": "https://images.unsplash.com/photo-1543163521-9efdc0e7d55b?w=600&h=600&fit=crop&q=90",
    Loafers: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop&q=90",
    "Office Shoes": "https://images.unsplash.com/photo-1543163521-9efdc0e7d55b?w=600&h=600&fit=crop&q=90",
    "Branded Shoes": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&q=90",
    "Casual Shoes": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&q=90",
    "Sports Shoes": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&q=90",
    "Trendy Shoes": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&q=90",
    "Flip Flops": "https://images.unsplash.com/photo-1572099160102-9a86fc20f8dc?w=600&h=600&fit=crop&q=90",
    Crocs: "https://images.unsplash.com/photo-1572099160102-9a86fc20f8dc?w=600&h=600&fit=crop&q=90",
    Slipper: "https://images.unsplash.com/photo-1591047990418-b491889adf11?w=600&h=600&fit=crop&q=90",
    Boot: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&h=600&fit=crop&q=90",
    Sandal: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop&q=90",
    Footwear: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&q=90",
    // ===== ACCESSORIES =====
    Belt: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop&q=90",
    Wallet: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop&q=90",
    Watch: "https://images.unsplash.com/photo-1523170335684-f06b100991c3?w=600&h=600&fit=crop&q=90",
    Sunglasses: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop&q=90",
    Bag: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop&q=90",
    Handbag: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop&q=90",
    Backpack: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop&q=90",
    Sling: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop&q=90",
    Travel: "https://images.unsplash.com/photo-1547949003-4b4efb2347f5?w=600&h=600&fit=crop&q=90",
    Hair: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop&q=90",
    // ===== JEWELRY & ACCESSORIES =====
    Necklace: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop&q=90",
    Earring: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop&q=90",
    Bangle: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop&q=90",
    Ring: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop&q=90",
    Anklet: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop&q=90",
    Jewellery: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop&q=90",
    // ===== BEAUTY & PERSONAL CARE =====
    Makeup: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop&q=90",
    Skincare: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop&q=90",
    Haircare: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop&q=90",
    Beauty: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop&q=90",
    Health: "https://images.unsplash.com/photo-1584308666744-24d5f400f4f7?w=600&h=600&fit=crop&q=90",
    Supplement: "https://images.unsplash.com/photo-1584308666744-24d5f400f4f7?w=600&h=600&fit=crop&q=90",
    // ===== HOME & KITCHEN =====
    Kitchen: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop&q=90",
    Cookware: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop&q=90",
    Decor: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=600&fit=crop&q=90",
    Bedsheet: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=600&fit=crop&q=90",
    Curtain: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=600&fit=crop&q=90",
    Cleaning: "https://images.unsplash.com/photo-1585260269976-fc9d7c4b2e3e?w=600&h=600&fit=crop&q=90",
    // ===== ELECTRONICS & TECH =====
    Mobile: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=600&fit=crop&q=90",
    Earphone: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop&q=90",
    Charger: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&h=600&fit=crop&q=90",
    Gadget: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=600&fit=crop&q=90",
    Appliance: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=600&fit=crop&q=90"
};
function getProductImage(productName, subcategoryName = "") {
    // Strategy 1: Try exact match with product name
    if (productImageMapping[productName]) {
        return productImageMapping[productName];
    }
    // Strategy 2: Try each word in the product name (highest priority first)
    const nameWords = productName.split(" ").filter((word)=>word.length > 0);
    for (const word of nameWords){
        if (productImageMapping[word]) {
            return productImageMapping[word];
        }
    }
    // Strategy 3: Try words from subcategory
    const subWords = subcategoryName.split(" ").filter((word)=>word.length > 0);
    for (const word of subWords){
        if (productImageMapping[word]) {
            return productImageMapping[word];
        }
    }
    // Strategy 4: Try partial matching (substring contains)
    for (const word of nameWords){
        for (const [key, value] of Object.entries(productImageMapping)){
            if (key.includes(word) || word.includes(key)) {
                return value;
            }
        }
    }
    // Strategy 5: Default fallback - premium e-commerce product image
    return "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop&q=90";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/image-slider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageSlider",
    ()=>ImageSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ImageSlider({ images, productName }) {
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAutoPlay, setIsAutoPlay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageSlider.useEffect": ()=>{
            if (!isAutoPlay || images.length <= 1) return;
            const interval = setInterval({
                "ImageSlider.useEffect.interval": ()=>{
                    setCurrentIndex({
                        "ImageSlider.useEffect.interval": (prev)=>(prev + 1) % images.length
                    }["ImageSlider.useEffect.interval"]);
                }
            }["ImageSlider.useEffect.interval"], 4000);
            return ({
                "ImageSlider.useEffect": ()=>clearInterval(interval)
            })["ImageSlider.useEffect"];
        }
    }["ImageSlider.useEffect"], [
        isAutoPlay,
        images.length
    ]);
    const goToPrevious = ()=>{
        setIsAutoPlay(false);
        setCurrentIndex((prev)=>(prev - 1 + images.length) % images.length);
    };
    const goToNext = ()=>{
        setIsAutoPlay(false);
        setCurrentIndex((prev)=>(prev + 1) % images.length);
    };
    const goToSlide = (index)=>{
        setIsAutoPlay(false);
        setCurrentIndex(index);
    };
    // Resume auto-play after user interaction
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageSlider.useEffect": ()=>{
            if (!isAutoPlay) {
                const timer = setTimeout({
                    "ImageSlider.useEffect.timer": ()=>setIsAutoPlay(true)
                }["ImageSlider.useEffect.timer"], 5000);
                return ({
                    "ImageSlider.useEffect": ()=>clearTimeout(timer)
                })["ImageSlider.useEffect"];
            }
        }
    }["ImageSlider.useEffect"], [
        isAutoPlay
    ]);
    if (!images || images.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "aspect-square bg-muted flex items-center justify-center rounded-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-muted-foreground text-sm",
                children: "No image available"
            }, void 0, false, {
                fileName: "[project]/components/image-slider.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/image-slider.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative aspect-square overflow-hidden rounded-lg bg-muted group",
        onMouseEnter: ()=>setIsAutoPlay(false),
        onMouseLeave: ()=>setIsAutoPlay(true),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-full w-full overflow-hidden",
                children: images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: image || "/placeholder.svg",
                        alt: `${productName} - View ${index + 1}`,
                        className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0"}`,
                        loading: index === 0 ? "eager" : "lazy"
                    }, index, false, {
                        fileName: "[project]/components/image-slider.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/image-slider.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToPrevious,
                        className: "absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-black opacity-0 transition-opacity group-hover:opacity-100 hover:bg-white z-10",
                        "aria-label": "Previous image",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/components/image-slider.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/image-slider.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToNext,
                        className: "absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-black opacity-0 transition-opacity group-hover:opacity-100 hover:bg-white z-10",
                        "aria-label": "Next image",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/components/image-slider.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/image-slider.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10",
                children: images.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>goToSlide(index),
                        className: `h-2 transition-all ${index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/70"}`,
                        "aria-label": `Go to image ${index + 1}`
                    }, index, false, {
                        fileName: "[project]/components/image-slider.tsx",
                        lineNumber: 101,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/image-slider.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-3 right-3 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-medium",
                children: [
                    currentIndex + 1,
                    "/",
                    images.length
                ]
            }, void 0, true, {
                fileName: "[project]/components/image-slider.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/image-slider.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(ImageSlider, "ybU6Qm0wsRRT6079K4v1RlSF9VA=");
_c = ImageSlider;
var _c;
__turbopack_context__.k.register(_c, "ImageSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/product-image-gallery.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProductImages",
    ()=>getProductImages,
    "productImageGallery",
    ()=>productImageGallery
]);
const productImageGallery = {
    // Men's Featured Products
    m1: [
        "/images/products/m1-summer-white-1.jpg",
        "/images/products/m1-summer-white-2.jpg",
        "/images/products/m1-summer-white-3.jpg"
    ],
    m2: [
        "/images/products/m2-summer-blue-1.jpg",
        "/images/products/m2-summer-blue-2.jpg",
        "/images/products/m2-summer-blue-3.jpg"
    ],
    m3: [
        "/images/products/m3-summer-black-1.jpg",
        "/images/products/m3-summer-black-2.jpg",
        "/images/products/m3-summer-black-3.jpg"
    ],
    m4: [
        "/images/products/m4-linen-1.jpg",
        "/images/products/m4-linen-2.jpg",
        "/images/products/m4-linen-3.jpg"
    ],
    m5: [
        "/images/products/m5-formal-white-1.jpg",
        "/images/products/m5-formal-white-2.jpg",
        "/images/products/m5-formal-white-3.jpg"
    ],
    m6: [
        "/images/products/m6-formal-blue-1.jpg",
        "/images/products/m6-formal-blue-2.jpg",
        "/images/products/m6-formal-blue-3.jpg"
    ],
    m7: [
        "/images/products/m6-formal-blue-1.jpg",
        "/images/products/m6-formal-blue-2.jpg",
        "/images/products/m6-formal-blue-3.jpg"
    ],
    m8: [
        "/images/products/m6-formal-blue-1.jpg",
        "/images/products/m6-formal-blue-2.jpg",
        "/images/products/m6-formal-blue-3.jpg"
    ],
    m9: [
        "/images/products/m9-denim-blue-1.jpg",
        "/images/products/m9-denim-blue-2.jpg",
        "/images/products/m9-denim-blue-3.jpg"
    ],
    m10: [
        "/images/products/m10-denim-black-1.jpg",
        "/images/products/m10-denim-black-2.jpg",
        "/images/products/m10-denim-black-3.jpg"
    ],
    // Women's Featured Products
    w1: [
        "/images/products/w1-summer-top-1.jpg",
        "/images/products/w1-summer-top-2.jpg",
        "/images/products/w1-summer-top-3.jpg"
    ],
    w2: [
        "/images/products/w2-casual-tshirt-1.jpg",
        "/images/products/w2-casual-tshirt-2.jpg",
        "/images/products/w2-casual-tshirt-3.jpg"
    ],
    w3: [
        "/images/products/w3-dress-casual-1.jpg",
        "/images/products/w3-dress-casual-2.jpg",
        "/images/products/w3-dress-casual-3.jpg"
    ],
    w4: [
        "/images/products/w4-gown-red-1.jpg",
        "/images/products/w4-gown-red-2.jpg",
        "/images/products/w4-gown-red-3.jpg"
    ]
};
function getProductImages(productId) {
    // Return gallery images if available
    if (productImageGallery[productId] && productImageGallery[productId].length > 0) {
        return productImageGallery[productId];
    }
    // Smart fallback: use m6 blue shirt images for all unmatched products
    // These are the formal blue shirt images that work great for any product
    return [
        "/images/products/m6-formal-blue-1.jpg",
        "/images/products/m6-formal-blue-2.jpg",
        "/images/products/m6-formal-blue-3.jpg"
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/product-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$product$2d$image$2d$mapping$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/product-image-mapping.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$image$2d$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/image-slider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$product$2d$image$2d$gallery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/product-image-gallery.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const ProductCard = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function ProductCard({ product, onAddToCart, onWishlistChange }) {
    _s();
    const [isWishlisted, setIsWishlisted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const checkWishlistStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductCard.ProductCard.useCallback[checkWishlistStatus]": ()=>{
            const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
            setIsWishlisted(wishlist.includes(product.id));
        }
    }["ProductCard.ProductCard.useCallback[checkWishlistStatus]"], [
        product.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductCard.ProductCard.useEffect": ()=>{
            checkWishlistStatus();
        }
    }["ProductCard.ProductCard.useEffect"], [
        product.id,
        checkWishlistStatus
    ]);
    const handleWishlistToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductCard.ProductCard.useCallback[handleWishlistToggle]": (e)=>{
            e.preventDefault();
            if (!isAuthenticated) {
                sessionStorage.setItem("redirectAfterLogin", `/products/${product.id}`);
                router.push("/login");
                return;
            }
            const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
            const newWishlisted = !isWishlisted;
            const newWishlist = newWishlisted ? [
                ...wishlist,
                product.id
            ] : wishlist.filter({
                "ProductCard.ProductCard.useCallback[handleWishlistToggle]": (id)=>id !== product.id
            }["ProductCard.ProductCard.useCallback[handleWishlistToggle]"]);
            localStorage.setItem("wishlist", JSON.stringify(newWishlist));
            setIsWishlisted(newWishlisted);
            onWishlistChange?.(product.id, newWishlisted);
        }
    }["ProductCard.ProductCard.useCallback[handleWishlistToggle]"], [
        isAuthenticated,
        isWishlisted,
        product.id,
        onWishlistChange,
        router
    ]);
    const getImageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductCard.ProductCard.useCallback[getImageUrl]": ()=>{
            if (product.image && product.image.trim() !== "") {
                return product.image;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$product$2d$image$2d$mapping$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductImage"])(product.name, product.subcategory);
        }
    }["ProductCard.ProductCard.useCallback[getImageUrl]"], [
        product.image,
        product.name,
        product.subcategory
    ]);
    const imageUrl = getImageUrl();
    const galleryImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$product$2d$image$2d$gallery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProductImages"])(product.id);
    const handleAddToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProductCard.ProductCard.useCallback[handleAddToCart]": (e)=>{
            e.preventDefault();
            if (!isAuthenticated) {
                sessionStorage.setItem("redirectAfterLogin", `/products/${product.id}`);
                router.push("/login");
                return;
            }
            onAddToCart?.(product);
        }
    }["ProductCard.ProductCard.useCallback[handleAddToCart]"], [
        isAuthenticated,
        product,
        onAddToCart,
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/products/${product.id}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group cursor-pointer rounded-lg border border-border bg-card transition-all hover:border-accent hover:shadow-lg overflow-hidden h-full flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$image$2d$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageSlider"], {
                            images: galleryImages,
                            productName: product.name
                        }, void 0, false, {
                            fileName: "[project]/components/product-card.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleWishlistToggle,
                            className: "absolute top-3 right-3 p-2.5 rounded-full bg-white/90 hover:bg-white transition-all shadow-lg z-20 backdrop-blur-sm",
                            "aria-label": isWishlisted ? "Remove from wishlist" : "Add to wishlist",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: `h-5 w-5 transition ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-red-500"}`
                            }, void 0, false, {
                                fileName: "[project]/components/product-card.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/product-card.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        product.stock < 10 && product.stock > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-3 left-3 bg-destructive text-destructive-foreground px-2 py-1 text-xs font-semibold rounded",
                            children: [
                                "Only ",
                                product.stock,
                                " left"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/product-card.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this),
                        product.stock === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-black/40 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-destructive text-destructive-foreground px-3 py-1 rounded font-semibold",
                                children: "Out of Stock"
                            }, void 0, false, {
                                fileName: "[project]/components/product-card.tsx",
                                lineNumber: 103,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/product-card.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/product-card.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 flex flex-col flex-grow",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-foreground line-clamp-2 mb-2 text-sm",
                            children: product.name
                        }, void 0, false, {
                            fileName: "[project]/components/product-card.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground line-clamp-2 mb-auto",
                            children: product.description
                        }, void 0, false, {
                            fileName: "[project]/components/product-card.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 flex items-center justify-between mt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg font-bold text-accent",
                                    children: [
                                        "$",
                                        product.price.toFixed(2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/product-card.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: "h-4 w-4 fill-accent text-accent"
                                        }, void 0, false, {
                                            fileName: "[project]/components/product-card.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium",
                                            children: product.rating
                                        }, void 0, false, {
                                            fileName: "[project]/components/product-card.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-muted-foreground",
                                            children: [
                                                "(",
                                                product.reviews,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/product-card.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/product-card.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/product-card.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            className: "w-full gap-2 text-xs",
                            onClick: handleAddToCart,
                            disabled: product.stock === 0,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/product-card.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                "Add to Cart"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/product-card.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/product-card.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/product-card.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/product-card.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}, "dwL+xbyfY8rR0bCw3+IzbiPHp/E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
})), "dwL+xbyfY8rR0bCw3+IzbiPHp/E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = ProductCard;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProductCard$memo");
__turbopack_context__.k.register(_c1, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2d$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hero-slider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/product-card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const [featured, setFeatured] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [trendingProducts, setTrendingProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [wishlistCount, setWishlistCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            setFeatured(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].slice(0, 6));
            const customerProducts = JSON.parse(localStorage.getItem("customerProducts") || "{}");
            const trendingCustomerProducts = [];
            Object.values(customerProducts).forEach({
                "Home.useEffect": (userProducts)=>{
                    userProducts.forEach({
                        "Home.useEffect": (product)=>{
                            if (product.isTrending) {
                                trendingCustomerProducts.push({
                                    id: product.id,
                                    name: product.title,
                                    description: product.description,
                                    price: product.price,
                                    image: product.image,
                                    category: product.category,
                                    subcategory: "",
                                    stock: product.stock,
                                    rating: 4.5,
                                    reviews: 0,
                                    gender: "women"
                                });
                            }
                        }
                    }["Home.useEffect"]);
                }
            }["Home.useEffect"]);
            setTrendingProducts(trendingCustomerProducts.slice(0, 6));
            const savedCart = localStorage.getItem("cart");
            if (savedCart) {
                setCart(JSON.parse(savedCart));
            }
            updateWishlistCount();
        }
    }["Home.useEffect"], []);
    const handleAddToCart = (product)=>{
        const newCart = {
            ...cart
        };
        newCart[product.id] = (newCart[product.id] || 0) + 1;
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    };
    const handleWishlistChange = ()=>{
        updateWishlistCount();
    };
    const updateWishlistCount = ()=>{
        const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
        setWishlistCount(wishlist.length);
    };
    const cartCount = Object.values(cart).reduce((a, b)=>a + b, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                cartCount: cartCount,
                wishlistCount: wishlistCount
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hero$2d$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroSlider"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 md:py-28",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-14 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-5xl font-bold mb-3 text-balance",
                                    children: "Featured Collection"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-lg",
                                    children: "Handpicked selections for the discerning customer"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max",
                            children: featured.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                                    product: product,
                                    onAddToCart: handleAddToCart,
                                    onWishlistChange: handleWishlistChange
                                }, product.id, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-16 flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/products",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "lg",
                                    variant: "outline",
                                    children: "View All Products"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            trendingProducts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-secondary/30 py-20 md:py-28",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-14 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-5xl font-bold mb-3 text-balance",
                                    children: "Trending Products"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground text-lg",
                                    children: "Popular items trending right now"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max",
                            children: trendingProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                                    product: product,
                                    onAddToCart: handleAddToCart,
                                    onWishlistChange: handleWishlistChange
                                }, product.id, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 107,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 106,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-secondary/30 py-20 md:py-28",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-8 md:grid-cols-3",
                        children: [
                            {
                                title: "Fast Shipping",
                                description: "Free shipping on orders over $100. Arrive within 2-3 business days."
                            },
                            {
                                title: "Premium Quality",
                                description: "All products carefully selected for durability and performance."
                            },
                            {
                                title: "100% Guaranteed",
                                description: "30-day money-back guarantee if you're not satisfied."
                            }
                        ].map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-lg border border-border p-8 bg-background shadow-sm hover:shadow-md transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mb-3 font-semibold text-lg",
                                        children: feature.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground",
                                        children: feature.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 144,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(Home, "JUzAPhI13TJmt5f7Rc8L6xvQVmE=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d9aefb27._.js.map