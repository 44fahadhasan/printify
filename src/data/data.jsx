import facebook from "../assets/svg/facebook-icon.svg";
import instagram from "../assets/svg/instagram-icon.svg";
import linkedin from "../assets/svg/linkedin-icon.svg";
import reddit from "../assets/svg/reddit-icon.svg";
import tiktok from "../assets/svg/Tiktok-1.svg";
import x from "../assets/svg/X-Logo-Green.svg";
import youtube from "../assets/svg/youtube-icon.svg";

export const mainMenuLists = [
  { paht: "", label: "Catalog" },
  {
    paht: "",
    label: "How it works",
    dropdownLists: [
      { dropPath: "", dropLabel: "How Printify Works" },
      { dropPath: "", dropLabel: "Print On Demand" },
      { dropPath: "", dropLabel: "Printify Quality Promise" },
      { dropPath: "", dropLabel: "What to Sell?" },
    ],
  },
  { paht: "", label: "Pricing" },
  { paht: "", label: "Blog" },
  {
    paht: "",
    label: "Services",
    dropdownLists: [
      { dropPath: "", dropLabel: "Printify Studio" },
      { dropPath: "", dropLabel: "Printify Express Delivery" },
      { dropPath: "", dropLabel: "Transfer Products" },
      { dropPath: "", dropLabel: "Order In Bulk" },
    ],
  },
];

export const iconLists = [
  {
    icon: facebook,
  },
  {
    icon: instagram,
  },
  {
    icon: linkedin,
  },
  {
    icon: x,
  },
  {
    icon: youtube,
  },
  {
    icon: tiktok,
  },
  {
    icon: reddit,
  },
];

export const middleFooterNavs = [
  [
    { title: "Integrations" },
    [
      { label: "Shopify" },
      { label: "Etsy" },
      { label: "eBay" },
      { label: "Amazon" },
      { label: "TikTok Shop" },
      { label: "PrestaShop" },
      { label: "BigCommerce" },
      { label: "Wix" },
      { label: "WooCommerce" },
      { label: "Squarespace" },
      { label: "Printify API" },
      { label: "Printify Pop-Up Store" },
      { label: "Shutterstock" },
    ],
  ],
  [
    { title: "Discover" },
    [
      { label: "Blog" },
      { label: "Guides" },
      { label: "Guides" },
      { label: "Products" },
      { label: "Etsy print-on-demand" },
      { label: "Shopify print-on-demand" },
      { label: "Woocommerce print-on-demand" },
      { label: "Wix print-on-demand" },
      { label: "Squarespace print-on-demand" },
      { label: "Make Your Own Shirt" },
      { label: "Brands" },
      { label: "Pricing" },
      { label: "Shipping Rates" },
      { label: "Mockup Generator" },
    ],
  ],
  [
    { title: "Start selling" },
    [
      { label: "Custom T-shirts" },
      { label: "Custom Hoodies" },
      { label: "Custom Mugs" },
      { label: "Custom Socks" },
      { label: "Custom Backpacks" },
      { label: "Custom Branding" },
      { label: "Sell on Etsy" },
      { label: "Sell on Social Media" },
      { label: "Free T-shirt Designs" },
      { label: "Custom Products" },
      { label: "Custom All-Over-Print Hoodies" },
      { label: "Start a Clothing Line" },
      { label: "Start POD Business" },
      { label: "Bulk Orders" },
      { label: "Transfering To Printify" },
    ],
  ],
  [
    { title: "Printify" },
    [
      { label: "Print on Demand" },
      { label: "Print Providers" },
      { label: "Experts Program" },
      { label: "Printify Express Delivery" },
      { label: "Become a Partner" },
      { label: "About" },
      { label: "Printify Quality Promise" },
      { label: "Jobs" },
      { label: "Webinars" },
      { label: "Printing Profits Podcast" },
      { label: "Contact Us" },
      { label: "Affiliate" },
      { label: "Contact Sales" },
      { label: "POD Glossary" },
      { label: "Network Fulfillment Status" },
      { label: "Merchant Protection" },
      { label: "Security" },
      { label: "Sitemap" },
    ],
  ],
];

export const bottomFooterNavLists = [
  {
    _id: 1,
    label: "Intellectual Property Policy",
  },
  {
    _id: 2,
    label: "Terms of Service",
  },
  {
    _id: 3,
    label: "Privacy Policy",
  },
  {
    _id: 1,
    label: "Security",
  },
];
