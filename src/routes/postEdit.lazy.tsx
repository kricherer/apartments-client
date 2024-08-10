import { createLazyFileRoute } from '@tanstack/react-router';
import PostEdit from '../PostEdit/PostEdit';

export const Route = createLazyFileRoute('/postEdit')({
  component: PostEdit,
});
