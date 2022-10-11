import { useState } from 'react';

export default function useNestedList(multipleActiveItems?: boolean) {
    const [expanded, setExpanded] = useState<Map<number, string[]>>(new Map());

    const toggleExpanded = (level: number, id: string) => {
        const tempExpanded = new Map(expanded);
        const expandedList = tempExpanded.get(level);
        if (!expandedList) {
            tempExpanded.set(level, [id]);
            setExpanded(tempExpanded);
            return;
        }

        if (expandedList.includes(id)) {
            tempExpanded.set(
                level,
                expandedList.filter((e) => e !== id)
            );
        } else {
            if (!multipleActiveItems) {
                tempExpanded.set(level, [id]);
            } else {
                tempExpanded.set(level, [...expandedList, id]);
            }
        }
        setExpanded(tempExpanded);
    };

    const isExpanded = (level: number, id: string): boolean => {
        const expandedList = expanded.get(level);
        if (!expandedList) return false;
        return expandedList.includes(id);
    };

    const level = -1;

    return { toggleExpanded, isExpanded, level };
}
