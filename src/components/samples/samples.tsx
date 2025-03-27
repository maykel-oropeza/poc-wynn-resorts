import { Box, Button, Flex, rem, Text, Title } from "@mantine/core"

export const Samples = () => {
    return <div>
        <Box>
            <Button w={rem(217)} size="4xl" mb="xs" variant="outline">
                Back
            </Button>
            <Button w={rem(217)} size="4xl" mb="xs" variant="filled">
                <Text fz="sm">NEXT</Text>
            </Button>
        </Box>

        <Button size="3xl" w={rem(222)} variant="outline" mb="xs">JOIN THE NEWSLETTER</Button>

        <Flex direction="column" h={400}>
            <Title order={1}>Registration</Title>
            <Title order={2}>Step 1 of 3</Title>
            <Title order={3}>Personal Info</Title>
            <Title order={4}>Get News & Updates</Title>
        </Flex>
    </div>
}