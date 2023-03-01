import { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_SECRET_KEY,
})
const openai = new OpenAIApi(configuration)

export default async function commentsHandler(req: NextApiRequest, res: NextApiResponse) {
  const { commentPosition, issue } = req.body as {
    commentPosition?: string;
    issue?: string;
  };
  const prompt = `Write a 2 minute public comment ${commentPosition} ${issue}`

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: "system", content: "You like to help people generate public comments to read during city council meetings." },
      { role: "user", content: prompt }
    ]
  })

  res.status(200).json({comment: completion.data.choices[0]?.message?.content})
}
