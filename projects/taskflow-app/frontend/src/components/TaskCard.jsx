import { useState } from 'react'
import { motion } from 'framer-motion'

const TaskCard = ({ task, onEdit, onDelete, onUpdate }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const priorityColors = {
    High: 'bg-red-100 text-red-800 border-red-200',
    Medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    Low: 'bg-green-100 text-green-800 border-green-200',
  }

  const statusColors = {
    Todo: 'bg-gray-100 text-gray-800',
    'In Progress': 'bg-blue-100 text-blue-800',
    Completed: 'bg-green-100 text-green-800',
  }

  const categoryColors = {
    Work: 'bg-purple-100 text-purple-800',
    Personal: 'bg-pink-100 text-pink-800',
    Shopping: 'bg-orange-100 text-orange-800',
    Health: 'bg-teal-100 text-teal-800',
    Education: 'bg-indigo-100 text-indigo-800',
    Other: 'bg-gray-100 text-gray-800',
  }

  const handleStatusChange = (newStatus) => {
    onUpdate({ ...task, status: newStatus })
  }

  return (
    <motion.div
      className="card hover:shadow-lg transition-shadow"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900 flex-1">{task.title}</h3>
        <span className={`px-2 py-1 rounded text-xs font-medium ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
      </div>

      {task.description && (
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {task.description}
        </p>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`px-2 py-1 rounded text-xs font-medium ${categoryColors[task.category]}`}>
          {task.category}
        </span>
        <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[task.status]}`}>
          {task.status}
        </span>
      </div>

      {task.dueDate && (
        <div className="text-xs text-gray-500 mb-3">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </div>
      )}

      <div className="flex gap-2 mb-3">
        <select
          value={task.status}
          onChange={(e) => handleStatusChange(e.target.value)}
          className="flex-1 text-sm border border-gray-300 rounded px-2 py-1"
        >
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="flex gap-2">
        <button
          onClick={onEdit}
          className="flex-1 btn-secondary text-sm py-1.5"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="flex-1 bg-red-100 text-red-700 hover:bg-red-200 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors"
        >
          Delete
        </button>
      </div>
    </motion.div>
  )
}

export default TaskCard
