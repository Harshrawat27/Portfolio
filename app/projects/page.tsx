import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "ProjectName",
      category: "SaaS",
      description: "A productivity tool for developers that helps manage time and tasks efficiently.",
      longDescription:
        "Built with React, Node.js, and MongoDB, this SaaS platform offers time tracking, task management, and productivity analytics specifically designed for developers and technical teams.",
      link: "#",
      caseStudy: "/blog/project-case-study",
    },
    {
      id: 2,
      title: "AppName",
      category: "Mobile App",
      description: "An iOS and Android app for tracking daily habits and building routines.",
      longDescription:
        "Developed with React Native and Firebase, this cross-platform mobile application helps users build and maintain habits through gamification, streaks, and personalized insights.",
      link: "#",
      caseStudy: "/blog/app-case-study",
    },
    {
      id: 3,
      title: "ToolName",
      category: "Developer Tool",
      description: "An open-source CLI tool that automates repetitive development tasks.",
      longDescription:
        "Created with Node.js and distributed via npm, this command-line tool has gained over 500 stars on GitHub and helps developers automate code generation, testing, and deployment workflows.",
      link: "#",
      caseStudy: "/blog/tool-case-study",
    },
    {
      id: 4,
      title: "WebsiteName",
      category: "Web App",
      description: "A web application that helps content creators manage and monetize their work.",
      longDescription:
        "Built with Next.js and Stripe integration, this platform enables content creators to offer premium subscriptions, manage their audience, and analyze engagement metrics in one place.",
      link: "#",
      caseStudy: "/blog/website-case-study",
    },
  ]

  return (
    <div className="py-10 space-y-8">
      <div className="space-y-4">
        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" /> Back home
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted-foreground">A collection of my work as a developer and solopreneur.</p>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h2 className="font-bold text-xl">{project.title}</h2>
                    <Badge>{project.category}</Badge>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                  <p className="text-sm text-muted-foreground">{project.longDescription}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="gap-1">
                    Visit <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Link href={project.caseStudy}>
                    <Button size="sm" variant="outline">
                      Case Study
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

