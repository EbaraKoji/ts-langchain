// https://js.langchain.com/docs/integrations/platforms/google
import { ChatGoogleGenerativeAI } from '@langchain/google-genai'

const model = new ChatGoogleGenerativeAI({
  model: 'gemini-pro',
  maxOutputTokens: 2048,
  apiKey: process.env.GOOGLE_GENERATIVE_LANGUAGE_API_KEY,
})

model.invoke('What is LangSmith?').then((res) => {
  console.log(res)
})
