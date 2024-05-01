// https://js.langchain.com/docs/use_cases/question_answering/quickstart

import { ChatCohere, CohereEmbeddings } from '@langchain/cohere'
import { StringOutputParser } from '@langchain/core/output_parsers'
import { ChatPromptTemplate } from '@langchain/core/prompts'
import 'cheerio'
import { createStuffDocumentsChain } from 'langchain/chains/combine_documents'
import { CheerioWebBaseLoader } from 'langchain/document_loaders/web/cheerio'
import { pull } from 'langchain/hub'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { MemoryVectorStore } from 'langchain/vectorstores/memory'

const main = async () => {
  const llm = new ChatCohere({
    model: 'command-r',
    apiKey: process.env.COHERE_API_KEY,
  })

  const embeddings = new CohereEmbeddings({
    apiKey: process.env.COHERE_API_KEY,
    batchSize: 48,
  })

  const loader = new CheerioWebBaseLoader(
    'https://lilianweng.github.io/posts/2023-06-23-agent/'
  )

  const docs = await loader.load()

  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  })
  const splits = await textSplitter.splitDocuments(docs)
  const vectorStore = await MemoryVectorStore.fromDocuments(splits, embeddings)

  const retriever = vectorStore.asRetriever()
  const prompt = await pull<ChatPromptTemplate>('rlm/rag-prompt')
  const ragChain = await createStuffDocumentsChain({
    llm,
    prompt,
    outputParser: new StringOutputParser(),
  })

  const retrievedDocs = await retriever.invoke(
    'what is task decomposition'
  )

  const res = await ragChain.invoke({
    question: 'What is task decomposition?',
    context: retrievedDocs,
  })

  console.log(res)
}

main()
