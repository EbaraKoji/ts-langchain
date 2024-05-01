// https://js.langchain.com/docs/integrations/text_embedding/cohere

import { ChatCohere } from '@langchain/cohere'

const model = new ChatCohere({
  model: 'command-r',
  apiKey: process.env.COHERE_API_KEY,
})

model.invoke('What is LangSmith?').then((res) => {
  console.log(res)
})
