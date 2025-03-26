import { Info } from "@/components/icons/info"
import { Tooltip } from "@mantine/core"

interface InfoTooltipProps {
    labelTooltip: React.ReactNode
}

export const InfoTooltip = ({ labelTooltip }: InfoTooltipProps) => {
    return (
        <Tooltip arrowOffset={50} arrowSize={5} label={labelTooltip} withArrow position="top-start">
            <Info color="var(--mantine-color-colorLightGray-1)" />
        </Tooltip>
    )
}