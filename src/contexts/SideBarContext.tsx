import createCtx from './createCtx';

interface SideBarContextValue {
    open: boolean;
    toggleExpanded: (level: number, id: string) => void;
    isExpanded: (level: number, id: string) => boolean;
    setSelected: (id: string) => void;
    isSelected: (id: string) => boolean;
}

const [useSideBarContext, Provider] = createCtx<SideBarContextValue>();

export { useSideBarContext };

const SideBarContextProvider = Provider;

export default SideBarContextProvider;
