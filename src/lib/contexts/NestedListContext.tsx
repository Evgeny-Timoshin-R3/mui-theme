import createCtx from './createCtx';

interface NestedListContextValue {
    toggleExpanded: (level: number, id: string) => void;
    isExpanded: (level: number, id: string) => boolean;
}

const [useNestedListContext, Provider] = createCtx<NestedListContextValue>();

export { useNestedListContext };

const NestedListContextProvider = Provider;

export default NestedListContextProvider;
