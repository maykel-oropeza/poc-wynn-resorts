import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header";
import { UnderConstruction } from "@/components/underConstruction/underConstruction";
import TranslationsProvider from "@/providers/translations/translatiosProvider";

interface Params {
    locale: string;
}

interface PageProps {
    params: Promise<Params>;
}

export default async function Page(props: PageProps) {
    const { params } = await props;
    const { locale } = await params;
    return (
        <div>
            <TranslationsProvider locale={locale}>
                <Header />
                <UnderConstruction keyTranslationTitle="wyndAndRewardsPageTitle" />
                <Footer />
            </TranslationsProvider >
        </div>
    );
}
