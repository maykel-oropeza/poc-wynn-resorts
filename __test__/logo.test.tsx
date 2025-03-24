import { expect, test, vi } from 'vitest'
import { Logo } from '@/components/logo'
import { logo_light } from '@/components/logo/useGetSrc'
import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from '@/components/logo/useGetSizes';
import { render, screen } from './test-utils';

// // Mock the hook useGetSizes
vi.mock('./useGetSizes', () => ({
    useGetSizes: () => ({ height: DEFAULT_HEIGHT, width: DEFAULT_WIDTH }),
}));

// Mock the hook useGetSrc
vi.mock('./useGetSrc', () => ({
    useGetSrc: () => logo_light,
}));

// Mock next/image
vi.mock('next/image', () => ({
    __esModule: true,
    default: ({ alt, width, height, src }: any) => <img alt={alt} width={width} height={height} src={src} />,
}));

test('renders Logo component', () => {
    render(<Logo />);
    const image = screen.getByAltText('Wynn Resorts');
    expect(image).toBeInTheDocument()
})

test('Logo component has correct dimensions', () => {
    render(<Logo />)
    const image = screen.getByAltText('Wynn Resorts')
    expect(image).toHaveAttribute('width', `${DEFAULT_WIDTH}`)
    expect(image).toHaveAttribute('height', `${DEFAULT_HEIGHT}`)
})

test('Logo component has correct src', () => {
    render(<Logo />)
    const image = screen.getByAltText('Wynn Resorts')
    expect(image).toHaveAttribute('src', logo_light)
})