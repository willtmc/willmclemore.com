'use client'

import { useState } from 'react'
import { Brain, Send, Zap, MessageSquare, Sparkles, Bot } from 'lucide-react'

const AI_MODELS = [
  { 
    id: 'claude', 
    name: 'Claude', 
    description: 'Strategy & Analysis',
    color: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
    available: true
  },
  { 
    id: 'chatgpt', 
    name: 'ChatGPT', 
    description: 'Content Generation',
    color: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    available: true
  },
  { 
    id: 'gemini', 
    name: 'Gemini', 
    description: 'Research Synthesis',
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    available: true
  },
  { 
    id: 'perplexity', 
    name: 'Perplexity', 
    description: 'Deep Research',
    color: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
    available: true
  },
  { 
    id: 'deepseek', 
    name: 'DeepSeek', 
    description: 'Technical Analysis',
    color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300',
    available: false
  },
  { 
    id: 'grok', 
    name: 'Grok', 
    description: 'Market Insights',
    color: 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300',
    available: false
  }
]

const QUICK_PROMPTS = [
  "Analyze this auction industry trend for blog potential",
  "What content angles could we explore from this news?",
  "Identify the broader market implications",
  "Suggest follow-up research questions",
  "Draft a compelling headline for this topic",
  "What makes this story unique or noteworthy?"
]

export default function AIHubPage() {
  const [selectedModels, setSelectedModels] = useState<string[]>(['claude'])
  const [message, setMessage] = useState('')
  const [conversations, setConversations] = useState<{[key: string]: any[]}>({})
  const [isLoading, setIsLoading] = useState(false)

  const handleModelToggle = (modelId: string) => {
    setSelectedModels(prev => 
      prev.includes(modelId) 
        ? prev.filter(id => id !== modelId)
        : [...prev, modelId]
    )
  }

  const handleSendMessage = async () => {
    if (!message.trim() || selectedModels.length === 0) return
    
    setIsLoading(true)
    
    // Add user message to all selected model conversations
    const userMessage = {
      role: 'user',
      content: message,
      timestamp: new Date().toISOString()
    }
    
    const newConversations = { ...conversations }
    selectedModels.forEach(modelId => {
      if (!newConversations[modelId]) {
        newConversations[modelId] = []
      }
      newConversations[modelId].push(userMessage)
    })
    
    setConversations(newConversations)
    setMessage('')
    
    // Here you would make API calls to each selected AI model
    // For now, we'll simulate responses
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    selectedModels.forEach(modelId => {
      const aiResponse = {
        role: 'assistant',
        content: `[${AI_MODELS.find(m => m.id === modelId)?.name} response would appear here]`,
        timestamp: new Date().toISOString()
      }
      newConversations[modelId].push(aiResponse)
    })
    
    setConversations(newConversations)
    setIsLoading(false)
  }

  const handleQuickPrompt = (prompt: string) => {
    setMessage(prompt)
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="container py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">AI Analysis Hub</h1>
            <p className="text-slate-600 dark:text-slate-400">
              Chat with multiple AI models to analyze auction industry intelligence and generate content ideas
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Model Selection */}
              <div className="card">
                <div className="card-content">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    AI Models
                  </h3>
                  <div className="space-y-3">
                    {AI_MODELS.map(model => (
                      <div key={model.id} className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id={model.id}
                          checked={selectedModels.includes(model.id)}
                          onChange={() => handleModelToggle(model.id)}
                          disabled={!model.available}
                          className="rounded"
                        />
                        <label htmlFor={model.id} className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-2">
                            <span className={`text-xs px-2 py-1 rounded-full ${model.color}`}>
                              {model.name}
                            </span>
                            {!model.available && (
                              <span className="text-xs text-slate-400">(Soon)</span>
                            )}
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                            {model.description}
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Prompts */}
              <div className="card">
                <div className="card-content">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Quick Prompts
                  </h3>
                  <div className="space-y-2">
                    {QUICK_PROMPTS.map((prompt, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickPrompt(prompt)}
                        className="w-full text-left text-sm p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Chat Area */}
            <div className="lg:col-span-3">
              <div className="card h-[600px] flex flex-col">
                <div className="card-content flex-1 flex flex-col">
                  {/* Selected Models Header */}
                  <div className="border-b pb-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="w-5 h-5" />
                      <span className="font-medium">Active Models:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedModels.map(modelId => {
                        const model = AI_MODELS.find(m => m.id === modelId)
                        return model ? (
                          <span key={modelId} className={`text-xs px-2 py-1 rounded-full ${model.color}`}>
                            {model.name}
                          </span>
                        ) : null
                      })}
                      {selectedModels.length === 0 && (
                        <span className="text-sm text-slate-400">Select AI models to begin</span>
                      )}
                    </div>
                  </div>

                  {/* Conversation Area */}
                  <div className="flex-1 overflow-y-auto space-y-4">
                    {selectedModels.length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-full text-center">
                        <Bot className="w-16 h-16 text-slate-300 dark:text-slate-600 mb-4" />
                        <h3 className="text-lg font-medium text-slate-600 dark:text-slate-400 mb-2">
                          Select AI Models to Begin
                        </h3>
                        <p className="text-slate-500 dark:text-slate-500">
                          Choose one or more AI models from the sidebar to start analyzing auction intelligence
                        </p>
                      </div>
                    ) : (
                      <div className="grid gap-4">
                        {selectedModels.map(modelId => {
                          const model = AI_MODELS.find(m => m.id === modelId)
                          const conversation = conversations[modelId] || []
                          
                          return (
                            <div key={modelId} className="border rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-3">
                                <span className={`text-xs px-2 py-1 rounded-full ${model?.color}`}>
                                  {model?.name}
                                </span>
                                <span className="text-xs text-slate-500">{model?.description}</span>
                              </div>
                              
                              <div className="space-y-3 min-h-[100px]">
                                {conversation.length === 0 ? (
                                  <div className="text-sm text-slate-400 italic">
                                    Ready to analyze... Send a message to begin.
                                  </div>
                                ) : (
                                  conversation.map((msg, index) => (
                                    <div key={index} className={`text-sm ${msg.role === 'user' ? 'text-blue-600 dark:text-blue-400' : ''}`}>
                                      <div className="font-medium capitalize mb-1">{msg.role}:</div>
                                      <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded">
                                        {msg.content}
                                      </div>
                                    </div>
                                  ))
                                )}
                                {isLoading && conversation.some(m => m.role === 'user') && (
                                  <div className="text-sm">
                                    <div className="font-medium mb-1">Assistant:</div>
                                    <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded flex items-center gap-2">
                                      <Sparkles className="w-4 h-4 animate-spin" />
                                      Analyzing...
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="border-t pt-4 mt-4">
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Ask the AIs to analyze auction trends, generate content ideas, or provide market insights..."
                        className="input flex-1"
                        disabled={selectedModels.length === 0 || isLoading}
                      />
                      <button
                        onClick={handleSendMessage}
                        disabled={!message.trim() || selectedModels.length === 0 || isLoading}
                        className="btn btn-primary px-4"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
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