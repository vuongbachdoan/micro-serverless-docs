import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ExternalLink, Mail, User } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { AWSBackground } from "@/components/aws-background"
import { AWSCloud } from "@/components/aws-icons"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-gray-900 dark:via-orange-950 dark:to-amber-950 transition-colors duration-500 relative">
      <AWSBackground />

      {/* Navigation */}
      <nav className="backdrop-blur-md bg-white/70 dark:bg-gray-900/70 sticky top-0 z-50 transition-colors duration-300 relative">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 dark:hover:from-orange-900/20 dark:hover:to-amber-900/20 transition-all duration-300"
            >
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                <AWSCloud className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
                MicroServerless Docs
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button
              asChild
              className="bg-gradient-to-r from-orange-400 to-amber-500 hover:from-orange-500 hover:to-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="https://github.com/vuongbachdoan/micro-serverless" target="_blank">
                <ExternalLink className="w-4 h-4 mr-2" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 text-orange-700 dark:text-orange-300 shadow-sm">
              Documentation
            </Badge>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
              Serverless Microservices Orchestration Framework
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              A production-ready, serverless microservice orchestration framework on AWS, designed to emulate key capabilities of Kubernetes but implemented with AWS-native services.
            </p>
          </div>

          {/* Quick Start */}
          <Card className="mb-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-800 dark:text-gray-100">
                <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center mr-3 text-white text-sm font-bold">
                  ⚡
                </div>
                Quick Start
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Get up and running in under 5 minutes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Prerequisites</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>AWS CLI configured with appropriate permissions</li>
                    <li>Node.js 14+ and npm installed</li>
                    <li>
                      AWS CDK installed:{" "}
                      <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">npm install -g aws-cdk</code>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Installation</h4>
                  <div className="bg-gray-900 dark:bg-black text-orange-400 p-4 rounded-xl font-mono text-sm space-y-1 shadow-inner overflow-x-auto">
                    <div># Clone the repository</div>
                    <div className="break-words">https://github.com/vuongbachdoan/micro-serverless</div>
                    <div></div>
                    <div># Install dependencies</div>
                    <div>npm install</div>
                    <div></div>
                    <div># Bootstrap CDK (first-time only)</div>
                    <div>cdk bootstrap</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Configuration Examples */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Configuration Examples</h2>

            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md">
                <TabsTrigger
                  value="basic"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-100 data-[state=active]:to-amber-100 dark:data-[state=active]:from-orange-900/30 dark:data-[state=active]:to-amber-900/30"
                >
                  Basic Service
                </TabsTrigger>
                <TabsTrigger
                  value="dynamodb"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-100 data-[state=active]:to-cyan-100 dark:data-[state=active]:from-blue-900/30 dark:data-[state=active]:to-cyan-900/30"
                >
                  With DynamoDB
                </TabsTrigger>
                <TabsTrigger
                  value="rds"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-100 data-[state=active]:to-purple-100 dark:data-[state=active]:from-violet-900/30 dark:data-[state=active]:to-purple-900/30"
                >
                  With RDS
                </TabsTrigger>
                <TabsTrigger
                  value="domain"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-100 data-[state=active]:to-yellow-100 dark:data-[state=active]:from-orange-900/30 dark:data-[state=active]:to-yellow-900/30"
                >
                  Custom Domain
                </TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="space-y-4">
                <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-gray-800 dark:text-gray-100">Basic Service Configuration</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      Simple HTTP API with Lambda function
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-xl overflow-x-auto shadow-inner">
                      <pre className="text-sm">
                        <code>{`service:
  name: hello-service
  runtime: nodejs18.x
  handler: index.handler
  memory: 256
  timeout: 30
  
  api:
    path: /hello
    method: GET
    public: true
    cors: true
    
  environment:
    STAGE: dev
    LOG_LEVEL: info`}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="dynamodb" className="space-y-4">
                <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-gray-800 dark:text-gray-100">Service with DynamoDB</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      User service with DynamoDB table and GSI
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-xl overflow-x-auto shadow-inner">
                      <pre className="text-sm">
                        <code>{`service:
  name: user-service
  runtime: nodejs18.x
  handler: index.handler
  
  api:
    path: /users
    method: ANY
    public: true
    
  dynamodb:
    - name: UsersTable
      partitionKey: userId
      sortKey: email
      billingMode: PAY_PER_REQUEST
      ttl: expiresAt
      globalSecondaryIndexes:
        - name: EmailIndex
          partitionKey: email
        - name: StatusIndex
          partitionKey: status
          sortKey: createdAt`}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="rds" className="space-y-4">
                <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-gray-800 dark:text-gray-100">Service with RDS Database</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      Orders service with PostgreSQL database in VPC
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-xl overflow-x-auto shadow-inner">
                      <pre className="text-sm">
                        <code>{`service:
  name: orders-service
  runtime: nodejs18.x
  handler: index.handler
  memory: 512
  timeout: 60
  
  api:
    path: /orders
    method: ANY
    public: false
    
  rds:
    instance: orders-db
    engine: postgres
    secrets:
      - name: DB_CONNECTION
        secretId: orders-service/db-connection
        
  vpc:
    id: vpc-12345
    subnets:
      - subnet-12345
      - subnet-67890
    securityGroups:
      - sg-12345`}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="domain" className="space-y-4">
                <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-gray-800 dark:text-gray-100">Service with Custom Domain</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      API service with custom domain and HTTPS
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-xl overflow-x-auto shadow-inner">
                      <pre className="text-sm">
                        <code>{`service:
  name: api-service
  runtime: nodejs18.x
  handler: index.handler
  
  api:
    path: /api
    method: ANY
    public: true
    domain:
      name: api.example.com
      certificateArn: arn:aws:acm:us-east-1:123456789012:certificate/abcdef-1234-5678-abcd-123456789012
      hostedZoneId: Z1234567890ABCDEFGHIJK`}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Configuration Reference */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Configuration Reference</h2>

            <div className="grid gap-6">
              <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-800 dark:text-gray-100">Provider Configuration</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    The provider.yaml file defines AWS-specific settings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-xl overflow-x-auto shadow-inner mb-4">
                    <pre className="text-sm">
                      <code>{`provider:
  name: aws                # Cloud provider (currently only 'aws' is supported)
  region: us-east-1        # AWS region to deploy to
  sdkVersion: latest       # AWS SDK version to use
  tags:                    # Tags to apply to all resources
    Project: MyProject
    Environment: dev
    Owner: TeamName
  stackName: my-project    # Base name for CloudFormation stacks`}</code>
                    </pre>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="text-left p-2 font-semibold text-gray-800 dark:text-gray-100">Parameter</th>
                          <th className="text-left p-2 font-semibold text-gray-800 dark:text-gray-100">Description</th>
                          <th className="text-left p-2 font-semibold text-gray-800 dark:text-gray-100">Required</th>
                          <th className="text-left p-2 font-semibold text-gray-800 dark:text-gray-100">Values</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600 dark:text-gray-300">
                        <tr className="border-b border-gray-100 dark:border-gray-800">
                          <td className="p-2 font-mono">name</td>
                          <td className="p-2">Cloud provider name</td>
                          <td className="p-2">Yes</td>
                          <td className="p-2">aws</td>
                        </tr>
                        <tr className="border-b border-gray-100 dark:border-gray-800">
                          <td className="p-2 font-mono">region</td>
                          <td className="p-2">AWS region to deploy to</td>
                          <td className="p-2">Yes</td>
                          <td className="p-2">us-east-1, ap-southeast-1, etc.</td>
                        </tr>
                        <tr className="border-b border-gray-100 dark:border-gray-800">
                          <td className="p-2 font-mono">sdkVersion</td>
                          <td className="p-2">AWS SDK version to use</td>
                          <td className="p-2">Yes</td>
                          <td className="p-2">latest, specific version</td>
                        </tr>
                        <tr className="border-b border-gray-100 dark:border-gray-800">
                          <td className="p-2 font-mono">tags</td>
                          <td className="p-2">Tags to apply to all resources</td>
                          <td className="p-2">Yes</td>
                          <td className="p-2">Key-value pairs</td>
                        </tr>
                        <tr className="border-b border-gray-100 dark:border-gray-800">
                          <td className="p-2 font-mono">stackName</td>
                          <td className="p-2">Base name for CloudFormation stacks</td>
                          <td className="p-2">Yes</td>
                          <td className="p-2">Any valid stack name</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-800 dark:text-gray-100">Service Configuration Parameters</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="text-left p-2 font-semibold text-gray-800 dark:text-gray-100">Parameter</th>
                          <th className="text-left p-2 font-semibold text-gray-800 dark:text-gray-100">Description</th>
                          <th className="text-left p-2 font-semibold text-gray-800 dark:text-gray-100">Required</th>
                          <th className="text-left p-2 font-semibold text-gray-800 dark:text-gray-100">Default</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600 dark:text-gray-300">
                        <tr className="border-b border-gray-100 dark:border-gray-800">
                          <td className="p-2 font-mono">name</td>
                          <td className="p-2">Service name (must be unique)</td>
                          <td className="p-2">Yes</td>
                          <td className="p-2">-</td>
                        </tr>
                        <tr className="border-b border-gray-100 dark:border-gray-800">
                          <td className="p-2 font-mono">runtime</td>
                          <td className="p-2">Lambda runtime (nodejs18.x, python3.12, etc.)</td>
                          <td className="p-2">Yes</td>
                          <td className="p-2">-</td>
                        </tr>
                        <tr className="border-b border-gray-100 dark:border-gray-800">
                          <td className="p-2 font-mono">handler</td>
                          <td className="p-2">Path to the handler function</td>
                          <td className="p-2">Yes</td>
                          <td className="p-2">-</td>
                        </tr>
                        <tr className="border-b border-gray-100 dark:border-gray-800">
                          <td className="p-2 font-mono">memory</td>
                          <td className="p-2">Memory allocation in MB</td>
                          <td className="p-2">No</td>
                          <td className="p-2">128</td>
                        </tr>
                        <tr className="border-b border-gray-100 dark:border-gray-800">
                          <td className="p-2 font-mono">timeout</td>
                          <td className="p-2">Function timeout in seconds</td>
                          <td className="p-2">No</td>
                          <td className="p-2">30</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Project Structure */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Project Structure</h2>

            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-gray-100">Directory Organization</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  How the framework code is organized
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-xl overflow-x-auto shadow-inner">
                  <pre className="text-sm">
                    <code>{`serverless-microservices/
├── bin/                    # CDK app entry point and deployment scripts
│   ├── deploy.ts           # Main deployment script
│   └── validate.ts         # Configuration validator
├── config/                 # Service configuration YAML files
│   ├── api-service.yaml    # API service configuration
│   ├── hello-service.yaml  # Hello service configuration
│   └── user-service.yaml   # User service configuration
├── docs/                   # Documentation files
│   └── architecture.png    # Architecture diagram
├── ingress/                # Ingress configuration YAML files
│   └── api-ingress.yaml    # API ingress configuration
├── lib/                    # Core framework code
│   ├── config/             # Configuration parsing and validation
│   ├── constructs/         # CDK constructs for AWS resources
│   └── stacks/             # CDK stacks for service deployment
├── scripts/                # Utility scripts
│   ├── build-lambdas.js    # Lambda build script
│   ├── cleanup-resources.js # Resource cleanup script
│   └── map-custom-domain.js # Custom domain mapping script
├── src/                    # Microservice implementation code
│   ├── api-service/        # API service code
│   ├── hello-service/      # Hello service code
│   └── user-service/       # User service code
├── templates/              # Template files for new services
│   ├── ingress-template.yaml # Ingress template
│   ├── provider-template.yaml # Provider template
│   └── service-template.yaml # Service template
├── cdk.json                # CDK configuration
├── package.json            # Node.js dependencies
├── provider.yaml           # Provider configuration (created from template)
└── README.md               # Project documentation`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Deployment */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Deployment</h2>

            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-gray-100">Deploy Your Services</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Simple commands to deploy your microservices
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Deploy all services</h4>
                  <div className="bg-gray-900 dark:bg-black text-orange-400 p-3 rounded-xl font-mono text-sm shadow-inner">
                    npm run deploy
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Deploy specific service</h4>
                  <div className="bg-gray-900 dark:bg-black text-orange-400 p-3 rounded-xl font-mono text-sm shadow-inner">
                    npm run deploy -- --service=hello-service
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Deploy specific ingress</h4>
                  <div className="bg-gray-900 dark:bg-black text-orange-400 p-3 rounded-xl font-mono text-sm shadow-inner">
                    npm run deploy -- --ingress=api-ingress
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Clean up resources and destroy stacks</h4>
                  <div className="bg-gray-900 dark:bg-black text-orange-400 p-3 rounded-xl font-mono text-sm shadow-inner">
                    npm run destroy
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Architecture */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Architecture Overview</h2>

            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-gray-100">Key Components</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  This framework emulates key capabilities of Kubernetes but implemented with AWS-native services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  The framework allows you to define and deploy microservices using AWS Lambda functions, with automatic exposure via API Gateway and custom domain. It uses a configuration-as-code approach similar to Kubernetes manifests, but leverages AWS-native services for implementation.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>Lambda Functions:</strong> Core compute units (replacing Kubernetes pods)
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>API Gateway:</strong> Service exposure and routing
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>DynamoDB/RDS/Aurora:</strong> Data persistence options
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-pink-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>Secrets Manager & KMS:</strong> Secure secrets management
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>Route 53 & ACM:</strong> Custom domain and HTTPS support
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>CloudWatch:</strong> Logging and monitoring
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>S3:</strong> Object storage
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>IAM:</strong> Least-privilege permissions
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Troubleshooting */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Troubleshooting</h2>

            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-lg mb-6">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-gray-100">Custom Domain Issues</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Common issues with custom domain resolution
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">DNS Propagation</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    DNS changes can take up to 48 hours to fully propagate globally. Try accessing your API using the direct API Gateway URL while waiting.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Verify DNS Records</h4>
                  <div className="bg-gray-900 dark:bg-black text-orange-400 p-3 rounded-xl font-mono text-sm shadow-inner">
                    aws route53 list-resource-record-sets --hosted-zone-id YOUR_HOSTED_ZONE_ID --query "ResourceRecordSets[?Name=='sample.domain.com.']"
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Check API Gateway Custom Domain</h4>
                  <div className="bg-gray-900 dark:bg-black text-orange-400 p-3 rounded-xl font-mono text-sm shadow-inner">
                    aws apigateway get-domain-name --domain-name sample.domain.com
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Verify Base Path Mappings</h4>
                  <div className="bg-gray-900 dark:bg-black text-orange-400 p-3 rounded-xl font-mono text-sm shadow-inner">
                    aws apigateway get-base-path-mappings --domain-name sample.domain.com
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-gray-100">Stack Name Issues</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Troubleshooting CloudFormation stack issues
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Check Stack Naming</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Remember that your stacks are prefixed with the stackName from your provider.yaml file. For example, if your stackName is my-project, your ingress stack would be named my-project-api-ingress-ingress.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">List All Stacks</h4>
                  <div className="bg-gray-900 dark:bg-black text-orange-400 p-3 rounded-xl font-mono text-sm shadow-inner">
                    aws cloudformation list-stacks --stack-status-filter CREATE_COMPLETE UPDATE_COMPLETE --query "StackSummaries[].StackName" --output text
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Author Information */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">About the Author</h2>

            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-xl">
              <CardHeader className="bg-gradient-to-r from-orange-400 to-amber-500 text-white rounded-t-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white">Bạch Doãn Vương</CardTitle>
                    <CardDescription className="text-white/90">
                      AWS Community Builder | Cloud Engineer | AWS & GCP Certified
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-100">Professional Certifications</h4>
                    <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <div>• AWS Solution Architect Professional</div>
                      <div>• AWS Security Specialty</div>
                      <div>• AWS Developer Associate</div>
                      <div>• GCP Professional Cloud Security Engineer</div>
                      <div>• GCP Professional Cloud Architect</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-100">Contact Information</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <Link
                          href="mailto:vuongbachdoan@gmail.com"
                          className="text-orange-600 dark:text-orange-400 hover:underline text-sm"
                        >
                          vuongbachdoan@gmail.com
                        </Link>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ExternalLink className="w-4 h-4 text-gray-500" />
                        <Link
                          href="https://github.com/vuongbachdoan"
                          target="_blank"
                          className="text-amber-600 dark:text-amber-400 hover:underline text-sm"
                        >
                          github.com/vuongbachdoan
                        </Link>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ExternalLink className="w-4 h-4 text-gray-500" />
                        <Link
                          href="https://www.linkedin.com/in/vuongbd2007/"
                          target="_blank"
                          className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                        >
                          LinkedIn Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Security Best Practices */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Security Best Practices</h2>

            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-gray-100">Built-in Security Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    All secrets are stored in AWS Secrets Manager and encrypted with KMS
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Each service has its own IAM role with least-privilege permissions
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    API endpoints can be marked as public or private
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    All communications use HTTPS
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Next Steps */}
          <Card className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 backdrop-blur-md shadow-xl">
            <CardHeader>
              <CardTitle className="text-gray-800 dark:text-gray-100">Ready to Get Started?</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Clone the repository and deploy your first serverless microservice in minutes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-orange-400 to-amber-500 hover:from-orange-500 hover:to-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="https://github.com/vuongbachdoan/micro-serverless" target="_blank">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="bg-white/50 dark:bg-gray-700/50 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 dark:hover:from-orange-900/20 dark:hover:to-amber-900/20 backdrop-blur-sm transition-all duration-300"
                >
                  <Link href="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
