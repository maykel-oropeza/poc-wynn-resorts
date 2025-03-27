'use client'

import { useCallback, useId, useMemo, useState } from "react"
import { Box, Combobox, Flex, Group, InputBase, rem, ScrollArea, useCombobox } from "@mantine/core"
import { UseFormReturnType } from "@mantine/form/lib/types"
import { useTranslation } from "react-i18next"
import { IMaskInput } from "react-imask"
import { useCountry } from "@/hooks/useCountry"
import { countries, TCountries } from 'countries-list'
import { Search } from "@/components/icons/seach"
import { CustomLabel } from "../customLabel/customLabel"
import classes from './formPhoneNumber.module.css'
import { SelectChevronDown } from "@/components/icons/selectChevronDown"
import { Check } from "@/components/icons/check"
import { Masks, masks } from "./masks"

interface FormPhoneNumberProp {
    keyForm: string;
    form: UseFormReturnType<any>;
    inputRequired?: boolean;
    labelText?: React.ReactNode;
    infoElement?: React.ReactNode;
    defaultCountrySelected: string;
}

export const FormPhoneNumber = ({ keyForm, form, inputRequired, labelText, infoElement, defaultCountrySelected }: FormPhoneNumberProp) => {
    const { t } = useTranslation();

    const id = useId();
    const { getImgSrc } = useCountry();
    const [countrySelected, setCountrySelected] = useState(defaultCountrySelected);
    const [phoneCode, setPhoneCode] = useState(countries[defaultCountrySelected as keyof TCountries].phone);
    const [imgSrcCountrySelected, setImgSrcCountrySelected] = useState<string | null>(getImgSrc(defaultCountrySelected));

    const [search, setSearch] = useState('');
    const [opened, setOpened] = useState(false);

    const combobox = useCombobox({
        onDropdownClose: () => {
            combobox.resetSelectedOption();
            combobox.focusTarget();
            setSearch('');
        },
        onDropdownOpen: () => {
            combobox.focusSearchInput();
        },
        opened
    });

    const options = useMemo(() => {
        const countriesArray = Object.entries(countries);
        countriesArray.sort((a, b) => a[1].name.localeCompare(b[1].name));
        const sortedCountries = Object.fromEntries(countriesArray);
        const countryList = Object.keys(sortedCountries)
        const filter = (country: string) => countries[country as keyof TCountries].name.toLowerCase().includes(search.toLowerCase().trim())

        return countryList
            .filter(filter)
            .map((country) => (
                <Combobox.Option value={country} key={country}>
                    <Group flex="1" gap="md" align="center" justify="space-between">
                        <Flex gap="sm">
                            <img
                                alt=""
                                width="28"
                                height="20"
                                style={{ borderRadius: rem(2) }}
                                src={getImgSrc(country)} />
                            {countries[country as keyof TCountries].name}
                        </Flex>
                        {country === countrySelected && <Check style={{ color: 'var(--mantine-color-customSelected-filled)' }} />}
                    </Group>
                </Combobox.Option>
            ))
    }, [countries, search, countrySelected])

    const handleOnSelectCombobox = (country: string) => {
        handleOnChange(country);
        setCountrySelected(country);
        setPhoneCode(countries[country as keyof TCountries].phone)
        combobox.closeDropdown();
        form.setFieldValue(keyForm, country)
        setTimeout(() => setOpened(false), 100)
    }

    const handleOnChange = (country: string | null) => {
        if (country) {
            const countrySelected = getImgSrc(country);
            setImgSrcCountrySelected(countrySelected);
        } else {
            setImgSrcCountrySelected(null)
        }
    }

    const leftSection = (
        <Flex align="center" style={{ cursor: "pointer" }} onClick={() => setOpened((o) => !o)}>
            {imgSrcCountrySelected && <img
                alt=""
                width="28"
                height="20"
                style={{ borderRadius: rem(2) }}
                src={imgSrcCountrySelected} />}
            <SelectChevronDown style={{ marginInlineStart: rem(8), width: rem(16), color: 'var(--mantine-color-text)' }} />
        </Flex>
    )

    const getMask = useCallback((countrySelected: string) => {
        return String(masks[String(countrySelected) as keyof Masks].mask)
    }, [])

    const generatePlaceholder = useCallback((countrySelected: string) => {
        return getMask(countrySelected)
            .replaceAll("0", "_")
            .replaceAll("[", "")
            .replaceAll("]", "")
    }, [])

    return (
        <Combobox
            store={combobox}
            onOptionSubmit={handleOnSelectCombobox}>
            <Combobox.Target>
                <Box w="100%">
                    <InputBase
                        classNames={{
                            root: classes.textInput,
                            label: classes.customLabel,
                            input: classes.customInput,
                            error: classes.customError
                        }}
                        label={
                            <CustomLabel
                                htmlFor={id}
                                required={inputRequired}
                                {...infoElement && { rightSection: infoElement }}
                            >
                                {labelText}
                            </CustomLabel>
                        }
                        labelProps={{ labelElement: 'div' }}
                        leftSection={leftSection}
                        leftSectionWidth={80}
                        leftSectionPointerEvents="auto"
                        size="lg"
                        w="100%"
                        component={IMaskInput}
                        mask={getMask(countrySelected)}
                        {...phoneCode && { placeholder: generatePlaceholder(countrySelected) }}
                        key={form.key(keyForm)}
                        {...form.getInputProps(keyForm)}
                    />
                </Box>
            </Combobox.Target>

            <Combobox.Dropdown>
                <Combobox.Search
                    value={search}
                    classNames={{
                        input: classes.searchInput
                    }}
                    onChange={(event) => setSearch(event.currentTarget.value)}
                    placeholder={t("searchLabel")}
                    leftSection={<Search className={classes.search} />}
                    leftSectionWidth={45}
                    size="md"
                />
                <Combobox.Options>
                    <ScrollArea.Autosize type="scroll" mah={rem(320)}>
                        {options.length > 0 ? options : <Combobox.Empty>{t("notingFound")}</Combobox.Empty>}
                    </ScrollArea.Autosize>
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    )
}