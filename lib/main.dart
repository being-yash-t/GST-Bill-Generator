import 'package:flutter/material.dart';
import 'package:gstbillgen/PrintingService.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'GST Bill Generator',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        body: Center(
          child: OutlinedButton.icon(
            icon: Icon(Icons.print),
            label: Text("Print"),
            onPressed: PrintingService.printTemplate1,
          ),
        ),
      ),
    );
  }
}
