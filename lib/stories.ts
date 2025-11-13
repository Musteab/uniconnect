const toPoster = (url: string) =>
  url
    .replace("/video/upload/", "/video/upload/so_1/")
    .replace(/\.[a-z0-9]+$/i, ".jpg");

export type Story = {
  name: string;
  from: string;
  to: string;
  uni: string;
  src: string;
  thumb: string;
  blurb?: string;
  fromFlag?: string;
  toFlag?: string;
};

export const stories: Story[] = [
  {
    name: "Hudhaifa",
    from: "Kenya",
    to: "Malaysia",
    uni: "Taylor's University",
    src: "https://res.cloudinary.com/dqweuq8ic/video/upload/v1762952859/uniconnect/stories/hudhaifa.mov",
    thumb: toPoster("https://res.cloudinary.com/dqweuq8ic/video/upload/v1762952859/uniconnect/stories/hudhaifa.mov"),
    fromFlag: "🇰🇪",
    toFlag: "🇲🇾",
    blurb: "From Nairobi to Subang Jaya - Hudhaifa shares how Uni-Connect helped with shortlisting, application polishing, and a smooth enrollment at Taylor's."
  },
  {
    name: "Gracious",
    from: "Zimbabwe",
    to: "Malaysia",
    uni: "APU",
    src: "https://res.cloudinary.com/dqweuq8ic/video/upload/v1762952849/uniconnect/stories/gracious.mov",
    thumb: toPoster("https://res.cloudinary.com/dqweuq8ic/video/upload/v1762952849/uniconnect/stories/gracious.mov"),
    fromFlag: "🇿🇼",
    toFlag: "🇲🇾",
    blurb: "Gracious found the right tech pathway at APU. Visa guidance and scholarship insights made the journey quicker and more affordable."
  },
  {
    name: "Lavendar",
    from: "Kenya",
    to: "Malaysia",
    uni: "Sunway",
    src: "https://res.cloudinary.com/dqweuq8ic/video/upload/v1762952876/uniconnect/stories/lavender.mov",
    thumb: toPoster("https://res.cloudinary.com/dqweuq8ic/video/upload/v1762952876/uniconnect/stories/lavender.mov"),
    fromFlag: "🇰🇪",
    toFlag: "🇲🇾",
    blurb: "Lavendar highlights Sunway's vibrant campus life and how pre-departure support made settling in seamless from day one."
  },
  {
    name: "Shumira",
    from: "Zimbabwe",
    to: "Malaysia",
    uni: "UCSI",
    src: "https://res.cloudinary.com/dqweuq8ic/video/upload/v1762952897/uniconnect/stories/shumira.mov",
    thumb: toPoster("https://res.cloudinary.com/dqweuq8ic/video/upload/v1762952897/uniconnect/stories/shumira.mov"),
    fromFlag: "🇿🇼",
    toFlag: "🇲🇾",
    blurb: "Shumira's journey to UCSI shows the power of clear timelines, document checks, and ongoing post-arrival support."
  }
];
