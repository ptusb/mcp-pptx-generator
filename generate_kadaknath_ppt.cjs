
const PptxGenJS = require("pptxgenjs");
const fs = require('fs');
const path = require('path');

// --- Configuration ---
// Asset path where generated images are stored
const ASSET_PATH = "C:\\Users\\PIYUSH\\.gemini\\antigravity\\brain\\9c0e08a8-c016-4d04-b24c-016bc272b0f3\\";
const OUTPUT_FILE = "E:\\eknath kadknath sunday hoya monday roj khaoo anaday\\Kadaknath_Pune_Strategic_Deck_Detailed.pptx";

// Images 
const TITLE_BG = path.join(ASSET_PATH, "kadaknath_premium_title_bg_1767445893139.png");
const SLIDE_BG = path.join(ASSET_PATH, "kadaknath_slide_bg_texture_1767445937436.png");
const FOOD_IMG = path.join(ASSET_PATH, "kadaknath_culinary_plated_1767446001473.png");

// Colors
const BLACK = "000000";
const GOLD = "D4AF37"; // Metallic Gold
const WHITE = "FFFFFF";
const DARK_GREY = "1A1A1A";
const TEXT_GREY = "E0E0E0";
const ACCENT_GOLD = "C5A028";

// Fonts
const FONT_TITLE = "Arial Black";
const FONT_BODY = "Arial";

// Initialize Presentation
let pres = new PptxGenJS();
pres.layout = "LAYOUT_16x9";
pres.title = "Kadaknath Pune Strategic Roadmap";
pres.company = "Kadaknath Pune";
pres.author = "Sandeep Sonawane";

// --- Design Helpers ---

// 1. Master Slide Definition
pres.defineSlideMaster({
    title: "MASTER_SLIDE",
    background: { path: fs.existsSync(SLIDE_BG) ? SLIDE_BG : undefined, color: BLACK },
    slideNumber: { x: "96%", y: "96%", fontSize: 10, color: BLACK, fontFace: FONT_BODY },
    objects: [
        // Golden accent bar at bottom
        {
            rect: { x: 0, y: "96%", w: "100%", h: "4%", fill: { color: GOLD } }
        },
        // Logo text placeholder (top right)
        {
            text: {
                text: "KADAKNATH PUNE",
                options: { x: "85%", y: 0.2, w: "15%", h: 0.3, fontFace: FONT_TITLE, fontSize: 10, color: GOLD, align: "right" }
            }
        }
    ]
});

// Helper: Add Title
const addSlideTitle = (slide, titleText) => {
    slide.addText(titleText, {
        x: 0.5, y: 0.4, w: 9, h: 0.8,
        fontFace: FONT_TITLE, fontSize: 32, color: GOLD,
        shadow: { type: "outer", color: BLACK, blur: 3, offset: 2 }
    });
    // Underline
    slide.addShape(pres.shapes.LINE, { x: 0.5, y: 1.1, w: 2, h: 0, line: { color: WHITE, width: 2 } });
};

// Helper: Add Bullet List
const addBulletList = (slide, items, x, y, w, h, fontSize = 16) => {
    let formattedItems = items.map(item => ({
        text: item,
        options: { fontSize: fontSize, color: TEXT_GREY, bullet: { code: "25BA", color: GOLD }, breakLine: true, indent: 20 } // 25BA is a triangle
    }));
    slide.addText(formattedItems, { x: x, y: y, w: w, h: h, fontFace: FONT_BODY, lineSpacing: 28 });
};

// --- SLIDE 1: TITLE SLIDE ---
let slide1 = pres.addSlide();
if (fs.existsSync(TITLE_BG)) {
    slide1.background = { path: TITLE_BG };
} else {
    slide1.background = { color: BLACK };
}

// Dark overlay for readability
slide1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: "100%", h: "100%", fill: { color: BLACK, transparency: 40 } });

slide1.addText("KADAKNATH PUNE", {
    x: 0, y: "35%", w: "100%", h: 1,
    fontFace: FONT_TITLE, fontSize: 60, color: GOLD, align: "center",
    shadow: { type: "outer", color: BLACK, blur: 20 }
});

slide1.addText("THE BLACK GOLD REVOLUTION", {
    x: 0, y: "48%", w: "100%", h: 0.5,
    fontFace: FONT_BODY, fontSize: 24, color: WHITE, align: "center",
    charSpacing: 3
});

