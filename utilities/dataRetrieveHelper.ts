import enQuestions from "../data/languages/en/100q.json";
import esQuestions from "../data/languages/es/100q.json";

interface Question {
  question: string;
  answers: string[];
}

export const getQuestionsByLanguage = (language: string): Question[] => {
  switch (language) {
    case "en":
      return enQuestions;
    case "es":
      return esQuestions;
    default:
      return [];
  }
};
