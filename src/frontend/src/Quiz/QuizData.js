import image from "./forest.gif";
import image2 from "./townImage.jpeg";
import image3 from "./cityImage.jpg";
import art1 from "./Images/artsstock1.jpg";
import art2 from "./Images/artsstock2.jpg";
import robo from "./Images/dancingrobot.gif";
import goofy from "./Images/goofyteaching.gif";
import halfnote from "./Images/halfnote.png";
import mathstock1 from "./Images/mathstock1.jpg";
import mathstock2 from "./Images/mathstock2.jpg";
import science1 from "./Images/sciencestock1.jpg";
import science2 from "./Images/sciencestock2.jpg";
import social1 from "./Images/socialstudystock1.jpg";
import social2 from "./Images/socialstudystock2.jpg";
import techno1 from "./Images/technologystock1.jpg";
import techno2 from "./Images/technologystock2.jpeg";
import trade1 from "./Images/tradestock1.jpg";
import trade2 from "./Images/tradestock2.jpg";
import greece from "./Images/greece.jpg";
import puzzle from "./Images/puzzle.jpg";
import grad from "./Images/grad.jpg";
import bio from "./Images/bio.jpg";
import computer from "./Images/computer.jpg";
import birdhouse from "./Images/birdhouse.jpg";
import classroom from "./Images/class.jpg";
import worldmap from "./Images/worldmap.gif";
import debate from "./Images/debate.jpg";
import library from "./Images/library.jpg";