slide1.addText("Premium Poultry Ecosystem & Strategic Roadmap", {
    x: 0, y: "85%", w: "100%", h: 0.5,
    fontFace: FONT_BODY, fontSize: 14, color: TEXT_GREY, align: "center"
});

// --- SLIDE 2: EXECUTIVE SUMMARY ---
let slide2 = pres.addSlide({ masterName: "MASTER_SLIDE" });
addSlideTitle(slide2, "Executive Summary");

slide2.addText("Vision: Establishing Kadaknath as the \"Black Gold Standard\" in premium poultry.", {
    x: 0.5, y: 1.5, w: 9, h: 1, fontSize: 18, color: WHITE, bold: true
});

slide2.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 2.5, w: 3, h: 2, fill: { color: DARK_GREY }, line: { color: GOLD } });
slide2.addText("Our Mission", { x: 0.5, y: 2.6, w: 3, h: 0.5, align: "center", fontSize: 14, color: GOLD, bold: true });
slide2.addText("To deliver unparalleled health, quality, and taste through ethical farming.", { x: 0.6, y: 3.1, w: 2.8, h: 1.2, align: "center", fontSize: 12, color: TEXT_GREY });

slide2.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 3.8, y: 2.5, w: 3, h: 2, fill: { color: DARK_GREY }, line: { color: GOLD } });
slide2.addText("Financial Target", { x: 3.8, y: 2.6, w: 3, h: 0.5, align: "center", fontSize: 14, color: GOLD, bold: true });
slide2.addText("₹15 Lakhs daily revenue within 18 months.\nInvestment: ₹1 Crore.", { x: 3.9, y: 3.1, w: 2.8, h: 1.2, align: "center", fontSize: 12, color: TEXT_GREY });

slide2.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 7.1, y: 2.5, w: 3, h: 2, fill: { color: DARK_GREY }, line: { color: GOLD } });
slide2.addText("Strategic Goal", { x: 7.1, y: 2.6, w: 3, h: 0.5, align: "center", fontSize: 14, color: GOLD, bold: true });
slide2.addText("Market Dominance in Pune's premium ecosystem via omnichannel distribution.", { x: 7.2, y: 3.1, w: 2.8, h: 1.2, align: "center", fontSize: 12, color: TEXT_GREY });


// --- SLIDE 3: FOUNDER & PHILOSOPHY ---
let slide3 = pres.addSlide({ masterName: "MASTER_SLIDE" });
addSlideTitle(slide3, "Foundation & Heritage");

slide3.addText("Sandeep Sonawane's Journey", { x: 0.5, y: 1.5, w: 6, h: 0.5, fontSize: 20, color: GOLD, bold: true });
slide3.addText("A decade-long R&D journey into the mystical Kadaknath breed. 'I don't just raise chickens; I nurture a legacy.'",
    { x: 0.5, y: 2.0, w: 6, h: 1, fontSize: 14, color: TEXT_GREY, italic: true });

slide3.addText("The Three Pillars:", { x: 0.5, y: 3.2, w: 4, h: 0.5, fontSize: 18, color: WHITE, bold: true });

let pillars = [
    { title: "HERITAGE", desc: "Preserving indigenous purity" },
    { title: "INNOVATION", desc: "Modern farming meets wisdom" },
    { title: "ETHICS", desc: "Dignity and care for every bird" }
];

pillars.forEach((p, i) => {
    let yPos = 3.8 + (i * 0.8);
    slide3.addShape(pres.shapes.OVAL, { x: 0.5, y: yPos, w: 0.3, h: 0.3, fill: { color: GOLD } });
    slide3.addText(p.title, { x: 0.9, y: yPos, w: 2, h: 0.3, fontSize: 14, color: GOLD, bold: true });
    slide3.addText(p.desc, { x: 3, y: yPos, w: 4, h: 0.3, fontSize: 14, color: TEXT_GREY });
});

if (fs.existsSync(FOOD_IMG)) {
    slide3.addImage({ path: FOOD_IMG, x: 7, y: 1.5, w: 5.5, h: 4.5, sizing: "cover" });
}

// --- SLIDE 4: PRODUCT COMPARISON (THE BLACK GOLD) ---
let slide4 = pres.addSlide({ masterName: "MASTER_SLIDE" });
addSlideTitle(slide4, "Kadaknath: The Black Gold");

slide4.addText("Why is it superior?", { x: 0.5, y: 1.3, w: 5, h: 0.5, fontSize: 16, color: TEXT_GREY });

