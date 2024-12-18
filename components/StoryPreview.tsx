import { motion, AnimatePresence } from 'framer-motion'

interface StoryPreviewProps {
  id: string
  title: string
  author: string
  preview: string
  fullStory: string
  isExpanded: boolean
  onReadMore: () => void
  onCollapse: () => void
}

export function StoryPreview({ id, title, author, preview, fullStory, isExpanded, onReadMore, onCollapse }: StoryPreviewProps) {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">By {author || 'Anonymous'}</p>
      <AnimatePresence>
        {isExpanded ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="mb-4">{fullStory}</p>
            <button 
              onClick={onCollapse}
              className="text-[#FADADD] hover:text-[#F8C8CB] transition-colors"
            >
              Collapse
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="mb-4">{preview}</p>
            <button 
              onClick={onReadMore}
              className="text-[#FADADD] hover:text-[#F8C8CB] transition-colors"
            >
              Read More
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

