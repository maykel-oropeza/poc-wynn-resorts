'use client'

import { Box, Button, Combobox, Flex, rem, Text, useCombobox, useDirection, useMantineColorScheme } from "@mantine/core";
import { ChevronDown } from "../icons/chevronDown";
import { useTransition } from "react";
import { useTranslation } from "react-i18next";
import { useParams, usePathname, useRouter } from "next/navigation";
import { LANGUAGES, useGetLanguage } from "./useGetLanguage";

export const LanguageSelector = () => {

    const { i18n, ready } = useTranslation();
    const { dir } = useDirection();
    const { colorScheme } = useMantineColorScheme();

    const [, startTransition] = useTransition();
    const pathname = usePathname()
    const params = useParams()
    const router = useRouter();

    const { languagesSelected, setLanguageSelected, getLanguage } = useGetLanguage();

    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const handleSelection = (lang: string) => {
        const language = getLanguage(lang);
        setLanguageSelected(language);

        i18n.changeLanguage(lang);

        startTransition(() => {
            if (params.locale) {
                router.replace(pathname.replace(String(params.locale), lang));
            } else {
                router.replace(`${lang}/${pathname}`);
            }
        });

        combobox.closeDropdown();
    }

    const handleClickOnTarget = () => {
        combobox.toggleDropdown()
    }

    const options = LANGUAGES.map(({ key, description }) => (
        <Combobox.Option style={{ textAlign: "center" }} value={key} key={key}>
            <Text fz="sm" fw="500" >{description}</Text>
        </Combobox.Option>
    ));

    return ready && <Combobox
        store={combobox}
        width={250}
        position="bottom-end"
        withArrow={false}
        onOptionSubmit={handleSelection}
    >
        <Combobox.Target>
            <Button data-testid="trigger" variant="transparent" onClick={handleClickOnTarget}>
                {
                    colorScheme &&
                    <Flex c={colorScheme === "dark" ? "white" : "black"} w={rem(40)} justify="center" align="center" >
                        <Text fz="sm" fw="600" lh="sm" lts={rem(1.7)} mr={dir === "rtl" ? 0 : 'xs'} ml={dir === "rtl" ? 'xs' : 0}>
                            {languagesSelected}
                        </Text>
                        <Box w={rem(14)} >
                            <ChevronDown />
                        </Box>
                    </Flex>
                }
            </Button>
        </Combobox.Target>

        <Combobox.Dropdown w={rem(220)}>
            <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
    </Combobox>

}