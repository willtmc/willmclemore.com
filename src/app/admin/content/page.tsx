'use client'

import { useState } from 'react'
import { FileText, Lightbulb, Edit3, Eye, Calendar, Clock, TrendingUp, Brain, Target, ArrowRight, Plus } from 'lucide-react'

const CONTENT_STATUSES = [
  { id: 'idea', name: 'Ideas', color: 'bg-yellow-100 text-yellow-700', icon: Lightbulb },
  { id: 'researching', name: 'Researching', color: 'bg-blue-100 text-blue-700', icon: Brain },
  { id: 'drafting', name: 'Drafting', color: 'bg-purple-100 text-purple-700', icon: Edit3 },
  { id: 'drafted', name: 'Review', color: 'bg-green-100 text-green-700', icon: Eye },
  { id: 'published', name: 'Published', color: 'bg-slate-100 text-slate-700', icon: FileText }
]

const MOCK_CONTENT_IDEAS = [
  {
    id: '1',
    title: 'AI in Heavy Equipment Auctions: The Future is Now',
    description: 'Explore how auction houses are using AI for equipment valuation, bidding optimization, and market analysis. Focus on practical applications and ROI.',
    category: 'ai_trends',
    priority: 9,
    status: 'drafting',
    angle: 'Practical business benefits with real case studies',
    estimatedLength: 'medium',
    targetKeywords: 'AI equipment auctions, machine learning bidding, auction technology',
    aiModel: 'claude',
    createdAt: new Date('2024-11-28T09:00:00'),
    trendId: 'trend-1'
  },
  {
    id: '2',
    title: 'Why Commercial Real Estate Auctions are Surging in the Southeast',
    description: 'Analyze the 40% increase in commercial RE auctions across Atlanta, Nashville, and Charlotte. What this means for investors and market trends.',
    category: 'real_estate',
    priority: 8,
    status: 'idea',
    angle: 'Regional market analysis with investment implications',
    estimatedLength: 'long',
    targetKeywords: 'commercial real estate auctions, southeast market, investment trends',
    aiModel: 'gemini',
    createdAt: new Date('2024-11-28T07:30:00'),
    trendId: 'trend-2'
  },
  {
    id: '3',
    title: 'The Hidden Costs of Online-Only Auctions',
    description: 'What buyers and sellers don\'t realize about digital auction platforms. Fees, logistics, and the human element that\'s being lost.',
    category: 'business_insights',
    priority: 7,
    status: 'researching',
    angle: 'Contrarian take on digital auction trend',
    estimatedLength: 'medium',
    targetKeywords: 'online auctions, auction fees, digital vs traditional',
    aiModel: 'chatgpt',
    createdAt: new Date('2024-11-27T14:20:00')
  },
  {
    id: '4',
    title: 'How to Value Antique Farm Equipment at Auction',
    description: 'Complete guide for both auctioneers and bidders on properly assessing vintage agricultural machinery. Market trends and valuation methods.',
    category: 'equipment',
    priority: 6,
    status: 'drafted',
    angle: 'Practical how-to guide with expert insights',
    estimatedLength: 'long',
    targetKeywords: 'antique farm equipment, auction valuation, agricultural machinery',
    aiModel: 'claude',
    createdAt: new Date('2024-11-26T11:15:00')
  }
]

