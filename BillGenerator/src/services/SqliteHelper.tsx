import Sqlite from 'react-native-sqlite-storage';
import {BankDetails, BayerData, FirmData} from '../models/DataModels';

let db: Sqlite.SQLiteDatabase | null = null;

export function initDb(): void {
  // TODO: remove debug in release build
  Sqlite.enablePromise(true);
  Sqlite.DEBUG(true);
  Sqlite.openDatabase({name: 'main.db', location: 'default'}).then(
    (value) => {
      console.log('Open success');
      db = value;
      initDatabase();
    },
    (reason) => console.error('Database opening failed' + reason),
  );
}

function initDatabase() {
  if (db == null) {
    console.log('DB is null, failed initial table creation');
    return;
  }
  db?.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE "FirmData" (' +
        '"id"	INTEGER,' +
        '"firmName"	TEXT NOT NULL,' +
        '"address"	TEXT NOT NULL,' +
        '"phone"	TEXT NOT NULL,' +
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
  }).then(
    () => console.log('Init Succeded'),
    (e) => console.log('Looks like this is not first run'),
  );
}

export async function getAllFirmData(): Promise<FirmData[]> {
  if (db != null) {
    const data: FirmData[] = [];

    const results = await db.executeSql('SELECT * FROM "FirmData";');
    results.forEach((result) => {
      for (let i = 0; i < result.rows.length; i++)
        data.push(result.rows.item(i));
    });

    return data;
  } else return Promise.reject(Error('Database not initialized'));
}

export function saveFirmData(firmData: FirmData): Promise<[Sqlite.ResultSet]> {
  if (db != null) {
    let sqlStatement = 'REPLACE INTO "FirmData"(';
    if (firmData.id != undefined) sqlStatement += '"id",';
    sqlStatement +=
      '"firmName", "address", "phone", "gstTin", "stateText", "emailId") VALUES (';
    if (firmData.id != undefined) sqlStatement += firmData.id + ', ';
    sqlStatement += '?, ?, ?, ?, ?, ?);';
    console.log(sqlStatement);
    return db.executeSql(sqlStatement, [
      firmData.firmName,
      firmData.address,
      firmData.phone,
      firmData.gstTin,
      firmData.stateText,
      firmData.emailId,
    ]);
  } else return Promise.reject(Error('Database not initialized'));
}

export async function getAllBankData(): Promise<BankDetails[]> {
  if (db != null) {
    const data: BankDetails[] = [];

    const results = await db.executeSql('SELECT * FROM "BankDetails";');
    results.forEach((result) => {
      for (let i = 0; i < result.rows.length; i++)
        data.push(result.rows.item(i));
    });

    return data;
  } else return Promise.reject(Error('Database not initialized'));
}

export function saveBankData(
  bankData: BankDetails,
): Promise<[Sqlite.ResultSet]> {
  if (db != null) {
    let sqlStatement = 'REPLACE INTO "BankDetails"(';
    if (bankData.id != undefined) sqlStatement += '"id",';
    sqlStatement +=
      '"accountName", "bankName", "bankIFSC", "bankBranchName", "accountNo") VALUES (';
    if (bankData.id != undefined) sqlStatement += bankData.id + ', ';
    sqlStatement += ' ?, ?, ?, ?, ?);';
    console.log(sqlStatement);
    return db.executeSql(sqlStatement, [
      bankData.accountName,
      bankData.bankName,
      bankData.bankIFSC,
      bankData.bankBranchName,
      bankData.accountNo,
    ]);
  } else return Promise.reject(Error('Database not initialized'));
}

export async function getAllBayers(): Promise<BayerData[]> {
  if (db != null) {
    const data: BayerData[] = [];

    const results = await db.executeSql('SELECT * FROM "BayerData";');
    results.forEach((result) => {
      for (let i = 0; i < result.rows.length; i++)
        data.push(result.rows.item(i));
    });

    return data;
  } else return Promise.reject(Error('Database not initialized'));
}

export function saveBayerData(
  bankData: BayerData,
): Promise<[Sqlite.ResultSet]> {
  if (db != null) {
    let sqlStatement = 'REPLACE INTO "BayerData"(';
    if (bankData.id != undefined) sqlStatement += '"id",';
    sqlStatement +=
      '"bayerName", "siteAddress", "gstTin", "stateText", "email") VALUES (';
    if (bankData.id != undefined) sqlStatement += bankData.id + ', ';
    sqlStatement += ' ?, ?, ?, ?, ?);';
    console.log(sqlStatement);
    return db.executeSql(sqlStatement, [
      bankData.bayerName,
      bankData.siteAddress,
      bankData.gstTin,
      bankData.stateText,
      bankData.email,
    ]);
  } else return Promise.reject(Error('Database not initialized'));
}
