import { createLazyFileRoute } from '@tanstack/react-router'
import PostView from '../postView/PostView'

export const Route = createLazyFileRoute('/post')({
  component: PostView,
})

