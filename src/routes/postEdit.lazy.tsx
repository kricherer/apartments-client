import { createLazyFileRoute } from '@tanstack/react-router';
import PostEdit from '../components/PostEdit/PostEdit';

export const Route = createLazyFileRoute('/postEdit')({
  component: PostEdit,
});
