// Note: In a real implementation, you would import official AWS icons
// For this demo, we're using Lucide icons as placeholders
import {
  Zap,
  Globe,
  Database,
  HardDrive,
  FolderOpen,
  Shield,
  NetworkIcon as Dns,
  BadgeIcon as Certificate,
  BarChart3,
  Key,
  Cloud,
} from "lucide-react"

// AWS Service Icon Components (using Lucide as placeholders)
export const AWSLambda = ({ className }: { className?: string }) => <Zap className={className} />

export const AWSAPIGateway = ({ className }: { className?: string }) => <Globe className={className} />

export const AWSDynamoDB = ({ className }: { className?: string }) => <Database className={className} />

export const AWSRDS = ({ className }: { className?: string }) => <HardDrive className={className} />

export const AWSS3 = ({ className }: { className?: string }) => <FolderOpen className={className} />

export const AWSSecretsManager = ({ className }: { className?: string }) => <Shield className={className} />

export const AWSRoute53 = ({ className }: { className?: string }) => <Dns className={className} />

export const AWSACM = ({ className }: { className?: string }) => <Certificate className={className} />

export const AWSCloudWatch = ({ className }: { className?: string }) => <BarChart3 className={className} />

export const AWSKMS = ({ className }: { className?: string }) => <Key className={className} />

export const AWSCloud = ({ className }: { className?: string }) => <Cloud className={className} />
