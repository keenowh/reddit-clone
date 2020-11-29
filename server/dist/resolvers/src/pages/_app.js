"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@chakra-ui/core");
const theme_1 = __importDefault(require("../theme"));
function MyApp({ Component, pageProps }) {
    return (<core_1.ThemeProvider theme={theme_1.default}>
        <core_1.CSSReset />
        <Component {...pageProps}/>
      </core_1.ThemeProvider>);
}
exports.default = MyApp;
//# sourceMappingURL=_app.js.map