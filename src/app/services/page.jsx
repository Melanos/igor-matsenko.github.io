import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ServiceCategory({ title, children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">
        {children}
      </div>
    </Section>
  )
}

function Service({ title, description, offerings }) {
  return (
    <Card as="article">
      <Card.Title as="h3">{title}</Card.Title>
      <Card.Description>{description}</Card.Description>
      <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
        {offerings.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 text-teal-500">→</span>
            {item}
          </li>
        ))}
      </ul>
    </Card>
  )
}

export const metadata = {
  title: 'Services',
  description: 'Professional consulting services in AI automation, AIOps, network engineering, and enterprise IT operations.',
}

export default function Services() {
  return (
    <SimpleLayout
      title="Professional consulting services for enterprise IT transformation."
      intro="With 11+ years of experience supporting Fortune 500 companies, I offer specialized consulting services in AI-driven automation, network infrastructure, and enterprise workflow optimization. Whether you need a complete AIOps implementation or hands-on network installation, I bring both strategic vision and tactical execution."
    >
      <div className="space-y-20">
        <ServiceCategory title="AI & Intelligent Automation">
          <Service
            title="Agentic AI Solutions"
            description="Build intelligent AI agents that understand context, make decisions, and take action autonomously within your enterprise workflows."
            offerings={[
              "Microsoft Copilot Studio agent development",
              "Custom AI workflow automation with Power Automate",
              "Human-in-the-loop design for trust and compliance",
              "Multi-agent orchestration and coordination",
              "Context-aware LLM integration with enterprise data",
            ]}
          />
          <Service
            title="Generative AI (GenAI) Integration"
            description="Leverage large language models and generative AI to automate document processing, email responses, and knowledge management."
            offerings={[
              "Email automation with intelligent classification (94%+ accuracy)",
              "Document generation and summarization",
              "Automated response systems with brand voice consistency",
              "Prompt engineering and optimization",
              "Azure OpenAI and Microsoft Graph API integration",
            ]}
          />
          <Service
            title="RAG (Retrieval-Augmented Generation)"
            description="Enhance AI responses with your organization's knowledge base through semantic search and context injection."
            offerings={[
              "Custom knowledge base integration",
              "Semantic search implementation",
              "Vector database setup and optimization",
              "SharePoint and file system indexing",
              "Real-time context retrieval for AI agents",
            ]}
          />
        </ServiceCategory>

        <ServiceCategory title="AIOps & Operational Intelligence">
          <Service
            title="AIOps Implementation"
            description="Transform IT operations with AI-powered incident management, predictive analytics, and automated response systems."
            offerings={[
              "End-to-end AIOps solution design and deployment",
              "AI-powered incident classification (50-60% faster response times)",
              "Splunk and Dynatrace integration",
              "Alert correlation and noise reduction",
              "Predictive analytics and anomaly detection",
            ]}
          />
          <Service
            title="Automation Framework Development"
            description="Build scalable Python and Ansible automation frameworks that save thousands of engineering hours."
            offerings={[
              "Python automation with multithreading (800+ device scale)",
              "Ansible playbook development and AAP/Tower setup",
              "Self-service automation portals for operations teams",
              "CI/CD pipeline integration (Azure DevOps, Jenkins)",
              "Configuration management and compliance automation",
            ]}
          />
        </ServiceCategory>

        <ServiceCategory title="Network Infrastructure Services">
          <Service
            title="Network Installation & Configuration"
            description="Professional network equipment installation, configuration, and optimization for enterprise environments."
            offerings={[
              "Rack and stack installation for switches, routers, firewalls",
              "Cable management and documentation",
              "Cisco Catalyst and Nexus switch configuration",
              "Palo Alto firewall setup and policy design",
              "F5 and A10 load balancer deployment",
            ]}
          />
          <Service
            title="Network Automation & Management"
            description="Automate network operations with custom scripts, configuration management, and monitoring integrations."
            offerings={[
              "Network Access Control (NAC) deployment automation",
              "Automated configuration backups (800+ devices)",
              "SD-WAN and Meraki cloud-managed deployments",
              "Cisco ISE implementation and policy automation",
              "Network monitoring integration (SolarWinds, Nagios)",
            ]}
          />
          <Service
            title="Troubleshooting & Support"
            description="24/7 production environment support with rapid root cause analysis and resolution."
            offerings={[
              "Network infrastructure troubleshooting",
              "Performance optimization and capacity planning",
              "Large-scale outage resolution",
              "Root cause analysis and preventive measures",
              "On-site and remote support available",
            ]}
          />
        </ServiceCategory>

        <ServiceCategory title="Engagement Options">
          <Service
            title="Project-Based Consulting"
            description="Fixed-scope projects with defined deliverables and timelines."
            offerings={[
              "AI agent proof-of-concepts (2-4 weeks)",
              "Network infrastructure installations",
              "AIOps implementation projects",
              "Automation framework development",
              "Complete documentation and knowledge transfer",
            ]}
          />
          <Service
            title="Retainer Services"
            description="Ongoing support and continuous optimization for your IT operations."
            offerings={[
              "24/7 on-call engineering support",
              "Monthly automation development hours",
              "Strategic planning and roadmap development",
              "Platform maintenance and upgrades",
              "Priority response times",
            ]}
          />
        </ServiceCategory>

        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
          <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <span className="ml-3">Ready to get started?</span>
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Currently available for consulting engagements and open to discussing new opportunities. 
            Let's talk about how AI automation and intelligent operations can transform your enterprise IT.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="mailto:igor@im-ai.tech"
              className="inline-flex items-center justify-center rounded-md bg-teal-500 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Contact me
            </a>
            <a
              href="/projects"
              className="inline-flex items-center justify-center rounded-md border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              View projects
            </a>
          </div>
        </div>
      </div>
    </SimpleLayout>
  )
}
