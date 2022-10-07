import createCtx from './createCtx';

interface SideBarContextValue {
    open: boolean;
}

const [useSideBarContext, Provider] = createCtx<SideBarContextValue>();

export { useSideBarContext };

const SideBarContextProvider = Provider;

export default SideBarContextProvider;
