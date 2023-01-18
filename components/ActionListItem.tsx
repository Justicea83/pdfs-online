import React from 'react';
import {Action} from "@/data/actions";

const ActionListItem: React.FC<Action> = ({name, icon}) => {
    const handleActionItemClick = (name: string) => {
        console.log(name)
    }
    return (
        <li onClick={() => handleActionItemClick(name)} key={name} className="rounded-lg bg-white shadow cursor-pointer">
            <div
                className="flex items-center flex-col content-center items-center justify-center space-x-6 p-6">
                <div className="flex justify-center items-center">
                    {icon}
                </div>
                <h3 className="truncate text-sm font-medium text-gray-900 mt-1">{name}</h3>
            </div>
        </li>
    )
}

export default ActionListItem;