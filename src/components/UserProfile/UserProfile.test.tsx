import { render, screen } from '@/../jest/testUtils';
import UserProfile from '.';

const mockUser = {
  id: 2,
  username: 'anna',
  photo: 'https://randomuser.me/api/portraits/women/79.jpg',
  followers: 0,
  following: 0,
  posts: 0,
  createdAt: '2022-01-05'
};

describe('components - UserProfile', () => {
  it('renders user profile', async () => {
    render(<UserProfile {...mockUser} />);

    expect(screen.getByText('@anna'));
    expect(screen.getByText('joined on January 05, 2022'));
    expect(screen.getByText('Follow'));
    expect(screen.getByText('Posts'));
    expect(screen.getByText('Following'));
    expect(screen.getByText('Followers'));
  });
});
