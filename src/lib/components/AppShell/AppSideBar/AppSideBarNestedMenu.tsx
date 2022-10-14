import { Children, ReactElement, ReactNode, isValidElement } from 'react';

import AppSideBarItem from './AppSideBarItem';
import NestedListContextProvider from '../../../contexts/NestedListContext';
import useNestedList from '../../../hooks/useNestedList';

interface Props {
    children?: ReactNode;
    multipleActiveItems?: boolean;
    localStorageKey?: string;
}

export default function AppSideBarNestedMenu({
    children,
    multipleActiveItems = true,
    localStorageKey = 'app_sidebar_nested_list',
}: Props) {
    const { isExpanded, toggleExpanded, level } = useNestedList(
        localStorageKey,
        multipleActiveItems
    );

    const renderChildren = (childrenRoot: ReactElement, level: number): ReactNode => {
        level++;
        const appSideBarMenuItemProps = {
            ...childrenRoot.props,
            ...{ toggleExpanded, isExpanded },
        };
        return (
            <AppSideBarItem {...appSideBarMenuItemProps} level={level}>
                {childrenRoot.props &&
                    childrenRoot.props.children &&
                    Children.map(childrenRoot.props.children, (child, i) => {
                        if (isValidElement(child)) {
                            return renderChildren(child, level);
                        }
                    })}
            </AppSideBarItem>
        );
    };

    return (
        <NestedListContextProvider value={{ isExpanded, toggleExpanded }}>
            {Children.map(children, (child, i) => {
                if (isValidElement(child)) {
                    return renderChildren(child, level);
                }
            })}
        </NestedListContextProvider>
    );
}
