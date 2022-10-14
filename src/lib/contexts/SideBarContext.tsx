import createCtx from './createCtx';

interface SideBarContextValue {
    open: boolean;
    setOpen: (open: boolean) => void;
    setSelected: (id: string) => void;
    isSelected: (id: string) => boolean;
    highlightItemsBasedOnPath: boolean;
}

const [useSideBarContext, Provider] = createCtx<SideBarContextValue>();

export { useSideBarContext, Provider };
