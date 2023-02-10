const axios = require("axios");

const openAIAPI = (req, res) => {
  const prompt = req.params.prompt;
  const model = "text-davinci-002"; // model name

  axios
    .post(
      `https://api.openai.com/v1/engines/${model}/jobs`,
      {
        prompt: prompt,
        max_tokens: 128,
        n: 1,
        temperature: 0.5,
      },
      {
        headers: {
          Authorization: `Bearer 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`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      const generatedText = response.data.choices[0].text;
      res.send(generatedText);
    })
    .catch((error) => {
      console.error(error);
      res.send(error.message);
    });
};
module.exports = openAIAPI;
