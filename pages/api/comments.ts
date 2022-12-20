import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_SECRET_KEY,
});
const openai = new OpenAIApi(configuration);

const commentsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const prompt = `Write a 2 minute public comment ${req.body.commentPosition} ${req.body.issue}`

  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 512,
  })

  res.status(200).json({ comment: completion.data.choices[0].text })
}

export default commentsHandler
