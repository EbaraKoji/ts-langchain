// https://js.langchain.com/docs/integrations/text_embedding/ollama

import { OllamaEmbeddings } from '@langchain/community/embeddings/ollama'

const embeddings = new OllamaEmbeddings({
  baseUrl: 'http://localhost:11434', // default value
  model: 'llama3:latest', // default value
})

const documents = ['Hello World!', 'Bye Bye']

embeddings.embedDocuments(documents).then((documentEmbeddings) => {
  console.log(documentEmbeddings)
})
