# Decodo LangChain Tools

![Python Version](https://img.shields.io/badge/node-20.19%2B-blue.svg)
![License](https://img.shields.io/github/license/decodo/Google-News-scraper)

<p align="center">
<a href="https://dashboard.decodo.com/?page=residential-proxies&utm_source=socialorganic&utm_medium=social&utm_campaign=resi_trial_GITHUB"><img src="https://github.com/user-attachments/assets/60bb48bd-8dcc-48b2-82c9-a218e1e4449c"></a>
</p>

[![](https://dcbadge.vercel.app/api/server/Ja8dqKgvbZ)](https://discord.gg/Ja8dqKgvbZ)


## What is LangChain?
[LangChain](https://www.langchain.com/) is a framework for building LLM-powered applications, providing tools to integrate, chain, and coordinate AI components efficiently.

## What are Decodo's LangChain Tools?
Decodo LangChain Tools is a Node.js plugin that integrates Decodo's Scraper API directly into LangChain applications. It allows developers to seamlessly incorporate web scraping capabilities into their LLM workflows, enabling agents to fetch and process real-time web data as part of their reasoning and response generation.

## Features
- **Web scraping**. Scrape any URL and retrieve Markdown content.
- **Google search**. Search Google and retrieve structured results.
- **Amazon search**. Search Amazon and retrieve structured product data.
- **Reddit scraping**. Scrape Reddit posts and subreddits.
- **Full TypeScript support**. Complete type definitions for all parameters.
- **LangChain integration**. Seamless integration with LangChain's Tool system.

## Setup
### Prerequisites
- [Node 20.19+](https://nodejs.org/en/download/current)
- [TypeScript 5.0+](https://www.typescriptlang.org/download/)
- [Decodo's Web Scraping API Advanced plan](https://dashboard.decodo.com/web-scraping-api/scraper?target=google_lens) (free trial available)
  
### Installation
1. **Install the NPM package**. Open the terminal and run the following command:
```
npm install @decodo/langchain-ts
```
2. **Clone the repository**. Make a local copy with:
```
git clone https://github.com/Decodo/decodo-langchain-ts/
```
3. **Install dependancies**. Navigate to the project directory and install:
```
cd decodo-langchain-ts
npm i
```
4. **Get Decodo Web Scraping API credentials**. Get the username and password from the [dashboard](https://dashboard.decodo.com/web-scraping-api/scraper).

![Decodo dashboard](img/auth.png 'Decodo dashboard')

5. **Get an OpenAI API key**. Either get an existing one, or create a new one at the [OpenAI Developer Platform](https://platform.openai.com/api-keys).

6. **Set your credentials**. Make a copy of the `.env.example` file, name it `.env`, then fill both your Decodo Web Scraping API and OpenAI API credentials.

## Usage example
Run any of the sample agents:
```
npm run example:agent-universal
npm run example:agent-google
npm run example:agent-amazon
```
## Output
The output will provide an LLM generated response to the provided query. Here's an example output of running `agent-universal`:
```
According to the Wikipedia "2024–25 NBA season" page, the Oklahoma City Thunder won the 2025 NBA Finals, defeating the Indiana Pacers in seven games. Finals MVP: Shai Gilgeous-Alexander.
```
## Tools
All available tools can be found under `/src/tools`.

## Configuration
All tools accept a `DecodoConfig` object:
```
type DecodoConfig = {
  username: string; // Your Web Advanced product username
  password: string; // Your Web Advanced product password
};
```

## License
All code is released under the [MIT License](https://github.com/Decodo/Decodo/blob/master/LICENSE).
## Read more
[End-to-End AI Workflows with LangChain and Web Scraping API](https://decodo.com/blog/end-to-end-ai-workflows-langchain-web-scraping-api)

[Decodo MCP Server](https://github.com/Decodo/mcp-web-scraper)

## Need help?
If you need any help or get stuck, feel free to contact us using one of the methods provided:
- [Live chat](https://direct.lc.chat/12092754/)
- [Decodo documentation](https://help.decodo.com/)
- [Open an issue](https://github.com/Decodo/decodo-langchain-ts/issues/new)
