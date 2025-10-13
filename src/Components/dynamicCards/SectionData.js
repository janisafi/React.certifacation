// src/data/SectionData.js
import DemonstrateImg from "../assets/Demonstrateimg.svg";
import EnhancedImg from "../assets/Enhancedimg.svg";
import TeamImg from "../assets/teamimg.svg";

export const sections = [
  {
    id: 1,
    title: "Demonstrate your React competency",
    description: `A React certification validates your expertise in building robust,
    scalable applications with React. Employers and clients seek
    certified developers who stay ahead of the curve and deliver
    top-quality work. Showcase your commitment to excellence with a
    React credential built by recognized international experts.`,
    img: DemonstrateImg,
    reverse: true,
    alt: "React Demonstration",
  },
  {
    id: 2,
    title: "Enhanced Career Opportunities",
    description: `React skills are in high demand, and certification sets you apart.
    Stand out from the competition and unlock new job opportunities at
    leading companies. Certified developers can command higher salaries
    and faster advancement to senior roles. Invest in your future today.`,
    img: EnhancedImg,
    reverse: false,
    alt: "Enhanced React",
  },
  {
    id: 3,
    title: "Benefits for the Team",
    description: `A React certification validates your expertise in building robust,
    scalable applications with React. Employers and clients seek
    certified developers who stay ahead of the curve and deliver
    top-quality work. Showcase your commitment to excellence with a
    React credential built by recognized international experts.`,
    img: TeamImg,
    reverse: true,
    alt: "Team Benefits",
  },
];
