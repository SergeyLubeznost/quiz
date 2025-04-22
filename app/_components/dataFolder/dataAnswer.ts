interface Answer {
    questionNumber: number;
    answer: string;
}

interface AnswersScale {
    title: string;
    answers: Answer[];
}

const scales: AnswersScale[] = [
    {
        title: "человек – природа",
        answers: [
            { questionNumber: 1, answer: "а" },
            { questionNumber: 3, answer: "б" },
            { questionNumber: 6, answer: "а" },
            { questionNumber: 10, answer: "а" },
            { questionNumber: 11, answer: "а" },
            { questionNumber: 13, answer: "б" },
            { questionNumber: 16, answer: "а" },
            { questionNumber: 20, answer: "а" },
        ]
    },
    {
        title: "человек – техника",
        answers: [
            { questionNumber: 1, answer: "б" },
            { questionNumber: 4, answer: "а" },
            { questionNumber: 7, answer: "б" },
            { questionNumber: 9, answer: "а" },
            { questionNumber: 11, answer: "б" },
            { questionNumber: 14, answer: "а" },
            { questionNumber: 17, answer: "б" },
            { questionNumber: 19, answer: "а" },
        ]
    },
    {
        title: "человек – человек",
        answers: [
            { questionNumber: 2, answer: "а" },
            { questionNumber: 4, answer: "б" },
            { questionNumber: 6, answer: "б" },
            { questionNumber: 8, answer: "а" },
            { questionNumber: 12, answer: "а" },
            { questionNumber: 14, answer: "б" },
            { questionNumber: 16, answer: "б" },
            { questionNumber: 18, answer: "а" },
        ]
    },
    {
        title: "человек – знаковая система",
        answers: [
         
            { questionNumber: 2, answer: "б" },
            { questionNumber: 5, answer: "а" },
            { questionNumber: 9, answer: "б" },
            { questionNumber: 10, answer: "б" },
            { questionNumber: 12, answer: "б" },
            { questionNumber: 15, answer: "а" },
            { questionNumber: 19, answer: "б" },
            { questionNumber: 20, answer: "б" },
        ]
    },
    {
        title: "человек – искусство",
        answers: [
            { questionNumber: 2, answer: "б" },
            { questionNumber: 5, answer: "б" },
            { questionNumber: 7, answer: "а" },
            { questionNumber: 8, answer: "б" },
            { questionNumber: 13, answer: "а" },
            { questionNumber: 15, answer: "б" },
            { questionNumber: 17, answer: "а" },
            { questionNumber: 18, answer: "б" },
        ]
    },
];

export default scales;