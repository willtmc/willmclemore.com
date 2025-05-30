import Link from 'next/link'
import { BarChart3, Brain, TrendingUp, Lightbulb, FileText, Settings, Eye } from 'lucide-react'

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Auction Intelligence Command Center</h1>
            <p className="text-slate-600 dark:text-slate-400">
              Your hub for auction industry intelligence, trend analysis, and content creation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Intelligence Overview */}
            <Link href="/admin/intelligence" className="group">
              <div className="card hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
                <div className="card-content">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Intelligence Feed</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Latest auction world happenings</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Today&apos;s Items:</span>
                      <span className="font-medium">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span>High Priority:</span>
                      <span className="font-medium text-orange-600">3</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Trend Analysis */}
            <Link href="/admin/trends" className="group">
              <div className="card hover:border-green-200 dark:hover:border-green-800 transition-colors">
                <div className="card-content">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Trend Radar</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Emerging patterns & opportunities</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Active Trends:</span>
                      <span className="font-medium">7</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Strong Signals:</span>
                      <span className="font-medium text-green-600">2</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* AI Analysis Hub */}
            <Link href="/admin/ai-hub" className="group">
              <div className="card hover:border-purple-200 dark:hover:border-purple-800 transition-colors">
                <div className="card-content">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                      <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">AI Analysis Hub</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Multi-AI brainstorming & insights</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Active Models:</span>
                      <span className="font-medium">6</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Recent Analyses:</span>
                      <span className="font-medium">24</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Content Pipeline */}
            <Link href="/admin/content" className="group">
              <div className="card hover:border-orange-200 dark:hover:border-orange-800 transition-colors">
                <div className="card-content">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Content Pipeline</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Ideas → Drafts → Posts</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Ideas:</span>
                      <span className="font-medium">15</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ready to Draft:</span>
                      <span className="font-medium text-orange-600">4</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Content Ideas */}
            <Link href="/admin/ideas" className="group">
              <div className="card hover:border-yellow-200 dark:hover:border-yellow-800 transition-colors">
                <div className="card-content">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Content Ideas</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Blog post concepts & angles</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>High Priority:</span>
                      <span className="font-medium">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span>AI Generated:</span>
                      <span className="font-medium">12</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Analytics & Reports */}
            <Link href="/admin/analytics" className="group">
              <div className="card hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors">
                <div className="card-content">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Analytics & Reports</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Performance metrics & insights</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Weekly Growth:</span>
                      <span className="font-medium text-green-600">+24%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Top Category:</span>
                      <span className="font-medium">AI Trends</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/admin/intelligence/new" className="btn btn-primary">
                Add Intelligence Item
              </Link>
              <Link href="/admin/ai-hub/chat" className="btn btn-secondary">
                Chat with AI
              </Link>
              <Link href="/admin/content/new" className="btn btn-secondary">
                New Content Idea
              </Link>
              <Link href="/admin/sources" className="btn btn-secondary">
                Manage Sources
              </Link>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="card">
              <div className="card-content">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-slate-600 dark:text-slate-400">2 minutes ago</span>
                    <span>New intelligence item: "Commercial RE Auction Volume Surges in Atlanta"</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-slate-600 dark:text-slate-400">15 minutes ago</span>
                    <span>AI analysis completed: Market trend identification</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-slate-600 dark:text-slate-400">1 hour ago</span>
                    <span>Content idea generated: "AI in Heavy Equipment Auctions"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}