const questions = {
  0: {
    Question: "I enjoy working with my hands, either outside or inside.",
    Type: "AgreeDisagree",
    A: "",
    B: "",
    C: "",
    D: "",
    picture: trade1,
  },


  1: {
    Question:
      "A racing competition has 6 teams of 4 people and are planning on ordering pizza for lunch. The organizers want each person to have at least 2 slices and each box contains 8. What is the least number of pizza boxes the organizers can order so that each person gets at least 2 slices?",
    Type: "Mult",
    A: "3",
    B: "10",
    C: "6",
    D: "12",
    picture: mathstock1,
  },

  2: {
    Question: "I would rather:",
    Type: "IWouldRather",
    A: "Participate in a science fair.",
    B: "Participate in a debate on current events.",
    C: "",
    D: "",
    picture: science1,
  },

  3: {
    Question:
      "The city-state Athens of ancient Greece was the first known democracy in recorded history. How likely are you to enjoy learning about what led them to this form of government and how it worked out for them?",
    Type: "AgreeDisagree",
    A: "",
    B: "",
    C: "",
    D: "",
    picture: greece,
  },

  4: {
    Question: "I am a creative person.",
    Type: "AgreeDisagree",
    A: "",
    B: "",
    C: "",
    D: "",
    picture: art1,
  },


  5: {
    Question:
      "Boston Dynamics has robots that mimic human movements and are capable of parkour. How likely are you to enjoy working in a team to make robots that do cool things?",
    Type: "AgreeDisagree",
    A: "",
    B: "",
    C: "",
    D: "",
    picture: robo,
  },


  6: {
    Question:
      "Which of the following is the place where you would enjoy yourself the most?",
    Type: "IWouldRather",
    A: "Studying my favorite subjects in the library.",
    B: "Working on an arts & crafts project with my friends.",
    C: "",
    D: "",
    picture: library,
  },

  7: {
    Question: "I would rather:",
    Type: "IWouldRather",
    A: "Solve math problems.",
    B: "Write a story.",
    C: "",
    D: "",
    picture: mathstock2,
  },

  8: {
    Question: "If one boils water it will convert into ____.",
    Type: "Mult",
    A: "Mist",
    B: "Steam",
    C: "Clouds",
    D: "Snow",
    picture: science2,
  },

  9: {
    Question: "If you had to be a teacher, what subject would you teach?",
    Type: "Mult",
    A: "Math",
    B: "Social Studies",
    C: "Computer Science",
    D: "Science",
    picture: goofy,
  },


  10: {
    Question:
      "I like expressing myself through drawing, painting, playing music, or any other related activity.",
    Type: "AgreeDisagree",
    A: "",
    B: "",
    C: "",
    D: "",
    picture: art2,
  },

  11: {
    Question: "I enjoy solving puzzles.",
    Type: "AgreeDisagree",
    A: "",
    B: "",
    C: "",
    D: "",
    picture: puzzle,
  },

  12: {
    Question: "How much time do you see yourself spending in higher education?",
    Type: "Mult",
    A: "No time.",
    B: "2 years.",
    C: "4 years.",
    D: "More than 4 years.",
    picture: grad,
  },

  13: {
    Question: "I would enjoy participating in a math competition.",
    Type: "AgreeDisagree",
    A: "",
    B: "",
    C: "",
    D: "",
    picture: mathstock1,
  },

  14: {
    Question: "Which system of the body controls the senses?",
    Type: "Mult",
    A: "Circulatory system",
    B: "Digestive system",
    C: "Nervous system",
    D: "Skeletal System",
    picture: bio,
  },

  15: {
    Question: "I would rather:",
    Type: "IWouldRather",
    A: "Implement an algorithm",
    B: "Learn about history.",
    C: "",
    D: "",
    picture: mathstock2,
  },

  16: {
    Question: "What is the name of this note (note in image)",
    Type: "Mult",
    A: "Half note",
    B: "Whole note",
    C: "Eighth note",
    D: "Quarter Note",
    picture: halfnote,
  },

  17: {
    Question: "I would rather:",
    Type: "IWouldRather",
    A: "Work on a computer.",
    B: "Work outside.",
    C: "",
    D: "",
    picture: computer,
  },

  18: {
    Question: "“I would be interested in working on a car myself instead of bringing it to a mechanic”. Do you agree with this statement?",
    Type: "AgreeDisagree",
    A: "",
    B: "",
    C: "",
    D: "",
    picture: trade1,
  },

  19: {
    Question: "Fun facts question: In a group of 23 people, there is about a 50% chance that two people share the same birthday. Would you agree that you would enjoy learning the math that led to this answer?",
    Type: "AgreeDisagree",
    A: "Agree",
    B: "Disagree",
    C: "",
    D: "",
    picture: mathstock1,
  },

  20: {
    Question: "There are very reactive metals like lithium and sodium that explode when they make contact with water. Do you agree that this subject would be fun to learn about?",
    Type: "AgreeDisagree",
    A: "Agree",
    B: "Disagree",
    C: "",
    D: "",
    picture: science1,
  },

  21: {
    Question: "You are likely to argue with someone you disagree with using logic.",
    Type: "AgreeDisagree",
    A: "True",
    B: "False",
    C: "",
    D: "",
    picture: social1,
  },

  22: {
    Question: "Which is a quality of abstract paintings?",
    Type: "Mult",
    A: "They are recognizable objects.",
    B: "They are unrecognizable objects.",
    C: "They only have one interpretation.",
    D: "They are the best form of art.",
    picture: art2,
  },

  23: {
    Question: "I would rather: ",
    Type: "IWouldRather",
    A: "Create a game.",
    B: "Build a birdhouse.",
    C: "",
    D: "",
    picture: birdhouse,
  },

  24: {
    Question: "I prefer to spend my time outside instead of inside.",
    Type: "IWouldRather",
    A: "True",
    B: "False",
    C: "",
    D: "",
    picture: trade2,
  },

  25: {
    Question: "I like solving mysteries about the world around me.",
    Type: "IWouldRather",
    A: "True",
    B: "False",
    C: "",
    D: "",
    picture: science2,
  },

  26: {
    Question: "Which of these is not a continent?",
    Type: "Mult",
    A: "Oceania",
    B: "North America",
    C: "Russia",
    D: "Europe",
    picture: worldmap,
  },

  27: {
    Question: "I would enjoy going to a museum of art or music.",
    Type: "IWouldRather",
    A: "True",
    B: "False",
    C: "",
    D: "",
    picture: art1,
  },

  28: {
    Question: "I would enjoy learning about artificial intelligence.",
    Type: "IWouldRather",
    A: "True",
    B: "False",
    C: "",
    D: "",
    picture: techno2,
  },

  29: {
    Question: "Which of these would you be most likely to help out with?",
    Type: "Mult",
    A: "A science research project with classmates",
    B: "Helping build model airplane kits",
    C: "Assisting a friend with housework",
    D: "Painting or sculpting",
    picture: classroom,
  },

  30: {
    Question: "I would enjoy watching a presidential debate.",
    Type: "AgreeDisagree",
    A: "True",
    B: "False",
    C: "",
    D: "",
    picture: debate,
  },

};

export default questions;
