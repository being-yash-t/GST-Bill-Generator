import Sqlite, {SQLiteDatabase} from 'react-native-sqlite-storage';
import {FirmData} from '../models/DataModels';

let db: SQLiteDatabase | null = null;

export function initDb(): void {
  // TODO: remove debug in release build
  Sqlite.DEBUG(true);
  db = Sqlite.openDatabase(
    {name: 'main.db', location: 'default'},
    () => {},
    (error: Sqlite.SQLError) => {
      console.error('Open Failed');
      console.error(error);
    },
  );

  if (db)
    db.transaction(
      (tx) => {
        tx.executeSql(
          'CREATE TABLE "FirmData" (' +
            '"id"	INTEGER,' +
            '"firmName"	TEXT NOT NULL,' +
            '"address"	TEXT NOT NULL,' +
            '"phoneNo"	TEXT NOT NULL,' +
            '"gstTin"	TEXT NOT NULL CHECK(length(gstTin)==15),' +
            '"stateText"	TEXT NOT NULL,' +
            '"emailId"	TEXT,' +
            'PRIMARY KEY("id")' +
            ')',
        );
        tx.executeSql(
          'CREATE TABLE "BankDetails" (' +
            '"id"	INTEGER,' +
            '"accountName"	TEXT NOT NULL,' +
            '"bankName"	TEXT NOT NULL,' +
            '"bankIFSC"	TEXT NOT NULL,' +
            '"bankBranchName"	TEXT NOT NULL,' +
            '"accountNo"	TEXT NOT NULL,' +
            'PRIMARY KEY("id" AUTOINCREMENT)' +
            ');',
        );
        tx.executeSql(
          'CREATE TABLE "BayerData" (' +
            '"id"	INTEGER,' +
            '"bayerName"	TEXT NOT NULL,' +
            '"siteAddress"	TEXT NOT NULL,' +
            '"gstTin"	TEXT NOT NULL CHECK(length(gstTin)==15),' +
            '"stateText"	TEXT NOT NULL,' +
            '"email"	TEXT,' +
            'PRIMARY KEY("id" AUTOINCREMENT)' +
            ');',
        );
        tx.executeSql(
          'CREATE TABLE "BillInfo" (' +
            '"id"	INTEGER,' +
            '"billNo"	INTEGER NOT NULL UNIQUE,' +
            '"billDate"	TEXT NOT NULL UNIQUE,' +
            '"cGstPercentage"	NUMERIC NOT NULL,' +
            '"sGstPercentage"	NUMERIC NOT NULL,' +
            '"cityName"	TEXT NOT NULL,' +
            'PRIMARY KEY("id" AUTOINCREMENT)' +
            ');',
        );
        tx.executeSql(
          'CREATE TABLE "CartItem" (' +
            '"id"	INTEGER,' +
            '"title"	TEXT NOT NULL,' +
            '"hsnCode"	INTEGER NOT NULL,' +
            '"rate"	NUMERIC NOT NULL,' +
            '"quantity"	NUMERIC NOT NULL,' +
            '"per"	TEXT NOT NULL,' +
            'PRIMARY KEY("id" AUTOINCREMENT)' +
            ');',
        );
        tx.executeSql(
          'CREATE TABLE "DeliveryChallan" (' +
            '"id"	INTEGER,' +
            '"challanNo"	INTEGER NOT NULL UNIQUE,' +
            '"challanDate"	TEXT NOT NULL,' +
            'PRIMARY KEY("id" AUTOINCREMENT)' +
            ');',
        );
      },
      (err) => console.log('Failed init transaction'),
      () => console.log('Database init successful'),
    );
}

export async function saveFirmData(firmData: FirmData): Promise<Error | null> {
  return null;
}
