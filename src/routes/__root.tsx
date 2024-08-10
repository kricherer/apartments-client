import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import GradientBackground from '../utils/GradientBackground';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/post" className="[&.active]:font-bold">
          Post
        </Link>{' '}
        <Link to="/postEdit" className="[&.active]:font-bold">
          Editing
        </Link>
      </div>
      <hr />
      <Outlet />
      <GradientBackground />
      <TanStackRouterDevtools />
    </>
  ),
});
