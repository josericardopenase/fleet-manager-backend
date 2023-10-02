import {Bill} from "../../domain/entities/bill";

export default interface OCRScannerAdapter{
    scan(image : string) : Promise<Bill>
}

