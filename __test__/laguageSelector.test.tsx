import { render, screen } from './test-utils';
import { fireEvent, prettyDOM } from '@testing-library/react';
import { vi } from 'vitest';
import { LanguageSelector } from '@/components/languageSelector/languageSelector';
import { LANGUAGES } from '@/components/languageSelector/useGetLanguage';

// Mock useTranslation
vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        i18n: {
            changeLanguage: vi.fn(),
        },
        ready: true,
    }),
}));

// Mock next/navigation
vi.mock('next/navigation', () => ({
    useRouter: () => ({
        replace: vi.fn(),
    }),
    usePathname: () => '/current-path',
    useParams: () => ({ locale: 'en' }),
}));

// Mock useGetLanguage
vi.mock('@/components/languageSelector/useGetLanguage', () => ({
    useGetLanguage: () => ({
        languagesSelected: 'EN',
        setLanguageSelected: vi.fn(),
        getLanguage: (lang: string) => LANGUAGES.find(l => l.key === lang),
    }),
    LANGUAGES: [
        { key: 'en', value: "EN", description: 'English' },
        { key: 'es', value: "ES", description: 'Spanish' },
    ],
}));

describe('LanguageSelector component', () => {
    it('renders correctly', () => {
        render(<LanguageSelector />);
        const triggerButton = screen.getByTestId('trigger');
        expect(triggerButton).toBeInTheDocument();
    });

    it('Opens dropdown on button click', () => {
        render(<LanguageSelector />);
        const triggerButton = screen.getByTestId('trigger');
        fireEvent.click(triggerButton);
        const option = screen.getByText('English');
        expect(option).toBeInTheDocument();
    });

    it('Changes language on option select', () => {
        render(<LanguageSelector />);
        const triggerButton = screen.getByTestId('trigger');
        fireEvent.click(triggerButton);

        const option = screen.getByText('Spanish');
        fireEvent.click(option);

        const esChanged = screen.getByText('EN');
        expect(esChanged).toBeInTheDocument();
    });
});