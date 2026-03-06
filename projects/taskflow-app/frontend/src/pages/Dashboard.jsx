import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import api from '../services/api'
import TaskCard from '../components/TaskCard'
import TaskForm from '../components/TaskForm'
import FilterBar from '../components/FilterBar'

const Dashboard = () => {
  const [tasks, setTasks] = useState([])
  const [filteredTasks, setFilteredTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingTask, setEditingTask] = useState(null)
  const [filters, setFilters] = useState({
    category: '',
    priority: '',
    status: '',
    search: '',
  })

  useEffect(() => {
    fetchTasks()
  }, [])

  useEffect(() => {
    applyFilters()
  }, [tasks, filters])

  const fetchTasks = async () => {
    try {
      const params = new URLSearchParams()
      if (filters.category) params.append('category', filters.category)
      if (filters.priority) params.append('priority', filters.priority)
      if (filters.status) params.append('status', filters.status)
      if (filters.search) params.append('search', filters.search)

      const res = await api.get(`/tasks?${params}`)
      setTasks(res.data)
      setFilteredTasks(res.data)
    } catch (error) {
      console.error('Error fetching tasks:', error)
    } finally {
      setLoading(false)
    }
  }

  const applyFilters = () => {
    let filtered = [...tasks]

    if (filters.category) {
      filtered = filtered.filter((task) => task.category === filters.category)
    }
    if (filters.priority) {
      filtered = filtered.filter((task) => task.priority === filters.priority)
    }
    if (filters.status) {
      filtered = filtered.filter((task) => task.status === filters.status)
    }
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      filtered = filtered.filter(
        (task) =>
          task.title.toLowerCase().includes(searchLower) ||
          task.description?.toLowerCase().includes(searchLower)
      )
    }

    setFilteredTasks(filtered)
  }

  const handleCreateTask = async (taskData) => {
    try {
      const res = await api.post('/tasks', taskData)
      setTasks([res.data, ...tasks])
      setShowForm(false)
    } catch (error) {
      console.error('Error creating task:', error)
      alert('Failed to create task')
    }
  }

  const handleUpdateTask = async (id, taskData) => {
    try {
      const res = await api.put(`/tasks/${id}`, taskData)
      setTasks(tasks.map((task) => (task._id === id ? res.data : task)))
      setEditingTask(null)
    } catch (error) {
      console.error('Error updating task:', error)
      alert('Failed to update task')
    }
  }

  const handleDeleteTask = async (id) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return

    try {
      await api.delete(`/tasks/${id}`)
      setTasks(tasks.filter((task) => task._id !== id))
    } catch (error) {
      console.error('Error deleting task:', error)
      alert('Failed to delete task')
    }
  }

  const stats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.status === 'Completed').length,
    inProgress: tasks.filter((t) => t.status === 'In Progress').length,
    todo: tasks.filter((t) => t.status === 'Todo').length,
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading tasks...</div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card bg-blue-50 border-blue-200"
        >
          <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
          <div className="text-sm text-gray-600">Total Tasks</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card bg-green-50 border-green-200"
        >
          <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
          <div className="text-sm text-gray-600">Completed</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card bg-yellow-50 border-yellow-200"
        >
          <div className="text-2xl font-bold text-yellow-600">{stats.inProgress}</div>
          <div className="text-sm text-gray-600">In Progress</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card bg-gray-50 border-gray-200"
        >
          <div className="text-2xl font-bold text-gray-600">{stats.todo}</div>
          <div className="text-sm text-gray-600">To Do</div>
        </motion.div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">My Tasks</h1>
        <button
          onClick={() => {
            setEditingTask(null)
            setShowForm(true)
          }}
          className="btn-primary"
        >
          + New Task
        </button>
      </div>

      {/* Filters */}
      <FilterBar filters={filters} setFilters={setFilters} />

      {/* Task Form Modal */}
      {showForm && (
        <TaskForm
          task={editingTask}
          onSubmit={editingTask ? (data) => handleUpdateTask(editingTask._id, data) : handleCreateTask}
          onClose={() => {
            setShowForm(false)
            setEditingTask(null)
          }}
        />
      )}

      {/* Tasks Grid */}
      {filteredTasks.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No tasks found. Create your first task!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTasks.map((task, index) => (
            <motion.div
              key={task._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <TaskCard
                task={task}
                onEdit={() => {
                  setEditingTask(task)
                  setShowForm(true)
                }}
                onDelete={() => handleDeleteTask(task._id)}
                onUpdate={(data) => handleUpdateTask(task._id, data)}
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dashboard
