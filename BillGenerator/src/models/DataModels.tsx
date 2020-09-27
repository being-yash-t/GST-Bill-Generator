export class FirmData {
  static blank(): FirmData {
    return new FirmData('', '', undefined, '', '', '', '');
  }
  id?: number;
  firmName: string;
  address: string;
  phone: string;
  gstTin: string;
  stateText: string;
  emailId: string;

  constructor(
    fName: string,
    addressText: string,
    Id: number | undefined,
    phoneno: string,
    gsttin: string,
    stateText: string,
    email: string,
  ) {
    this.id = Id;
    this.firmName = fName;
    this.address = addressText;
    this.phone = phoneno;
    this.gstTin = gsttin;
    this.stateText = stateText;
    this.emailId = email;
  }
}

export class BankDetails {
  static blank(): BankDetails {
    return new BankDetails(undefined, '', '', '', '', '');
  }
  id?: number;
  accountName: string;
  bankName: string;
  bankIFSC: string;
  bankBranchName: string;
  accountNo: string;

  constructor(
    Id: number | undefined,
    accountName: string,
    bankName: string,
    bankIfscCode: string,
    bankBranchName: string,
    accountNo: string,
  ) {
    this.id = Id;
    this.accountName = accountName;
    this.bankName = bankName;
    this.bankBranchName = bankBranchName;
    this.bankIFSC = bankIfscCode;
    this.accountNo = accountNo;
  }
}

export class BayerData {
  static blank(): BayerData {
    return new BayerData(undefined, '', '', '', '', '');
  }
  id?: number;
  bayerName: string;
  siteAddress: string;
  gstTin: string;
  stateText: string;
  email: string;

  constructor(
    Id: number | undefined,
    bayerName: string,
    siteAddress: string,
    gstTin: string,
    stateName: string,
    email: string,
  ) {
    this.id = Id;
    this.bayerName = bayerName;
    this.siteAddress = siteAddress;
    this.gstTin = gstTin;
    this.stateText = stateName;
    this.email = email;
  }
}

export class BillInfo {
  id: number;
  billNo: number;
  billDate: Date;
  cGstPercentage: number;
  sGstPercentage: number;
  cityName: string;

  constructor(
    id: number,
    billno: number,
    bilLDate: Date,
    cGstPercentage: number,
    sGstPercentage: number,
    cityName: string,
  ) {
    this.id = id;
    this.billNo = billno;
    this.billDate = bilLDate;
    this.cityName = cityName;
    this.cGstPercentage = cGstPercentage;
    this.sGstPercentage = sGstPercentage;
  }
}

export class CartItem {
  static blank(): CartItem {
    return new CartItem(undefined, '', 0, 0, 0, '');
  }
  id?: number;
  title: string;
  hsnCode: number;
  rate: number;
  quantity: number;
  per: string;
  get totalAmount(): number {
    return this.rate * this.quantity;
  }

  constructor(
    Id: number | undefined,
    title: string,
    hsnCode: number,
    rate: number,
    quantity: number,
    per: string,
  ) {
    this.id = Id;
    this.title = title;
    this.hsnCode = hsnCode;
    this.rate = rate;
    this.quantity = quantity;
    this.per = per;
  }
}

export class DeliveryChallan {
  id: number;
  challanNo: number;
  challanDate: Date;

  constructor(id: number, challanNo: number, challanDate: Date) {
    this.id = id;
    this.challanNo = challanNo;
    this.challanDate = challanDate;
  }
}