// Table
let rows = [
    [
        { text: "Feature", options: { bold: true, fill: GOLD, color: BLACK } },
        { text: "Kadaknath (Black Gold)", options: { bold: true, fill: GOLD, color: BLACK } },
        { text: "Regular Chicken", options: { bold: true, fill: GOLD, color: BLACK } },
        { text: "Advantage", options: { bold: true, fill: GOLD, color: BLACK } }
    ],
    ["Protein", "25-30%", "18-20%", "+40% Higher"],
    ["Fat Content", "0.73-1.03% (Very Low)", "13-25%", "94% Lower"],
    ["Iron", "4-5mg/100g", "1.5mg/100g", "150% More"],
    ["Cholesterol", "Significantly Lower", "High", "Heart Healthy"],
    ["Meat Color", "Jet Black (High Melanin)", "Pink/White", "Exotic & Unique"]
];

slide4.addTable(rows, {
    x: 0.5, y: 2, w: 12.33,
    color: WHITE, fontSize: 14, border: { color: DARK_GREY },
    fill: { color: "222222" },
    align: "center", valign: "middle",
    rowh: 0.6
});

slide4.addText("Unique Selling Propositions:", { x: 0.5, y: 5.8, w: 4, h: 0.5, fontSize: 16, color: GOLD, bold: true });
addBulletList(slide4, [
    "Visual Drama: Instagram-worthy black meat",
    "Status Symbol: Sophisticated palate choice",
    "Health Halo: Guilt-free indulgence"
], 0.5, 6.2, 12, 1, 14);

// --- SLIDE 5: MARKET SEGMENTATION ---
let slide5 = pres.addSlide({ masterName: "MASTER_SLIDE" });
addSlideTitle(slide5, "Pune Market Segmentation: The 5 Kingdoms");

// 5 Boxes for market areas
const markets = [
    { area: "East (Kharadi)", type: "Tech Titans", profile: "IT, 28-42y, Quick-commerce users", strategy: "Experience Center @ Phoenix" },
    { area: "West (Hinjewadi)", type: "Affluent Hub", profile: "Expats, High Income, Fitness focused", strategy: "Flagship @ Xion Mall" },
    { area: "North (PCMC)", type: "Growing Giant", profile: "Business families, Traditional values", strategy: "Community events, Supermarkets" },
    { area: "South (Katraj)", type: "Diverse District", profile: "Students, Value-conscious", strategy: "Takeaway Pods details" },
    { area: "Central", type: "Heritage Heart", profile: "Old Money, Established families", strategy: "Premium Hotels (Marriott, Conrad)" }
];

let x = 0.5, y = 1.5, w = 2.4, h = 5; // Reduced height to fit
markets.forEach((m, i) => {
    slide5.addShape(pres.shapes.RECTANGLE, { x: x + (i * 2.5), y: y, w: 2.3, h: h, fill: { color: "222222" }, line: { color: GOLD, width: 1 } });

    slide5.addText(m.area, { x: x + (i * 2.5), y: y + 0.2, w: 2.3, h: 0.5, align: "center", fontSize: 14, color: GOLD, bold: true });
    slide5.addText(m.type, { x: x + (i * 2.5), y: y + 0.7, w: 2.3, h: 0.5, align: "center", fontSize: 12, color: WHITE, italic: true });

    slide5.addShape(pres.shapes.LINE, { x: x + (i * 2.5) + 0.4, y: y + 1.3, w: 1.5, h: 0, line: { color: "555555" } });

    slide5.addText(m.profile, { x: x + (i * 2.5) + 0.1, y: y + 1.5, w: 2.1, h: 1.5, align: "center", fontSize: 11, color: TEXT_GREY });
    slide5.addText("Strategy:", { x: x + (i * 2.5) + 0.1, y: y + 3.2, w: 2.1, h: 0.3, align: "center", fontSize: 11, color: GOLD });
    slide5.addText(m.strategy, { x: x + (i * 2.5) + 0.1, y: y + 3.6, w: 2.1, h: 1.2, align: "center", fontSize: 11, color: WHITE });
});

// --- SLIDE 6: TARGET AUDIENCE ---
let slide6 = pres.addSlide({ masterName: "MASTER_SLIDE" });
addSlideTitle(slide6, "Target Audience Personas");

