import { useState } from 'react'
import api from './services/api'
import LinkForm from './components/LinkForm'
import LinkList from './components/LinkList'
import Analytics from './components/Analytics'

function App() {
  const [links, setLinks] = useState([])
  const [selectedLink, setSelectedLink] = useState(null)
  const [showAnalytics, setShowAnalytics] = useState(false)

  const fetchLinks = async () => {
    try {
      const res = await api.get('/links')
      setLinks(res.data.links || res.data)
    } catch (error) {
      console.error('Error fetching links:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">LinkShort</h1>
          <p className="text-gray-600">Shorten URLs and track analytics</p>
        </header>

        <LinkForm onLinkCreated={fetchLinks} />

        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">Your Links</h2>
            <button
              onClick={fetchLinks}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Refresh
            </button>
          </div>
          <LinkList
            links={links}
            onRefresh={fetchLinks}
            onViewAnalytics={(link) => {
              setSelectedLink(link)
              setShowAnalytics(true)
            }}
          />
        </div>

        {showAnalytics && selectedLink && (
          <Analytics
            link={selectedLink}
            onClose={() => {
              setShowAnalytics(false)
              setSelectedLink(null)
            }}
          />
        )}
      </div>
    </div>
  )
}

export default App