export default function ContentPage() {
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [sortBy, setSortBy] = useState('priority')
  const [ideas, setIdeas] = useState(MOCK_CONTENT_IDEAS)

  const filteredIdeas = ideas.filter(idea => 
    selectedStatus === 'all' || idea.status === selectedStatus
  )

  const sortedIdeas = [...filteredIdeas].sort((a, b) => {
    switch (sortBy) {
      case 'priority':
        return b.priority - a.priority
      case 'created':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      case 'status':
        return a.status.localeCompare(b.status)
      default:
        return 0
    }
  })

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  }

  const getPriorityColor = (priority: number) => {
    if (priority >= 8) return 'text-red-600'
    if (priority >= 6) return 'text-orange-600'
    return 'text-slate-600'
  }

  const getStatusInfo = (status: string) => {
    return CONTENT_STATUSES.find(s => s.id === status) || CONTENT_STATUSES[0]
  }

  const getEstimatedReadTime = (length: string) => {
    switch (length) {
      case 'short': return '3-5 min'
      case 'medium': return '6-8 min'
      case 'long': return '10-15 min'
      default: return 'TBD'
    }
  }

  const statusCounts = CONTENT_STATUSES.reduce((acc, status) => {
    acc[status.id] = ideas.filter(idea => idea.status === status.id).length
    return acc
  }, {} as Record<string, number>)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Content Pipeline</h1>
              <p className="text-slate-600 dark:text-slate-400">
                Manage blog post ideas from concept to publication
              </p>
            </div>
            <button className="btn btn-primary flex items-center gap-2">
              <Plus className="w-4 h-4" />
              New Content Idea
            </button>
          </div>

          {/* Pipeline Overview */}
          <div className="grid md:grid-cols-5 gap-4 mb-8">
            <button
              onClick={() => setSelectedStatus('all')}
              className={`card p-4 text-center transition-colors ${
                selectedStatus === 'all' ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="text-2xl font-bold text-slate-600 dark:text-slate-400">
                {ideas.length}
              </div>
              <div className="text-sm font-medium">Total Ideas</div>
            </button>
            
            {CONTENT_STATUSES.map(status => {
              const Icon = status.icon
              return (
                <button
                  key={status.id}
                  onClick={() => setSelectedStatus(status.id)}
                  className={`card p-4 text-center transition-colors ${
                    selectedStatus === status.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <div className="flex items-center justify-center mb-2">
                    <Icon className="w-5 h-5 text-slate-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-600 dark:text-slate-400">
                    {statusCounts[status.id] || 0}
                  </div>
                  <div className="text-sm font-medium">{status.name}</div>
                </button>
              )
            })}
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4 mb-6">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input w-auto"
            >
              <option value="priority">High Priority First</option>
              <option value="created">Recently Created</option>
              <option value="status">By Status</option>
            </select>
          </div>

          {/* Content Ideas List */}
          <div className="space-y-4">
            {sortedIdeas.map(idea => {
              const statusInfo = getStatusInfo(idea.status)
              const StatusIcon = statusInfo.icon
              
              return (
                <div key={idea.id} className="card hover:shadow-md transition-shadow">
                  <div className="card-content">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-3">
                        {/* Header */}
                        <div className="flex items-center gap-3 flex-wrap">
                          <div className="flex items-center gap-2">
                            <span className={`text-xl ${getPriorityColor(idea.priority)}`}>
                              {Array.from({length: Math.min(Math.floor(idea.priority/3), 3)}, (_, i) => '●').join('')}
                            </span>
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                              Priority {idea.priority}/10
                            </span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs flex items-center gap-1 ${statusInfo.color}`}>
                            <StatusIcon className="w-3 h-3" />
                            {statusInfo.name}
                          </span>
                          {idea.aiModel && (
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 rounded text-xs">
                              {idea.aiModel} suggested
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold leading-tight">
                          {idea.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-600 dark:text-slate-400">
                          {idea.description}
                        </p>

                        {/* Angle */}
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <Target className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Angle:</span>
                          </div>
                          <p className="text-sm text-blue-700 dark:text-blue-300">{idea.angle}</p>
                        </div>

                        {/* Metadata */}
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="font-medium">Est. Length:</span>
                            <div className="text-slate-600 dark:text-slate-400">
                              {idea.estimatedLength} ({getEstimatedReadTime(idea.estimatedLength)})
                            </div>
                          </div>
                          <div>
                            <span className="font-medium">Target Keywords:</span>
                            <div className="text-slate-600 dark:text-slate-400 text-xs">
                              {idea.targetKeywords}
                            </div>
                          </div>
                          <div>
                            <span className="font-medium">Created:</span>
                            <div className="text-slate-600 dark:text-slate-400">
                              {formatDate(idea.createdAt)}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col gap-2">
                        {idea.status === 'idea' && (
                          <button className="btn btn-sm btn-primary">
                            <Brain className="w-4 h-4" />
                            Research
                          </button>
                        )}
                        {idea.status === 'researching' && (
                          <button className="btn btn-sm btn-primary">
                            <Edit3 className="w-4 h-4" />
                            Draft
                          </button>
                        )}
                        {idea.status === 'drafting' && (
                          <button className="btn btn-sm btn-primary">
                            <Eye className="w-4 h-4" />
                            Review
                          </button>
                        )}
                        {idea.status === 'drafted' && (
                          <button className="btn btn-sm btn-primary">
                            <Calendar className="w-4 h-4" />
                            Publish
                          </button>
                        )}
                        <button className="btn btn-sm btn-secondary">
                          <ArrowRight className="w-4 h-4" />
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {sortedIdeas.length === 0 && (
            <div className="text-center py-12">
              <div className="text-slate-400 mb-4">
                {selectedStatus === 'all' ? 'No content ideas yet' : `No ${getStatusInfo(selectedStatus).name.toLowerCase()} ideas`}
              </div>
              <button className="btn btn-primary">
                <Plus className="w-4 h-4 mr-2" />
                Create First Idea
              </button>
            </div>
          )}

          {/* Quick Stats */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="card">
              <div className="card-content text-center">
                <div className="text-2xl font-bold text-green-600">
                  {ideas.filter(i => i.priority >= 8).length}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">High Priority Ideas</div>
              </div>
            </div>
            <div className="card">
              <div className="card-content text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {ideas.filter(i => i.aiModel).length}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">AI-Generated Ideas</div>
              </div>
            </div>
            <div className="card">
              <div className="card-content text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {Math.round(ideas.filter(i => i.status === 'published').length / Math.max(ideas.length, 1) * 100)}%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Completion Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}