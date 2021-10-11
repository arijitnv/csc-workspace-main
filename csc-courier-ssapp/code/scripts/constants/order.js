export const orderStatusesEnum = {
  Initiated: 'Initiated',
  ReviewedByCMO: 'Reviewed by CMO',
  Approved: 'Approved'
};

export const orderTableHeaders = [
  {
    column: 'sponsorId',
    label: 'Sponsor ID',
    notSortable: false,
    type: 'string',
    asc: null,
    desc: null,
  },
  {
    column: 'studyId',
    label: 'Study ID',
    notSortable: false,
    type: 'string',
    asc: null,
    desc: null,
  },
  {
    column: 'orderId',
    label: 'Order ID',
    notSortable: false,
    type: 'string',
    asc: null,
    desc: null,
  },
  {
    column: 'siteId',
    label: 'Site ID',
    notSortable: false,
    type: 'string',
    asc: null,
    desc: null,
  },
  {
    column: 'requestDate',
    label: 'Request Date',
    notSortable: false,
    type: 'date',
    asc: null,
    desc: null,
  },
  {
    column: 'deliveryDate',
    label: 'Delivery Date/Time',
    notSortable: false,
    type: 'date',
    asc: null,
    desc: null,
  },
  {
    column: 'status',
    label: 'Order Status',
    notSortable: false,
    type: 'string',
    asc: null,
    desc: null,
  },
  {
    column: 'lastModified',
    label: 'Last Modified',
    type: 'date',
    notSortable: false,
    asc: null,
    desc: null,
  },
  {
    column: null,
    label: 'Controls',
    notSortable: true,
    desc: null,
  },
];