// 2 Columns
// Col 1
slide6.addText("Primary Personas", { x: 0.5, y: 1.5, w: 5, h: 0.5, fontSize: 18, color: GOLD, bold: true });
addBulletList(slide6, [
    "The Health Warrior (IT/Entrepreneur): Values nutrition, fitness. Wants 'More protein, less fat'.",
    "The Affluent Foodie (Business Owner): Seeks status & uniqueness. Wants 'Conversation starter'.",
    "The Conscious Parent: Worried about antibiotics. Wants 'Pure, safe food'."
], 0.5, 2.0, 6, 4, 14);

// Col 2
slide6.addText("Secondary Personas", { x: 7, y: 1.5, w: 5, h: 0.5, fontSize: 18, color: GOLD, bold: true });
addBulletList(slide6, [
    "The Gourmet Chef: Needs premium ingredients to elevate menus.",
    "The Social Influencer: Needs photogenic, viral food content.",
    "The Wellness Advocate: Believes in traditional wisdom & holistic health."
], 7, 2.0, 6, 4, 14);


// --- SLIDE 7: DISTRIBUTION STRATEGY ---
let slide7 = pres.addSlide({ masterName: "MASTER_SLIDE" });
addSlideTitle(slide7, "Omnichannel Distribution Engine");

// Visual representation of channels
let channels = [
    { title: "Experience Centers", detail: "Flagship Stores @ Phoenix, Xion Mall. Open Kitchens, Museums.", icon: "Store" },
    { title: "Takeaway Pods", detail: "Grab & Go kiosks near IT parks (20 pods Yr 1). Low capex.", icon: "Kiosk" },
    { title: "Quick-Commerce", detail: "Blinkit, Zepto, Swiggy Instamart. Dark stores in micro-markets.", icon: "Rocket" },
    { title: "B2B / HORECA", detail: "5-Star Hotels (JW Marriott), Fine Dining. Wholesale margins.", icon: "Hotel" },
    { title: "Organic Retail", detail: "Network of 100+ stores (Dorabjees, Nature's Basket).", icon: "Cart" }
];

channels.forEach((c, i) => {
    let y = 1.6 + (i * 1.0);
    slide7.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: y, w: 12, h: 0.8, fill: { color: "222222" }, line: { color: GOLD } });
    slide7.addText((i + 1).toString(), { x: 0.6, y: y + 0.1, w: 0.6, h: 0.6, fontSize: 24, color: GOLD, bold: true, align: "center" });
    slide7.addText(c.title, { x: 1.5, y: y, w: 3, h: 0.8, fontSize: 16, color: WHITE, bold: true, valign: "middle" });
    slide7.addText(c.detail, { x: 5, y: y, w: 7, h: 0.8, fontSize: 14, color: TEXT_GREY, valign: "middle" });
});

// --- SLIDE 8: SUPPLY CHAIN & OPS ---
let slide8 = pres.addSlide({ masterName: "MASTER_SLIDE" });
addSlideTitle(slide8, "Logistics & Operations Backbone");

slide8.addText("Farm to Fork in 18 Hours:", { x: 0.5, y: 1.5, w: 8, h: 0.5, fontSize: 18, color: GOLD });

// Timeline graphic
let steps = ["Farm (0-6h)", "Processing Hub (6-12h)", "Distribution (12-16h)", "Retail (16-18h)"];
let stepDetails = ["Ethical harvesting, Chilling", "HACCP Processing, Blast Freeze", "GPS Cold Chain", "Customer Purchase"];

steps.forEach((s, i) => {
    let x = 0.5 + (i * 3.1);
    slide8.addShape(pres.shapes.CHEVRON, { x: x, y: 2.2, w: 2.9, h: 1.5, fill: { color: i % 2 === 0 ? GOLD : DARK_GREY } });
    slide8.addText(s, { x: x + 0.2, y: 2.4, w: 2.2, h: 0.5, align: "center", fontSize: 12, color: i % 2 === 0 ? BLACK : WHITE, bold: true });
    slide8.addText(stepDetails[i], { x: x + 0.2, y: 3.0, w: 2.2, h: 0.5, align: "center", fontSize: 10, color: i % 2 === 0 ? BLACK : WHITE });
});

slide8.addText("Hub Strategy: 3 Strategic Locations", { x: 0.5, y: 4.5, w: 8, h: 0.5, fontSize: 18, color: GOLD });
slide8.addText("1. East Hub (Kharadi) - 2000 birds/day\n2. West Hub (Hinjewadi) - 2500 birds/day\n3. South Hub (Katraj) - 1500 birds/day", {
    x: 0.5, y: 5.0, w: 8, h: 1.5, fontSize: 14, color: WHITE
});

