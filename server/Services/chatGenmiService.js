
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");
const historyChat = require("../Models/historyChatModel");
const { get } = require("mongoose");
class chatGenmiService {


    static async chat(input) {
        const genAI = new GoogleGenerativeAI(process.env.API_KEY);
        const model = genAI.getGenerativeModel({ model: process.env.MODEL_NAME });

        const chatHistories = await historyChat.find({});
        if (chatHistories) {


            // Convert chat history to the format expected by startChat
            const historyModel = chatHistories.map(chatx => ({
                role: chatx.role,
                parts: chatx.parts
            }));

            const chatNow = model.startChat({
                history: historyModel,
                generationConfig: {
                    maxOutputTokens: 10000,
                },
            });
            // ...

            // Save the user's message to the chat history
            const userHistory = new historyChat({
                role: "user",
                parts: input,
            });

            const result = await chatNow.sendMessage(input);
            if (result && result.response && result.response.candidates && result.response.candidates[0] && result.response.candidates[0].content && result.response.candidates[0].content.parts && result.response.candidates[0].content.parts[0]) {
                const output = result.response.candidates[0].content.parts[0].text;
                const role = result.response.candidates[0].content.role;


                // Save the model's response to the chat history
                const modelHistory = new historyChat({
                    role: role,
                    parts: output,
                });
                await userHistory.save();
                await modelHistory.save();

                return {
                    input: input,
                    output: output,
                };
            } else {
                // Handle the case where the expected data is not present
                return { success: false, message: "Unexpected response from generative model" };
            }

        }
    }
    static async getChatHistoryService() {
        const chatHistories = await historyChat.aggregate([
            // Sắp xếp theo thời gian tạo
            { $sort: { createdAt: -1 } },
            // Nhóm theo thời gian tạo và vai trò
            {
                $group: {
                    _id: {
                        year: { $year: "$createdAt" },
                        month: { $month: "$createdAt" },
                        day: { $dayOfMonth: "$createdAt" },
                        hour: { $hour: "$createdAt" },
                        minute: { $minute: "$createdAt" },
                        second: { $second: "$createdAt" },
                        role: "$role",
                    },
                    chats: { $push: "$$ROOT" },
                },
            },
        ]);
        if (chatHistories) {
            return {
                success: true,
                message: "get chat history success",
                data: chatHistories,
            };
        } else {
            return {
                success: false,
                message: "get chat history failed",
            };
        }
    }
}
module.exports = chatGenmiService;
