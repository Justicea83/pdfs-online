import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowRight, faDownLeftAndUpRightToCenter,
    faFileExcel,
    faFileImage,
    faFilePdf,
    faFilePowerpoint,
    faFileWord, faObjectUngroup
} from "@fortawesome/free-solid-svg-icons";

export interface Action {
    name: string,
    icon: React.ReactNode
}

export const CONVERT_PDF_TO_WORD = 'Convert PDF to Word';
export const CONVERT_WORD_TO_PDF = 'Convert Word to PDF';
export const CONVERT_PDF_TO_JPD = 'Convert PDF to JPG';
export const CONVERT_JPG_TO_PDF = 'Convert JPG to PDF';
export const CONVERT_PDF_TO_PNG = 'Convert PDF to PNG';
export const CONVERT_PNG_TO_PDF = 'Convert PNG to PDF';
export const CONVERT_PPT_TO_PDF = 'Convert Power Point to PDF';
export const CONVERT_EXCEL_TO_PDF = 'Convert Excel to PDF';
export const MERGE_PDF = 'Merge PDF';
export const COMPRESS_PDF = 'Compress PDF';

const actions: Action[] = [
    {
        name: CONVERT_PDF_TO_WORD,
        icon: <>
            <FontAwesomeIcon icon={faFilePdf} size={'2x'}/>
            <FontAwesomeIcon className="mx-1" icon={faArrowRight} size={'1x'}/>
            <FontAwesomeIcon icon={faFileWord} size={'2x'}/>
        </>
    },
    {
        name: CONVERT_WORD_TO_PDF,
        icon: <>
            <FontAwesomeIcon icon={faFileWord} size={'2x'}/>
            <FontAwesomeIcon className="mx-1" icon={faArrowRight} size={'1x'}/>
            <FontAwesomeIcon icon={faFilePdf} size={'2x'}/>
        </>
    },
    {
        name: CONVERT_PDF_TO_JPD,
        icon: <>
            <FontAwesomeIcon icon={faFilePdf} size={'2x'}/>
            <FontAwesomeIcon className="mx-1" icon={faArrowRight} size={'1x'}/>
            <FontAwesomeIcon icon={faFileImage} size={'2x'}/>
        </>
    },
    {
        name: CONVERT_JPG_TO_PDF,
        icon: <>
            <FontAwesomeIcon icon={faFileImage} size={'2x'}/>
            <FontAwesomeIcon className="mx-1" icon={faArrowRight} size={'1x'}/>
            <FontAwesomeIcon icon={faFilePdf} size={'2x'}/>
        </>
    },
    {
        name: CONVERT_PDF_TO_PNG,
        icon: <>
            <FontAwesomeIcon icon={faFilePdf} size={'2x'}/>
            <FontAwesomeIcon className="mx-1" icon={faArrowRight} size={'1x'}/>
            <FontAwesomeIcon icon={faFileImage} size={'2x'}/>
        </>
    },
    {
        name: CONVERT_PNG_TO_PDF,
        icon: <>
            <FontAwesomeIcon icon={faFileImage} size={'2x'}/>
            <FontAwesomeIcon className="mx-1" icon={faArrowRight} size={'1x'}/>
            <FontAwesomeIcon icon={faFilePdf} size={'2x'}/>
        </>
    },
    {
        name: CONVERT_PPT_TO_PDF,
        icon: <>
            <FontAwesomeIcon icon={faFilePowerpoint} size={'2x'}/>
            <FontAwesomeIcon className="mx-1" icon={faArrowRight} size={'1x'}/>
            <FontAwesomeIcon icon={faFilePdf} size={'2x'}/>
        </>
    },
    {
        name: CONVERT_EXCEL_TO_PDF,
        icon: <>
            <FontAwesomeIcon icon={faFileExcel} size={'2x'}/>
            <FontAwesomeIcon className="mx-1" icon={faArrowRight} size={'1x'}/>
            <FontAwesomeIcon icon={faFilePdf} size={'2x'}/>
        </>
    },
    {
        name: MERGE_PDF,
        icon: <>
            <FontAwesomeIcon icon={faObjectUngroup} size={'2x'}/>
        </>
    },
    {
        name: COMPRESS_PDF,
        icon: <>
            <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} size={'2x'}/>
        </>
    },
];

export default actions;