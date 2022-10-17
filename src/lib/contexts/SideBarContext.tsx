import createCtx from './createCtx';

interface SideBarContextValue {
    open: boolean;
    setOpen: (open: boolean) => void;
    setSelected: (id: string) => void;
    isSelected: (id: string) => boolean;
}

const [useSideBarContext, Provider] = createCtx<SideBarContextValue>();

export { useSideBarContext, Provider };
