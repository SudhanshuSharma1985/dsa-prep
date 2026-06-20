Demo Transcript
Opening
“Today I’m demoing a repo-local Codex skill called optum-helper-docs. The goal of this skill is simple but powerful: when a user asks an Optum or HCP-specific question, Codex does not answer from memory. It reads the local skill instructions, uses authenticated HCP Docs access, retrieves the relevant documentation, and then gives a practical, source-grounded answer.”
Explaining SKILL.md
“SKILL.md is the operating manual for the skill. It defines when the skill should trigger, what sources it trusts, and how Codex should behave.
The important design choice here is that the bundled reference file is only used for broad category awareness: HCP Docs includes product docs, Console getting-started material, public cloud guidance, and engineering best practices. But for specific implementation questions, the skill requires live HCP search through the helper script.
It also has a security rule: authenticated access must use HCP_COOKIE through the environment, and the cookie must never be printed, copied into docs, or exposed in answers.”
Explaining pull_hcp_links.py
“pull_hcp_links.py is the live retrieval engine. It does three main things.
First, it reads the HCP cookie from the HCP_COOKIE environment variable. Second, it calls the HCP Docs search API for a user query. Third, for each result, it fetches the actual page and strips out navigation, scripts, headers, and footers so Codex gets clean documentation text.
So the skill is not just returning links. It retrieves the matching docs and gives Codex enough page content to summarize accurately.”
Explaining requirements.txt
“requirements.txt lists the small dependency set needed for the helper workflow: requests for HTTP calls, beautifulsoup4 for parsing HCP pages, and rapidfuzz, likely intended for fuzzy matching or ranking enhancements. The current helper mainly uses requests and BeautifulSoup.”
How The Skill Runs
“When a user asks a specific HCP question, Codex follows this flow: read the skill, read the category reference, classify the question as specific, load HCP_COOKIE securely from the repo, run the helper script, fetch relevant docs, and answer with links plus practical guidance.”
Demo 1
User asks:
What are the prerequisites to register AI development in UAIS?

Presenter says:
“Here the skill identifies this as a specific UAIS workflow question, so it fetches the HCP doc Register Your AI Development with United AI Studio.”
Codex answer:
“To register AI development in UAIS, you need an Account, formerly AIDE ID, in Account Manager to fund the AI work. That account should be connected to finance details such as GL code and department.
Next, the Account Owner must identify or create an HCP Standard Resource Group tied to that same funding account. Users who need to create UAIS projects must be added to that resource group with Contributor or Admin access; View access is not enough.
You also need a project-level secure group for access control. Then create the UAIS project and complete the Responsible AI form. HCP notes that registering AI development work and filling the RAI form is mandatory.
For AI hosted outside UAIS, you still register the project and complete the RAI form, but you do not need to request a UAIS cloud subscription unless the AI will be developed inside UAIS.”
Source: Register Your AI Development with United AI Studio
Demo 2
User asks:
How do I add and consume Azure AI Content Safety in UAIS, and what auth pattern should I use?

Presenter says:
“This question touches two docs, so the skill combines them: one doc explains how to add Azure AI Services to a UAIS project, and the other explains how to consume Azure AI Content Safety.”
Codex answer:
“To add Azure AI Content Safety, first make sure you have a UAIS project and an active Azure Machine Learning workspace. Azure AI Services can only be added after an Azure workspace is added to the project.
In the UAIS project, go to the Services page, click Add Service, select Azure AI Content Safety, fill in the required details, and create the service. If the service will be consumed from outside the UAIS Azure subscription, provide the correct service principal object ID. HCP says Azure AI Content Safety is supported and provisions Standard Tier by default.
Once provisioning completes, usually within about four hours, use the Manage button to find the endpoint.
For auth, the preferred pattern inside UAIS AML compute is Managed Identity, using DEFAULT_IDENTITY_CLIENT_ID. Outside UAIS, use an App Registration with ClientSecretCredential, then save the service principal object ID in the UAIS service configuration.
HCP also notes that Content Safety Studio access is disabled for security reasons, so the service should be consumed programmatically. The azure-ai-contentsafety package should be installed through Repo1d Artifactory. HCP guidance says to use the documented identity-based auth patterns instead of key-based authentication.”
Sources: How to add Azure AI Services to a Project, Consume AI Content Safety
Closing
“The impressive part is not just that Codex answers the question. It follows a controlled retrieval workflow: local skill instructions, authenticated HCP Docs search, safe cookie handling, page-content extraction, and then a concise implementation-ready answer with source links.”
