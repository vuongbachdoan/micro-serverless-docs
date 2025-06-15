import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ExternalLink, Mail, User } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { AWSBackground } from "@/components/aws-background"
import { AWSCloud } from "@/components/aws-icons"
import { CodeBlock } from "@/components/code-block"
import { CopyButton } from "@/components/copy-button"

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
              <div className="w-8 h-8 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                <img src="/logo.png" alt="MicroServerless Logo" className="w-full h-full object-cover" />
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
                      <div className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded relative inline-block">
                        <code>npm install -g aws-cdk</code>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Installation</h4>
                  <div className="bg-gray-900 dark:bg-black text-orange-400 p-4 rounded-xl font-mono text-sm space-y-1 shadow-inner overflow-x-auto relative">
                    <div># Clone the repository</div>
                    <div className="break-words">https://github.com/vuongbachdoan/micro-serverless</div>
                    <div></div>
                    <div># Install dependencies</div>
                    <div>npm install</div>
                    <div></div>
                    <div># Bootstrap CDK (first-time only)</div>
                    <div>cdk bootstrap</div>
                    <CopyButton text="# Clone the repository
https://github.com/vuongbachdoan/micro-serverless

# Install dependencies
npm install

# Bootstrap CDK (first-time only)
cdk bootstrap" />
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
                    <div className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-xl overflow-x-auto shadow-inner relative">
                      <pre className="text-sm">
                        <code>{`service:
  name: hello-service
  runtime: nodejs18.x
  handler: index.handler
  memory: 256
  timeout: 30
  
  # API Gateway configuration
  api:
    path: /hello
    method: GET
    public: true
    cors: true
    
  # Environment variables
  environment:
    STAGE: dev
    LOG_LEVEL: info
    
  # Secrets (from AWS Secrets Manager)
  secrets:
    - name: API_KEY
      secretId: hello-service/api-key`}</code>
                      </pre>
                      <CopyButton text={`service:
  name: hello-service
  runtime: nodejs18.x
  handler: index.handler
  memory: 256
  timeout: 30
  
  # API Gateway configuration
  api:
    path: /hello
    method: GET
    public: true
    cors: true
    
  # Environment variables
  environment:
    STAGE: dev
    LOG_LEVEL: info
    
  # Secrets (from AWS Secrets Manager)
  secrets:
    - name: API_KEY
      secretId: hello-service/api-key`} />
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
                    <div className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-xl overflow-x-auto shadow-inner relative">
                      <pre className="text-sm">
                        <code>{`service:
  name: user-service
  runtime: nodejs18.x
  handler: index.handler
  memory: 512
  timeout: 60
  
  api:
    path: /users
    method: ANY
    public: true
    cors: true
    
  environment:
    STAGE: dev
    
  # DynamoDB table configuration
  dynamodb:
    - name: UsersTableSample
      partitionKey: userId
      sortKey: email
      billingMode: PAY_PER_REQUEST
      globalSecondaryIndexes:
        - name: EmailIndex
          partitionKey: email
      
  # Secrets
  secrets:
    - name: DB_CREDENTIALS
      secretId: user-service/db-credentials`}</code>
                      </pre>
                      <CopyButton text={`service:
  name: user-service
  runtime: nodejs18.x
  handler: index.handler
  memory: 512
  timeout: 60
  
  api:
    path: /users
    method: ANY
    public: true
    cors: true
    
  environment:
    STAGE: dev
    
  # DynamoDB table configuration
  dynamodb:
    - name: UsersTableSample
      partitionKey: userId
      sortKey: email
      billingMode: PAY_PER_REQUEST
      globalSecondaryIndexes:
        - name: EmailIndex
          partitionKey: email
      
  # Secrets
  secrets:
    - name: DB_CREDENTIALS
      secretId: user-service/db-credentials`} />
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
                    <div className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-xl overflow-x-auto shadow-inner relative">
                      <pre className="text-sm">
                        <code>{`
service:
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
        secretId: orders-service/db-connection`}</code>
                      </pre>
                      <CopyButton text={`service:
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
        secretId: orders-service/db-connection`} />
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
                    <div className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-xl overflow-x-auto shadow-inner relative">
                      <pre className="text-sm">
                        <code>{`ingress:
  name: api-ingress
  annotations:
    route53.hostedZoneId: Z00976892A2KHU6N0F7PT
    domain.existing: "true"  
  tls:
    - hosts:
        - sample.domain.com
      certificateArn: arn:aws:acm:us-east-1:123456789012:certificate/abcdef
  rules:
    - host: sample.domain.com
      http:
        paths:
          - path: /hello
            pathType: Prefix
            backend:
              service:
                name: hello-service
          - path: /users
            pathType: Prefix
            backend:
              service:
                name: user-service
          - path: /orders
            pathType: Prefix
            backend:
              service:
                name: orders-service`}</code>
                      </pre>
                      <CopyButton text={`ingress:
  name: api-ingress
  annotations:
    route53.hostedZoneId: Z00976892A2KHU6N0F7PT
    domain.existing: "true"  
  tls:
    - hosts:
        - sample.domain.com
      certificateArn: arn:aws:acm:us-east-1:123456789012:certificate/abcdef
  rules:
    - host: sample.domain.com
      http:
        paths:
          - path: /hello
            pathType: Prefix
            backend:
              service:
                name: hello-service
          - path: /users
            pathType: Prefix
            backend:
              service:
                name: user-service
          - path: /orders
            pathType: Prefix
            backend:
              service:
                name: orders-service`} />
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
                  <div className="bg-gray-900 dark:bg-black text-gray-100 p-4 rounded-xl overflow-x-auto shadow-inner mb-4 relative">
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
                    <CopyButton text={`provider:
  name: aws                # Cloud provider (currently only 'aws' is supported)
  region: us-east-1        # AWS region to deploy to
  sdkVersion: latest       # AWS SDK version to use
  tags:                    # Tags to apply to all resources
    Project: MyProject
    Environment: dev
    Owner: TeamName
  stackName: my-project    # Base name for CloudFormation stacks`} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}