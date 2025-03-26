import { Header } from "@/components/header";
import { Registration } from "@/components/registration/registration";
import TranslationsProvider from "@/providers/translations/translatiosProvider";

import '@mantine/core/styles.css';

interface Params {
  locale: string;
}

interface HomeProps {
  params: Promise<Params>;
}

export default async function Home(props: HomeProps) {
  const { params } = await props;
  const { locale } = await params;

  return (
    <div>
      <TranslationsProvider locale={locale}>
        <Header />
        <Registration />
      </TranslationsProvider >
    </div>
  );
}