slide8.addText("Tech Stack:", { x: 7, y: 4.5, w: 4, h: 0.5, fontSize: 18, color: GOLD });
slide8.addText("• Blockchain Traceability\n• IOT Temp Sensors\n• AI Demand Forecasting", { x: 7, y: 5.0, w: 5, h: 1.5, fontSize: 14, color: WHITE });


// --- SLIDE 9: MARKETING STRATEGY ---
let slide9 = pres.addSlide({ masterName: "MASTER_SLIDE" });
addSlideTitle(slide9, "Marketing: The 10-Pillar Approach");

slide9.addText("Digital Dominance & Brand Storytelling", { x: 0.5, y: 1.3, w: 8, h: 0.5, fontSize: 16, color: TEXT_GREY });

// Grid of boxes
let mktg = [
    { title: "Social Media", text: "Instagram/YouTube. Farm diaries, Recipes, #BlackGoldJourney." },
    { title: "Influencers", text: "Celebrity Chefs (Sanjeev Kapoor?), Fitness Micro-influencers." },
    { title: "SEO & Ads", text: "Targeted localized ads. 'Healthy Chicken Pune'. Retargeting." },
    { title: "PR & Media", text: "Launch events, Newspaper features, Awards submissions." },
    { title: "Content", text: "Educational blogs, 'Black Gold Kitchen' video series." },
    { title: "Experiential", text: "Sampling tours @ Malls. Taste is believing." }
];

let mX = 0.5, mY = 2.0;
mktg.forEach((m, i) => {
    let currX = mX + ((i % 3) * 4.1);
    let currY = mY + (Math.floor(i / 3) * 2.2);

    slide9.addShape(pres.shapes.RECTANGLE, { x: currX, y: currY, w: 3.8, h: 2, fill: { color: DARK_GREY }, line: { color: GOLD } });
    slide9.addText(m.title, { x: currX + 0.1, y: currY + 0.1, w: 3.6, h: 0.4, fontSize: 14, color: GOLD, bold: true });
    slide9.addText(m.text, { x: currX + 0.1, y: currY + 0.6, w: 3.6, h: 1.3, fontSize: 12, color: WHITE });
});


// --- SLIDE 10: ROADMAP PHASE 1 ---
let slide10 = pres.addSlide({ masterName: "MASTER_SLIDE" });
addSlideTitle(slide10, "Phase 1: The Hatching (Months 1-4)");
slide10.addText("Goal: Foundation Setup & ₹1.5L/Day Revenue", { x: 0.5, y: 1.3, w: 9, h: 0.5, fontSize: 16, color: WHITE });

addBulletList(slide10, [
    "Month 1: Infrastructure & Team. Lease East Hub. Setup Digital presence.",
    "Month 2: Public Launch. Pilot Store opening. Blinkit onboarding.",
    "Month 3: Expansion. 2nd Takeaway Pod (Hinjewadi). Start B2B Pilot.",
    "Month 4: Validation. Analyze data, optimize ad spend, Loyalty program.",
    "Key Metric: 2 Stores live + 1500 Unique Customers."
], 0.5, 2.0, 12, 4.5, 18);


// --- SLIDE 11: ROADMAP PHASE 2 ---
let slide11 = pres.addSlide({ masterName: "MASTER_SLIDE" });
addSlideTitle(slide11, "Phase 2: The Flying (Months 5-8)");
slide11.addText("Goal: Rapid Expansion & ₹3.5L/Day Revenue", { x: 0.5, y: 1.3, w: 9, h: 0.5, fontSize: 16, color: WHITE });

addBulletList(slide11, [
    "Month 5: Flagship Store Launch (Koregaon Park). Grand event.",
    "Month 6: Retail Network. 5 new pods. Enter supermarkets.",
    "Month 7: Marketing Blitz. Macro-influencers. High-budget ads.",
    "Month 8: Automation. CRM implementation. App development start.",
    "Key Metric: Flashship store live + 5-Star Hotel Contracts."
], 0.5, 2.0, 12, 4.5, 18);

// --- SLIDE 12: ROADMAP PHASE 3 ---
let slide12 = pres.addSlide({ masterName: "MASTER_SLIDE" });
addSlideTitle(slide12, "Phase 3: The Ruling (Months 9-12)");
slide12.addText("Goal: Market Dominance & ₹5L+/Day Revenue", { x: 0.5, y: 1.3, w: 9, h: 0.5, fontSize: 16, color: WHITE });

