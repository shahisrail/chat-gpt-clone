// // import { Configuration, OpenAIApi } from "openai";
// // // const { Configuration, OpenAIApi } = require("openai");
// // const configuration = new Configuration({
// //   apiKey: "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",
// // });
// // const openai = new OpenAIApi(configuration);

// // export async function sendMessageToOpenAI(message) {
// //   const response = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: message,
//     temperature: 0.7,
//     max_tokens: 250,
//     top_p: 1,
//     frequency_penalty: 0,
//     presence_penalty: 0,
// //   });
// //   return response.data.choices[0].text;
// // }
// import OpenAI from "openai";

// const openai = new OpenAI();

// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "user", content: "Hello!" }],
//     model: "gpt-3.5-turbo",
//     logprobs: true,
//     top_logprobs: 2,
//   });

//   console.log(completion.choices[0]);
// }

// main();