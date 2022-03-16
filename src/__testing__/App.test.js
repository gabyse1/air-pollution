import {
  render,
  fireEvent,
  screen,
  waitFor,
} from './test-utils';
import App from '../components/App';

describe('<App /> component: Render Navbar component.', () => {
  it('Displays nav buttons', () => {
    render(<App />);
    const backButton = screen.queryByTestId('backButton');
    const microphoneButton = screen.getByRole('button', { name: 'Microphone' });
    const settingsButton = screen.getByRole('button', { name: 'Settings' });
    expect(backButton).toBeNull();
    expect(microphoneButton).toBeInTheDocument();
    expect(settingsButton).toBeInTheDocument();
  });
});

describe('<Home /> component', () => {
  it('Render presentation correctly', () => {
    render(<App />);
    expect(screen.getByText("World's Air Pollution")).toBeInTheDocument();
    expect(screen.getByText('Air Quality Index (AQI)')).toBeInTheDocument();
  });

  it('Render search bar correctly', () => {
    render(<App />);
    expect(screen.getByTestId('input__search-location')).toBeInTheDocument();
  });

  it('Fetches cities by typing the city name in search bar', async () => {
    render(<App />);
    const searchBar = screen.getByTestId('input__search-location');
    fireEvent.change(searchBar, { target: { value: 'new york' } });
    const matchElements = await waitFor(() => screen.getAllByTestId('matchElement'));
    expect(matchElements.length).toBeGreaterThan(0);
  });
});
