"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/page",{

/***/ "(app-pages-browser)/./src/utils/data/products.ts":
/*!************************************!*\
  !*** ./src/utils/data/products.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AllProducts: function() { return /* binding */ AllProducts; },\n/* harmony export */   category: function() { return /* binding */ category; }\n/* harmony export */ });\nconst category = [\n    \"Mushrooms\",\n    \"Vegetables\",\n    \"Millets\",\n    \"Pulses\",\n    \"Cereals\",\n    \"Flowers\",\n    \"Fruits\",\n    \"Fish\",\n    \"Honey\",\n    \"Leafy-Veggies\"\n];\nconst AllProducts = [\n    {\n        id: \"milky_mushrooms\",\n        title: \"Milky Mushrooms\",\n        width: 200,\n        height: 200,\n        price: 50,\n        quantity: 250,\n        cartHeight: 120,\n        cartWidth: 120,\n        discount: \"20%\",\n        category: \"Mushrooms\",\n        currentPrice: 40,\n        trendingDeals: false,\n        bestSellerDeals: true,\n        RecommendedProducts: true,\n        image: \"/bestSellers/milky-mushrooms-T.png\",\n        description: \"Vitamin B, Phosphorus, Selenium, Copper.\"\n    },\n    {\n        id: \"oyster-mushrooms\",\n        title: \"Oyster Mushrooms\",\n        price: 50,\n        quantity: 250,\n        height: 180,\n        width: 180,\n        trendingDeals: true,\n        bestSellerDeals: false,\n        image: \"/Items/osyter.png\",\n        currentPrice: 40,\n        category: \"Mushrooms\",\n        cartHeight: 120,\n        cartWidth: 120,\n        RecommendedProducts: false,\n        discount: \"25%\",\n        description: \"Vitamin B, Phosphorus, Selenium, Copper.\"\n    },\n    {\n        id: \"natural-honey\",\n        title: \"Natural Honey\",\n        price: 50,\n        cartHeight: 100,\n        trendingDeals: false,\n        cartWidth: 100,\n        category: \"Honey\",\n        quantity: 250,\n        height: 170,\n        bestSellerDeals: true,\n        width: 170,\n        RecommendedProducts: true,\n        discount: \"10%\",\n        currentPrice: 40,\n        image: \"/bestSellers/honey-best-seller-t.png\",\n        description: \"Vitamin B, Phosphorus, Selenium, Copper\"\n    },\n    {\n        id: \"spinach\",\n        title: \"Spinach (Palak)\",\n        price: 50,\n        height: 200,\n        cartHeight: 120,\n        trendingDeals: false,\n        cartWidth: 120,\n        width: 200,\n        quantity: 250,\n        category: \"Leafy-Veggies\",\n        currentPrice: 40,\n        bestSellerDeals: true,\n        RecommendedProducts: true,\n        discount: \"40%\",\n        image: \"/Items/spinach-t.png\",\n        description: \"Vitamin B, Phosphorus, Selenium, Copper\"\n    },\n    {\n        id: \"tomato\",\n        title: \"Tomato\",\n        price: 50,\n        discount: \"15%\",\n        cartHeight: 120,\n        cartWidth: 120,\n        quantity: 250,\n        height: 160,\n        bestSellerDeals: false,\n        trendingDeals: false,\n        RecommendedProducts: false,\n        width: 160,\n        category: \"Vegetables\",\n        currentPrice: 40,\n        description: \"Vitamin B, Phosphorus, Selenium, Copper\",\n        image: \"/Items/tomato-isolated.jpg\"\n    },\n    {\n        id: \"kashmeri-chilli\",\n        title: \"Kashmeri Chilli\",\n        price: 50,\n        quantity: 250,\n        discount: \"40%\",\n        height: 200,\n        bestSellerDeals: false,\n        cartHeight: 120,\n        cartWidth: 120,\n        trendingDeals: false,\n        width: 200,\n        category: \"Vegetables\",\n        RecommendedProducts: false,\n        currentPrice: 40,\n        image: \"/Items/chilli.png\",\n        description: \"Vitamin B, Phosphorus, Selenium, Copper\"\n    },\n    {\n        id: \"green-peas\",\n        title: \"Green Peas\",\n        price: 50,\n        quantity: 250,\n        discount: \"20%\",\n        height: 170,\n        trendingDeals: false,\n        bestSellerDeals: false,\n        RecommendedProducts: false,\n        cartHeight: 100,\n        cartWidth: 100,\n        width: 170,\n        category: \"Vegetables\",\n        currentPrice: 40,\n        image: \"/Items/natural-peas.jpg\",\n        description: \"Vitamin B, Phosphorus, Selenium, Copper\"\n    },\n    {\n        id: \"potato\",\n        title: \"Potato\",\n        price: 50,\n        discount: \"10%\",\n        height: 200,\n        quantity: 250,\n        width: 200,\n        bestSellerDeals: false,\n        cartHeight: 120,\n        RecommendedProducts: false,\n        trendingDeals: false,\n        cartWidth: 120,\n        category: \"Vegetables\",\n        currentPrice: 40,\n        image: \"/Items/potato-t.png\",\n        description: \"Vitamin B, Phosphorus, Selenium, Copper\"\n    },\n    {\n        id: \"onion\",\n        title: \"Onion\",\n        price: 50,\n        height: 200,\n        quantity: 250,\n        width: 200,\n        discount: \"20%\",\n        bestSellerDeals: false,\n        RecommendedProducts: false,\n        trendingDeals: true,\n        cartHeight: 120,\n        cartWidth: 120,\n        category: \"Vegetables\",\n        currentPrice: 40,\n        image: \"/Items/onion-T.png\",\n        description: \"Vitamin B, Phosphorus, Selenium, Copper\"\n    },\n    {\n        id: \"button-mushrooms\",\n        title: \"Button Mushrooms\",\n        price: 50,\n        height: 200,\n        width: 200,\n        quantity: 250,\n        discount: \"20%\",\n        cartHeight: 120,\n        bestSellerDeals: false,\n        cartWidth: 120,\n        RecommendedProducts: false,\n        trendingDeals: false,\n        category: \"Mushrooms\",\n        currentPrice: 40,\n        image: \"/Items/mushrooms-T.png\",\n        description: \"Vitamin B, Phosphorus, Selenium, Copper\"\n    },\n    {\n        id: \"orange\",\n        title: \"Orange\",\n        price: 50,\n        height: 200,\n        width: 200,\n        discount: \"20%\",\n        cartHeight: 120,\n        trendingDeals: true,\n        bestSellerDeals: false,\n        RecommendedProducts: true,\n        cartWidth: 120,\n        category: \"Fruits\",\n        quantity: 250,\n        currentPrice: 40,\n        image: \"/Items/oranges-T.png\",\n        description: \"Vitamin B, Phosphorus, Selenium, Copper\"\n    },\n    {\n        id: \"capsicum\",\n        title: \"Capsicum\",\n        price: 50,\n        height: 200,\n        width: 200,\n        cartHeight: 120,\n        cartWidth: 120,\n        RecommendedProducts: false,\n        discount: \"40\",\n        trendingDeals: false,\n        bestSellerDeals: false,\n        quantity: 250,\n        category: \"Vegetables\",\n        currentPrice: 40,\n        image: \"/Items/capsicum-t.png\",\n        description: \"Vitamin B, Phosphorus, Selenium, Copper\"\n    },\n    {\n        id: \"coriander\",\n        title: \"Coriander\",\n        price: 50,\n        height: 200,\n        quantity: 250,\n        width: 200,\n        cartHeight: 120,\n        trendingDeals: false,\n        bestSellerDeals: true,\n        RecommendedProducts: true,\n        cartWidth: 120,\n        discount: \"10%\",\n        category: \"Leafy-veggies\",\n        currentPrice: 40,\n        image: \"/Items/coriander-t.png\",\n        description: \"Vitamin B, Phosphorus, Selenium, Copper\"\n    },\n    {\n        id: \"cauliflower\",\n        title: \"Cauliflower\",\n        price: 50,\n        discount: \"10%\",\n        height: 160,\n        width: 160,\n        cartHeight: 120,\n        bestSellerDeals: false,\n        RecommendedProducts: false,\n        trendingDeals: false,\n        cartWidth: 120,\n        quantity: 250,\n        category: \"Vegetables\",\n        currentPrice: 40,\n        image: \"/Items/cauliflower-t.png\",\n        description: \"Vitamin B, Phosphorus, Selenium, Copper\"\n    },\n    {\n        id: \"broccoli\",\n        height: 170,\n        width: 170,\n        cartHeight: 120,\n        bestSellerDeals: false,\n        trendingDeals: true,\n        RecommendedProducts: true,\n        cartWidth: 120,\n        quantity: 250,\n        title: \"Broccoli\",\n        price: 50,\n        discount: \"20%\",\n        category: \"Vegetables\",\n        currentPrice: 40,\n        image: \"/Items/fresh-broccoli-t.png\",\n        description: \"Vitamin B, Phosphorus, Selenium, Copper\"\n    },\n    {\n        id: \"lemon\",\n        title: \"Lemon\",\n        cartHeight: 120,\n        cartWidth: 120,\n        trendingDeals: false,\n        RecommendedProducts: false,\n        bestSellerDeals: false,\n        height: 200,\n        quantity: 250,\n        width: 200,\n        price: 50,\n        discount: \"20\",\n        category: \"Vegetables\",\n        currentPrice: 40,\n        image: \"/Items/mockup-graphics-Nvc_xOMiZoE-unsplash.jpg\",\n        description: \"Vitamin B, Phosphorus, Selenium, Copper\"\n    },\n    {\n        id: \"radish\",\n        title: \"Radish\",\n        height: 200,\n        width: 200,\n        cartHeight: 120,\n        cartWidth: 120,\n        price: 50,\n        bestSellerDeals: false,\n        trendingDeals: false,\n        RecommendedProducts: false,\n        discount: \"20\",\n        quantity: 250,\n        category: \"Vegetables\",\n        currentPrice: 40,\n        image: \"/Items/reddish-T.png\",\n        description: \"Vitamin B, Phosphorus, Selenium, Copper\"\n    },\n    {\n        id: \"sweet-potato\",\n        height: 200,\n        width: 200,\n        cartHeight: 120,\n        cartWidth: 120,\n        bestSellerDeals: false,\n        trendingDeals: false,\n        RecommendedProducts: false,\n        title: \"Sweet Potato\",\n        quantity: 250,\n        price: 50,\n        discount: \"20%\",\n        category: \"Vegetables\",\n        currentPrice: 40,\n        image: \"/Items/sweet-potato.jpg\",\n        description: \"Vitamin B, Phosphorus, Selenium, Copper\"\n    },\n    {\n        id: \"lettuce\",\n        title: \"Lettuce\",\n        height: 200,\n        cartHeight: 120,\n        cartWidth: 120,\n        quantity: 250,\n        width: 200,\n        bestSellerDeals: true,\n        RecommendedProducts: true,\n        trendingDeals: false,\n        price: 50,\n        discount: \"20\",\n        category: \"Vegetables\",\n        currentPrice: 40,\n        image: \"/Items/lettuce-t.png\",\n        description: \"Vitamin B, Phosphorus, Selenium, Copper\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy91dGlscy9kYXRhL3Byb2R1Y3RzLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sTUFBTUEsV0FBVztJQUN0QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNELENBQUM7QUFFSyxNQUFNQyxjQUFjO0lBQ3pCO1FBQ0VDLElBQUk7UUFDSkMsT0FBTztRQUVQQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFlBQVk7UUFDWkMsV0FBVztRQUVYQyxVQUFVO1FBQ1ZWLFVBQVU7UUFDVlcsY0FBYztRQUVkQyxlQUFlO1FBQ2ZDLGlCQUFpQjtRQUNqQkMscUJBQXFCO1FBRXJCQyxPQUFPO1FBQ1BDLGFBQWE7SUFDZjtJQUNBO1FBQ0VkLElBQUk7UUFDSkMsT0FBTztRQUNQRyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkYsUUFBUTtRQUNSRCxPQUFPO1FBQ1BRLGVBQWU7UUFDZkMsaUJBQWlCO1FBQ2pCRSxPQUFPO1FBQ1BKLGNBQWM7UUFDZFgsVUFBVTtRQUNWUSxZQUFZO1FBQ1pDLFdBQVc7UUFDWEsscUJBQXFCO1FBQ3JCSixVQUFVO1FBQ1ZNLGFBQWE7SUFDZjtJQUNBO1FBQ0VkLElBQUk7UUFDSkMsT0FBTztRQUNQRyxPQUFPO1FBQ1BFLFlBQVk7UUFDWkksZUFBZTtRQUNmSCxXQUFXO1FBQ1hULFVBQVU7UUFDVk8sVUFBVTtRQUNWRixRQUFRO1FBQ1JRLGlCQUFpQjtRQUNqQlQsT0FBTztRQUNQVSxxQkFBcUI7UUFDckJKLFVBQVU7UUFDVkMsY0FBYztRQUNkSSxPQUFPO1FBQ1BDLGFBQWE7SUFDZjtJQUNBO1FBQ0VkLElBQUk7UUFDSkMsT0FBTztRQUNQRyxPQUFPO1FBQ1BELFFBQVE7UUFDUkcsWUFBWTtRQUNaSSxlQUFlO1FBQ2ZILFdBQVc7UUFDWEwsT0FBTztRQUNQRyxVQUFVO1FBQ1ZQLFVBQVU7UUFDVlcsY0FBYztRQUNkRSxpQkFBaUI7UUFF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UUFDVlcsY0FBYztRQUNkSSxPQUFPO1FBQ1BDLGFBQWE7SUFDZjtJQUNBO1FBQ0VkLElBQUk7UUFDSkMsT0FBTztRQUNQRSxRQUFRO1FBQ1JHLFlBQVk7UUFDWkMsV0FBVztRQUNYRixVQUFVO1FBQ1ZILE9BQU87UUFDUFMsaUJBQWlCO1FBQ2pCQyxxQkFBcUI7UUFDckJGLGVBQWU7UUFDZk4sT0FBTztRQUNQSSxVQUFVO1FBQ1ZWLFVBQVU7UUFDVlcsY0FBYztRQUNkSSxPQUFPO1FBQ1BDLGFBQWE7SUFDZjtDQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2RhdGEvcHJvZHVjdHMudHM/OGJjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY2F0ZWdvcnkgPSBbXHJcbiAgXCJNdXNocm9vbXNcIixcclxuICBcIlZlZ2V0YWJsZXNcIixcclxuICBcIk1pbGxldHNcIixcclxuICBcIlB1bHNlc1wiLFxyXG4gIFwiQ2VyZWFsc1wiLFxyXG4gIFwiRmxvd2Vyc1wiLFxyXG4gIFwiRnJ1aXRzXCIsXHJcbiAgXCJGaXNoXCIsXHJcbiAgXCJIb25leVwiLFxyXG4gIFwiTGVhZnktVmVnZ2llc1wiLFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFsbFByb2R1Y3RzID0gW1xyXG4gIHtcclxuICAgIGlkOiBcIm1pbGt5X211c2hyb29tc1wiLFxyXG4gICAgdGl0bGU6IFwiTWlsa3kgTXVzaHJvb21zXCIsXHJcblxyXG4gICAgd2lkdGg6IDIwMCxcclxuICAgIGhlaWdodDogMjAwLFxyXG4gICAgcHJpY2U6IDUwLFxyXG4gICAgcXVhbnRpdHk6IDI1MCxcclxuICAgIGNhcnRIZWlnaHQ6IDEyMCxcclxuICAgIGNhcnRXaWR0aDogMTIwLFxyXG5cclxuICAgIGRpc2NvdW50OiBcIjIwJVwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiTXVzaHJvb21zXCIsXHJcbiAgICBjdXJyZW50UHJpY2U6IDQwLFxyXG5cclxuICAgIHRyZW5kaW5nRGVhbHM6IGZhbHNlLFxyXG4gICAgYmVzdFNlbGxlckRlYWxzOiB0cnVlLFxyXG4gICAgUmVjb21tZW5kZWRQcm9kdWN0czogdHJ1ZSxcclxuXHJcbiAgICBpbWFnZTogXCIvYmVzdFNlbGxlcnMvbWlsa3ktbXVzaHJvb21zLVQucG5nXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJWaXRhbWluIEIsIFBob3NwaG9ydXMsIFNlbGVuaXVtLCBDb3BwZXIuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJveXN0ZXItbXVzaHJvb21zXCIsXHJcbiAgICB0aXRsZTogXCJPeXN0ZXIgTXVzaHJvb21zXCIsXHJcbiAgICBwcmljZTogNTAsXHJcbiAgICBxdWFudGl0eTogMjUwLFxyXG4gICAgaGVpZ2h0OiAxODAsXHJcbiAgICB3aWR0aDogMTgwLFxyXG4gICAgdHJlbmRpbmdEZWFsczogdHJ1ZSxcclxuICAgIGJlc3RTZWxsZXJEZWFsczogZmFsc2UsXHJcbiAgICBpbWFnZTogXCIvSXRlbXMvb3N5dGVyLnBuZ1wiLFxyXG4gICAgY3VycmVudFByaWNlOiA0MCxcclxuICAgIGNhdGVnb3J5OiBcIk11c2hyb29tc1wiLFxyXG4gICAgY2FydEhlaWdodDogMTIwLFxyXG4gICAgY2FydFdpZHRoOiAxMjAsXHJcbiAgICBSZWNvbW1lbmRlZFByb2R1Y3RzOiBmYWxzZSxcclxuICAgIGRpc2NvdW50OiBcIjI1JVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVml0YW1pbiBCLCBQaG9zcGhvcnVzLCBTZWxlbml1bSwgQ29wcGVyLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwibmF0dXJhbC1ob25leVwiLFxyXG4gICAgdGl0bGU6IFwiTmF0dXJhbCBIb25leVwiLFxyXG4gICAgcHJpY2U6IDUwLFxyXG4gICAgY2FydEhlaWdodDogMTAwLFxyXG4gICAgdHJlbmRpbmdEZWFsczogZmFsc2UsXHJcbiAgICBjYXJ0V2lkdGg6IDEwMCxcclxuICAgIGNhdGVnb3J5OiBcIkhvbmV5XCIsXHJcbiAgICBxdWFudGl0eTogMjUwLFxyXG4gICAgaGVpZ2h0OiAxNzAsXHJcbiAgICBiZXN0U2VsbGVyRGVhbHM6IHRydWUsXHJcbiAgICB3aWR0aDogMTcwLFxyXG4gICAgUmVjb21tZW5kZWRQcm9kdWN0czogdHJ1ZSxcclxuICAgIGRpc2NvdW50OiBcIjEwJVwiLFxyXG4gICAgY3VycmVudFByaWNlOiA0MCxcclxuICAgIGltYWdlOiBcIi9iZXN0U2VsbGVycy9ob25leS1iZXN0LXNlbGxlci10LnBuZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVml0YW1pbiBCLCBQaG9zcGhvcnVzLCBTZWxlbml1bSwgQ29wcGVyXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJzcGluYWNoXCIsXHJcbiAgICB0aXRsZTogXCJTcGluYWNoIChQYWxhaylcIixcclxuICAgIHByaWNlOiA1MCxcclxuICAgIGhlaWdodDogMjAwLFxyXG4gICAgY2FydEhlaWdodDogMTIwLFxyXG4gICAgdHJlbmRpbmdEZWFsczogZmFsc2UsXHJcbiAgICBjYXJ0V2lkdGg6IDEyMCxcclxuICAgIHdpZHRoOiAyMDAsXHJcbiAgICBxdWFudGl0eTogMjUwLFxyXG4gICAgY2F0ZWdvcnk6IFwiTGVhZnktVmVnZ2llc1wiLFxyXG4gICAgY3VycmVudFByaWNlOiA0MCxcclxuICAgIGJlc3RTZWxsZXJEZWFsczogdHJ1ZSxcclxuXHJcbiAgICBSZWNvbW1lbmRlZFByb2R1Y3RzOiB0cnVlLFxyXG4gICAgZGlzY291bnQ6IFwiNDAlXCIsXHJcbiAgICBpbWFnZTogXCIvSXRlbXMvc3BpbmFjaC10LnBuZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVml0YW1pbiBCLCBQaG9zcGhvcnVzLCBTZWxlbml1bSwgQ29wcGVyXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJ0b21hdG9cIixcclxuICAgIHRpdGxlOiBcIlRvbWF0b1wiLFxyXG4gICAgcHJpY2U6IDUwLFxyXG4gICAgZGlzY291bnQ6IFwiMTUlXCIsXHJcbiAgICBjYXJ0SGVpZ2h0OiAxMjAsXHJcbiAgICBjYXJ0V2lkdGg6IDEyMCxcclxuICAgIHF1YW50aXR5OiAyNTAsXHJcbiAgICBoZWlnaHQ6IDE2MCxcclxuICAgIGJlc3RTZWxsZXJEZWFsczogZmFsc2UsXHJcbiAgICB0cmVuZGluZ0RlYWxzOiBmYWxzZSxcclxuICAgIFJlY29tbWVuZGVkUHJvZHVjdHM6IGZhbHNlLFxyXG4gICAgd2lkdGg6IDE2MCxcclxuICAgIGNhdGVnb3J5OiBcIlZlZ2V0YWJsZXNcIixcclxuICAgIGN1cnJlbnRQcmljZTogNDAsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJWaXRhbWluIEIsIFBob3NwaG9ydXMsIFNlbGVuaXVtLCBDb3BwZXJcIixcclxuICAgIGltYWdlOiBcIi9JdGVtcy90b21hdG8taXNvbGF0ZWQuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJrYXNobWVyaS1jaGlsbGlcIixcclxuICAgIHRpdGxlOiBcIkthc2htZXJpIENoaWxsaVwiLFxyXG4gICAgcHJpY2U6IDUwLFxyXG4gICAgcXVhbnRpdHk6IDI1MCxcclxuICAgIGRpc2NvdW50OiBcIjQwJVwiLFxyXG4gICAgaGVpZ2h0OiAyMDAsXHJcbiAgICBiZXN0U2VsbGVyRGVhbHM6IGZhbHNlLFxyXG4gICAgY2FydEhlaWdodDogMTIwLFxyXG4gICAgY2FydFdpZHRoOiAxMjAsXHJcbiAgICB0cmVuZGluZ0RlYWxzOiBmYWxzZSxcclxuICAgIHdpZHRoOiAyMDAsXHJcbiAgICBjYXRlZ29yeTogXCJWZWdldGFibGVzXCIsXHJcbiAgICBSZWNvbW1lbmRlZFByb2R1Y3RzOiBmYWxzZSxcclxuICAgIGN1cnJlbnRQcmljZTogNDAsXHJcbiAgICBpbWFnZTogXCIvSXRlbXMvY2hpbGxpLnBuZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVml0YW1pbiBCLCBQaG9zcGhvcnVzLCBTZWxlbml1bSwgQ29wcGVyXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJncmVlbi1wZWFzXCIsXHJcbiAgICB0aXRsZTogXCJHcmVlbiBQZWFzXCIsXHJcbiAgICBwcmljZTogNTAsXHJcbiAgICBxdWFudGl0eTogMjUwLFxyXG4gICAgZGlzY291bnQ6IFwiMjAlXCIsXHJcbiAgICBoZWlnaHQ6IDE3MCxcclxuICAgIHRyZW5kaW5nRGVhbHM6IGZhbHNlLFxyXG4gICAgYmVzdFNlbGxlckRlYWxzOiBmYWxzZSxcclxuICAgIFJlY29tbWVuZGVkUHJvZHVjdHM6IGZhbHNlLFxyXG4gICAgY2FydEhlaWdodDogMTAwLFxyXG4gICAgY2FydFdpZHRoOiAxMDAsXHJcbiAgICB3aWR0aDogMTcwLFxyXG4gICAgY2F0ZWdvcnk6IFwiVmVnZXRhYmxlc1wiLFxyXG4gICAgY3VycmVudFByaWNlOiA0MCxcclxuICAgIGltYWdlOiBcIi9JdGVtcy9uYXR1cmFsLXBlYXMuanBnXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJWaXRhbWluIEIsIFBob3NwaG9ydXMsIFNlbGVuaXVtLCBDb3BwZXJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcInBvdGF0b1wiLFxyXG4gICAgdGl0bGU6IFwiUG90YXRvXCIsXHJcbiAgICBwcmljZTogNTAsXHJcbiAgICBkaXNjb3VudDogXCIxMCVcIixcclxuICAgIGhlaWdodDogMjAwLFxyXG4gICAgcXVhbnRpdHk6IDI1MCxcclxuICAgIHdpZHRoOiAyMDAsXHJcbiAgICBiZXN0U2VsbGVyRGVhbHM6IGZhbHNlLFxyXG4gICAgY2FydEhlaWdodDogMTIwLFxyXG4gICAgUmVjb21tZW5kZWRQcm9kdWN0czogZmFsc2UsXHJcbiAgICB0cmVuZGluZ0RlYWxzOiBmYWxzZSxcclxuICAgIGNhcnRXaWR0aDogMTIwLFxyXG4gICAgY2F0ZWdvcnk6IFwiVmVnZXRhYmxlc1wiLFxyXG4gICAgY3VycmVudFByaWNlOiA0MCxcclxuICAgIGltYWdlOiBcIi9JdGVtcy9wb3RhdG8tdC5wbmdcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlZpdGFtaW4gQiwgUGhvc3Bob3J1cywgU2VsZW5pdW0sIENvcHBlclwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwib25pb25cIixcclxuICAgIHRpdGxlOiBcIk9uaW9uXCIsXHJcbiAgICBwcmljZTogNTAsXHJcbiAgICBoZWlnaHQ6IDIwMCxcclxuICAgIHF1YW50aXR5OiAyNTAsXHJcbiAgICB3aWR0aDogMjAwLFxyXG4gICAgZGlzY291bnQ6IFwiMjAlXCIsXHJcbiAgICBiZXN0U2VsbGVyRGVhbHM6IGZhbHNlLFxyXG4gICAgUmVjb21tZW5kZWRQcm9kdWN0czogZmFsc2UsXHJcbiAgICB0cmVuZGluZ0RlYWxzOiB0cnVlLFxyXG4gICAgY2FydEhlaWdodDogMTIwLFxyXG4gICAgY2FydFdpZHRoOiAxMjAsXHJcbiAgICBjYXRlZ29yeTogXCJWZWdldGFibGVzXCIsXHJcbiAgICBjdXJyZW50UHJpY2U6IDQwLFxyXG4gICAgaW1hZ2U6IFwiL0l0ZW1zL29uaW9uLVQucG5nXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJWaXRhbWluIEIsIFBob3NwaG9ydXMsIFNlbGVuaXVtLCBDb3BwZXJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcImJ1dHRvbi1tdXNocm9vbXNcIixcclxuICAgIHRpdGxlOiBcIkJ1dHRvbiBNdXNocm9vbXNcIixcclxuICAgIHByaWNlOiA1MCxcclxuICAgIGhlaWdodDogMjAwLFxyXG4gICAgd2lkdGg6IDIwMCxcclxuICAgIHF1YW50aXR5OiAyNTAsXHJcbiAgICBkaXNjb3VudDogXCIyMCVcIixcclxuICAgIGNhcnRIZWlnaHQ6IDEyMCxcclxuICAgIGJlc3RTZWxsZXJEZWFsczogZmFsc2UsXHJcbiAgICBjYXJ0V2lkdGg6IDEyMCxcclxuICAgIFJlY29tbWVuZGVkUHJvZHVjdHM6IGZhbHNlLFxyXG4gICAgdHJlbmRpbmdEZWFsczogZmFsc2UsXHJcbiAgICBjYXRlZ29yeTogXCJNdXNocm9vbXNcIixcclxuICAgIGN1cnJlbnRQcmljZTogNDAsXHJcbiAgICBpbWFnZTogXCIvSXRlbXMvbXVzaHJvb21zLVQucG5nXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJWaXRhbWluIEIsIFBob3NwaG9ydXMsIFNlbGVuaXVtLCBDb3BwZXJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIm9yYW5nZVwiLFxyXG4gICAgdGl0bGU6IFwiT3JhbmdlXCIsXHJcbiAgICBwcmljZTogNTAsXHJcbiAgICBoZWlnaHQ6IDIwMCxcclxuICAgIHdpZHRoOiAyMDAsXHJcbiAgICBkaXNjb3VudDogXCIyMCVcIixcclxuICAgIGNhcnRIZWlnaHQ6IDEyMCxcclxuICAgIHRyZW5kaW5nRGVhbHM6IHRydWUsXHJcbiAgICBiZXN0U2VsbGVyRGVhbHM6IGZhbHNlLFxyXG4gICAgUmVjb21tZW5kZWRQcm9kdWN0czogdHJ1ZSxcclxuICAgIGNhcnRXaWR0aDogMTIwLFxyXG4gICAgY2F0ZWdvcnk6IFwiRnJ1aXRzXCIsXHJcbiAgICBxdWFudGl0eTogMjUwLFxyXG4gICAgY3VycmVudFByaWNlOiA0MCxcclxuICAgIGltYWdlOiBcIi9JdGVtcy9vcmFuZ2VzLVQucG5nXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJWaXRhbWluIEIsIFBob3NwaG9ydXMsIFNlbGVuaXVtLCBDb3BwZXJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcImNhcHNpY3VtXCIsXHJcbiAgICB0aXRsZTogXCJDYXBzaWN1bVwiLFxyXG4gICAgcHJpY2U6IDUwLFxyXG4gICAgaGVpZ2h0OiAyMDAsXHJcbiAgICB3aWR0aDogMjAwLFxyXG4gICAgY2FydEhlaWdodDogMTIwLFxyXG4gICAgY2FydFdpZHRoOiAxMjAsXHJcbiAgICBSZWNvbW1lbmRlZFByb2R1Y3RzOiBmYWxzZSxcclxuICAgIGRpc2NvdW50OiBcIjQwXCIsXHJcbiAgICB0cmVuZGluZ0RlYWxzOiBmYWxzZSxcclxuICAgIGJlc3RTZWxsZXJEZWFsczogZmFsc2UsXHJcbiAgICBxdWFudGl0eTogMjUwLFxyXG4gICAgY2F0ZWdvcnk6IFwiVmVnZXRhYmxlc1wiLFxyXG4gICAgY3VycmVudFByaWNlOiA0MCxcclxuICAgIGltYWdlOiBcIi9JdGVtcy9jYXBzaWN1bS10LnBuZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVml0YW1pbiBCLCBQaG9zcGhvcnVzLCBTZWxlbml1bSwgQ29wcGVyXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJjb3JpYW5kZXJcIixcclxuICAgIHRpdGxlOiBcIkNvcmlhbmRlclwiLFxyXG4gICAgcHJpY2U6IDUwLFxyXG4gICAgaGVpZ2h0OiAyMDAsXHJcbiAgICBxdWFudGl0eTogMjUwLFxyXG4gICAgd2lkdGg6IDIwMCxcclxuICAgIGNhcnRIZWlnaHQ6IDEyMCxcclxuICAgIHRyZW5kaW5nRGVhbHM6IGZhbHNlLFxyXG4gICAgYmVzdFNlbGxlckRlYWxzOiB0cnVlLFxyXG4gICAgUmVjb21tZW5kZWRQcm9kdWN0czogdHJ1ZSxcclxuICAgIGNhcnRXaWR0aDogMTIwLFxyXG4gICAgZGlzY291bnQ6IFwiMTAlXCIsXHJcbiAgICBjYXRlZ29yeTogXCJMZWFmeS12ZWdnaWVzXCIsXHJcbiAgICBjdXJyZW50UHJpY2U6IDQwLFxyXG4gICAgaW1hZ2U6IFwiL0l0ZW1zL2NvcmlhbmRlci10LnBuZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVml0YW1pbiBCLCBQaG9zcGhvcnVzLCBTZWxlbml1bSwgQ29wcGVyXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJjYXVsaWZsb3dlclwiLFxyXG4gICAgdGl0bGU6IFwiQ2F1bGlmbG93ZXJcIixcclxuICAgIHByaWNlOiA1MCxcclxuICAgIGRpc2NvdW50OiBcIjEwJVwiLFxyXG4gICAgaGVpZ2h0OiAxNjAsXHJcbiAgICB3aWR0aDogMTYwLFxyXG4gICAgY2FydEhlaWdodDogMTIwLFxyXG4gICAgYmVzdFNlbGxlckRlYWxzOiBmYWxzZSxcclxuICAgIFJlY29tbWVuZGVkUHJvZHVjdHM6IGZhbHNlLFxyXG4gICAgdHJlbmRpbmdEZWFsczogZmFsc2UsXHJcbiAgICBjYXJ0V2lkdGg6IDEyMCxcclxuICAgIHF1YW50aXR5OiAyNTAsXHJcbiAgICBjYXRlZ29yeTogXCJWZWdldGFibGVzXCIsXHJcbiAgICBjdXJyZW50UHJpY2U6IDQwLFxyXG4gICAgaW1hZ2U6IFwiL0l0ZW1zL2NhdWxpZmxvd2VyLXQucG5nXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJWaXRhbWluIEIsIFBob3NwaG9ydXMsIFNlbGVuaXVtLCBDb3BwZXJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcImJyb2Njb2xpXCIsXHJcbiAgICBoZWlnaHQ6IDE3MCxcclxuICAgIHdpZHRoOiAxNzAsXHJcbiAgICBjYXJ0SGVpZ2h0OiAxMjAsXHJcbiAgICBiZXN0U2VsbGVyRGVhbHM6IGZhbHNlLFxyXG4gICAgdHJlbmRpbmdEZWFsczogdHJ1ZSxcclxuICAgIFJlY29tbWVuZGVkUHJvZHVjdHM6IHRydWUsXHJcbiAgICBjYXJ0V2lkdGg6IDEyMCxcclxuICAgIHF1YW50aXR5OiAyNTAsXHJcbiAgICB0aXRsZTogXCJCcm9jY29saVwiLFxyXG4gICAgcHJpY2U6IDUwLFxyXG4gICAgZGlzY291bnQ6IFwiMjAlXCIsXHJcbiAgICBjYXRlZ29yeTogXCJWZWdldGFibGVzXCIsXHJcbiAgICBjdXJyZW50UHJpY2U6IDQwLFxyXG4gICAgaW1hZ2U6IFwiL0l0ZW1zL2ZyZXNoLWJyb2Njb2xpLXQucG5nXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJWaXRhbWluIEIsIFBob3NwaG9ydXMsIFNlbGVuaXVtLCBDb3BwZXJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcImxlbW9uXCIsXHJcbiAgICB0aXRsZTogXCJMZW1vblwiLFxyXG4gICAgY2FydEhlaWdodDogMTIwLFxyXG4gICAgY2FydFdpZHRoOiAxMjAsXHJcbiAgICB0cmVuZGluZ0RlYWxzOiBmYWxzZSxcclxuICAgIFJlY29tbWVuZGVkUHJvZHVjdHM6IGZhbHNlLFxyXG4gICAgYmVzdFNlbGxlckRlYWxzOiBmYWxzZSxcclxuICAgIGhlaWdodDogMjAwLFxyXG4gICAgcXVhbnRpdHk6IDI1MCxcclxuICAgIHdpZHRoOiAyMDAsXHJcbiAgICBwcmljZTogNTAsXHJcbiAgICBkaXNjb3VudDogXCIyMFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiVmVnZXRhYmxlc1wiLFxyXG4gICAgY3VycmVudFByaWNlOiA0MCxcclxuICAgIGltYWdlOiBcIi9JdGVtcy9tb2NrdXAtZ3JhcGhpY3MtTnZjX3hPTWlab0UtdW5zcGxhc2guanBnXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJWaXRhbWluIEIsIFBob3NwaG9ydXMsIFNlbGVuaXVtLCBDb3BwZXJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcInJhZGlzaFwiLFxyXG4gICAgdGl0bGU6IFwiUmFkaXNoXCIsXHJcbiAgICBoZWlnaHQ6IDIwMCxcclxuICAgIHdpZHRoOiAyMDAsXHJcbiAgICBjYXJ0SGVpZ2h0OiAxMjAsXHJcbiAgICBjYXJ0V2lkdGg6IDEyMCxcclxuICAgIHByaWNlOiA1MCxcclxuICAgIGJlc3RTZWxsZXJEZWFsczogZmFsc2UsXHJcbiAgICB0cmVuZGluZ0RlYWxzOiBmYWxzZSxcclxuICAgIFJlY29tbWVuZGVkUHJvZHVjdHM6IGZhbHNlLFxyXG4gICAgZGlzY291bnQ6IFwiMjBcIixcclxuICAgIHF1YW50aXR5OiAyNTAsXHJcbiAgICBjYXRlZ29yeTogXCJWZWdldGFibGVzXCIsXHJcbiAgICBjdXJyZW50UHJpY2U6IDQwLFxyXG4gICAgaW1hZ2U6IFwiL0l0ZW1zL3JlZGRpc2gtVC5wbmdcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlZpdGFtaW4gQiwgUGhvc3Bob3J1cywgU2VsZW5pdW0sIENvcHBlclwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwic3dlZXQtcG90YXRvXCIsXHJcbiAgICBoZWlnaHQ6IDIwMCxcclxuICAgIHdpZHRoOiAyMDAsXHJcbiAgICBjYXJ0SGVpZ2h0OiAxMjAsXHJcbiAgICBjYXJ0V2lkdGg6IDEyMCxcclxuICAgIGJlc3RTZWxsZXJEZWFsczogZmFsc2UsXHJcbiAgICB0cmVuZGluZ0RlYWxzOiBmYWxzZSxcclxuICAgIFJlY29tbWVuZGVkUHJvZHVjdHM6IGZhbHNlLFxyXG4gICAgdGl0bGU6IFwiU3dlZXQgUG90YXRvXCIsXHJcbiAgICBxdWFudGl0eTogMjUwLFxyXG4gICAgcHJpY2U6IDUwLFxyXG4gICAgZGlzY291bnQ6IFwiMjAlXCIsXHJcbiAgICBjYXRlZ29yeTogXCJWZWdldGFibGVzXCIsXHJcbiAgICBjdXJyZW50UHJpY2U6IDQwLFxyXG4gICAgaW1hZ2U6IFwiL0l0ZW1zL3N3ZWV0LXBvdGF0by5qcGdcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlZpdGFtaW4gQiwgUGhvc3Bob3J1cywgU2VsZW5pdW0sIENvcHBlclwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwibGV0dHVjZVwiLFxyXG4gICAgdGl0bGU6IFwiTGV0dHVjZVwiLFxyXG4gICAgaGVpZ2h0OiAyMDAsXHJcbiAgICBjYXJ0SGVpZ2h0OiAxMjAsXHJcbiAgICBjYXJ0V2lkdGg6IDEyMCxcclxuICAgIHF1YW50aXR5OiAyNTAsXHJcbiAgICB3aWR0aDogMjAwLFxyXG4gICAgYmVzdFNlbGxlckRlYWxzOiB0cnVlLFxyXG4gICAgUmVjb21tZW5kZWRQcm9kdWN0czogdHJ1ZSxcclxuICAgIHRyZW5kaW5nRGVhbHM6IGZhbHNlLFxyXG4gICAgcHJpY2U6IDUwLFxyXG4gICAgZGlzY291bnQ6IFwiMjBcIixcclxuICAgIGNhdGVnb3J5OiBcIlZlZ2V0YWJsZXNcIixcclxuICAgIGN1cnJlbnRQcmljZTogNDAsXHJcbiAgICBpbWFnZTogXCIvSXRlbXMvbGV0dHVjZS10LnBuZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVml0YW1pbiBCLCBQaG9zcGhvcnVzLCBTZWxlbml1bSwgQ29wcGVyXCIsXHJcbiAgfSxcclxuXTtcclxuIl0sIm5hbWVzIjpbImNhdGVnb3J5IiwiQWxsUHJvZHVjdHMiLCJpZCIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJwcmljZSIsInF1YW50aXR5IiwiY2FydEhlaWdodCIsImNhcnRXaWR0aCIsImRpc2NvdW50IiwiY3VycmVudFByaWNlIiwidHJlbmRpbmdEZWFscyIsImJlc3RTZWxsZXJEZWFscyIsIlJlY29tbWVuZGVkUHJvZHVjdHMiLCJpbWFnZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/utils/data/products.ts\n"));

/***/ })

});