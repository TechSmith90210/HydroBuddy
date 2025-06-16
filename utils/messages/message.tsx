export const hydrationMessages = {
  start: [
    "Time to wake your water game up! First sip magic coming right up ✨💧",
    "Rise and hydrate! Your cells are literally cheering 🥳",
    "Let's kick things off—your body’s like ‘finally!’ 😅",
    "Day one sip at a time. Hydration hustle begins 🏁💦",
  ],
  mid: [
    "Halfway to hydration domination! 🚰🔥",
    "You're flowing like a hydration ninja! 🥷💧",
    "Glass by glass, you're building a better you 💪",
    "Still sipping strong! Your organs are throwing a party 🎉",
  ],
  nearGoal: [
    "Almost there! Just a few gulps from greatness 💫",
    "You can almost taste victory… and it's water 😎",
    "One more glass and you're officially a hydration hero 🏆",
    "Your hydration meter is about to explode—in a good way 💥💧",
  ],
  goalReached: [
    "BOOM! You just water-slayed the day! 💧👑",
    "Hydration goal = destroyed. You legend 🙌",
    "Refreshed, recharged, and ridiculously hydrated 😎",
    "You’re what hydration dreams are made of 🌊💙",
  ],
  overflow: [
    "Ok now you’re just flexing 💪💦 We love to see it!",
    "Extra credit? More like extra hydrated. You rock! 🚀",
    "Overachiever alert! Your cells are throwing confetti 🎊",
    "You didn’t just meet the goal—you drowned it 😅💧",
    "Overflow mode: ON. You’re officially a hydration beast 🐋",
  ],
};


export default function getMotivationalMessage(progress: number): string {
  const { start, mid, nearGoal, goalReached, overflow } = hydrationMessages;

  if (progress > 110) {
    return overflow[Math.floor(Math.random() * overflow.length)];
  } else if (progress >= 100) {
    return goalReached[Math.floor(Math.random() * goalReached.length)];
  } else if (progress >= 80) {
    return nearGoal[Math.floor(Math.random() * nearGoal.length)];
  } else if (progress >= 40) {
    return mid[Math.floor(Math.random() * mid.length)];
  } else {
    return start[Math.floor(Math.random() * start.length)];
  }
}
