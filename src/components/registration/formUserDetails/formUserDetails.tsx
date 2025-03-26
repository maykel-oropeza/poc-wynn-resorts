'use client'

import { Button, Checkbox, Flex, Group, rem, SelectProps, Text } from "@mantine/core"
import { useForm } from "@mantine/form";
import { useTranslation } from "react-i18next";
import { TitleSection } from "../../form/titleSection/titleSection";
import { countries, TCountries } from 'countries-list';
import { FormTextInput } from "@/components/form/formTextInput/formTextInput";
import { InfoTooltip } from "@/components/form/infoTooltip/infoTooltip";
import { FormSelect } from "@/components/form/formSelect/formSelect";
import { useEffect, useMemo, useState } from "react";
import { useCountry } from "@/hooks/useCountry";
import { FormPhoneNumber } from "@/components/form/formPhoneNumber/formPhoneNumber";
import Link from "next/link";
import { Check } from "@/components/icons/check";
import { useRegistration } from "../registrationProvider";

export const defaultCountrySelected = "AE";

export const FormUserDetails = () => {
    const { t } = useTranslation();

    const { nextStep, setUserDetails, userDetails } = useRegistration();

    const { getImgSrc } = useCountry();

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            firstName: '',
            lastName: '',
            gender: '',
            email: '',
            country: '',
            phoneNumber: '',
            termsOfService: false,
        },
        validate: {
            firstName: (value) => value?.length > 1 ? null : 'Please enter First Name',
            lastName: (value) => { return value?.length > 1 ? null : 'Please enter Last Name' },
            gender: (value) => value?.length > 1 ? null : 'Please enter Gender',
            email: (value) => (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ? null : 'Invalid format email'),
            country: (value) => { return value?.length > 1 ? null : 'Please enter Country of residency' },
            phoneNumber: (value) => value?.length > 1 ? null : 'Please enter Phone Number',
            termsOfService: (value) => value ? null : 'Terms and contitions is mandatory',
        },
    });

    useEffect(() => {
        if (userDetails) {
            form.setValues({
                firstName: userDetails.firstName,
                lastName: userDetails.lastName,
                gender: userDetails.gender,
                email: userDetails.email,
                country: userDetails.country,
                phoneNumber: userDetails.phoneNumber,
                termsOfService: userDetails.termsOfService,
            })
        }
    }, [])

    const optionsCountries = useMemo(() => {
        const countriesArray = Object.entries(countries);
        countriesArray.sort((a, b) => a[1].name.localeCompare(b[1].name));
        const sortedCountries = Object.fromEntries(countriesArray);
        const countryList = Object.keys(sortedCountries)

        return countryList.map((country) => (
            { value: country, label: countries[country as keyof TCountries].name }
        ))
    }, [countries])

    const renderSelectOption: SelectProps['renderOption'] = ({ option, checked }) => {
        const country = countries[option.value as keyof TCountries].name
        return (
            <Group flex="1" gap="md" align="center" justify="space-between">
                <Flex gap="sm">
                    <img
                        alt=""
                        width="28"
                        height="20"
                        style={{ borderRadius: rem(2) }}
                        src={getImgSrc(option.value)} />
                    {country}
                </Flex>
                {checked && <Check style={{ color: 'var(--mantine-color-customSelected-filled)' }} />}
            </Group>
        );
    }

    const optionsGender = useMemo(() => {
        return [
            { value: "male", label: t("male") },
            { value: "female", label: t("female") }
        ]
    }, [t])

    const [imgSrcCountrySelected, setImgSrcCountrySelected] = useState<string | null>(null)

    const handleOnChange = (country: string | null) => {
        if (country) {
            const countrySelected = getImgSrc(country)
            setImgSrcCountrySelected(countrySelected);
        } else {
            setImgSrcCountrySelected(null)
        }
        form.setFieldValue('country', country ?? "");
    }

    const handleOnSubmit = () => {
        const validation = form.validate();
        if (!validation.hasErrors) {
            const { firstName, lastName, gender, email, country, phoneNumber, termsOfService } = form.getValues();
            setUserDetails({ firstName, lastName, gender, email, country, phoneNumber, termsOfService });
            nextStep();
        }
    }

    return (
        <Flex w="100%" direction="column" mb={rem(120)}>
            <TitleSection mb={rem(20)}>{t("personalInfo")}</TitleSection>
            <form style={{ width: '100%' }} autoComplete="off">
                <Flex w="100%" gap="lg" direction="column">
                    <Flex w="100%" gap="lg" direction={{ base: "column", sm: "row" }}>
                        <FormTextInput
                            labelText={t("firstName")}
                            inputRequired
                            infoElement={<InfoTooltip labelTooltip={t("enterFirstName")} />}
                            placeholder={t("enterFirstName")}
                            key={form.key('firstName')}
                            {...form.getInputProps('firstName')}
                        />
                        <FormTextInput
                            labelText={t("lastName")}
                            inputRequired
                            infoElement={<InfoTooltip labelTooltip={t("enterLastName")} />}
                            placeholder={t("enterLastName")}
                            key={form.key('lastName')}
                            {...form.getInputProps('lastName')}
                        />
                    </Flex>
                    <Flex w="100%">
                        <FormSelect
                            labelText={t("gender")}
                            withCheckIcon
                            checkIconPosition="right"
                            inputRequired
                            infoElement={<InfoTooltip labelTooltip={t("selectGender")} />}
                            placeholder={t("selectGender")}
                            key={form.key('gender')}
                            {...form.getInputProps('gender')}
                            data={optionsGender}
                        />
                    </Flex>
                    <Flex w="100%">
                        <FormSelect
                            labelText={t("residencyCountry")}
                            inputRequired
                            infoElement={<InfoTooltip labelTooltip={t("selectResidencyCountry")} />}
                            placeholder={t("selectResidencyCountry")}
                            key={form.key('country')}
                            {...form.getInputProps('country')}
                            data={optionsCountries}
                            onChange={handleOnChange}
                            leftSection={imgSrcCountrySelected && <img
                                alt=""
                                width={28}
                                height={20}
                                style={{ borderRadius: rem(2) }}
                                src={imgSrcCountrySelected} />}
                            renderOption={renderSelectOption}
                        />
                    </Flex>
                </Flex>
                <TitleSection mt={rem(32)} mb={rem(20)} order={3}>{t("contactDetails")}</TitleSection>
                <Flex w="100%" gap="lg" direction="column">
                    <Flex w="100%">
                        <FormTextInput
                            labelText={t("email")}
                            inputRequired
                            infoElement={<InfoTooltip labelTooltip={t("enterEmail")} />}
                            placeholder={t("enterEmail")}
                            key={form.key('email')}
                            onChangeCapture={() => form.validateField("email")}
                            {...form.getInputProps('email')}
                        />
                    </Flex>
                    <Flex w="100%">
                        <FormPhoneNumber
                            labelText={t("phoneNumber")}
                            inputRequired
                            defaultCountrySelected={defaultCountrySelected}
                            infoElement={<InfoTooltip labelTooltip={t("phoneNumber")} />}
                            keyForm="phoneNumber"
                            form={form}
                        />
                    </Flex>
                </Flex>

                <Flex align="center" direction="row" mt={rem(32)} mb={rem(43)} h={rem(50)} >
                    <Checkbox
                        label={<Flex direction="row" wrap="wrap">
                            <Text fz="lg" fw="600">
                                {t("iAgree")}
                            </Text>
                            <Text ml={rem(6)} fw="600" c="colorRed">
                                <Link href="/terms-and-conditions" style={{ color: 'inherit', fontWeight: 600 }}>
                                    {t("termsAndConditions")}
                                </Link>
                            </Text>
                            <Text ml={rem(6)} fw="600">
                                {t("and")}
                            </Text>
                            <Text ml={rem(6)} c="colorRed">
                                <Link href="/privacy-policy" style={{ color: 'inherit', fontWeight: 600 }}>
                                    {t("privacy")}
                                </Link>
                            </Text>
                            <Text ml={rem(4)} fw="600">.</Text>
                        </Flex>}
                        key={form.key('termsOfService')}
                        {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                    />
                </Flex>

                <Button w={rem(217)} onClick={handleOnSubmit} size="4xl" mb="xs" variant="filled">
                    <Text fz="lg" lh={rem(24)} lts={rem(1)} fw="600">{t("next")}</Text>
                </Button>
            </form >
        </Flex >
    )
}