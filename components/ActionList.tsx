import React from "react";
import actions from "@/data/actions";
import ActionListItem from "@/components/ActionListItem";

export default function ActionList() {
    return (
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {actions.map((action) => (
                <ActionListItem key={action.name} icon={action.icon} name={action.name}/>
            ))}
        </ul>
    )
}
