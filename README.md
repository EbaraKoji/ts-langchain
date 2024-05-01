# LangChain with TypeScript Example

## Setup

First, install the dependencies.
```
$ npm install
```

Then add Your API keys.
```.env
GOOGLE_GENERATIVE_LANGUAGE_API_KEY=<YOUR_API_KEY>
COHERE_API_KEY=<YOUR_API_KEY>
```

```
$ npm run dev src/gemini.ts
> ts-langchain@1.0.0 dev
> ts-node -r ./src/env.ts $npm_config_file src/ollama.ts
AIMessage {
  lc_serializable: true,
  lc_kwargs: {
    content: 'LangSmith is a natural language processing (NLP) platform that provides a suite of tools and services to ...
...
  tool_calls: [],
  invalid_tool_calls: []
}
```