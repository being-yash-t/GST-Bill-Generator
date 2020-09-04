import Sqlite from 'react-native-sqlite-storage';

export function initDb(): void {
  // TODO: remove debug in release build
  Sqlite.DEBUG(true);
  const db = Sqlite.openDatabase(
    {name: 'main.db', location: 'default'},
    () => {},
    (error: Sqlite.SQLError) => console.error('failed' + error),
  );

  if (db)
    db.transaction(
      (tx) => {
        tx.executeSql('drop table if exists hehe');
        tx.executeSql(`CREATE TABLE "hehe" (
          "id"	INTEGER,
          "name"	TEXT NOT NULL,
          PRIMARY KEY("id" AUTOINCREMENT)
      );`);
      },
      (err) => {
        console.error('Failed init transaction');
        console.error(err);
      },
      () => console.log('Database init successful'),
    );
}
