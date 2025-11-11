import {
  visa,
  mastercard,
  stripe,
  applepay,
  googlepay,
  paypal,
} from "../../assets/Imges";

export const chooseyourLevel = {
  Junior: [
    {
      title: "Exam Only",
      price: "$69",
      features: [
        "Preparation Guide Access",
        "Discord Community Access",
        "Junior Exam Voucher",
      ],
      best: false,
    },
    {
      title: "Exam & Preparation Bundle",
      price: "$99",
      features: [
        "Preparation Guide Access",
        "Discord Community Access",
        "Junior Exam Voucher",
        "Self-Study Training Access",
        "Free Retake",
        "Trial Exam",
      ],
      best: true,
    },
  ],
  "Mid-Level": [
    {
      title: "Exam Only",
      price: "$99",
      features: [
        "Preparation Guide Access",
        "Discord Community Access",
        "Exam Voucher",
      ],
      best: false,
    },
    {
      title: "Exam + Training Bundle",
      price: "$129",
      features: [
        "Preparation Guide Access",
        "Discord Community Access",
        "Exam Voucher",
        "Online Training Access",
      ],
      best: false,
    },
    {
      title: "Ultimate Bundle",
      price: "$159",
      features: [
        "All Mid-Level Features",
        "1-on-1 Coaching",
        "Free Retake",
        "Trial Exam",
      ],
      best: true,
    },
  ],
  Senior: [
    {
      title: "Exam Only",
      price: "$129",
      features: [
        "Preparation Guide Access",
        "Community Access",
        "Senior Exam Voucher",
      ],
      best: false,
    },
    {
      title: "Pro Bundle",
      price: "$179",
      features: [
        "Exam Voucher",
        "Preparation Guide Access",
        "Community Access",
        "Training Access",
      ],
      best: false,
    },
    {
      title: "Elite Master Bundle",
      price: "$219",
      features: [
        "All Senior Features",
        "Exclusive Coaching",
        "Free Retake",
        "Trial Exam",
      ],
      best: true,
    },
  ],
};

export const paymentIMG = [
  { img: visa },
  { img: mastercard },
  { img: stripe },
  { img: applepay },
  { img: googlepay },
  { img: paypal },
];
