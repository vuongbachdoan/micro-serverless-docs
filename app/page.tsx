import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Lock, GitBranch } from "lucide-react"
import { Award, Mail, MapPin, User } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { AWSBackground } from "@/components/aws-background"
import {
  AWSLambda,
  AWSAPIGateway,
  AWSDynamoDB,
  AWSRDS,
  AWSS3,
  AWSSecretsManager,
  AWSRoute53,
  AWSCloudWatch,
  AWSKMS,
  AWSCloud,
} from "@/components/aws-icons"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-gray-900 dark:via-orange-950 dark:to-amber-950 transition-colors duration-500 relative">
      <AWSBackground />

      {/* Navigation */}
      <nav className="backdrop-blur-md bg-white/70 dark:bg-gray-900/70 sticky top-0 z-50 transition-colors duration-300 relative">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
              <AWSCloud className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
              MicroServerless
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/docs"
              className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
            >
              Documentation
            </Link>
            <Link
              href="#features"
              className="text-gray-600 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#getting-started"
              className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
            >
              Get Started
            </Link>
            <ThemeToggle />
            <Button
              asChild
              className="bg-gradient-to-r from-orange-400 to-amber-500 hover:from-orange-500 hover:to-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="https://github.com/vuongbachdoan/micro-serverless" target="_blank">
                <GitBranch className="w-4 h-4 mr-2" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/10 dark:to-amber-900/10 text-orange-700 dark:text-black shadow-sm">
            Open Source • Production Ready
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
            Serverless Microservices
            <br />
            Made Simple
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Deploy and orchestrate microservices on AWS with zero infrastructure management. Configuration-as-code
            approach using AWS Lambda, API Gateway, and native AWS services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-orange-400 to-amber-500 hover:from-orange-500 hover:to-amber-600 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/docs">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6 bg-white/50 dark:bg-gray-800/50 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 dark:hover:from-orange-900/20 dark:hover:to-amber-900/20 backdrop-blur-sm transition-all duration-300"
            >
              <Link href="#demo">View Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Simple Configuration, Powerful Results
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Define your microservices with familiar YAML syntax
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black text-white rounded-t-xl">
                <CardTitle className="text-sm font-mono">service.yaml</CardTitle>
              </CardHeader>
              <CardContent className="p-6 bg-gradient-to-br from-gray-50/80 to-orange-50/80 dark:from-gray-800/80 dark:to-orange-900/20 rounded-b-xl">
                <pre className="text-sm overflow-x-auto">
                  <code className="language-yaml text-gray-700 dark:text-gray-200">{`service:
  name: user-service
  runtime: nodejs18.x
  handler: index.handler
  memory: 256
  
  api:
    path: /users
    method: ANY
    public: true
    cors: true
    
  dynamodb:
    - name: UsersTable
      partitionKey: userId
      billingMode: PAY_PER_REQUEST
      
  environment:
    STAGE: production
    LOG_LEVEL: info`}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
              Why Choose MicroServerless?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get powerful microservice orchestration with the simplicity of serverless architecture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <AWSLambda className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-gray-800 dark:text-gray-100">Zero Infrastructure</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  No servers to manage. Deploy directly to AWS Lambda with automatic scaling and high availability.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-gray-800 dark:text-gray-100">Simple Configuration</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Intuitive YAML configuration syntax inspired by modern orchestration patterns. Easy to learn and use.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <AWSDynamoDB className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-gray-800 dark:text-gray-100">AWS Native Integration</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Built-in support for DynamoDB, RDS, S3, Secrets Manager, and other AWS services.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-gray-800 dark:text-gray-100">Security First</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Encrypted secrets, least-privilege IAM roles, and HTTPS by default. Production-ready security.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <AWSRoute53 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-gray-800 dark:text-gray-100">Custom Domains</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Route 53 and ACM integration for custom domains with automatic HTTPS certificate management.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-gray-800 dark:text-gray-100">Easy Deployment</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  One command deployment with AWS CDK. Deploy individual services or entire applications.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section id="getting-started" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">Get Started in Minutes</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Three simple steps to deploy your first serverless microservice
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-md hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                  1
                </div>
                <CardTitle className="text-gray-800 dark:text-gray-100">Install & Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 dark:bg-black text-orange-400 p-4 rounded-xl text-left font-mono text-sm shadow-inner break-words">
                  <div className="break-all">https://github.com/vuongbachdoan/micro-serverless</div>
                  <div>npm install</div>
                  <div>cdk bootstrap</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-md hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                  2
                </div>
                <CardTitle className="text-gray-800 dark:text-gray-100">Configure Service</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 dark:bg-black text-blue-400 p-4 rounded-xl text-left font-mono text-sm shadow-inner">
                  <div>service:</div>
                  <div>&nbsp;&nbsp;name: my-service</div>
                  <div>&nbsp;&nbsp;runtime: nodejs18.x</div>
                  <div>&nbsp;&nbsp;handler: index.handler</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-md hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                  3
                </div>
                <CardTitle className="text-gray-800 dark:text-gray-100">Deploy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 dark:bg-black text-violet-400 p-4 rounded-xl text-left font-mono text-sm shadow-inner">
                  <div>npm run deploy</div>
                  <div className="text-orange-400 mt-2">✓ Service deployed!</div>
                  <div className="text-orange-400">✓ API Gateway ready</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-orange-400 to-amber-500 hover:from-orange-500 hover:to-amber-600 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/docs">
                Read Full Documentation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AWS Services Integration */}
      <section className="py-20 px-4 bg-white/30 dark:bg-gray-800/30 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
              Powered by AWS Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Built on top of proven AWS services for reliability, scalability, and security
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <AWSLambda className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">AWS Lambda</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Serverless compute</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <AWSAPIGateway className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">API Gateway</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">API management</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <AWSDynamoDB className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">DynamoDB</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">NoSQL database</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <AWSRDS className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">RDS</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Relational database</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <AWSS3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">S3</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Object storage</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <AWSSecretsManager className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Secrets Manager</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Secure secrets</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <AWSCloudWatch className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">CloudWatch</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Monitoring & logs</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <AWSKMS className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">KMS</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Key management</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
              About the Author
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Meet the creator behind MicroServerless</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-400 to-amber-500 p-6 text-white">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <User className="w-16 h-16 text-white" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-2">Bạch Doãn Vương</h3>
                    <p className="text-xl mb-2">Cloud Engineer | AWS & GCP Certified</p>
                    <p className="text-lg opacity-90">DevOps & Security Enthusiast</p>
                    <Badge className="mt-3 bg-white/20 text-white backdrop-blur-sm">✅ AWS Community Builder</Badge>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Certifications */}
                  <div>
                    <h4 className="text-xl font-bold mb-4 flex items-center text-gray-800 dark:text-gray-100">
                      <Award className="w-5 h-5 mr-2 text-orange-500" />
                      Certifications
                    </h4>
                    <div className="space-y-2 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full mr-3"></div>
                        <span>AWS Certified Solution Architect Professional</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-orange-500 rounded-full mr-3"></div>
                        <span>AWS Certified Security Specialty</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mr-3"></div>
                        <span>AWS Certified Developer Associate</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3"></div>
                        <span>AWS Certified Solutions Architect Associate</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full mr-3"></div>
                        <span>GCP Professional Cloud Security Engineer</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full mr-3"></div>
                        <span>GCP Professional Cloud Architect</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mr-3"></div>
                        <span>GCP Associate Cloud Engineer</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-xl font-bold mb-4 flex items-center text-gray-800 dark:text-gray-100">
                      <Award className="w-5 h-5 mr-2 text-amber-500" />
                      Achievements
                    </h4>
                    <div className="space-y-2 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3"></div>
                        <span>🏅 Third Prize - Bosch Activator Scholarship 2024</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full mr-3"></div>
                        <span>🏅 Second Prize - Blockchain Hackathon 2022</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mr-3"></div>
                        <span>🏅 Potential Prize - Research Festival 2022</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3"></div>
                        <span>🏅 Start-up Prize - Research Connect 2021</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mt-8 pt-8">
                  <h4 className="text-xl font-bold mb-4 flex items-center text-gray-800 dark:text-gray-100">
                    <Mail className="w-5 h-5 mr-2 text-orange-500" />
                    Get in Touch
                  </h4>
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>HCM City, Vietnam</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="bg-white/50 dark:bg-gray-700/50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 dark:hover:from-blue-900/20 dark:hover:to-cyan-900/20 backdrop-blur-sm transition-all duration-300"
                      >
                        <Link href="https://www.linkedin.com/in/vuongbd2007/" target="_blank">
                          LinkedIn
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="bg-white/50 dark:bg-gray-700/50 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 dark:hover:from-red-900/20 dark:hover:to-pink-900/20 backdrop-blur-sm transition-all duration-300"
                      >
                        <Link href="mailto:vuongbachdoan@gmail.com">Email</Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="bg-white/50 dark:bg-gray-700/50 hover:bg-gradient-to-r hover:from-gray-50 hover:to-slate-50 dark:hover:from-gray-800/50 dark:hover:to-slate-800/50 backdrop-blur-sm transition-all duration-300"
                      >
                        <Link href="https://github.com/vuongbachdoan" target="_blank">
                          GitHub
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl backdrop-blur-sm">
                  <p className="text-gray-700 dark:text-gray-300 text-center">
                    <strong>Interested in collaborating?</strong> Feel free to reach out for cloud architecture
                    consulting, DevOps implementation, or open-source contributions!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/95 dark:bg-black/95 backdrop-blur-md text-white py-12 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                  <AWSCloud className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">MicroServerless</span>
              </div>
              <p className="text-gray-400">Open-source serverless microservices orchestration framework for AWS.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Documentation</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/docs" className="hover:text-orange-400 transition-colors">
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link href="/docs#configuration" className="hover:text-amber-400 transition-colors">
                    Configuration
                  </Link>
                </li>
                <li>
                  <Link href="/docs#examples" className="hover:text-yellow-400 transition-colors">
                    Examples
                  </Link>
                </li>
                <li>
                  <Link href="/docs#deployment" className="hover:text-orange-400 transition-colors">
                    Deployment
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400 transition-colors">
                    Issues
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    Discussions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Contributing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    AWS CDK
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400 transition-colors">
                    Lambda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400 transition-colors">
                    API Gateway
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    DynamoDB
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MicroServerless. Licensed under MIT License.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
