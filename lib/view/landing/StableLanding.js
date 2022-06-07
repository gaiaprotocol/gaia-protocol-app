"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aos_1 = __importDefault(require("aos"));
const skydapp_browser_1 = require("skydapp-browser");
const CollapsibleItem_1 = __importDefault(require("../../component/shared/CollapsibleItem"));
const Layout_1 = __importDefault(require("../Layout"));
const ViewUtil_1 = __importDefault(require("../ViewUtil"));
class StableDaoLanding {
    constructor() {
        Layout_1.default.current.title = "StableDAO";
        Layout_1.default.current.content.append(this.container = (0, skydapp_browser_1.el)(".landing-stable-dao-view", (0, skydapp_browser_1.el)(".init-container", { id: "init" }, (0, skydapp_browser_1.el)("img", { "data-aos": "fade-up" }, { src: "/images/logo/gaia-stabledao-text.png", alt: "gaia stable dao logo" }), (0, skydapp_browser_1.el)("a", { click: () => { ViewUtil_1.default.go("/stabledao/buy"); }, "data-aos": "fade-up" }, (0, skydapp_browser_1.msg)("STABLE_DAO_MINT_BUY_BUTTON")), (0, skydapp_browser_1.el)("p", { "data-aos": "fade-up" }, (0, skydapp_browser_1.msg)("STABLE_DAO_INIT_DESC")), (0, skydapp_browser_1.el)("img.flow-map", { src: "/images/view/stabledao-landing/flow-map.png", alt: "flow map", "data-aos": "fade-up" })), (0, skydapp_browser_1.el)(".video-container", (0, skydapp_browser_1.el)("h2", { "data-aos": "fade-up" }, (0, skydapp_browser_1.msg)("STABLE_DAO_VIDEO_TITLE")), (0, skydapp_browser_1.el)(".video", { "data-aos": "fade-up" }, (0, skydapp_browser_1.el)("iframe", { width: "100%", height: "315px", src: "https://www.youtube.com/embed//tWDvU_XiS-c", title: "gaia stable dao introduction video" }))), (0, skydapp_browser_1.el)(".project-container", { id: "project" }, (0, skydapp_browser_1.el)("h2", { "data-aos": "fade-up" }, (0, skydapp_browser_1.msg)("STABLE_DAO_PROJECT_TITLE")), (0, skydapp_browser_1.el)("img", { src: "/images/view/stabledao-landing/ama.png", alt: "ama", "data-aos": "fade-up" }), (0, skydapp_browser_1.el)("a", {
            href: "/Gaia_Protocol_4th_AMA_Final.pdf",
            download: ""
        }, (0, skydapp_browser_1.msg)("PROJECT_DOC_LINK")), (0, skydapp_browser_1.el)("h3", { "data-aos": "fade-up" }, (0, skydapp_browser_1.msg)("STABLE_DAO_PROJECT_TITLE1")), (0, skydapp_browser_1.el)("p", { "data-aos": "fade-up" }, (0, skydapp_browser_1.msg)("STABLE_DAO_PROJECT_DESC1")), (0, skydapp_browser_1.el)("h3", { "data-aos": "fade-up" }, (0, skydapp_browser_1.msg)("STABLE_DAO_PROJECT_TITLE2")), (0, skydapp_browser_1.el)("p", { "data-aos": "fade-up" }, (0, skydapp_browser_1.msg)("STABLE_DAO_PROJECT_DESC2")), (0, skydapp_browser_1.el)("h3", { "data-aos": "fade-up" }, (0, skydapp_browser_1.msg)("STABLE_DAO_PROJECT_TITLE3")), (0, skydapp_browser_1.el)("p", { "data-aos": "fade-up" }, (0, skydapp_browser_1.msg)("STABLE_DAO_PROJECT_DESC3")), (0, skydapp_browser_1.el)("h3", { "data-aos": "fade-up" }, (0, skydapp_browser_1.msg)("STABLE_DAO_PROJECT_TITLE4")), (0, skydapp_browser_1.el)("img", { src: "/images/view/stabledao-landing/profit-structure.png", alt: "profit-structure.png", "data-aos": "fade-up" }), (0, skydapp_browser_1.el)("p", { "data-aos": "fade-up" }, (0, skydapp_browser_1.msg)("STABLE_DAO_PROJECT_DESC4"))), (0, skydapp_browser_1.el)(".buy-container", { id: "buy" }, (0, skydapp_browser_1.el)("h2", { "data-aos": "fade-up" }, (0, skydapp_browser_1.msg)("STABLE_DAO_MINT_BUY_TITLE")), (0, skydapp_browser_1.el)("a", { href: "/buy", "data-aos": "fade-up" }, (0, skydapp_browser_1.msg)("STABLE_DAO_MINT_BUY_BUTTON")), (0, skydapp_browser_1.el)("h3", { "data-aos": "fade-up" }, (0, skydapp_browser_1.msg)("STABLE_DAO_MINT_BUY_TITLE1")), (0, skydapp_browser_1.el)("p", { "data-aos": "fade-up" }, (0, skydapp_browser_1.msg)("STABLE_DAO_MINT_BUY_DESC1")), (0, skydapp_browser_1.el)("p", { "data-aos": "fade-up" }, (0, skydapp_browser_1.msg)("STABLE_DAO_MINT_BUY_DESC2")), (0, skydapp_browser_1.el)("h3", { "data-aos": "fade-up" }, (0, skydapp_browser_1.msg)("STABLE_DAO_MINT_BUYBACK_TITLE")), (0, skydapp_browser_1.el)("p", { "data-aos": "fade-up" }, (0, skydapp_browser_1.msg)("STABLE_DAO_MINT_BUYBACK_DESC1")), (0, skydapp_browser_1.el)("p", { "data-aos": "fade-up" }, (0, skydapp_browser_1.msg)("STABLE_DAO_MINT_BUYBACK_DESC2"))), (0, skydapp_browser_1.el)(".nft-container", { id: "nft" }, (0, skydapp_browser_1.el)("h2", { "data-aos": "fade-up" }, (0, skydapp_browser_1.msg)("STABLE_DAO_SNEAKPEEK_TITLE")), (0, skydapp_browser_1.el)("section", (0, skydapp_browser_1.el)("img", { "data-aos": "fade-up", src: "/images/view/stabledao-landing/nft1.png" }), (0, skydapp_browser_1.el)("img", { "data-aos": "fade-up", src: "/images/view/stabledao-landing/nft2.png" }), (0, skydapp_browser_1.el)("img", { "data-aos": "fade-up", src: "/images/view/stabledao-landing/nft3.png" }), (0, skydapp_browser_1.el)("img", { "data-aos": "fade-up", src: "/images/view/stabledao-landing/nft4.png" }), (0, skydapp_browser_1.el)("img", { "data-aos": "fade-up", src: "/images/view/stabledao-landing/nft5.png" }), (0, skydapp_browser_1.el)("img", { "data-aos": "fade-up", src: "/images/view/stabledao-landing/nft6.png" }), (0, skydapp_browser_1.el)("img", { "data-aos": "fade-up", src: "/images/view/stabledao-landing/nft7.png" }), (0, skydapp_browser_1.el)("img", { "data-aos": "fade-up", src: "/images/view/stabledao-landing/nft8.png" }))), (0, skydapp_browser_1.el)(".faq-container", { id: "faq" }, (0, skydapp_browser_1.el)("h2", { "data-aos": "fade-up" }, (0, skydapp_browser_1.msg)("STABLE_DAO_FAQ_TITLE")), (0, skydapp_browser_1.el)("section", new CollapsibleItem_1.default((0, skydapp_browser_1.msg)("STABLE_DAO_FAQ_TITLE1"), (0, skydapp_browser_1.msg)("STABLE_DAO_FAQ_DESC1")), new CollapsibleItem_1.default((0, skydapp_browser_1.msg)("STABLE_DAO_FAQ_TITLE2"), (0, skydapp_browser_1.msg)("STABLE_DAO_FAQ_DESC2")), new CollapsibleItem_1.default((0, skydapp_browser_1.msg)("STABLE_DAO_FAQ_TITLE3"), (0, skydapp_browser_1.msg)("STABLE_DAO_FAQ_DESC3")), new CollapsibleItem_1.default((0, skydapp_browser_1.msg)("STABLE_DAO_FAQ_TITLE4"), (0, skydapp_browser_1.msg)("STABLE_DAO_FAQ_DESC4")), new CollapsibleItem_1.default((0, skydapp_browser_1.msg)("STABLE_DAO_FAQ_TITLE5"), (0, skydapp_browser_1.msg)("STABLE_DAO_FAQ_DESC5")), new CollapsibleItem_1.default((0, skydapp_browser_1.msg)("STABLE_DAO_FAQ_TITLE6"), (0, skydapp_browser_1.msg)("STABLE_DAO_FAQ_DESC6")), new CollapsibleItem_1.default((0, skydapp_browser_1.msg)("STABLE_DAO_FAQ_TITLE7"), (0, skydapp_browser_1.msg)("STABLE_DAO_FAQ_DESC7"))))));
        this.init();
    }
    init() {
        aos_1.default.init();
    }
    changeParams(params, uri) { }
    close() {
        this.container.delete();
    }
}
exports.default = StableDaoLanding;
//# sourceMappingURL=StableLanding.js.map