addBulletList(slide12, [
    "Month 9: Subscription Models. 'Black Gold Box' recurring revenue.",
    "Month 10: Product Innovation. Sausages, Salami, Ready-to-cook.",
    "Month 11: Full Scale. App Launch. All 3 Hubs operational.",
    "Month 12: Optimization. Profit maximization. Next city planning.",
    "Key Metric: ₹1.5 Cr Monthly Revenue Run Rate."
], 0.5, 2.0, 12, 4.5, 18);

// --- SLIDE 13: FINANCIAL PROJECTIONS ---
let slide13 = pres.addSlide({ masterName: "MASTER_SLIDE" });
addSlideTitle(slide13, "Financial Trajectory: Year 1");

let chartData = [
    {
        name: "Monthly Revenue (₹ Lakhs)",
        labels: ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12"],
        values: [5, 45, 60, 75, 90, 105, 120, 135, 150, 155, 160, 165]
    }
];

slide13.addChart(pres.charts.AREA, chartData, {
    x: 0.5, y: 2.0, w: 12, h: 4.5,
    chartArea: { fill: { color: "222222" } },
    plotArea: { fill: { color: BLACK } },
    valAxisLabelColor: WHITE, catAxisLabelColor: WHITE,
    dataBorder: { color: GOLD, width: 3 },
    fill: "D4AF37", fillTransparency: 50,
    showLegend: false,
    title: "Projected Monthly Revenue Growth", titleColor: GOLD
});

// --- SLIDE 14: INVESTMENT ASK ---
let slide14 = pres.addSlide({ masterName: "MASTER_SLIDE" });
addSlideTitle(slide14, "Strategic Investment Ask");

slide14.addText("₹1 Crore", { x: 0.5, y: 2, w: 5, h: 1, fontSize: 80, color: GOLD, bold: true });
slide14.addText("Allocation of Funds", { x: 6, y: 2, w: 5, h: 0.5, fontSize: 18, color: WHITE });

// Donut chart simulation via text/boxes for breakdown (Simpler to render cleanly)
let funds = [
    { cat: "Store Setup (35%)", amt: "₹35 Lakhs" },
    { cat: "Digital Mktg (25%)", amt: "₹25 Lakhs" },
    { cat: "Brand Building (20%)", amt: "₹20 Lakhs" },
    { cat: "PR & Partners (10%)", amt: "₹10 Lakhs" },
    { cat: "Buffer (10%)", amt: "₹10 Lakhs" }
];

funds.forEach((f, i) => {
    slide14.addShape(pres.shapes.RECTANGLE, { x: 6, y: 2.6 + (i * 0.6), w: 0.5, h: 0.4, fill: { color: GOLD } });
    slide14.addText(f.cat, { x: 6.6, y: 2.6 + (i * 0.6), w: 3, h: 0.4, fontSize: 14, color: WHITE });
    slide14.addText(f.amt, { x: 9.6, y: 2.6 + (i * 0.6), w: 2, h: 0.4, fontSize: 14, color: GOLD, bold: true });
});

slide14.addText("Projected ROI: Break-even by Month 8. 12-15% Net Margin.", { x: 0.5, y: 6, w: 12, h: 0.5, fontSize: 16, color: WHITE, italic: true });


// --- SLIDE 15: CLOSING ---
let slide15 = pres.addSlide();
if (fs.existsSync(TITLE_BG)) {
    slide15.background = { path: TITLE_BG };
} else {
    slide15.background = { color: BLACK };
}
slide15.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: "100%", h: "100%", fill: { color: BLACK, transparency: 60 } });

slide15.addText("LET'S BUILD THIS LEGACY", {
    x: 0, y: "40%", w: "100%", h: 1,
    fontFace: FONT_TITLE, fontSize: 40, color: GOLD, align: "center"
});

slide15.addText("Contact: Sandeep Sonawane", {
    x: 0, y: "60%", w: "100%", h: 0.5,
    fontFace: FONT_BODY, fontSize: 20, color: WHITE, align: "center"
});


// Save Presentation
pres.writeFile({ fileName: OUTPUT_FILE })
    .then(fileName => {
        console.log(`Created file: ${fileName}`);
    })
    .catch(err => {
        console.error(err);
    });
