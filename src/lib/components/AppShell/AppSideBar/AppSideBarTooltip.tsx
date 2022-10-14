import { Tooltip, TooltipProps, styled, tooltipClasses } from '@mui/material';

const AppSideBarTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} placement="right" />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        boxShadow: theme.shadows[1],
        fontSize: 14,
        borderRadius: 4,
    },
}));

export default AppSideBarTooltip;
