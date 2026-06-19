export type XenditInvoiceItem = {
  name: string;
  quantity: number;
  price: number;
  category?: string;
  url?: string;
};

export type XenditInvoiceCustomer = {
  given_names: string;
  surname: string;
  email: string;
  mobile_number?: string;
};

export type CreateXenditInvoiceInput = {
  externalId: string;
  amount: number;
  description: string;
  currency?: "PHP";
  items: XenditInvoiceItem[];
  customer: XenditInvoiceCustomer;
  successRedirectUrl: string;
  failureRedirectUrl: string;
  metadata?: Record<string, string>;
};

export type XenditInvoiceResponse = {
  id: string;
  external_id: string;
  status: string;
  amount: number;
  currency: string;
  invoice_url: string;
  expiry_date?: string;
};

export type XenditWebhookPayload = {
  id: string;
  external_id: string;
  status: string;
  amount: number;
  currency: string;
  paid_at?: string;
  payment_method?: string;
  payment_channel?: string;
};
