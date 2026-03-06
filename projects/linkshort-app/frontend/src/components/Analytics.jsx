import { useState, useEffect } from 'react'
import api from '../services/api'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const Analytics = ({ link, onClose }) => {
  const [analytics, setAnalytics] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAnalytics()
  }, [link])

  const fetchAnalytics = async () => {
    try {
      const res = await api.get(`/links/${link._id}/analytics`)
      setAnalytics(res.data)
    } catch (error) {
      console.error('Error fetching analytics:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8">Loading analytics...</div>
      </div>
    )
  }

  if (!analytics) {
    return null
  }

  const { stats } = analytics

  // Prepare chart data
  const deviceData = Object.entries(stats.devices || {}).map(([name, value]) => ({
    name,
    value,
  }))

  const browserData = Object.entries(stats.browsers || {}).map(([name, value]) => ({
    name,
    value,
  }))

  const referrerData = Object.entries(stats.referrers || {})
    .slice(0, 5)
    .map(([name, value]) => ({
      name: name.length > 20 ? name.substring(0, 20) + '...' : name,
      value,
    }))

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8']

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Analytics for {link.shortUrl}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-3xl font-bold text-blue-600">{stats.totalClicks || 0}</div>
            <div className="text-sm text-gray-600">Total Clicks</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-3xl font-bold text-green-600">{stats.uniqueClicks || 0}</div>
            <div className="text-sm text-gray-600">Unique Clicks</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Clicks by Device</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Clicks by Browser</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={browserData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Top Referrers</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={referrerData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#00C49F" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {analytics.recentClicks && analytics.recentClicks.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Recent Clicks</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {analytics.recentClicks.map((click, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded text-sm">
                  <div className="flex justify-between">
                    <span>{click.device} - {click.browser}</span>
                    <span className="text-gray-500">
                      {new Date(click.createdAt).toLocaleString()}
                    </span>
                  </div>
                  {click.referrer && (
                    <div className="text-xs text-gray-500 mt-1">From: {click.referrer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Analytics
