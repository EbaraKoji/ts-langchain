// https://js.langchain.com/docs/get_started/quickstart
import { ChatOllama } from '@langchain/community/chat_models/ollama'

const chatModel = new ChatOllama({
  baseUrl: 'http://localhost:11434', // Default value
  model: 'llama3:latest',
})

chatModel.invoke('What is LangSmith?').then((res) => {
  console.log(res)
})