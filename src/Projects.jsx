import irc from "../public/irc.gif";
import echo from "../public/echo.png";
import fw from "../public/frenchiewiki.png";
import doubleblack from "../public/doubleblack.png";
import foodtruck from "../public/foodtruck.png";
import discord from "../public/discord.png";
import go from "../public/go.png";
import salibas from "../public/salibas.png";
import categories from "../public/categories.png";

export const PROJECTS = [
  {
    title: "Categories.LIVE",
    subheading: "Vue.js + Express.js + Socket.IO",
    image: categories,
    points: [
      "A real-time multiplayer Scattergories-like game built with Vue.js, Express.js, and Socket.IO.",
      "It uses OpenAI's GPT-4 API to generate new creative prompts and validate user answers.",
      "The game's AI functionality allows the game to be played by yourself, as opposed to the traditional game where other players must score each others answers... but in theory can support thousands of players!"
    ],
    button: {
      text: "Frontend",
      link: "https://github.com/zachbroad/scatterclient/"
    },
    button2: {
      text: "Backend",
      link: "https://github.com/zachbroad/scatterserver/"
    },
    button3: {
      text: "Website",
      link: "https://categories.live/"
    },
  },
  {
    title: "ECHO for Spotify",
    subheading: "Python/Django + JavaScript/React",
    image: echo,
    points: [
      "Developed a full-stack mobile & web app for users to explore & share their Spotify listening history & habits with friends.",
      "Built with Django + Django REST Framework as backend & React as a web frontend.",
      "Pending approval from Spotify for API Quota Extension."
    ],
    button: {
      text: "Frontend",
      link: "https://github.com/zachbroad/echo"
    },
    button2: {
      text: "Backend",
      link: "https://github.com/zachbroad/echo_backend"
    },
    button3: {
      text: "App Website",
      link: "https://www.echoyourmusic.com/"
    },
  },
  {
    title: "Internet Relay (IRC) Server",
    subheading: "Java",
    image: irc, // replace with your image path
    points: [
      "Implemented an IRC server based on the RFC 1459 & RFC 2812 specification.",
      "Designed and developed a multi-threaded server architecture to handle multiple client connections simultaneously.",
      "Integrated error handling and exception management to ensure server resilience and stability.",
      "Supported core IRC features such as channels, private messages, nicknames, and user modes."
    ],
    button: {
      text: "View on GitHub",
      link: "https://github.com/zachbroad/jirc"
    }
  },
  {
    title: "FrenchieWiki.com",
    subheading: "Gatsby.JS → Wordpress",
    image: fw,
    points: [
      "Launched a blog for dog enthusiasts, originally using Gatsby.JS / React / SCSS to gain SEO speed advantages.",
      "Transitioned to Wordpress to focus on publishing and allow less tech-savvy individuals to contribute.",
      "Site has reached 3.5 million users to-date & generates over $100,000 in revenue per year through Amazon, Chewy, and various other partners.",
      "Collaborated with various freelance writers to generate content."
    ],
    button: {
      text: "View Website",
      link: "https://www.frenchiewiki.com/"
    }
  },
  {
    title: "SEO Consulting / Website Redesign",
    subheading: "",
    image: doubleblack,
    points: [
      "Designed websites for a transportation company for their 3 locations.",
      "Optimized websites for fast performance, best SEO practices, and increased conversions.",
      "Implemented Zapier automations to integrate signup forms with customer’s CRM."
    ],
    button: {
      text: "View Website",
      link: "https://www.doubleblacktransportation.com/"
    }
  },
  {
    title: "Food Truck Finder App",
    subheading: "Python/Django + Dart/Flutter",
    image: foodtruck,
    points: [
      "Developed a full-stack mobile & web app for food truck owners to manage their menu & display their live location to customers.",
      "Built with Django + Django REST Framework as backend & Flutter as a frontend for Android/iOS."
    ],
    button: {
      text: "View on GitHub",
      link: "https://github.com/zachbroad/foodtruckfinder-backend"
    }
  },
  {
    title: "Discord Bot for NFT Alerts",
    subheading: "Python",
    image: discord,
    points: [
      "Programmed a Discord bot to send alerts for Solana NFT sales.",
      "Featured multiple commands built-in to get statistics on sales data.",
      "Analyzed data from multiple NFT marketplaces and would send notifications to Discord channels with sale data."
    ],
    button: {
      text: "View on GitHub",
      link: "https://github.com/zachbroad/nftdiscordbot"
    }
  },
  {
    title: "Web Scraper for CPU Stock Check",
    subheading: "Go",
    image: go,
    points: [
      "Developed a web scraper built with Go to check multiple retailers for the stock of a specific CPU during chip shortage.",
      "Optimized performance using multithreading.",
      "Integrated Twilio API to send text notifications."
    ],
    button: {
      text: "View on GitHub",
      link: "https://github.com/zachbroad/instock"
    }
  },
  {
    title: "Website for Rug Cleaning Business",
    subheading: "ApostropheCMS & NodeJS → Gatsby.JS",
    image: salibas,
    points: [
      "Built a website for a rug cleaning business using ApostropheCMS / NodeJS which I later redesigned using GatsbyJS / React.",
      "Maintains #1 spot in “rug cleaning near me” and “rug cleaning bangor maine” through SEO.",
      "Site reaches ~250 users a month, many of which convert into customers through contact form, phone call, or getting directions to their storefront."
    ],
    button: {
      text: "View on GitHub",
      link: "https://github.com/zachbroad/instock"
    },
    button3: {
      text: "View Website",
      link: "https://www.salibasrugcleaners.com/"
    }
  },
]

