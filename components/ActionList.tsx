import React, {useRef, useState} from "react";
import actions from "@/data/actions";
import ActionListItem from "@/components/ActionListItem";
import Modal from "@/components/Modal";

export default function ActionList() {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalTitle, setModalTitle] = useState<string>('');
    const canvas = useRef<HTMLCanvasElement>(null)

    const handleActionItemClick = (name: string) => {
        setModalTitle(name);
        setShowModal(true);
        console.log(name)
    }
    return (
        <>
            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                {actions.map((action) => (
                    <ActionListItem
                        onClick={handleActionItemClick}
                        key={action.name}
                        icon={action.icon}
                        name={action.name}
                    />
                ))}
            </ul>
            {showModal ? <Modal title={modalTitle} open={showModal} setOpen={status => setShowModal(!showModal)} /> : ''}
            <canvas ref={canvas}></canvas>
        </>
    )
}
