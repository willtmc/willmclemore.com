'use client'

import { useState } from 'react'
import { Calendar, Clock, Star, TrendingUp, ExternalLink, Filter, Search, Plus, Brain, Tag } from 'lucide-react'

const CATEGORIES = [
  { id: 'all', name: 'All Categories', color: 'bg-slate-100 text-slate-700' },
  { id: 'real_estate', name: 'Real Estate', color: 'bg-blue-100 text-blue-700' },
  { id: 'equipment', name: 'Equipment', color: 'bg-green-100 text-green-700' },
  { id: 'art', name: 'Art & Collectibles', color: 'bg-purple-100 text-purple-700' },
  { id: 'business_liquidation', name: 'Business Liquidation', color: 'bg-orange-100 text-orange-700' },
  { id: 'technology', name: 'Technology', color: 'bg-indigo-100 text-indigo-700' },
  { id: 'ai_trends', name: 'AI in Auctions', color: 'bg-pink-100 text-pink-700' }
]

const MOCK_INTELLIGENCE_ITEMS = [
  {
    id: '1',
    title: 'Commercial Real Estate Auction Volume Surges 40% in Atlanta Market',
    summary: 'Major increase in commercial property auctions as interest rates stabilize. Three large office buildings and two retail centers scheduled for December auctions.',
    url: 'https://example.com/news/1',
    source: 'Atlanta Business Journal',
    category: 'real_estate',
    importance: 8,
    region: 'Southeast',
    sentiment: 'positive',
    publishedAt: new Date('2024-11-28T10:30:00'),
    tags: ['commercial', 'atlanta', 'volume-increase'],
    aiAnalyses: [
      { model: 'claude', type: 'summary', response: 'This trend indicates market confidence returning. Good blog angle on regional market recovery.' }
    ]
  },
  {
    id: '2', 
    title: 'Christie\'s Implements AI Bidding Analysis System',
    summary: 'Auction house begins using machine learning to predict bidding patterns and optimize lot sequencing for better sales outcomes.',
    url: 'https://example.com/news/2',
    source: 'Art Market News',
    category: 'ai_trends',
    importance: 9,
    region: 'Global',
    sentiment: 'positive',
    publishedAt: new Date('2024-11-28T08:15:00'),
    tags: ['ai', 'christies', 'bidding-analysis'],
    aiAnalyses: [
      { model: 'gemini', type: 'trend_analysis', response: 'Significant development showing AI adoption in traditional auction houses. Could be replicated across all auction types.' }
    ]
  },
  {
    id: '3',
    title: 'Heavy Equipment Auction Prices Drop 15% Amid Economic Uncertainty',
    summary: 'Construction equipment values declining at major auction sites. Dealers reporting increased inventory levels and longer sales cycles.',
    url: 'https://example.com/news/3',
    source: 'Equipment Today',
    category: 'equipment',
    importance: 7,
    region: 'National',
    sentiment: 'negative',
    publishedAt: new Date('2024-11-28T06:45:00'),
    tags: ['heavy-equipment', 'price-decline', 'construction'],
    aiAnalyses: []
  }
]

export default function IntelligencePage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('publishedAt')
  const [items, setItems] = useState(MOCK_INTELLIGENCE_ITEMS)

  const filteredItems = items.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getImportanceColor = (importance: number) => {
    if (importance >= 8) return 'text-red-600'
    if (importance >= 6) return 'text-orange-600' 
    return 'text-slate-600'
  }

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return '📈'
      case 'negative': return '📉'
      default: return '📊'
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Intelligence Feed</h1>
              <p className="text-slate-600 dark:text-slate-400">
                Latest auction industry news, trends, and analysis opportunities
              </p>
            </div>
            <button className="btn btn-primary flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add Item
            </button>
          </div>

          {/* Filters and Search */}
          <div className="mb-6 space-y-4">
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[300px]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search intelligence items..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input pl-10"
                  />
                </div>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input w-auto"
              >
                <option value="publishedAt">Latest First</option>
                <option value="importance">Highest Priority</option>
                <option value="category">Category</option>
              </select>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedCategory === category.id
                      ? category.color + ' ring-2 ring-offset-2 ring-blue-500'
                      : 'bg-slate-200 text-slate-600 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Intelligence Items */}
          <div className="space-y-4">
            {filteredItems.map(item => (
              <div key={item.id} className="card hover:shadow-md transition-shadow">
                <div className="card-content">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      {/* Header */}
                      <div className="flex items-center gap-3 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className={`text-xl ${getImportanceColor(item.importance)}`}>
                            {Array.from({length: Math.min(item.importance, 3)}, (_, i) => '●').join('')}
                          </span>
                          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                            Priority {item.importance}/10
                          </span>
                        </div>
                        <span className="text-lg">{getSentimentIcon(item.sentiment)}</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          CATEGORIES.find(c => c.id === item.category)?.color
                        }`}>
                          {CATEGORIES.find(c => c.id === item.category)?.name}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold leading-tight">
                        {item.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-slate-600 dark:text-slate-400">
                        {item.summary}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map(tag => (
                          <span key={tag} className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs">
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* AI Analysis Indicator */}
                      {item.aiAnalyses.length > 0 && (
                        <div className="flex items-center gap-2">
                          <Brain className="w-4 h-4 text-purple-600" />
                          <span className="text-sm text-purple-600 dark:text-purple-400">
                            {item.aiAnalyses.length} AI analysis available
                          </span>
                        </div>
                      )}

                      {/* Footer */}
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(item.publishedAt)}
                          </div>
                          <span>via {item.source}</span>
                          {item.region && <span>• {item.region}</span>}
                        </div>
                        <div className="flex items-center gap-2">
                          {item.url && (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                            >
                              <ExternalLink className="w-4 h-4" />
                              View Source
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2">
                      <button className="btn btn-sm btn-secondary">
                        <Brain className="w-4 h-4" />
                        Analyze
                      </button>
                      <button className="btn btn-sm btn-secondary">
                        <TrendingUp className="w-4 h-4" />
                        Track Trend
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="text-slate-400 mb-4">No intelligence items found</div>
              <button className="btn btn-primary">
                <Plus className="w-4 h-4 mr-2" />
                Add First Item
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}