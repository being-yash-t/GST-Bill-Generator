import 'package:flutter/services.dart' show rootBundle;
import 'package:printing/printing.dart';

class PrintingService {
  static Future<String> readFromFile(String path) {
    return rootBundle.loadString(path);
  }

  static Future printTemplate1() async {
    String htmlData = await readFromFile('assets/templates/template1.html');

    // TODO: update values in the html string

    await Printing.layoutPdf(
        onLayout: (format) async => await Printing.convertHtml(
              format: format,
              html: htmlData,
            ));
  }
}
