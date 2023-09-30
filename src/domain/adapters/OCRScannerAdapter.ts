import {Bill} from "../entities/bill";

export default interface OCRScannerAdapter{
    scan(image : string) : Bill
}

