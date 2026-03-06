import { useState, useEffect } from 'react'
import api from '../services/api'
import { QRCodeSVG } from 'qrcode.react'

const LinkList = ({ links, onRefresh, onViewAnalytics }) => {
  const [localLinks, setLocalLinks] = useState(links)

  useEffect(() => {
    setLocalLinks(links)
  }, [links])

  const handleCopy = (url) => {
    navigator.clipboard.writeText(url)
    alert('Copied to clipboard!')
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this link?')) return

    try {
      await api.delete(`/links/${id}`)
      setLocalLinks(localLinks.filter((link) => link._id !== id))
      if (onRefresh) onRefresh()
    } catch (error) {
      alert('Failed to delete link')
    }
  }

  if (localLinks.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <p className="text-gray-500">No links yet. Create your first short link above!</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {localLinks.map((link) => (
        <div key={link._id} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <a
                  href={link.shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  {link.shortUrl}
                </a>
                <button
                  onClick={() => handleCopy(link.shortUrl)}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  📋
                </button>
              </div>
              <p className="text-sm text-gray-600 truncate">{link.originalUrl}</p>
              <div className="flex gap-4 mt-2 text-xs text-gray-500">
                <span>👆 {link.clickCount || 0} clicks</span>
                {link.expiresAt && (
                  <span>⏰ Expires: {new Date(link.expiresAt).toLocaleDateString()}</span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden md:block">
                <QRCodeSVG value={link.shortUrl} size={64} />
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => onViewAnalytics(link)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm"
                >
                  Analytics
                </button>
                <button
                  onClick={() => handleDelete(link._id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LinkList
