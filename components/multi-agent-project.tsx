import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MultiAgentProject() {
  return (
    <section id="multi-agent-project" className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              AI-Multi-Agent System for Procurement
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              An advanced AI system using multiple specialized agents to automate procurement processes
            </p>
          </div>

          <div className="w-full max-w-4xl">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="architecture">Architecture</TabsTrigger>
                <TabsTrigger value="agents">Agents</TabsTrigger>
                <TabsTrigger value="tech">Technologies</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Overview</CardTitle>
                    <CardDescription>A multi-agent system designed to automate procurement processes</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video overflow-hidden rounded-lg mb-4">
                      <img
                        alt="Multi-Agent System Architecture"
                        className="object-cover w-full h-full"
                        src="https://images.unsplash.com/photo-1655720828018-edd2daec9349?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      />
                    </div>
                    <p>
                      This project implements a sophisticated multi-agent system for procurement automation. The system
                      leverages multiple specialized AI agents that work together to search for products, extract
                      relevant information, and generate comprehensive procurement reports.
                    </p>
                    <p>
                      Each agent is designed with a specific role and goal, allowing them to collaborate effectively to
                      complete complex procurement tasks that would typically require significant human effort and
                      expertise.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="architecture" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>System Architecture</CardTitle>
                    <CardDescription>How the different agents interact and collaborate</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border p-4 bg-muted/20">
                      <pre className="text-sm overflow-auto">
                        {`
Search Queries Agent → Search Engine Tool → Product Extraction Agent → Report Author Agent
                        `}
                      </pre>
                    </div>
                    <p>
                      The system follows a pipeline architecture where each agent performs a specialized task and passes
                      the results to the next agent:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        The Search Queries Recommendation Agent generates optimal search queries based on procurement
                        requirements
                      </li>
                      <li>The Search Engine Tool uses these queries to find relevant product pages</li>
                      <li>
                        The Product Extraction Agent analyzes the search results and extracts structured product
                        information
                      </li>
                      <li>
                        The Procurement Report Author Agent compiles all the information into a professional HTML report
                      </li>
                    </ol>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="agents" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Agent Specifications</CardTitle>
                    <CardDescription>Details of each specialized agent in the system</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Search Queries Recommendation Agent</h3>
                      <div className="rounded-lg border p-4 bg-muted/20">
                        <pre className="text-sm overflow-auto">
                          {`class SuggestedSearchQueries(BaseModel):
  queries: List[str] = Field(..., 
                             title="Suggested search queries to be passed to the search engine",
                             min_items=1, max_items=no_keywords)

search_queries_recommendation_agent = Agent(
  role="Search Queries Recommendation Agent",
  goal="..."
)`}
                        </pre>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Generates optimized search queries based on procurement requirements to maximize relevant
                        results.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Search Engine Tool</h3>
                      <div className="rounded-lg border p-4 bg-muted/20">
                        <pre className="text-sm overflow-auto">
                          {`class SignleSearchResult(BaseModel):
  title: str
  url: str = Field(..., title="the page url")
  content: str
  score: float
  search_query: str

class AllSearchResults(BaseModel):
  results: List[SignleSearchResult]

@tool
def search_engine_tool(query: str):
  """Useful for search-based queries. Use this to find current information about any query related pages using a search engine"""
  return search_client.search(query)`}
                        </pre>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Executes search queries and retrieves relevant results from the web.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Product Extraction Agent</h3>
                      <div className="rounded-lg border p-4 bg-muted/20">
                        <pre className="text-sm overflow-auto">
                          {`class ProductSpec(BaseModel):
  specification_name: str
  specification_value: str

class SingleExtractedProduct(BaseModel):
  page_url: str = Field(..., title="The original url of the product page")
  product_title: str = Field(..., title="The title of the product")
  product_image_url: str = Field(..., title="The url of the product image")`}
                        </pre>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Analyzes search results to extract structured product information including specifications,
                        pricing, and images.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Procurement Report Author Agent</h3>
                      <div className="rounded-lg border p-4 bg-muted/20">
                        <pre className="text-sm overflow-auto">
                          {`procurement_report_author_agent = Agent(
  role="Procurement Report Author Agent",
  goal="To generate a professional HTML page for the procurement report",
  backstory="The agent is designed to assist in generating a professional HTML page for the procurement report after looking into a list of products.",
  llm=basic_llm,
  verbose=True,
)

procurement_report_author_task = Task()`}
                        </pre>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Compiles all extracted product information into a comprehensive, professional HTML procurement
                        report.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tech" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Technologies Used</CardTitle>
                    <CardDescription>Key technologies and frameworks powering the system</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h3 className="font-medium mb-2">CrewAI</h3>
                        <p className="text-sm text-muted-foreground">
                          Framework for orchestrating multiple AI agents to work together on complex tasks
                        </p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h3 className="font-medium mb-2">Pydantic</h3>
                        <p className="text-sm text-muted-foreground">
                          Data validation and settings management using Python type annotations
                        </p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h3 className="font-medium mb-2">LangChain</h3>
                        <p className="text-sm text-muted-foreground">
                          Framework for developing applications powered by language models
                        </p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h3 className="font-medium mb-2">Large Language Models</h3>
                        <p className="text-sm text-muted-foreground">
                          Advanced AI models that power the agents' reasoning and text generation capabilities
                        </p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h3 className="font-medium mb-2">Python</h3>
                        <p className="text-sm text-muted-foreground">
                          Primary programming language used for implementing the system
                        </p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h3 className="font-medium mb-2">Web Scraping</h3>
                        <p className="text-sm text-muted-foreground">
                          Techniques for extracting structured data from web pages
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

