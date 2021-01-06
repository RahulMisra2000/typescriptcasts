interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  
  /* *** reader is something (object literal, object of a class, etc. anything ) that must have a read method returning void and a data property of type string[][] **** */
  constructor(public reader: DataReader) {}
}
