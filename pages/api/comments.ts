import { Configuration, OpenAIApi } from 'openai'
import fetchAdapter from '@vespaiach/axios-fetch-adapter'

export const config = {
  runtime: 'edge',
}

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_SECRET_KEY,
  baseOptions: {
    adapter: fetchAdapter
  }
})
const openai = new OpenAIApi(configuration)

const commentsHandler = async (req: Request) => {
  const { commentPosition, issue } = (await req.json()) as {
    commentPosition?: string;
    issue?: string;
  };
  const prompt = `Write a 2 minute public comment ${commentPosition} ${issue}`

  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 512
  })

  return new Response(
    JSON.stringify({
      comment: completion.data.choices[0].text
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    }
  )
}

export default commentsHandler
