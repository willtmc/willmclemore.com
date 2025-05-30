'use client'

import { useState } from 'react'
import { TrendingUp, TrendingDown, BarChart3, Calendar, Brain, Target, AlertTriangle } from 'lucide-react'

const MOCK_TRENDS = [
  {
    id: '1',
    name: 'AI Adoption in Traditional Auction Houses',
    description: 'Major auction houses implementing machine learning for bidding analysis, lot sequencing, and price optimization.',
    category: 'ai_trends',
    strength: 9,
    timeframe: 'monthly',
    region: 'Global',
    insights: 'Strong upward trajectory. Christies and Sothebys leading adoption. Opportunity for auction industry thought leadership.',
    itemCount: 12,
    createdAt: new Date('2024-11-20T00:00:00'),
    updatedAt: new Date('2024-11-28T00:00:00')
  },
  {
    id: '2',
    name: 'Commercial Real Estate Auction Volume Surge - Southeast',
    description: 'Significant increase in commercial property auctions across Atlanta, Nashville, and Charlotte markets.',
    category: 'real_estate',
    strength: 8,
    timeframe: 'weekly',
    region: 'Southeast',
    insights: 'Interest rate stabilization driving market confidence. High-value opportunities for strategic content.',
    itemCount: 8,
    createdAt: new Date('2024-11-15T00:00:00'),
    updatedAt: new Date('2024-11-28T00:00:00')
  },
  {
    id: '3',
    name: 'Equipment Auction Price Volatility',
    description: 'Heavy equipment and construction machinery showing increased price fluctuations amid economic uncertainty.',
    category: 'equipment',
    strength: 6,
    timeframe: 'daily',
    region: 'National',
    insights: 'Mixed signals in the market. Could indicate buying opportunities or continued economic pressure.',
    itemCount: 15,
    createdAt: new Date('2024-11-22T00:00:00'),
    updatedAt: new Date('2024-11-28T00:00:00')
  }
]

const CATEGORIES = [
  { id: 'all', name: 'All Categories', color: 'bg-slate-100 text-slate-700' },
  { id: 'real_estate', name: 'Real Estate', color: 'bg-blue-100 text-blue-700' },
  { id: 'equipment', name: 'Equipment', color: 'bg-green-100 text-green-700' },
  { id: 'art', name: 'Art & Collectibles', color: 'bg-purple-100 text-purple-700' },
  { id: 'ai_trends', name: 'AI in Auctions', color: 'bg-pink-100 text-pink-700' },
  { id: 'business_liquidation', name: 'Business Liquidation', color: 'bg-orange-100 text-orange-700' }
]

export default function TrendsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [trends, setTrends] = useState(MOCK_TRENDS)

  const filteredTrends = trends.filter(trend => 
    selectedCategory === 'all' || trend.category === selectedCategory
  )

  const getStrengthColor = (strength: number) => {
    if (strength >= 8) return 'text-red-600'
    if (strength >= 6) return 'text-orange-600'
    return 'text-slate-600'
  }

  const getStrengthIcon = (strength: number) => {
    if (strength >= 7) return <TrendingUp className="w-5 h-5 text-green-600" />
    if (strength >= 4) return <BarChart3 className="w-5 h-5 text-orange-600" />
    return <TrendingDown className="w-5 h-5 text-red-600" />
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Trend Radar</h1>
            <p className="text-slate-600 dark:text-slate-400">
              Emerging patterns and opportunities in the auction industry
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
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

          {/* Trend Strength Overview */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="card">
              <div className="card-content text-center">
                <div className="text-2xl font-bold text-red-600">
                  {trends.filter(t => t.strength >= 8).length}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Strong Trends</div>
              </div>
            </div>
            <div className="card">
              <div className="card-content text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {trends.filter(t => t.strength >= 6 && t.strength < 8).length}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Moderate Trends</div>
              </div>
            </div>
            <div className="card">
              <div className="card-content text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {trends.reduce((sum, t) => sum + t.itemCount, 0)}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Total Data Points</div>
              </div>
            </div>
            <div className="card">
              <div className="card-content text-center">
                <div className="text-2xl font-bold text-green-600">
                  {trends.filter(t => (new Date().getTime() - t.updatedAt.getTime()) < 24 * 60 * 60 * 1000).length}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Updated Today</div>
              </div>
            </div>
          </div>

          {/* Trends List */}
          <div className="space-y-6">
            {filteredTrends.map(trend => (
              <div key={trend.id} className="card hover:shadow-md transition-shadow">
                <div className="card-content">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-4">
                      {/* Header */}
                      <div className="flex items-center gap-3 flex-wrap">
                        <div className="flex items-center gap-2">
                          {getStrengthIcon(trend.strength)}
                          <span className={`text-lg font-bold ${getStrengthColor(trend.strength)}`}>
                            Strength {trend.strength}/10
                          </span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          CATEGORIES.find(c => c.id === trend.category)?.color
                        }`}>
                          {CATEGORIES.find(c => c.id === trend.category)?.name}
                        </span>
                        <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs">
                          {trend.timeframe}
                        </span>
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {trend.region}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold">
                        {trend.name}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-400">
                        {trend.description}
                      </p>

                      {/* AI Insights */}
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Brain className="w-4 h-4 text-purple-600" />
                          <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                            AI Analysis:
                          </span>
                        </div>
                        <p className="text-sm text-purple-700 dark:text-purple-300">
                          {trend.insights}
                        </p>
                      </div>

                      {/* Metadata */}
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <BarChart3 className="w-4 h-4" />
                            {trend.itemCount} data points
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Created {formatDate(trend.createdAt)}
                          </div>
                        </div>
                        <div className="text-xs">
                          Last updated {formatDate(trend.updatedAt)}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2">
                      <button className="btn btn-sm btn-primary">
                        <Target className="w-4 h-4" />
                        Generate Ideas
                      </button>
                      <button className="btn btn-sm btn-secondary">
                        <Brain className="w-4 h-4" />
                        Deep Analysis
                      </button>
                      <button className="btn btn-sm btn-secondary">
                        <AlertTriangle className="w-4 h-4" />
                        Set Alert
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTrends.length === 0 && (
            <div className="text-center py-12">
              <div className="text-slate-400 mb-4">No trends found for this category</div>
              <p className="text-sm text-slate-500">
                Trends are automatically detected from intelligence data. 
                Add more intelligence items to see trend analysis.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}