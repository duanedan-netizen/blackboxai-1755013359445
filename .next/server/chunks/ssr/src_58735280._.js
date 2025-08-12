module.exports = {

"[project]/src/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardAction": (()=>CardAction),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/lib/storage.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearAllData": (()=>clearAllData),
    "deleteLaudo": (()=>deleteLaudo),
    "exportLaudos": (()=>exportLaudos),
    "generateLaudoId": (()=>generateLaudoId),
    "generateLaudoNumber": (()=>generateLaudoNumber),
    "getLaudo": (()=>getLaudo),
    "getLaudos": (()=>getLaudos),
    "getLaudosByTipo": (()=>getLaudosByTipo),
    "getSettings": (()=>getSettings),
    "getStorageStats": (()=>getStorageStats),
    "importLaudos": (()=>importLaudos),
    "saveLaudo": (()=>saveLaudo),
    "saveSettings": (()=>saveSettings)
});
const STORAGE_KEY = 'laudos-periciais';
const SETTINGS_KEY = 'laudos-settings';
function saveLaudo(laudo) {
    const laudos = getLaudos();
    const existingIndex = laudos.findIndex((l)=>l.id === laudo.id);
    if (existingIndex >= 0) {
        laudos[existingIndex] = laudo;
    } else {
        laudos.push(laudo);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(laudos));
}
function getLaudos() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error('Erro ao carregar laudos:', error);
        return [];
    }
}
function getLaudo(id) {
    const laudos = getLaudos();
    return laudos.find((l)=>l.id === id) || null;
}
function deleteLaudo(id) {
    const laudos = getLaudos();
    const filtered = laudos.filter((l)=>l.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}
function getLaudosByTipo(tipo) {
    const laudos = getLaudos();
    return laudos.filter((l)=>l.tipo === tipo);
}
function getSettings() {
    try {
        const stored = localStorage.getItem(SETTINGS_KEY);
        return stored ? JSON.parse(stored) : {
            peritoPadrao: '',
            numeroSequencial: 1,
            prefixoLaudo: 'LP'
        };
    } catch (error) {
        console.error('Erro ao carregar configurações:', error);
        return {
            peritoPadrao: '',
            numeroSequencial: 1,
            prefixoLaudo: 'LP'
        };
    }
}
function saveSettings(settings) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}
function generateLaudoNumber() {
    const settings = getSettings();
    const numero = `${settings.prefixoLaudo}-${String(settings.numeroSequencial).padStart(4, '0')}`;
    // Incrementar o número sequencial
    settings.numeroSequencial += 1;
    saveSettings(settings);
    return numero;
}
function generateLaudoId() {
    return `laudo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function exportLaudos() {
    const laudos = getLaudos();
    const settings = getSettings();
    return JSON.stringify({
        laudos,
        settings,
        exportDate: new Date().toISOString(),
        version: '1.0'
    }, null, 2);
}
function importLaudos(jsonData) {
    try {
        const data = JSON.parse(jsonData);
        if (!data.laudos || !Array.isArray(data.laudos)) {
            return {
                success: false,
                message: 'Formato de arquivo inválido'
            };
        }
        // Fazer backup dos dados atuais
        const currentLaudos = getLaudos();
        const currentSettings = getSettings();
        try {
            // Importar laudos
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data.laudos));
            // Importar configurações se existirem
            if (data.settings) {
                localStorage.setItem(SETTINGS_KEY, JSON.stringify(data.settings));
            }
            return {
                success: true,
                message: `${data.laudos.length} laudos importados com sucesso`
            };
        } catch (error) {
            // Restaurar backup em caso de erro
            localStorage.setItem(STORAGE_KEY, JSON.stringify(currentLaudos));
            localStorage.setItem(SETTINGS_KEY, JSON.stringify(currentSettings));
            throw error;
        }
    } catch (error) {
        console.error('Erro ao importar laudos:', error);
        return {
            success: false,
            message: 'Erro ao processar arquivo de importação'
        };
    }
}
function clearAllData() {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(SETTINGS_KEY);
}
function getStorageStats() {
    const laudos = getLaudos();
    const laudosPorTipo = laudos.reduce((acc, laudo)=>{
        acc[laudo.tipo] = (acc[laudo.tipo] || 0) + 1;
        return acc;
    }, {});
    const ultimoLaudo = laudos.length > 0 ? new Date(Math.max(...laudos.map((l)=>new Date(l.updatedAt).getTime()))) : undefined;
    return {
        totalLaudos: laudos.length,
        laudosPorTipo,
        ultimoLaudo
    };
}
}}),
"[project]/src/lib/templates.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TEMPLATES": (()=>TEMPLATES),
    "getAllTemplates": (()=>getAllTemplates),
    "getTemplate": (()=>getTemplate),
    "renderTemplate": (()=>renderTemplate)
});
const TEMPLATES = {
    'acidentes-transito': {
        tipo: 'acidentes-transito',
        nome: 'Laudo de Acidente de Trânsito',
        descricao: 'Template para perícias de acidentes de trânsito',
        campos: [
            {
                nome: 'dataHoraAcidente',
                label: 'Data e Hora do Acidente',
                tipo: 'datetime-local',
                obrigatorio: true
            },
            {
                nome: 'localExato',
                label: 'Local Exato',
                tipo: 'text',
                obrigatorio: true,
                placeholder: 'Endereço completo do acidente'
            },
            {
                nome: 'coordenadas',
                label: 'Coordenadas GPS',
                tipo: 'text',
                obrigatorio: false,
                placeholder: 'Latitude, Longitude'
            },
            {
                nome: 'condicoesClimaticas',
                label: 'Condições Climáticas',
                tipo: 'select',
                obrigatorio: true,
                opcoes: [
                    'Tempo bom',
                    'Chuva leve',
                    'Chuva forte',
                    'Neblina',
                    'Vento forte',
                    'Outro'
                ]
            },
            {
                nome: 'croquiDescricao',
                label: 'Descrição do Croqui',
                tipo: 'textarea',
                obrigatorio: true,
                placeholder: 'Descreva a dinâmica do acidente e posicionamento dos veículos'
            },
            {
                nome: 'dinamicaAcidente',
                label: 'Dinâmica do Acidente',
                tipo: 'textarea',
                obrigatorio: true,
                placeholder: 'Análise técnica da sequência dos fatos'
            },
            {
                nome: 'conclusoes',
                label: 'Conclusões',
                tipo: 'textarea',
                obrigatorio: true,
                placeholder: 'Conclusões técnicas do perito'
            }
        ],
        template: `
      <div class="laudo-container">
        <header class="laudo-header">
          <h1>LAUDO PERICIAL</h1>
          <h2>ACIDENTE DE TRÂNSITO</h2>
          <p><strong>Laudo nº:</strong> {{numeroLaudo}}</p>
          <p><strong>Data:</strong> {{dataLaudo}}</p>
        </header>

        <section class="dados-gerais">
          <h3>1. DADOS GERAIS</h3>
          <p><strong>Perito:</strong> {{perito}}</p>
          <p><strong>Data/Hora do Acidente:</strong> {{dataHoraAcidente}}</p>
          <p><strong>Local:</strong> {{localExato}}</p>
          {{#coordenadas}}<p><strong>Coordenadas:</strong> {{coordenadas}}</p>{{/coordenadas}}
          <p><strong>Condições Climáticas:</strong> {{condicoesClimaticas}}</p>
        </section>

        <section class="analise-tecnica">
          <h3>2. ANÁLISE TÉCNICA</h3>
          <h4>2.1 Descrição do Local e Dinâmica</h4>
          <p>{{croquiDescricao}}</p>
          
          <h4>2.2 Dinâmica do Acidente</h4>
          <p>{{dinamicaAcidente}}</p>
        </section>

        <section class="conclusoes">
          <h3>3. CONCLUSÕES</h3>
          <p>{{conclusoes}}</p>
        </section>

        <footer class="laudo-footer">
          <p>Local e data: ________________, {{dataLaudo}}</p>
          <br><br>
          <p>_________________________________</p>
          <p>{{perito}}</p>
          <p>Perito Criminal</p>
        </footer>
      </div>
    `
    },
    'crimes-vida': {
        tipo: 'crimes-vida',
        nome: 'Laudo de Crime Contra a Vida',
        descricao: 'Template para perícias de crimes contra a vida',
        campos: [
            {
                nome: 'dataHoraFato',
                label: 'Data e Hora do Fato',
                tipo: 'datetime-local',
                obrigatorio: true
            },
            {
                nome: 'localOcorrencia',
                label: 'Local da Ocorrência',
                tipo: 'text',
                obrigatorio: true
            },
            {
                nome: 'descricaoVitima',
                label: 'Descrição da Vítima',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'lesoesEncontradas',
                label: 'Lesões Encontradas',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'instrumentosUtilizados',
                label: 'Instrumentos Utilizados',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'analiseDinamica',
                label: 'Análise da Dinâmica',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'conclusoesMedicoLegais',
                label: 'Conclusões Médico-Legais',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'observacoes',
                label: 'Observações',
                tipo: 'textarea',
                obrigatorio: false
            }
        ],
        template: `
      <div class="laudo-container">
        <header class="laudo-header">
          <h1>LAUDO PERICIAL</h1>
          <h2>CRIME CONTRA A VIDA</h2>
          <p><strong>Laudo nº:</strong> {{numeroLaudo}}</p>
          <p><strong>Data:</strong> {{dataLaudo}}</p>
        </header>

        <section class="dados-gerais">
          <h3>1. DADOS GERAIS</h3>
          <p><strong>Perito:</strong> {{perito}}</p>
          <p><strong>Data/Hora do Fato:</strong> {{dataHoraFato}}</p>
          <p><strong>Local da Ocorrência:</strong> {{localOcorrencia}}</p>
        </section>

        <section class="exame-pericial">
          <h3>2. EXAME PERICIAL</h3>
          <h4>2.1 Descrição da Vítima</h4>
          <p>{{descricaoVitima}}</p>
          
          <h4>2.2 Lesões Encontradas</h4>
          <p>{{lesoesEncontradas}}</p>
          
          <h4>2.3 Instrumentos Utilizados</h4>
          <p>{{instrumentosUtilizados}}</p>
          
          <h4>2.4 Análise da Dinâmica</h4>
          <p>{{analiseDinamica}}</p>
        </section>

        <section class="conclusoes">
          <h3>3. CONCLUSÕES MÉDICO-LEGAIS</h3>
          <p>{{conclusoesMedicoLegais}}</p>
        </section>

        {{#observacoes}}
        <section class="observacoes">
          <h3>4. OBSERVAÇÕES</h3>
          <p>{{observacoes}}</p>
        </section>
        {{/observacoes}}

        <footer class="laudo-footer">
          <p>Local e data: ________________, {{dataLaudo}}</p>
          <br><br>
          <p>_________________________________</p>
          <p>{{perito}}</p>
          <p>Perito Criminal</p>
        </footer>
      </div>
    `
    },
    'crimes-patrimonio': {
        tipo: 'crimes-patrimonio',
        nome: 'Laudo de Crime Contra o Patrimônio',
        descricao: 'Template para perícias de crimes contra o patrimônio',
        campos: [
            {
                nome: 'dataHoraOcorrencia',
                label: 'Data e Hora da Ocorrência',
                tipo: 'datetime-local',
                obrigatorio: true
            },
            {
                nome: 'localOcorrencia',
                label: 'Local da Ocorrência',
                tipo: 'text',
                obrigatorio: true
            },
            {
                nome: 'tipoLocal',
                label: 'Tipo de Local',
                tipo: 'select',
                obrigatorio: true,
                opcoes: [
                    'Residência',
                    'Estabelecimento comercial',
                    'Veículo',
                    'Via pública',
                    'Outro'
                ]
            },
            {
                nome: 'bensSubtraidos',
                label: 'Bens Subtraídos',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'bensDanificados',
                label: 'Bens Danificados',
                tipo: 'textarea',
                obrigatorio: false
            },
            {
                nome: 'valorEstimado',
                label: 'Valor Estimado dos Danos',
                tipo: 'text',
                obrigatorio: true
            },
            {
                nome: 'metodoUtilizado',
                label: 'Método Utilizado',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'vestigiosEncontrados',
                label: 'Vestígios Encontrados',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'analiseTecnica',
                label: 'Análise Técnica',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'conclusoes',
                label: 'Conclusões',
                tipo: 'textarea',
                obrigatorio: true
            }
        ],
        template: `
      <div class="laudo-container">
        <header class="laudo-header">
          <h1>LAUDO PERICIAL</h1>
          <h2>CRIME CONTRA O PATRIMÔNIO</h2>
          <p><strong>Laudo nº:</strong> {{numeroLaudo}}</p>
          <p><strong>Data:</strong> {{dataLaudo}}</p>
        </header>

        <section class="dados-gerais">
          <h3>1. DADOS GERAIS</h3>
          <p><strong>Perito:</strong> {{perito}}</p>
          <p><strong>Data/Hora da Ocorrência:</strong> {{dataHoraOcorrencia}}</p>
          <p><strong>Local:</strong> {{localOcorrencia}}</p>
          <p><strong>Tipo de Local:</strong> {{tipoLocal}}</p>
        </section>

        <section class="analise-pericial">
          <h3>2. ANÁLISE PERICIAL</h3>
          <h4>2.1 Bens Subtraídos</h4>
          <p>{{bensSubtraidos}}</p>
          
          {{#bensDanificados}}
          <h4>2.2 Bens Danificados</h4>
          <p>{{bensDanificados}}</p>
          {{/bensDanificados}}
          
          <h4>2.3 Valor Estimado</h4>
          <p>{{valorEstimado}}</p>
          
          <h4>2.4 Método Utilizado</h4>
          <p>{{metodoUtilizado}}</p>
          
          <h4>2.5 Vestígios Encontrados</h4>
          <p>{{vestigiosEncontrados}}</p>
          
          <h4>2.6 Análise Técnica</h4>
          <p>{{analiseTecnica}}</p>
        </section>

        <section class="conclusoes">
          <h3>3. CONCLUSÕES</h3>
          <p>{{conclusoes}}</p>
        </section>

        <footer class="laudo-footer">
          <p>Local e data: ________________, {{dataLaudo}}</p>
          <br><br>
          <p>_________________________________</p>
          <p>{{perito}}</p>
          <p>Perito Criminal</p>
        </footer>
      </div>
    `
    },
    'constatacao-drogas': {
        tipo: 'constatacao-drogas',
        nome: 'Laudo de Constatação de Drogas',
        descricao: 'Template para perícias de constatação de substâncias entorpecentes',
        campos: [
            {
                nome: 'dataHoraApreensao',
                label: 'Data e Hora da Apreensão',
                tipo: 'datetime-local',
                obrigatorio: true
            },
            {
                nome: 'localApreensao',
                label: 'Local da Apreensão',
                tipo: 'text',
                obrigatorio: true
            },
            {
                nome: 'descricaoMaterial',
                label: 'Descrição do Material',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'pesoQuantidade',
                label: 'Peso/Quantidade',
                tipo: 'text',
                obrigatorio: true
            },
            {
                nome: 'testesPreliminares',
                label: 'Testes Preliminares Realizados',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'acondicionamento',
                label: 'Forma de Acondicionamento',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'aspectoFisico',
                label: 'Aspecto Físico',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'conclusoes',
                label: 'Conclusões',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'observacoes',
                label: 'Observações',
                tipo: 'textarea',
                obrigatorio: false
            }
        ],
        template: `
      <div class="laudo-container">
        <header class="laudo-header">
          <h1>LAUDO PERICIAL</h1>
          <h2>CONSTATAÇÃO DE SUBSTÂNCIA ENTORPECENTE</h2>
          <p><strong>Laudo nº:</strong> {{numeroLaudo}}</p>
          <p><strong>Data:</strong> {{dataLaudo}}</p>
        </header>

        <section class="dados-gerais">
          <h3>1. DADOS GERAIS</h3>
          <p><strong>Perito:</strong> {{perito}}</p>
          <p><strong>Data/Hora da Apreensão:</strong> {{dataHoraApreensao}}</p>
          <p><strong>Local da Apreensão:</strong> {{localApreensao}}</p>
        </section>

        <section class="exame-material">
          <h3>2. EXAME DO MATERIAL</h3>
          <h4>2.1 Descrição do Material</h4>
          <p>{{descricaoMaterial}}</p>
          
          <h4>2.2 Peso/Quantidade</h4>
          <p>{{pesoQuantidade}}</p>
          
          <h4>2.3 Aspecto Físico</h4>
          <p>{{aspectoFisico}}</p>
          
          <h4>2.4 Acondicionamento</h4>
          <p>{{acondicionamento}}</p>
          
          <h4>2.5 Testes Preliminares</h4>
          <p>{{testesPreliminares}}</p>
        </section>

        <section class="conclusoes">
          <h3>3. CONCLUSÕES</h3>
          <p>{{conclusoes}}</p>
        </section>

        {{#observacoes}}
        <section class="observacoes">
          <h3>4. OBSERVAÇÕES</h3>
          <p>{{observacoes}}</p>
        </section>
        {{/observacoes}}

        <footer class="laudo-footer">
          <p>Local e data: ________________, {{dataLaudo}}</p>
          <br><br>
          <p>_________________________________</p>
          <p>{{perito}}</p>
          <p>Perito Criminal</p>
        </footer>
      </div>
    `
    },
    'incendios': {
        tipo: 'incendios',
        nome: 'Laudo de Incêndio',
        descricao: 'Template para perícias de incêndios',
        campos: [
            {
                nome: 'dataHoraSinistro',
                label: 'Data e Hora do Sinistro',
                tipo: 'datetime-local',
                obrigatorio: true
            },
            {
                nome: 'localAfetado',
                label: 'Local Afetado',
                tipo: 'text',
                obrigatorio: true
            },
            {
                nome: 'areaAtingida',
                label: 'Área Atingida',
                tipo: 'text',
                obrigatorio: true
            },
            {
                nome: 'possivelOrigem',
                label: 'Possível Origem do Fogo',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'materiaisCombustiveis',
                label: 'Materiais Combustíveis',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'danosCausados',
                label: 'Danos Causados',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'hipotesesCausa',
                label: 'Hipóteses sobre a Causa',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'vestigiosEncontrados',
                label: 'Vestígios Encontrados',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'conclusoes',
                label: 'Conclusões',
                tipo: 'textarea',
                obrigatorio: true
            }
        ],
        template: `
      <div class="laudo-container">
        <header class="laudo-header">
          <h1>LAUDO PERICIAL</h1>
          <h2>PERÍCIA DE INCÊNDIO</h2>
          <p><strong>Laudo nº:</strong> {{numeroLaudo}}</p>
          <p><strong>Data:</strong> {{dataLaudo}}</p>
        </header>

        <section class="dados-gerais">
          <h3>1. DADOS GERAIS</h3>
          <p><strong>Perito:</strong> {{perito}}</p>
          <p><strong>Data/Hora do Sinistro:</strong> {{dataHoraSinistro}}</p>
          <p><strong>Local Afetado:</strong> {{localAfetado}}</p>
          <p><strong>Área Atingida:</strong> {{areaAtingida}}</p>
        </section>

        <section class="analise-pericial">
          <h3>2. ANÁLISE PERICIAL</h3>
          <h4>2.1 Possível Origem do Fogo</h4>
          <p>{{possivelOrigem}}</p>
          
          <h4>2.2 Materiais Combustíveis</h4>
          <p>{{materiaisCombustiveis}}</p>
          
          <h4>2.3 Danos Causados</h4>
          <p>{{danosCausados}}</p>
          
          <h4>2.4 Vestígios Encontrados</h4>
          <p>{{vestigiosEncontrados}}</p>
          
          <h4>2.5 Hipóteses sobre a Causa</h4>
          <p>{{hipotesesCausa}}</p>
        </section>

        <section class="conclusoes">
          <h3>3. CONCLUSÕES</h3>
          <p>{{conclusoes}}</p>
        </section>

        <footer class="laudo-footer">
          <p>Local e data: ________________, {{dataLaudo}}</p>
          <br><br>
          <p>_________________________________</p>
          <p>{{perito}}</p>
          <p>Perito Criminal</p>
        </footer>
      </div>
    `
    },
    'crimes-meio-ambiente': {
        tipo: 'crimes-meio-ambiente',
        nome: 'Laudo de Crime Contra o Meio Ambiente',
        descricao: 'Template para perícias de crimes ambientais',
        campos: [
            {
                nome: 'dataHoraConstatacao',
                label: 'Data e Hora da Constatação',
                tipo: 'datetime-local',
                obrigatorio: true
            },
            {
                nome: 'localInfracao',
                label: 'Local da Infração',
                tipo: 'text',
                obrigatorio: true
            },
            {
                nome: 'tipoDanoAmbiental',
                label: 'Tipo de Dano Ambiental',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'areaAfetada',
                label: 'Área Afetada',
                tipo: 'text',
                obrigatorio: true
            },
            {
                nome: 'especiesAtingidas',
                label: 'Espécies Atingidas',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'impactoEstimado',
                label: 'Impacto Estimado',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'medidasNecessarias',
                label: 'Medidas Necessárias',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'legislacaoAplicavel',
                label: 'Legislação Aplicável',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'conclusoes',
                label: 'Conclusões',
                tipo: 'textarea',
                obrigatorio: true
            }
        ],
        template: `
      <div class="laudo-container">
        <header class="laudo-header">
          <h1>LAUDO PERICIAL</h1>
          <h2>CRIME CONTRA O MEIO AMBIENTE</h2>
          <p><strong>Laudo nº:</strong> {{numeroLaudo}}</p>
          <p><strong>Data:</strong> {{dataLaudo}}</p>
        </header>

        <section class="dados-gerais">
          <h3>1. DADOS GERAIS</h3>
          <p><strong>Perito:</strong> {{perito}}</p>
          <p><strong>Data/Hora da Constatação:</strong> {{dataHoraConstatacao}}</p>
          <p><strong>Local da Infração:</strong> {{localInfracao}}</p>
          <p><strong>Área Afetada:</strong> {{areaAfetada}}</p>
        </section>

        <section class="analise-ambiental">
          <h3>2. ANÁLISE AMBIENTAL</h3>
          <h4>2.1 Tipo de Dano Ambiental</h4>
          <p>{{tipoDanoAmbiental}}</p>
          
          <h4>2.2 Espécies Atingidas</h4>
          <p>{{especiesAtingidas}}</p>
          
          <h4>2.3 Impacto Estimado</h4>
          <p>{{impactoEstimado}}</p>
          
          <h4>2.4 Medidas Necessárias</h4>
          <p>{{medidasNecessarias}}</p>
          
          <h4>2.5 Legislação Aplicável</h4>
          <p>{{legislacaoAplicavel}}</p>
        </section>

        <section class="conclusoes">
          <h3>3. CONCLUSÕES</h3>
          <p>{{conclusoes}}</p>
        </section>

        <footer class="laudo-footer">
          <p>Local e data: ________________, {{dataLaudo}}</p>
          <br><br>
          <p>_________________________________</p>
          <p>{{perito}}</p>
          <p>Perito Criminal</p>
        </footer>
      </div>
    `
    },
    'identificacao-veiculos': {
        tipo: 'identificacao-veiculos',
        nome: 'Laudo de Identificação de Veículos',
        descricao: 'Template para perícias de identificação veicular',
        campos: [
            {
                nome: 'marca',
                label: 'Marca',
                tipo: 'text',
                obrigatorio: true
            },
            {
                nome: 'modelo',
                label: 'Modelo',
                tipo: 'text',
                obrigatorio: true
            },
            {
                nome: 'ano',
                label: 'Ano',
                tipo: 'text',
                obrigatorio: true
            },
            {
                nome: 'cor',
                label: 'Cor',
                tipo: 'text',
                obrigatorio: true
            },
            {
                nome: 'combustivel',
                label: 'Combustível',
                tipo: 'select',
                obrigatorio: true,
                opcoes: [
                    'Gasolina',
                    'Álcool',
                    'Flex',
                    'Diesel',
                    'GNV',
                    'Elétrico',
                    'Híbrido'
                ]
            },
            {
                nome: 'chassi',
                label: 'Chassi',
                tipo: 'text',
                obrigatorio: true
            },
            {
                nome: 'motor',
                label: 'Motor',
                tipo: 'text',
                obrigatorio: true
            },
            {
                nome: 'placas',
                label: 'Placas',
                tipo: 'text',
                obrigatorio: true
            },
            {
                nome: 'documentacao',
                label: 'Documentação',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'sinaisAdulteracao',
                label: 'Sinais de Adulteração',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'estadoConservacao',
                label: 'Estado de Conservação',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'observacoesTecnicas',
                label: 'Observações Técnicas',
                tipo: 'textarea',
                obrigatorio: false
            },
            {
                nome: 'conclusoes',
                label: 'Conclusões',
                tipo: 'textarea',
                obrigatorio: true
            }
        ],
        template: `
      <div class="laudo-container">
        <header class="laudo-header">
          <h1>LAUDO PERICIAL</h1>
          <h2>IDENTIFICAÇÃO VEICULAR</h2>
          <p><strong>Laudo nº:</strong> {{numeroLaudo}}</p>
          <p><strong>Data:</strong> {{dataLaudo}}</p>
        </header>

        <section class="dados-gerais">
          <h3>1. DADOS GERAIS</h3>
          <p><strong>Perito:</strong> {{perito}}</p>
        </section>

        <section class="dados-veiculo">
          <h3>2. DADOS DO VEÍCULO</h3>
          <p><strong>Marca:</strong> {{marca}}</p>
          <p><strong>Modelo:</strong> {{modelo}}</p>
          <p><strong>Ano:</strong> {{ano}}</p>
          <p><strong>Cor:</strong> {{cor}}</p>
          <p><strong>Combustível:</strong> {{combustivel}}</p>
          <p><strong>Chassi:</strong> {{chassi}}</p>
          <p><strong>Motor:</strong> {{motor}}</p>
          <p><strong>Placas:</strong> {{placas}}</p>
        </section>

        <section class="analise-pericial">
          <h3>3. ANÁLISE PERICIAL</h3>
          <h4>3.1 Documentação</h4>
          <p>{{documentacao}}</p>
          
          <h4>3.2 Sinais de Adulteração</h4>
          <p>{{sinaisAdulteracao}}</p>
          
          <h4>3.3 Estado de Conservação</h4>
          <p>{{estadoConservacao}}</p>
          
          {{#observacoesTecnicas}}
          <h4>3.4 Observações Técnicas</h4>
          <p>{{observacoesTecnicas}}</p>
          {{/observacoesTecnicas}}
        </section>

        <section class="conclusoes">
          <h3>4. CONCLUSÕES</h3>
          <p>{{conclusoes}}</p>
        </section>

        <footer class="laudo-footer">
          <p>Local e data: ________________, {{dataLaudo}}</p>
          <br><br>
          <p>_________________________________</p>
          <p>{{perito}}</p>
          <p>Perito Criminal</p>
        </footer>
      </div>
    `
    },
    'fisico-descritivo': {
        tipo: 'fisico-descritivo',
        nome: 'Laudo Físico Descritivo',
        descricao: 'Template para perícias de descrição física de materiais',
        campos: [
            {
                nome: 'descricaoDetalhada',
                label: 'Descrição Detalhada',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'dimensoes',
                label: 'Dimensões',
                tipo: 'text',
                obrigatorio: true
            },
            {
                nome: 'peso',
                label: 'Peso',
                tipo: 'text',
                obrigatorio: true
            },
            {
                nome: 'caracteristicasFisicas',
                label: 'Características Físicas',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'estadoConservacao',
                label: 'Estado de Conservação',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'origemProcedencia',
                label: 'Origem/Procedência',
                tipo: 'text',
                obrigatorio: false
            },
            {
                nome: 'valorEstimado',
                label: 'Valor Estimado',
                tipo: 'text',
                obrigatorio: false
            },
            {
                nome: 'materialComposicao',
                label: 'Material/Composição',
                tipo: 'textarea',
                obrigatorio: true
            },
            {
                nome: 'observacoesTecnicas',
                label: 'Observações Técnicas',
                tipo: 'textarea',
                obrigatorio: false
            },
            {
                nome: 'conclusoes',
                label: 'Conclusões',
                tipo: 'textarea',
                obrigatorio: true
            }
        ],
        template: `
      <div class="laudo-container">
        <header class="laudo-header">
          <h1>LAUDO PERICIAL</h1>
          <h2>EXAME FÍSICO DESCRITIVO</h2>
          <p><strong>Laudo nº:</strong> {{numeroLaudo}}</p>
          <p><strong>Data:</strong> {{dataLaudo}}</p>
        </header>

        <section class="dados-gerais">
          <h3>1. DADOS GERAIS</h3>
          <p><strong>Perito:</strong> {{perito}}</p>
        </section>

        <section class="exame-fisico">
          <h3>2. EXAME FÍSICO</h3>
          <h4>2.1 Descrição Detalhada</h4>
          <p>{{descricaoDetalhada}}</p>
          
          <h4>2.2 Características Físicas</h4>
          <p><strong>Dimensões:</strong> {{dimensoes}}</p>
          <p><strong>Peso:</strong> {{peso}}</p>
          <p><strong>Material/Composição:</strong> {{materialComposicao}}</p>
          <p>{{caracteristicasFisicas}}</p>
          
          <h4>2.3 Estado de Conservação</h4>
          <p>{{estadoConservacao}}</p>
          
          {{#origemProcedencia}}
          <h4>2.4 Origem/Procedência</h4>
          <p>{{origemProcedencia}}</p>
          {{/origemProcedencia}}
          
          {{#valorEstimado}}
          <h4>2.5 Valor Estimado</h4>
          <p>{{valorEstimado}}</p>
          {{/valorEstimado}}
          
          {{#observacoesTecnicas}}
          <h4>2.6 Observações Técnicas</h4>
          <p>{{observacoesTecnicas}}</p>
          {{/observacoesTecnicas}}
        </section>

        <section class="conclusoes">
          <h3>3. CONCLUSÕES</h3>
          <p>{{conclusoes}}</p>
        </section>

        <footer class="laudo-footer">
          <p>Local e data: ________________, {{dataLaudo}}</p>
          <br><br>
          <p>_________________________________</p>
          <p>{{perito}}</p>
          <p>Perito Criminal</p>
        </footer>
      </div>
    `
    }
};
function getTemplate(tipo) {
    return TEMPLATES[tipo];
}
function getAllTemplates() {
    return Object.values(TEMPLATES);
}
function renderTemplate(template, data) {
    let rendered = template;
    // Substituir variáveis simples {{variavel}}
    rendered = rendered.replace(/\{\{(\w+)\}\}/g, (match, key)=>{
        return data[key] || '';
    });
    // Substituir blocos condicionais {{#variavel}}...{{/variavel}}
    rendered = rendered.replace(/\{\{#(\w+)\}\}([\s\S]*?)\{\{\/\1\}\}/g, (match, key, content)=>{
        return data[key] ? content : '';
    });
    return rendered;
}
}}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Dashboard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/templates.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const TIPO_LABELS = {
    'acidentes-transito': 'Acidentes de Trânsito',
    'crimes-vida': 'Crimes Contra a Vida',
    'crimes-patrimonio': 'Crimes Contra o Patrimônio',
    'constatacao-drogas': 'Constatação de Drogas',
    'incendios': 'Incêndios',
    'crimes-meio-ambiente': 'Crimes Contra o Meio Ambiente',
    'identificacao-veiculos': 'Identificação de Veículos',
    'fisico-descritivo': 'Físico Descritivo'
};
function Dashboard() {
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        totalLaudos: 0,
        laudosPorTipo: {}
    });
    const [recentLaudos, setRecentLaudos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const templates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$templates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllTemplates"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const storageStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStorageStats"])();
        setStats(storageStats);
        const laudos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLaudos"])();
        const recent = laudos.sort((a, b)=>new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).slice(0, 5);
        setRecentLaudos(recent);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-gray-900",
                                children: "Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mt-1",
                                children: "Gerencie seus laudos periciais de forma profissional"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>window.location.href = '/novo-laudo',
                        className: "bg-blue-600 hover:bg-blue-700",
                        children: "Criar Novo Laudo"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-sm font-medium",
                                    children: "Total de Laudos"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold",
                                        children: stats.totalLaudos
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-600",
                                        children: stats.ultimoLaudo ? `Último: ${stats.ultimoLaudo.toLocaleDateString('pt-BR')}` : 'Nenhum laudo criado ainda'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-sm font-medium",
                                    children: "Tipos Disponíveis"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold",
                                        children: templates.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-600",
                                        children: "Templates especializados"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-sm font-medium",
                                    children: "Mais Utilizado"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-bold",
                                        children: Object.keys(stats.laudosPorTipo).length > 0 ? TIPO_LABELS[Object.entries(stats.laudosPorTipo).sort(([, a], [, b])=>b - a)[0][0]] : 'N/A'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-600",
                                        children: Object.keys(stats.laudosPorTipo).length > 0 ? `${Math.max(...Object.values(stats.laudosPorTipo))} laudos` : 'Nenhum dado disponível'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                children: "Templates Disponíveis"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                children: "Escolha o tipo de laudo pericial que deseja criar"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                            children: templates.map((template)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer",
                                    onClick: ()=>window.location.href = `/novo-laudo?tipo=${template.tipo}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-sm",
                                                    children: template.nome
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "secondary",
                                                    className: "text-xs",
                                                    children: stats.laudosPorTipo[template.tipo] || 0
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-600 mb-3",
                                            children: template.descricao
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "outline",
                                            className: "w-full text-xs",
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                window.location.href = `/novo-laudo?tipo=${template.tipo}`;
                                            },
                                            children: "Criar Laudo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, template.tipo, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            recentLaudos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                children: "Laudos Recentes"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                children: "Seus últimos laudos criados ou editados"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: recentLaudos.map((laudo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer",
                                        onClick: ()=>window.location.href = `/laudo/${laudo.id}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium text-sm",
                                                                children: laudo.numeroLaudo
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                variant: "outline",
                                                                className: "text-xs",
                                                                children: TIPO_LABELS[laudo.tipo]
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 174,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-600 truncate",
                                                        children: laudo.titulo
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500",
                                                        children: [
                                                            "Atualizado em ",
                                                            new Date(laudo.updatedAt).toLocaleDateString('pt-BR')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 171,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                variant: "ghost",
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    window.location.href = `/laudo/${laudo.id}`;
                                                },
                                                children: "Ver"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 185,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, laudo.id, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 166,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>window.location.href = '/meus-laudos',
                                    children: "Ver Todos os Laudos"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 156,
                columnNumber: 9
            }, this),
            stats.totalLaudos === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                children: "Bem-vindo ao Gerador de Laudos Periciais!"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                children: "Comece criando seu primeiro laudo pericial"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 213,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-blue-600",
                                                children: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 223,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-medium",
                                                    children: "Escolha o tipo de laudo"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600",
                                                    children: "Selecione entre 8 tipos especializados de laudos periciais"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 221,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-blue-600",
                                                children: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 234,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 233,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-medium",
                                                    children: "Preencha os dados"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600",
                                                    children: "Complete o formulário com as informações da perícia"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 236,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium text-blue-600",
                                                children: "3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 245,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-medium",
                                                    children: "Gere o PDF"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600",
                                                    children: "Visualize e exporte seu laudo em formato PDF profissional"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 247,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>window.location.href = '/novo-laudo',
                                        className: "bg-blue-600 hover:bg-blue-700",
                                        children: "Criar Meu Primeiro Laudo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 255,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 254,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 220,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 212,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_58735280._.js.map