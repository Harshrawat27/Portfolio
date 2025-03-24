import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      id: "post-1",
      title: "How I Built and Launched My First SaaS in 30 Days",
      date: "March 15, 2024",
      excerpt:
        "The complete journey from idea to paying customers, including all the challenges and lessons learned along the way.",
      tags: ["SaaS", "Startup", "Development"],
    },
    {
      id: "post-2",
      title: "5 Tools Every Solopreneur Should Use in 2024",
      date: "February 28, 2024",
      excerpt:
        "A curated list of the most effective tools that have helped me automate and scale my business as a solo founder.",
      tags: ["Tools", "Productivity", "Automation"],
    },
    {
      id: "post-3",
      title: "From Side Project to Profitable Business: A Case Study",
      date: "February 10, 2024",
      excerpt: "How I turned a weekend project into a business generating $5k MRR within 6 months.",
      tags: ["Case Study", "Growth", "Revenue"],
    },
    {
      id: "post-4",
      title: "The Tech Stack I Use for All My Projects",
      date: "January 22, 2024",
      excerpt: "A detailed breakdown of the technologies, frameworks, and services that power my products.",
      tags: ["Tech Stack", "Development", "Tools"],
    },
    {
      id: "post-5",
      title: "Finding Your Niche as a Developer-Founder",
      date: "January 5, 2024",
      excerpt: "How to leverage your technical skills to identify profitable market opportunities.",
      tags: ["Strategy", "Market Research", "Niche"],
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
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="text-muted-foreground">
          Thoughts, stories, and ideas about development, indie hacking, and building in public.
        </p>
      </div>

      <div className="grid gap-8">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="block group">
            <article className="space-y-3 p-4 rounded-lg transition-colors group-hover:bg-muted/50">
              <div className="space-y-1">
                <h2 className="font-bold text-xl group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </div>
              <p className="text-muted-foreground">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 bg-muted rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}

