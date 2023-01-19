import {PDFDocument, PDFOperator, StandardFonts} from 'pdf-lib';
import {readFileAsync} from "@/utils/misc";
import docx from 'docx';

const pdfToWord = async (file: File) => {
    const pdfArrayBuffer = await readFileAsync(file)
    if (!pdfArrayBuffer) {
        throw new Error('');
    }
    const document = await PDFDocument.load(pdfArrayBuffer);
    const timeRomanFont = await document.embedFont(StandardFonts.TimesRoman);
    const firstPage = document.getPages()[0];

    const {width, height} = firstPage.getSize();
    const ctx = document.context;


    const text = ''

    const wordDoc = new docx.Document({
        sections: []
    });

}

export default pdfToWord;