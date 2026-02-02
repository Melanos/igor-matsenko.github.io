import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'The tools, technologies, and platforms I use to build intelligent automation solutions.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Tools and technologies I use to build intelligent automation solutions."
      intro="I'm often asked about the tech stack I use for enterprise automation and AIOps. Here's a comprehensive list of the tools, platforms, and technologies that power my work—from AI agent development to network automation."
    >
      <div className="space-y-20">
        <ToolsSection title="AI & Automation Platforms">
          <Tool title="Microsoft Copilot Studio">
            My primary platform for building AI agents. The visual workflow designer combined with natural language understanding makes it perfect for enterprise email automation and intelligent routing systems.
          </Tool>
          <Tool title="Power Automate">
            Essential for workflow orchestration. I use it daily to integrate AI agents with Microsoft Graph API, Teams, and other enterprise systems. The connector ecosystem is unmatched.
          </Tool>
          <Tool title="Ansible Automation Platform (AAP)">
            My go-to for infrastructure automation. I've built dozens of playbooks for network configuration, NAC deployment, and self-service automation portals. The Tower/AAP interface makes it accessible to operations teams.
          </Tool>
          <Tool title="Azure DevOps">
            For CI/CD pipelines, project management, and version control. I use Azure Boards extensively to track automation projects and collaborate with cross-functional teams.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Development & Scripting">
          <Tool title="Python">
            My language of choice for automation. I leverage multithreading for large-scale network operations, async for API integrations, and libraries like Netmiko for network device automation. My NAC deployment script that saved 1,000+ hours was built entirely in Python.
          </Tool>
          <Tool title="PowerShell">
            Critical for Windows automation and Active Directory operations. I use it for system administration tasks and integrating with Microsoft APIs.
          </Tool>
          <Tool title="Visual Studio Code">
            My daily driver for coding. The Python and Ansible extensions, along with GitHub Copilot, make development incredibly efficient.
          </Tool>
          <Tool title="Git & GitHub">
            Version control is non-negotiable. All my automation code lives in Git repositories, and I use GitHub Actions for testing and deployment workflows.
          </Tool>
        </ToolsSection>

        <ToolsSection title="AIOps & Monitoring">
          <Tool title="Splunk">
            Enterprise log aggregation and analysis. I build custom dashboards, alerts, and integrations that feed into our AIOps incident classification system.
          </Tool>
          <Tool title="Dynatrace">
            Application performance monitoring with AI-powered insights. I use it for telemetry analysis and predictive analytics in our AIOps workflows.
          </Tool>
          <Tool title="Azure Monitor">
            Cloud-native monitoring for Azure resources. Integrates seamlessly with Power Automate for automated incident response.
          </Tool>
          <Tool title="SolarWinds">
            Network monitoring and configuration management. I've automated report generation and alert integration with our ticketing systems.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Network Infrastructure">
          <Tool title="Cisco Catalyst & Nexus Switches">
            My foundation in network engineering. I've configured and managed hundreds of Catalyst 2900/4900/6500 and Nexus 9000 series switches in production environments.
          </Tool>
          <Tool title="Palo Alto Firewalls">
            For enterprise security. I handle policy design, configuration, and automation of firewall rule deployments.
          </Tool>
          <Tool title="Cisco ISE (Identity Services Engine)">
            Network Access Control platform. I've automated ISE policy deployment and integrated it with Active Directory for zero-trust network access.
          </Tool>
          <Tool title="Meraki & SD-WAN">
            Cloud-managed networking. I use the Meraki API extensively for automated provisioning and monitoring.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Collaboration & Documentation">
          <Tool title="Microsoft Teams">
            More than just chat—I integrate automation workflows that post notifications, alerts, and reports directly to Teams channels. It's become the central hub for operational awareness.
          </Tool>
          <Tool title="Jira">
            Project and ticket tracking. I've built automations that create, update, and close Jira tickets based on incident classification from our AI agents.
          </Tool>
          <Tool title="Confluence">
            Documentation platform. I maintain runbooks, architecture diagrams, and knowledge base articles that support automation initiatives.
          </Tool>
          <Tool title="Markdown">
            All my documentation and README files are in Markdown. Clean, version-controllable, and universally compatible.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Cloud & APIs">
          <Tool title="Microsoft Graph API">
            The backbone of my AI email assistant. I use it to read emails, classify incidents, route requests, and send automated responses.
          </Tool>
          <Tool title="Azure">
            Cloud platform for hosting automation workflows, storing configurations, and running serverless functions. Currently pursuing AWS Associate certification to broaden cloud expertise.
          </Tool>
          <Tool title="REST APIs">
            I work with REST APIs daily—from network device APIs to enterprise SaaS platforms. Postman is my go-to for testing and documentation.
          </Tool>
          <Tool title="JSON">
            The lingua franca of modern APIs. I parse, manipulate, and generate JSON in nearly every automation project.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
